
/**
 * @imports
 */
import DOMInit from '@webqit/browser-pie/src/dom/index.js';
import _isEmpty from '@webqit/util/js/isEmpty.js';
import _arrFrom from '@webqit/util/arr/from.js';
import _remove from '@webqit/util/arr/remove.js';
import _each from '@webqit/util/obj/each.js';
import { getOohtmlBase, createParams } from '../util.js';

/**
 * ---------------------------
 * Named Templates
 * ---------------------------
 */

/**
 * @init
 * 
 * @param window window
 */
export default async function init(window, config = null) {

    const Ctxt = DOMInit(window);
    const document = Ctxt.window.document;
    const _meta = await createParams.call(Ctxt, {
        element: {
            template: '',
            export: 'html-export',
        },
		attr: {
            moduleid: 'name',
            moduleref: 'template',
            exportid: 'name',
            exportgroup: 'exportgroup',
        },
        api: {
            template: '',
            templates: 'templates',
            exports: 'exports',
            moduleref: 'template',
        },
    }, config);
    const templateSelector = 'template' + (_meta.element.template ? '[is="' + _meta.element.template + '"]' : '') + '[' + window.CSS.escape(_meta.attr.moduleid) + ']';
    var TemplateElementClass = window.HTMLTemplateElement;
    if (_meta.api.template) {
        if (!window[_meta.api.template]) {
            throw new Error('The custom element class "' + _meta.api.template + '" is not defined!');
        }
        TemplateElementClass = window[_meta.api.template];
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

    const fireTemplateEvent = (template, type, path) => {
        template.dispatchEvent(new window.CustomEvent(type, {detail: {path}}));
    };

    const loadTemplateContent = (template, path) => {
        var src = template.getAttribute('src');
        return new Promise((resolve, reject) => {
            // Missing in jsdom
            if (window.fetch) {
                window.fetch(src).then(response => {
                    return response.ok ? response.text() : Promise.reject(response.statusText);
                }).then(content => {
                    template.innerHTML = content;
                    fireTemplateEvent(template, 'load', path);
                    fireDocumentTemplateEvent('templatecontentloaded', {template}, path);
                    resolve(template);
                }).catch(error => {
                    console.error('Error fetching the bundle at ' + src + '. (' + error + ')');
                    // Dispatch the event.
                    template.innerHTML = '';
                    fireTemplateEvent(template, 'loaderror', path);
                    fireDocumentTemplateEvent('templatecontentloaderror', {template}, path);
                    resolve(template);
                });
            } else {
                resolve();
                console.error('Error fetching the bundle at ' + src + '. (window.fetch() not supported by browser.)');
            }
        });
    };

    const discoverContents = (contents, node, path, mutationType = null, fireEvents = true) => {

        // -----------------------
        // Templates and exports
        const manageComponent = (el, eventsObject, mutationType, fireEvents) => {
            if (!el.matches) {
                // Not an element child
                return;
            }
            var templateName, exportId;
            if (el.matches(templateSelector) && (templateName = el.getAttribute(_meta.attr.moduleid))) {
                var _path = (path ? path + '/' : '') + templateName;
                if (mutationType === 'removed') {
                    delete getOohtmlBase(node).templates[templateName];
                    if (getOohtmlBase(node).parentTemplate === node) {
                        delete getOohtmlBase(node).parentTemplate;
                    }
                    if (eventsObject) {
                        eventsObject.removedTemplates[templateName] = el;
                    }
                } else if (mutationType === 'added') {
                    getOohtmlBase(node).templates[templateName] = el;
                    getOohtmlBase(el).parentTemplate = node;
                    if (eventsObject) {
                        eventsObject.addedTemplates[templateName] = el;
                    }
                }
                // Recurse
                discoverContents(el.content, el, _path, mutationType, fireEvents);
            } else {
                const manageExportItem = exportItem => {
                    var exportId = exportItem.getAttribute(_meta.attr.exportgroup) || 'default';
                    if (mutationType === 'removed') {
                        if (getOohtmlBase(node).exports[exportId]) {
                            _remove(getOohtmlBase(node).exports[exportId], exportItem);
                            if (!getOohtmlBase(node).exports[exportId].length) {
                                delete getOohtmlBase(node).exports[exportId];
                            }
                            if (eventsObject) {
                                if (!eventsObject.removedExports[exportId]) {
                                    eventsObject.removedExports[exportId] = [];
                                }
                                eventsObject.removedExports[exportId].push(exportItem);
                            }
                        }
                    } else if (mutationType === 'added') {
                        if (!getOohtmlBase(node).exports[exportId]) {
                            getOohtmlBase(node).exports[exportId] = [];
                        }
                        getOohtmlBase(node).exports[exportId].push(exportItem);
                        if (eventsObject) {
                            if (!eventsObject.addedExports[exportId]) {
                                eventsObject.addedExports[exportId] = [];
                            }
                            eventsObject.addedExports[exportId].push(exportItem);
                        }
                    }
                };
                if (el.matches(_meta.element.export)) {
                    var exportId = el.getAttribute(_meta.attr.exportid) || 'default';
                    _arrFrom(el.children).forEach(exportItem => {
                        exportItem.setAttribute(_meta.attr.exportgroup, exportId);
                        manageExportItem(exportItem);
                    });
                } else {
                    manageExportItem(el);
                }
            }
        };

        // -----------------------
        // Run...
        getOohtmlBase(node).templates = {};
        getOohtmlBase(node).exports = {};
        node.moduleMutationType = mutationType;
        const eventsObject = { addedTemplates: {}, removedTemplates: {}, addedExports: {}, removedExports: {}, }; 
        _arrFrom(contents.children).forEach(el => manageComponent(el, eventsObject, mutationType, fireEvents));
        if (fireEvents) {
            fireDocumentTemplateEvent('templatemutation', eventsObject, path);
        }

        // -----------------------
        // Handle content loading
        if (mutationType === 'added' && !getOohtmlBase(node).onLiveMode) {
            getOohtmlBase(node).onLiveMode = true;
            if (node.getAttribute('src') && !node.content.children.length) {
                loadingTemplates.push(loadTemplateContent(node, path));
            }
            Ctxt.Mutation.onAttrChange(node, mr => {
                if (mr[0].target.getAttribute(mr[0].attributeName) !== mr[0].oldValue) {
                    loadTemplateContent(node, path);
                }
            }, ['src']);
                
            // -----------------------
            // Watch mutations
            var mo = new window.MutationObserver(mutations => {
                const eventsObject = { addedTemplates: {}, removedTemplates: {}, addedExports: {}, removedExports: {}, };    
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(el => manageComponent(el, eventsObject, 'added', true));
                    mutation.removedNodes.forEach(el => manageComponent(el, eventsObject, 'removed', true));
                });
                fireDocumentTemplateEvent('templatemutation', eventsObject, path);
            });
            mo.observe(contents, {childList: true});
        }

    };

    // ----------------------
    // Define the global "templates" object
    // ----------------------

    if (_meta.api.templates in document) {
        throw new Error('document already has a "' + _meta.api.templates + '" property!');
    }
    const loadingTemplates = [];
    getOohtmlBase(document).templates = {};
    Object.defineProperty(document, _meta.api.templates, {
        value: getOohtmlBase(document).templates,
    });

    // ----------------------
    // Define the "templates" and "exports" properties on HTMLTemplateElement.prototype
    // ----------------------

    if (_meta.api.templates in TemplateElementClass.prototype) {
        throw new Error('The "HTMLTemplateElement" class already has a "' + _meta.api.templates + '" property!');
    }
    Object.defineProperty(TemplateElementClass.prototype, _meta.api.templates, {
        get: function() {
            return getOohtmlBase(this).templates || {};
        }
    });
    if (_meta.api.exports in TemplateElementClass.prototype) {
        throw new Error('The "HTMLTemplateElement" class already has a "' + _meta.api.exports + '" property!');
    }
    Object.defineProperty(TemplateElementClass.prototype, _meta.api.exports, {
        get: function() {
            return getOohtmlBase(this).exports || {};
        }
    });

    _arrFrom(document.querySelectorAll(templateSelector)).forEach(async el => {
        var name = el.getAttribute(_meta.attr.moduleid);
        getOohtmlBase(document).templates[name] = el;
        discoverContents(el.content, el, name, 'added', false);
    });
    Ctxt.Mutation.onPresenceChange(templateSelector, async (els, presence) => {
        const eventsObject = { addedTemplates: {}, removedTemplates: {}, addedExports: {}, removedExports: {}, }; 
        els.forEach(el => {
            var name = el.getAttribute(_meta.attr.moduleid);
            if (presence) {
                getOohtmlBase(document).templates[name] = el;
                discoverContents(el.content, el, name, 'added');
                eventsObject.addedTemplates[name] = el;
            } else {
                if (getOohtmlBase(document).templates[name] === el) {
                    delete getOohtmlBase(document).templates[name];
                }
                discoverContents(el.content, el, name, 'removed');
                eventsObject.removedTemplates[name] = el;
            }
        });
        fireDocumentTemplateEvent('templatemutation', eventsObject, '');
    });

    // ----------------------
    // Define the "template" property on Element.prototype
    // ----------------------

    if (_meta.api.moduleref in window.Element.prototype) {
        throw new Error('The "Element" class already has a "' + _meta.api.moduleref + '" property!');
    }
    Object.defineProperty(window.Element.prototype, _meta.api.moduleref, {
        get: function() {
            var templateId = this.getAttribute(_meta.attr.moduleref);
            if (templateId) {
                return templateId.split('/').map(n => n.trim()).filter(n => n).reduce((context, item) => {
                    return context ? getOohtmlBase(context).templates[item] || getOohtmlBase(context).templates['*'] : null;
                }, document);
            }
        },
    });

    // ----------------------
    // Hydrate
    // ----------------------

    var templatesReadyState = loadingTemplates.length ? 'loading' : 'indeterminate';
    Object.defineProperty(document, 'templatesReadyState', {get: () => templatesReadyState});
    Ctxt.ready.then(() => {
        loadingTemplates.forEach(promise => {
            promise.catch(error => {
                console.warn(error);
            });
        });
        return Promise.all(loadingTemplates).then(() => {
            templatesReadyState = 'complete';
            document.dispatchEvent(new window.Event('templatesreadystatechange'));
        });
    });
};