
/**
 * @imports
 */
import { resolveParams } from '@webqit/subscript/src/params.js';
import SubscriptFunction from '@webqit/subscript/src/SubscriptFunctionLite.js';
import Observer from '@webqit/observer';
import Compiler from './Compiler.js';
import { _init } from '../util.js';

/**
 * @init
 * 
 * @param Object $config
 */
export default function init( { advanced = {}, ...$config } ) {
    const { config, window } = _init.call( this, 'scoped-js', $config, {
        script: { retention: 'retain', mimeType: '' },
        advanced: resolveParams( advanced, {
            parserParams: { allowReturnOutsideFunction: false, allowSuperOutsideMethod: false },
            compilerParams: { globalsNoObserve: [ 'alert' ] },
            runtimeParams: { apiVersion: 2 },
        } ),
    } );
	config.scriptSelector = ( Array.isArray( config.script.mimeType ) ? config.script.mimeType : [ config.script.mimeType ] ).reduce( ( selector, mm ) => {
        const qualifier = mm ? `[type=${ window.CSS.escape( mm ) }]` : '';
        return selector.concat( `script${ qualifier }[scoped],script${ qualifier }[contract]` );
    }, [] ).join( ',' );
    window.webqit.oohtml.Script = { compileCache: [ new Map, new Map, ] };
    window.webqit.SubscriptFunction = config.SubscriptFunction/* allow for injection, e.g. from test runner */ || SubscriptFunction;
    window.webqit.Observer = Observer;
    realtime.call( window, config );
}

export {
    SubscriptFunction,
    Observer,
}

// ------------------
// Script runner
export function execute( compiledScript, thisContext, script ) {
    if ( !compiledScript.function ) throw new Error( `Input script must already be compiled!` );
    // Execute...
    const returnValue = compiledScript.function.call( thisContext );
    if ( script.contract ) {
        // Rerending processes,,,
        Object.defineProperty( script, 'rerender', { value: ( ...args ) => _await( returnValue, ( [ , rerender ] ) => rerender( ...args ) ) } );
        _await( script.properties, properties => {
            const getPaths = ( base, record_s ) => ( Array.isArray( record_s ) ? record_s : [ record_s ] ).map( record => [ ...base, ...( record.path || [ record.key ] ) ] );
            properties.processes = properties.dependencies.map( path => {
                if ( path[ 0 ] === 'this' ) {
                    return Observer.deep( thisContext, path.slice( 1 ), Observer.observe, record_s => {
                        script.rerender( ...getPaths( [ 'this' ], record_s ) );
                    } );
                }
                return Observer.deep( globalThis, path, Observer.observe, record_s => {
                    script.rerender( ...getPaths( [], record_s ) );
                } );
            } );
        } );
    }
    const window = this, { dom } = window.webqit;
    dom.realtime( window.document ).observe( thisContext, () => {
        if ( script.contract ) {
            // Rerending processes,,,
            _await( script.properties, properties => {
                properties.processes.forEach( process => process.abort() );
            } );
        }
        thisContext.dispatchEvent( new window.CustomEvent( 'remove' ) );
        thisContext.scripts.delete( script );
    }, { subtree: true, timing: 'sync', generation: 'exits' } );
    return script;
}

/**
 * Performs realtime capture of elements and builds their relationships.
 *
 * @param Object config
 *
 * @return Void
 */
function realtime( config ) {
	const window = this, { dom } = window.webqit;
    if ( !window.HTMLScriptElement.supports ) { window.HTMLScriptElement.supports = () => false; }
    const potentialManualTypes = [ 'module' ].concat( config.script.mimeType || [] );
    const compiler = new Compiler( window, config, execute ), handled = () => {};
	dom.realtime( window.document ).subtree/*instead of observe(); reason: jsdom timing*/( config.scriptSelector, record => {
        record.entrants.forEach( script => {
            if ( 'contract' in script ) return handled( script );
            Object.defineProperty( script, 'contract', { value: script.hasAttribute( 'contract' ) } ); 
            if ( 'scoped' in script ) return handled( script );
            Object.defineProperty( script, 'scoped', { value: script.hasAttribute( 'scoped' ) } ); 
            if ( record.type === 'query' || ( potentialManualTypes.includes( script.type ) && !window.HTMLScriptElement.supports( script.type ) ) ) {
                Object.defineProperty( script, 'handling', { value: 'manual' } ); 
            }
            const thisContext = script.scoped ? record.target : ( script.type === 'module' ? undefined : window );
            compiler.compile( script, thisContext );
        } );
	}, { live: true, timing: 'intercept', generation: 'entrants' } );
    // ---
}

const _await = ( value, callback ) => value instanceof Promise ? value.then( callback ) : callback( value );
