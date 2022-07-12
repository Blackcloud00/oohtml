
/**
 * @imports
 */
import Observer from '@webqit/observer';
import { _difference } from '@webqit/util/arr/index.js';
import { _internals } from '@webqit/util/js/index.js';
import domInit from '@webqit/browser-pie/src/dom/index.js';
import { config } from '../namespace-ql.js';

/**
 * ---------------------------
 * The State API
 * ---------------------------
 */				

/**
 * @init
 * 
 * @param Object config
 */
export default function init( _config = {} ) {

    const WebQit = domInit.call( this );
    if ( _config.onDomReady ) {
        WebQit.DOM.ready( () => {
            init.call( this, { ..._config, onDomReady: false } );
        } );
        return;
    }

    const window = WebQit.window;
    const document = WebQit.window.document;

    const _meta = config.call(this, {
        api: {state: 'state', setState: 'setState', clearState: 'clearState',},
    }, _config.params );

    const getOrCreateState = function(subject, newStateObject = null) {
        if (!_internals(subject, 'oohtml').has('state') || newStateObject) {
            const stateObject = newStateObject || Object.create(null);
            const prevStateObject = _internals(subject, 'oohtml').get('state');
            _internals(subject, 'oohtml').set('state', stateObject);
            if (prevStateObject && Observer.unlink) {
                Observer.unlink(subject, params.api.state, prevStateObject);
            }
            if (Observer.link) {
                let event = newStateObject ? {isUpdate: prevStateObject ? true : false, oldValue: prevStateObject} : null;
                Observer.link(subject, params.api.state, stateObject, event);
            }
        }
        return _internals(subject, 'oohtml').get('state');
    };

    // ----------------------
    // Define the "local" state property on Element.prototype
    // ----------------------

    if (params.api.state in window.Element.prototype) {
        throw new Error('The "Element" class already has a "' + params.api.state + '" property!');
    }
	Object.defineProperty(window.Element.prototype, params.api.state, {
		get: function() {
            return Observer.proxy(getOrCreateState(this));
		}
	});

    // ----------------------

    if (params.api.setState in window.Element.prototype) {
        throw new Error('The "Element" class already has a "' + params.api.setState + '" property!');
    }
    Object.defineProperty(window.Element.prototype, params.api.setState, {
        value: function(stateObject, params = {}) {
            if (!params.update) {
                getOrCreateState(this, stateObject);
            } else {
                var currentStateObject = getOrCreateState(this);
                if (params.update !== 'merge') {
                    var outgoingKeys = _difference(Object.keys(currentStateObject), Object.keys(stateObject));
                    Observer.deleteProperty(currentStateObject, outgoingKeys);
                }
                Observer.set(currentStateObject, stateObject);
            }
        }
    });

    // ----------------------

    if (params.api.clearState in window.Element.prototype) {
        throw new Error('The "Element" class already has a "' + params.api.clearState + '" property!');
    }
    Object.defineProperty(window.Element.prototype, params.api.clearState, {
        value: function() {
            getOrCreateState(this, {});
        }
    });

    // ----------------------
    // Define the global "state" object
    // ----------------------

    if (params.api.state in document) {
        throw new Error('The "document" object already has a "' + params.api.state + '" property!');
    }
	Object.defineProperty(document, params.api.state, {
		get: function() {
            return Observer.proxy(getOrCreateState(document));
		}
	});

    // ----------------------

    if (params.api.setState in document) {
        throw new Error('The "document" object already has a "' + params.api.setState + '" property!');
    }
    Object.defineProperty(document, params.api.setState, {
        value: function(stateObject, params = {}) {
            if (!params.update) {
                getOrCreateState(document, stateObject);
            } else {
                var currentStateObject = getOrCreateState(document);
                if (params.update !== 'merge') {
                    var outgoingKeys = _difference(Object.keys(currentStateObject), Object.keys(stateObject));
                    Observer.deleteProperty(currentStateObject, outgoingKeys);
                }
                Observer.set(currentStateObject, stateObject);
            }
        }
    });

    // ----------------------

    if (params.api.clearState in document) {
        throw new Error('The "document" object already has a "' + params.api.clearState + '" property!');
    }
    Object.defineProperty(document, params.api.clearState, {
        value: function() {
            getOrCreateState(document, {});
        }
    });
};