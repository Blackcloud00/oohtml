
/**
 * @imports
 */
import { _isEmpty, _internals } from '@webqit/util/js/index.js';
import { _remove, _from as _arrFrom } from '@webqit/util/arr/index.js';
import { _each } from '@webqit/util/obj/index.js';
import domInit from '@webqit/browser-pie/src/dom/index.js';
import { config, scopeQuery } from '../namespace-ql.js';

/**
 * ---------------------------
 * Named Templates
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
    const mutations = WebQit.DOM.mutations;

    const _meta = config.call(this, {
        element: {
            template: '',
            export: 'export',
            import: 'import',
        },
        attr: {
            moduleid: 'name',
            moduleref: 'template',
            exportid: 'name',
            exportgroup: 'exportgroup',
        },
        api: {
            templateClass: '',
            templates: 'templates',
            exports: 'exports',
            moduleref: 'template',
        },
    }, _config.params );

    const templateSelector = 'template' + (_meta.get('element.template') ? '[is="' + _meta.get('element.template') + '"]' : '') + '[' + window.CSS.escape(_meta.get('attr.moduleid')) + ']';
    var TemplateElementClass = window.HTMLTemplateElement;
    if (_meta.get('api.templateClass')) {
        if (!window[_meta.get('api.templateClass')]) {
            throw new Error('The custom element class "' + _meta.get('api.templateClass') + '" is not defined!');
        }
        TemplateElementClass = window[_meta.get('api.templateClass')];
    }

    // ----------------------
    // Capture template elements
    // ----------------------

    const fireDocumentTemplateEvent = (type, value, path) => {
        if (type === 'templatemutation') {
            ['addedExports', 'removedExports'].forEach(listType => {
                Object.defineProperty(value, listType, {value: Object.keys(value[listType]).map(name => ({name, items: value[listType][name]}))});
            });
            ['addedTemplates', 'removedTemplates'].forEach(listType => {
                Object.defineProperty(value, listType, {value: Object.keys(value[listType]).map(name => ({name, item: value[listType][name]}))});
            });
        }
        Object.defineProperty(value, 'path', {value: path});
        document.dispatchEvent(new window.CustomEvent(type, {detail: value}));
    };

    const loadTemplateContent = (template, path) => {
        const fireTemplateEvent = type => {
            template.dispatchEvent(new window.CustomEvent(type, {detail: {path}}));
        };
        var src = template.getAttribute('src');
        return new Promise((resolve, reject) => {
            // Missing in jsdom
            if (window.fetch) {
                _internals(node, 'oohtml').set('readyState', 'loading');
                window.fetch(src).then(response => {
                    return response.ok ? response.text() : Promise.reject(response.statusText);
                }).then(content => {
                    template.innerHTML = content;
                    _internals(node, 'oohtml').set('readyState', 'complete');
                    fireTemplateEvent('load');
                    fireDocumentTemplateEvent('templatecontentloaded', {template}, path);
                    resolve(template);
                }).catch(error => {
                    console.error('Error fetching the bundle at ' + src + '. (' + error + ')');
                    // Dispatch the event.
                    template.innerHTML = '';
                    _internals(node, 'oohtml').set('readyState', 'complete');
                    fireTemplateEvent('loaderror');
                    fireDocumentTemplateEvent('templatecontentloaderror', {template}, path);
                    resolve(template);
                });
            } else {
                resolve();
                console.error('Error fetching the bundle at ' + src + '. (window.fetch() not supported by browser.)');
            }
        });
    };

    const discoverContents = (node, contentNode, path, mutationType = null, fireEvents = true) => {

        // -----------------------
        // Templates and exports
        const manageComponent = (el, eventsObject, mutationType, fireEvents) => {
            if (!el.matches) {
                // Not an element child
                return;
            }
            var templateName, exportId;
            if (el.matches(templateSelector) && (templateName = el.getAttribute(_meta.get('attr.moduleid'))) && validateModuleName(templateName)) {
                var _path = (path ? path + '/' : '') + templateName;
                if (mutationType === 'removed') {
                    _internals(node, 'oohtml', 'templates').delete(templateName)
                    if (_internals(el, 'oohtml').get('parentTemplate') === node) {
                        _internals(el, 'oohtml').delete('parentTemplate');
                    }
                    if (eventsObject) {
                        eventsObject.removedTemplates[templateName] = el;
                    }
                } else if (mutationType === 'added') {
                    _internals(node, 'oohtml', 'templates').set(templateName, el);
                    _internals(el, 'oohtml').set('parentTemplate', node);
                    if (eventsObject) {
                        eventsObject.addedTemplates[templateName] = el;
                    }
                }
                // Recurse
                discoverContents(el, el.content, _path, mutationType, fireEvents);
            } else {
                const manageExportItem = exportItem => {
                    var exportId = exportItem.getAttribute(_meta.get('attr.exportgroup')) || 'default';
                    if (mutationType === 'removed') {
                        if (_internals(node, 'oohtml', 'exports').has(exportId)) {
                            _remove(_internals(node, 'oohtml', 'exports').get(exportId), exportItem);
                            if (!_internals(node, 'oohtml', 'exports').has(exportId).length) {
                                _internals(node, 'oohtml', 'exports').delete(exportId);
                            }
                            if (eventsObject) {
                                if (!eventsObject.removedExports[exportId]) {
                                    eventsObject.removedExports[exportId] = [];
                                }
                                eventsObject.removedExports[exportId].push(exportItem);
                            }
                        }
                    } else if (mutationType === 'added') {
                        if (!_internals(node, 'oohtml', 'exports').has(exportId)) {
                            _internals(node, 'oohtml', 'exports').set(exportId, []);
                        }
                        _internals(node, 'oohtml', 'exports').get(exportId).push(exportItem);
                        if (eventsObject) {
                            if (!eventsObject.addedExports[exportId]) {
                                eventsObject.addedExports[exportId] = [];
                            }
                            eventsObject.addedExports[exportId].push(exportItem);
                        }
                    }
                };
                if (el.matches(_meta.get('element.export'))) {
                    var exportId = el.getAttribute(_meta.get('attr.exportid')) || 'default';
                    _arrFrom(el.children).forEach(exportItem => {
                        exportItem.setAttribute(_meta.get('attr.exportgroup'), exportId);
                        manageExportItem(exportItem);
                    });
                } else {
                    manageExportItem(el);
                }
            }
        };

        // -----------------------
        // Run...
        node.modulemutationsType = mutationType;
        const eventsObject = { addedTemplates: Object.create(null), removedTemplates: Object.create(null), addedExports: Object.create(null), removedExports: Object.create(null), }; 
        _arrFrom(contentNode.children).forEach(el => manageComponent(el, eventsObject, mutationType, fireEvents));
        if (fireEvents) {
            fireDocumentTemplateEvent('templatemutation', eventsObject, path);
        }

        // -----------------------
        // Handle content loading
        if (mutationType === 'added' && !_internals(node, 'oohtml').get('onLiveMode')) {
            _internals(node, 'oohtml').set('onLiveMode', true);

            // -----------------------
            // src resolution
            const honourSrc = () => {
                if (node.content.children.length) return;
                _internals(node, 'oohtml').delete('queryCallback');
                return loadTemplateContent(node, path);
            };
            // For now...
            if (node.getAttribute('src')) {
                if (node.getAttribute('loading') === 'lazy') {
                    // Plant a landmine somewhere
                    _internals(node, 'oohtml').set('queryCallback', honourSrc);
                } else {
                    // Resolve right away
                    loadingTemplates.push(honourSrc());
                }
            }
            // For later...
            mutations.onAttrChange(node, mr => {
                if (mr[0].target.getAttribute(mr[0].attributeName) === mr[0].oldValue) return;
                if (node.getAttribute('loading') === 'lazy') {
                    // 1. If this event was to set loading="lazy" for an existing src
                    // 2. If this event was to set src for an existing loading="lazy"
                    _internals(node, 'oohtml').set('queryCallback', honourSrc);
                } else if (mr[0].attributeName === 'loading') {
                    // 1. If this event was to set loading="eager" (or unset loading) for an existing src
                    // 2. If this event was to set src for an existing loading="eager" (or unset loading)
                    _internals(node, 'oohtml').delete('queryCallback');
                } else {
                    honourSrc();
                }
            }, ['src', 'loading']);
                
            // -----------------------
            // Watch mutations
            var mo = new window.MutationObserver(mutations => {
                const eventsObject = { addedTemplates: Object.create(null), removedTemplates: Object.create(null), addedExports: Object.create(null), removedExports: Object.create(null), };    
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(el => manageComponent(el, eventsObject, 'added', true));
                    mutation.removedNodes.forEach(el => manageComponent(el, eventsObject, 'removed', true));
                });
                fireDocumentTemplateEvent('templatemutation', eventsObject, path);
            });
            mo.observe(contentNode, {childList: true});
        }

    };

    // ----------------------
    // Define the global "templates" object
    // ----------------------

    if (_meta.get('api.templates') in document) {
        throw new Error('document already has a "' + _meta.get('api.templates') + '" property!');
    }
    const loadingTemplates = [];
    Object.defineProperty(document, _meta.get('api.templates'), {
        get: function() {
            return mapToObject(_internals(document, 'oohtml', 'templates'));
        }
    });

    // ----------------------
    // Define the "templates" and "exports" properties on HTMLTemplateElement.prototype
    // ----------------------

    if (_meta.get('api.templates') in TemplateElementClass.prototype) {
        throw new Error('The "HTMLTemplateElement" class already has a "' + _meta.get('api.templates') + '" property!');
    }
    Object.defineProperty(TemplateElementClass.prototype, _meta.get('api.templates'), {
        get: function() {
            if (_internals(this, 'oohtml').has('queryCallback')) {
                _internals(this, 'oohtml').get('queryCallback')();
            }
            return mapToObject(_internals(this, 'oohtml', 'templates'));
        }
    });
    if (_meta.get('api.exports') in TemplateElementClass.prototype) {
        throw new Error('The "HTMLTemplateElement" class already has a "' + _meta.get('api.exports') + '" property!');
    }
    Object.defineProperty(TemplateElementClass.prototype, _meta.get('api.exports'), {
        get: function() {
            if (_internals(this, 'oohtml').has('queryCallback')) {
                _internals(this, 'oohtml').get('queryCallback')();
            }
            return mapToObject(_internals(this, 'oohtml', 'exports'));
        }
    });

    const mapToObject = map => {
        return Object.defineProperties({}, Array.from(map.keys()).reduce((desc, name) => {
            desc[name] = {get: () => map.get(name)};
            return desc;
        }, {}));
    };

    const validateModuleName = name => {
        var invalidCharacterMatch;
        if (invalidCharacterMatch = name.match(/([^a-zA-Z0-9\_\-\@])/)) {
            console.error(`Invalid character "${invalidCharacterMatch}" in the module name: ${name}.`);
            return false;
        }
        return true;
    };

    const templatesQuery = (query, receiver) => {
        var resultModuleElement = document.createElement('template');
        // -----------------
        scopeQuery([document], query, function(host, prop) {
            var collection = _internals(host, 'oohtml', 'templates');
            if (arguments.length === 1) return collection;
            if (prop.startsWith('#')) return _internals(host, 'oohtml', 'exports').get(prop.substr(1));
            return collection.get(prop);
        }).forEach($module => {
            // -------------
            // Merge contents (modules and exports) of each $module into resultModuleElement
            // -------------
            _internals($module, 'oohtml', 'templates').forEach((template, moduleId) => {
                _internals(resultModuleElement, 'oohtml', 'templates').set(moduleId, template);
            });
            _internals($module, 'oohtml', 'exports').forEach((exports, exportId) => {
                if (!_internals(resultModuleElement, 'oohtml', 'exports').has(exportId)) {
                    _internals(resultModuleElement, 'oohtml', 'exports').set(exportId, []);
                }
                _internals(resultModuleElement, 'oohtml', 'exports').get(exportId).push(...exports);
            });
        });
        return resultModuleElement;
    };

    _arrFrom(document.querySelectorAll(templateSelector)).forEach(async el => {
        var name = el.getAttribute(_meta.get('attr.moduleid'));
        if (!el.closest(_meta.get('element.import')) && validateModuleName(name)) {
            _internals(document, 'oohtml', 'templates').set(name, el);
            discoverContents(el, el.content, name, 'added', false);
        }
    });
    mutations.onPresenceChange(templateSelector, async (els, presence) => {
        const eventsObject = { addedTemplates: Object.create(null), removedTemplates: Object.create(null), addedExports: Object.create(null), removedExports: Object.create(null), }; 
        els.forEach(el => {
            var name = el.getAttribute(_meta.get('attr.moduleid'));
            if (el.closest(_meta.get('element.import')) || !validateModuleName(name)) return;
            if (presence) {
                _internals(document, 'oohtml', 'templates').set(name, el);
                discoverContents(el, el.content, name, 'added');
                eventsObject.addedTemplates[name] = el;
            } else {
                if (_internals(document, 'oohtml', 'templates').get(name) === el) {
                    _internals(document, 'oohtml', 'templates').delete(name);
                }
                discoverContents(el, el.content, name, 'removed');
                eventsObject.removedTemplates[name] = el;
            }
        });
        fireDocumentTemplateEvent('templatemutation', eventsObject, '');
    });

    // ----------------------
    // Capture import elements
    // ----------------------

    mutations.onPresent(_meta.get('element.import'), el => {
        discoverContents(el, el, '', 'added', false);
    });

    // ----------------------
    // Define the "template" property on Element.prototype
    // ----------------------

    if (_meta.get('api.moduleref') in window.Element.prototype) {
        throw new Error('The "Element" class already has a "' + _meta.get('api.moduleref') + '" property!');
    }
    Object.defineProperty(window.Element.prototype, _meta.get('api.moduleref'), {
        get: function() {
            var moduleref;
            if (!_internals(this, 'oohtml').has('module') && (moduleref = this.getAttribute(_meta.get('attr.moduleref')))) {
                var resultModuleElement = templatesQuery(moduleref);
                _internals(this, 'oohtml').set('module', resultModuleElement)
            }
            return _internals(this, 'oohtml').get('module');
        },
    });

    // ----------------------
    // Hydrate
    // ----------------------

    //Object.defineProperty(document, 'templatesQuery', { value: templatesQuery });
    var templatesReadyState = loadingTemplates.length ? 'loading' : 'indeterminate';
    Object.defineProperty(document, 'templatesReadyState', { get: () => templatesReadyState });
    WebQit.DOM.ready.call(WebQit, () => {
        loadingTemplates.forEach(promise => {
            promise && promise.catch(error => {
                console.warn(error);
            });
        });
        return Promise.all(loadingTemplates).then(() => {
            templatesReadyState = 'complete';
            document.dispatchEvent(new window.Event('templatesreadystatechange'));
        });
    });
}
