
/**
 * @imports
 */
import DOMInit from '@webqit/browser-pie/src/dom/index.js';
import { Parser, Runtime, Scope } from '@webqit/subscript';
import { Block } from '@webqit/subscript/src/grammar.js';
import _merge from '@webqit/util/obj/merge.js';
import _remove from '@webqit/util/arr/remove.js';
import _isFunction from '@webqit/util/js/isFunction.js';
import { getOohtmlBase, objectUtil, createParams } from '../util.js';

/**
 * ---------------------------
 * The Reflex class
 * ---------------------------
 */

/**
 * @init
 * 
 * @param window window
 */
export default async function init(window, config = null) {

    const Ctxt = DOMInit(window);
    const _objectUtil = objectUtil.call(Ctxt);
    const globalRuntimeInitializationWaitlist = [];
    var globalRuntimeInitialized = false;
    const _meta = await createParams.call(Ctxt, {
        selectors: {script: 'script[type="subscript"]',},
        api: {bind: 'bind', unbind: 'unbind',},
        script: {},
    }, config);
    const parseCache = {};

    // ----------------------
    // Helpers
    // ----------------------

    const scopeParams = {  errorLevel: _meta.script.errlevel, };
    const docCntxt = _objectUtil.setVal({}, 'document', Ctxt.window.document);
    const globalScopeInstance = Scope.createStack([docCntxt, Scope.create(Ctxt.window)], scopeParams, {
        set: _objectUtil.setVal,
    });

    const getScriptBase = function(target) {
        var oohtmlBase = getOohtmlBase(target);
        if (!oohtmlBase.subscript || !oohtmlBase.subscript.isConnected) {
            if (!oohtmlBase.subscript) {
                // Create scope
                oohtmlBase.subscript = {
                    scope: Scope.createStack([{}/** bindings scope */, _objectUtil.setVal({}, 'this', target)/** the "this" scope */, globalScopeInstance/** global scope */], scopeParams, {
                        set: _objectUtil.setVal,
                    }),
                };
                oohtmlBase.subscript.console = {
                    errors: [],
                    infos: [],
                    warnings: [],
                    logs: [],
                    exceptions: [],
                };
                // Binding mode?
                oohtmlBase.subscript.handler = e => {
                    if (!oohtmlBase.subscript.inWaitlist) {
                        applyBinding(target, e);
                    }
                };
                oohtmlBase.subscript.connected = c => {
                    oohtmlBase.subscript.isConnected = c;
                    if (c) {
                        oohtmlBase.subscript.scope.observe(Ctxt.Observer, oohtmlBase.subscript.handler, {tags: [oohtmlBase.subscript.handler]});
                    } else {
                        // Unobserve only happens by tags
                        oohtmlBase.subscript.scope.unobserve(Ctxt.Observer, {tags: [oohtmlBase.subscript.handler]});
                    }
                };
            }
            // =====================
            var mo = Ctxt.Mutation.onRemoved(target, () => {
                oohtmlBase.subscript.connected(false);
                mo.disconnect();
            }, {ignoreTransients: true});
            oohtmlBase.subscript.connected(true);
        }
        return oohtmlBase.subscript;
    };

    const applyBinding = function(target, event) {
        var targetScriptBase = getScriptBase(target);
        targetScriptBase.inWaitlist = false;
        var params = {
            references: (event || {}).references, 
            catch: targetScriptBase.catch ? targetScriptBase.catch : e => {
                if (targetScriptBase.errorLevel === 2) {
                    console.error(target, e);
                    targetScriptBase.console.errors.push(e);
                } else if (targetScriptBase.errorLevel !== 0) {
                    console.warn(target, e.message);
                    targetScriptBase.console.warnings.push(e.message);
                }
            },
            trap: Ctxt.Observer,
        };
        if (targetScriptBase.AST) {
            var returnValue = Runtime.eval(targetScriptBase.AST, targetScriptBase.scope, params);
            if (_isFunction(returnValue)) {
                returnValue(targetScriptBase.scope.stack.main);
            }
        }
    };

    // ----------------------
    // Capture scripts
    // ----------------------

    Ctxt.Mutation.onPresent(_meta.selectors.script, (scriptElement, p) => {
        if (!scriptElement.parentNode) {
            return;
        }
        // Remove
        var srcCode, parentNode = scriptElement.parentNode, scriptBase = getScriptBase(parentNode);
        if (!_meta.isomorphic) {
            scriptElement.remove();
        }
        if (scriptBase.scriptElement === scriptElement) {
            return;
        }
        if (scriptBase.scriptElement) {
            scriptBase.console.errors.push('An element must only have one scopedJS instance!');
            throw new Error('An element must only have one scopedJS instance!');
        }
        scriptBase.scriptElement = scriptElement;
        if (!(srcCode = (scriptElement.textContent || '').trim())) {
            return;
        }
        // ------
        // Parse
        // ------
        var explain = [], shouldExplain = scriptElement.hasAttribute('explain') || _meta.script.explain;
        if (!parseCache[srcCode]) {
            parseCache[srcCode] = parse(srcCode, {
                explain: shouldExplain ? explain : null,
            });
        }
        scriptBase.AST = parseCache[srcCode];
        if (scriptElement.hasAttribute('scoped')) {
            //_objectUtil.setVal(scriptBase.scope.stack.super.stack.main, 'this', parentNode);
        }
        if (shouldExplain) {
            scriptBase.console.logs.push(explain);
            console.log(parentNode, explain);
        }
        // ------
        // Eval
        // ------
        scriptBase.errorLevel = scriptElement.getAttribute('errors') 
            ? parseInt(scriptElement.getAttribute('errors'))
            : _meta.script.errors;
        if (globalRuntimeInitialized || scriptBase.hasBindings || _meta.script.autorun !== false || scriptElement.hasAttribute('autorun')) {
            applyBinding(parentNode);
        } else {
            scriptBase.inWaitlist = true;
            globalRuntimeInitializationWaitlist.push(parentNode);
        }
    });

    // ----------------------
    // Define the "local" binding method on Element.prototype
    // ----------------------

    if ('subscript' in Ctxt.window.Element.prototype) {
        throw new Error('The "Element" class already has a "subscript" property!');
    }
    Object.defineProperty(Ctxt.window.Element.prototype, 'subscript', {
        get: function() {
            let scriptBase = getScriptBase(this);
            if (!('bindings' in scriptBase)) {
                var $this = this;

                // ---------------------

                Object.defineProperty(scriptBase, 'bindings', {
                    get: function() {
                        if (!scriptBase.scopeInstanceProxy) {
                            // Same proxy instance, even if scriptBase.scope.stack.main
                            // is later changed
                            scriptBase.scopeInstanceProxy = new Proxy(scriptBase.scope.stack.main, {
                                set: (target, key, value) => {
                                    // NOTE that this element if in waitlist won't be called by this _objectUtil.setVal()
                                    _objectUtil.setVal(scriptBase.scope.stack.main, key, value);
                                    scriptBase.hasBindings = true;
                                    // Explicitly remove from waitlist
                                    if (globalRuntimeInitializationWaitlist.includes($this)) {
                                        _remove(globalRuntimeInitializationWaitlist, $this);
                                        applyBinding($this);
                                    }
                                    return true;
                                },
                                get: (target, key) => {
                                    return _objectUtil.getVal(scriptBase.scope.stack.main, key);
                                },
                                deleteProperty: (target, key) => {
                                    return _objectUtil.delVal(scriptBase.scope.stack.main, key);
                                },
                            });
                        }
                        return scriptBase.scopeInstanceProxy;
                    },
                });

                // ---------------------

                Object.defineProperty(scriptBase, 'bind', {
                    value: function(binding, params = {}) {
                        // NOTE that this element if in waitlist won't be called by this _objectUtil.mergeVal()/_objectUtil.setVal()
                        if (params.update) {
                            _objectUtil.mergeVal(scriptBase.scope.stack.main, binding);
                        } else {
                            _objectUtil.setVal(scriptBase.scope.stack, 'main', binding);
                        }
                        scriptBase.hasBindings = true;
                        // Explicitly remove from waitlist
                        if (globalRuntimeInitializationWaitlist.includes($this)) {
                            _remove(globalRuntimeInitializationWaitlist, $this);
                            applyBinding($this);
                        }
                    }
                });

                // ---------------------
                
                Object.defineProperty(scriptBase, _meta.api.unbind, {
                    value: function() {
                        _objectUtil.setVal(scriptBase.scope.stack, 'main', {});
                    }
                });
            }
            return scriptBase;
        }
    });


    // ----------------------
    // Define the global "scopedJS" object
    // ----------------------

    if ('subscript' in Ctxt.window.document) {
        throw new Error('The "document" object already has a "subscript" property!');
    }
    var globalScopeInstanceProxy, globalSubscript = {};
    Object.defineProperty(Ctxt.window.document, 'subscript', {
        get: function() {
            if (!('bindings' in globalSubscript)) {

                Object.defineProperty(globalSubscript, 'bindings', {
                    get: function() {
                        if (!globalScopeInstanceProxy) {
                            // Same proxy instance, even if globalScopeInstance.stack.main
                            // is later changed
                            globalScopeInstanceProxy = new Proxy(globalScopeInstance.stack.main, {
                                set: (target, key, value) => {
                                    // NOTE that elements in waitlist won't be called by this _objectUtil.setVal()
                                    _objectUtil.setVal(globalScopeInstance.stack.main, key, value);
                                    // Explicitly empty waitlist
                                    var waitingElement;
                                    while(waitingElement = globalRuntimeInitializationWaitlist.shift()) {
                                        applyBinding(waitingElement);
                                    }
                                    globalRuntimeInitialized = true;
                                    return true;
                                },
                                get: (target, key) => {
                                    return _objectUtil.getVal(globalScopeInstance.stack.main, key);
                                },
                                deleteProperty: (target, key) => {
                                    return _objectUtil.delVal(globalScopeInstance.stack.main, key);
                                },
                            });
                        }
                        return globalScopeInstanceProxy;
                    },
                });

                // ---------------------

                Object.defineProperty(globalSubscript, 'bind', {
                    value: function(binding, params = {}) {
                        // NOTE that elements in waitlist won't be called by this _objectUtil.mergeVal()/_objectUtil.setVal()
                        if (params.update) {
                            _objectUtil.mergeVal(globalScopeInstance.stack.main, binding);
                        } else {
                            _objectUtil.setVal(globalScopeInstance.stack, 'main', binding);
                        }
                        // Explicitly empty waitlist
                        var waitingElement;
                        while(waitingElement = globalRuntimeInitializationWaitlist.shift()) {
                            applyBinding(waitingElement);
                        }
                        globalRuntimeInitialized = true;
                    },
                });

                // ---------------------
            
                Object.defineProperty(globalSubscript, 'unbind', {
                    value: function() {
                        _objectUtil.setVal(globalScopeInstance.stack, 'main', {});
                    },
                });
            
            }
            return globalSubscript;
        },
    });

};

/**
 * @parse
 */
function parse(script, params = {}) {
    var AST;
    if (!(AST = Parser.parse(script, [Block], _merge({assert:false}, params)))) {
        AST = new Block([Parser.parse(script, null, params)]);
    }
    return AST;
}