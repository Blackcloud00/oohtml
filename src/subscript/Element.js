
/**
 * @imports
 */
import { SubscriptFunction, SubscriptClass } from '@webqit/subscript';
import { _internals, _isNumeric, _isFunction } from '@webqit/util/js/index.js';

/**
 * ---------------------------
 * Subscript Element
 * ---------------------------
 */

export const Element  = BaseElement => class extends SubscriptClass( BaseElement ) {

    /**
     * @subscript Element
     */

    static get subscriptParams() {
        return { globalsAutoObserve: [ 'document' ] };
    }

    static expose( element, subscriptFunction ) {
        let subscriptInstances = _internals( element, 'oohtml', 'subscript', 'instances' );
        let id = subscriptFunction.name;
        if ( !id ) {
            id = [ ...subscriptInstances.keys() ].filter( k => _isNumeric( k ) ).length;
        }
        subscriptInstances.set( id, subscriptFunction );
        return subscriptFunction;
    }
    

    static implementMethod( method, element ) {
        let subscriptFunction = super.implementMethod( method, element );
        return this.expose( element, subscriptFunction );
    }

    static implementScript( script, element ) {
        let source = ( script.textContent || '' ).trim();
        return this.expose( element, SubscriptFunction.call( element, source, { compilerParams: this.compilerParams, runtimeParams: this.runtimeParams } ) );
    }

    /**
     * @disconnectedCallback()
     */
    static doConnectedCallback( instance ) {
        if ( ( typeof WebQit === 'undefined' ) || !WebQit.Observer ) return;
        const subscriptInstances = _internals( instance, 'oohtml', 'subscript', 'instances' );
        const signals = ( mutations, evt, namespace = [] ) => {
            subscriptInstances.forEach( api => api.thread( ...mutations.map( mu => namespace.concat( mu.path ) ) ) );
        };
        ( this.subscriptParams.globalsAutoObserve || [] ).forEach( identifier => {
            WebQit.Observer.observe( globalThis[ identifier ], mutations => signals( mutations, null, [ identifier ] ), { 
                subtree: true, diff: true, tags: [ instance, 'subscript-element', identifier ], unique: true
            } );
        } );
        WebQit.Observer.observe( instance, mutations => signals( mutations, null, [ 'this' ] ), { 
            subtree: true, diff: true, tags: [ instance, 'subscript-element', 'this' ], unique: true
        } );
    }

    /**
     * @disconnectedCallback()
     */
    static doDisconnectedCallback( instance ) {
        if ( ( typeof WebQit === 'undefined' ) || !WebQit.Observer ) return;
        ( this.subscriptParams.globalsAutoObserve || [] ).forEach( identifier => {
            WebQit.Observer.unobserve( globalThis[ identifier ], null, null, { 
                subtree: true, tags: [ instance, 'subscript-element', identifier ]
            } );
        } );
        WebQit.Observer.unobserve( instance, null, null, { 
            subtree: true, tags: [ instance, 'subscript-element', 'this' ]
        } );
    }

    /**
     * @connectedCallback()
     */
    connectedCallback() {
        this.constructor.doConnectedCallback( this );
        if ( super.connectedCallback ) {
            super.connectedCallback();
        }
    }

    /**
     * @disconnectedCallback()
     */
    disconnectedCallback() {
        this.constructor.doDisconnectedCallback( this );
        if ( super.disconnectedCallback ) {
            super.disconnectedCallback();
        }
    }

    get subscript() {
        return _internals( this, 'oohtml', 'subscript', 'instances' );
    }

}