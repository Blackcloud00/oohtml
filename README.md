# OOHTML

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

**[On the Agenda](#on-the-agenda) • [Modular HTML](#modular-html) • [HTML Imports](#html-imports) • [Data Binding](#data-binding) • [Data Plumbing](#data-plumbing) • [Polyfill](#polyfill) • [Examples](#examples) • [License](#license)**

Object-Oriented HTML (OOHTML) is a set of features that extend standard HTML and the DOM to enable authoring modular, reusable and reactive markup - with a "buildless", web-native workflow as design goal! This project presents what "modern HTML" could look like at its best!

Building Single Page Applications? OOHTML is a special love letter!

<details><summary>Versions</summary>

*This is documentation for `OOHTML@2.x`. (Looking for [`OOHTML@1.x`](https://github.com/webqit/oohtml/tree/v1.10.4)?)*

</details>

## Motivation

<details><summary>Show</summary>

Vanilla HTML is unsurprisingly becoming a compelling option for an increasing number of developers! But the current authoring experience still leaves much to be desired in how the language lacks modularity, reusability, and other fundamental capabilities like data binding! Authors still have to rely on tools - or, to say the least, have to do half of the work in HTML and half in JS - to get even basic things working!

This project pursues an object-oriented approach to HTML and implicitly revisits much of what inhibits the idea of a *component* architecture for HTML!

<!--
└ [See more in the introductory blog post](https://dev.to/oxharris/the-web-native-equations-1m1p-temp-slug-6661657?preview=ba70ad2c17f05b5761bc74516dbde8c9eff8b581a0420d87334fd9ef6bab9d6e6d3ab6aaf3fe02542bb9e7250d0a88a6df91dae40919aabcc9a07320)<sup>draft</sup>
-->

</details>

## On the Agenda

+ [Modular HTML](#modular-html)
+ [HTML Imports](#html-imports)
+ [Data Binding](#data-binding)
+ [Data Plumbing](#data-plumbing)

## Modular HTML

Modular HTML is a markup pattern that lets us write arbitrary markup as self-contained objects - with each *encapsulating* their own structure, styling and logic!

OOHTML makes this possible in just simple conventions - via two new attributes: `namespace` and `scoped`!

### Namespacing

Naming things is hard! That's especially so where you have one global namespace and a miriad of potentially conflicting names to coordinate!

Here, we get the `namespace` attribute for designating an element as own naming context for identifiers instead of the global namespace:

```html
<div id="user" namespace>
  <a id="url" href="https://example.org">
    <span id="name">Joe Bloggs</span>
  </a>
  <a id="email" href="mailto:joebloggs@example.com" >joebloggs@example.com</a>
</div>
```
 
**-->** *and this translates really well to an object model*:

```html
user
 ├── url
 ├── name
 └── email
```

**-->** *with a corresponding API that exposes said structure to JavaScript applications*:

```js
// The document.namespace API
let { user } = document.namespace;
// The Element.prototype.namespace API
let { url, name, email } = user.namespace;
```

<details><summary>All in realtime</summary>

The Namespace API is designed to always reflect the DOM in real-time. This may be observed using the general-purpose object observability API - [Observer API](https://github.com/webqit/observer):

```js
// Observing the addition or removal of elements with an ID
Observer.observe(document.namespace, changeCallback);

const paragraph = document.createElement('p');
paragraph.setAttribute('id', 'bar');
document.body.appendChild(paragraph); // Reported synchronously
```

```js
// Observing the addition or removal of elements with an ID
paragraph.toggleAttribute('namespace', true);
Observer.observe(paragraph.namespace, changeCallback);

const span = document.createElement('span');
span.setAttribute('id', 'baz');
paragraph.appendChild(span); // Reported synchronously
```

```js
function changeCallback(changes) {
    console.log(changes[0].type, changes[0].key, changes[0].value, changes[0].oldValue);
}
```

</details>

<details><summary>Learn more</summary>

You want to see how IDs are otherwise exposed as global variables:

```html
<div id="foo"><div>
```

```js
console.log(window.foo); // div
```

[Read more](https://stackoverflow.com/questions/6381425/is-there-a-spec-that-the-id-of-elements-should-be-made-global-variable)

</details>

### Scoping

We often need a way to keep things like styles and scripts [scoped to a component](https://vuejs.org/guide/scaling-up/sfc.html).

Here, we get the `scoped` attribute for *scoping* said element-specific stylesheets and scripts:

```html
<div>

  <style scoped>
    :scope { color: red }
  </style>

  <script scoped>
    console.log(this) // div
  </script>

</div>
```

**-->** *with a corresponding API that exposes said assets to JavaScript applications*:

```js
let { styleSheets, scripts } = user; // APIs that are analogous to the document.styleSheets, document.scripts properties
```

<details><summary>Learn more</summary>

The `scoped` has two effects on the `<script>` element:

+ The `this` keyword is a reference to the script's host element
+ The `<script>` element is executed again on each re-insertion to the DOM

</details>

## HTML Imports

HTML Imports is a realtime module system for HTML that speaks HTML! Something like it is the [`<defs>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs) and [`<use>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) system in SVG.

OOHTML makes this possible in just simple conventions - via a new `def` attribute and a complementary new `<import>` element!

### Module Definition

A module here is any piece of markup that can be reused.

Here, we get the `def` attribute for defining those - either as whole *module* or as *fragment*:

```html
<head>

  <template def="foo">
    <div def="fragment1">A module fragment that can be accessed independently</div>
    <div def="fragment2">Another module fragment that can be accessed independently</div>
    <p>An element that isn't explicitly exposed.</p>
  </template>

</head>
```

**-->** *with module nesting for code organization*:

```html
<head>

  <template def="foo">
    <div def="fragment1"></div>

    <template def="nested">
      <div def="fragment2"></div>
    </template>
  </template>

</head>
```

### Remote Modules

We shouldn't need a different mechanism to work with remote content.

Here, we get the `<template src>` element for that:

```html
<template def="foo" src="/foo.html"></template>
<!-- which links to the file below -->
```

```html
-- file: /foo.html --
<div def="fragment1"></div>
<template def="nested" src="/nested.html"></template>
<!-- which itself links to the file below -->
```

```html
-- file: /nested.html --
<div def="fragment2"></div>
--
```

**-->** *which extends how elements like images already work; terminating with either a `load` or an `error` event*:

```js
foo.addEventListener('load', loadCallback);
foo.addEventListener('error', errorCallback);
```

### Declarative Module Imports

The essence of a module is for reuse.

Here, we get an `<import>` element that lets us do that declaratively:

```html
<body>
  <import ref="/foo#fragment1"></import> <!-- Pending resolution -->
  <import ref="/foo/nested#fragment2"></import> <!-- Pending resolution -->
</body>
```

```html
<body>
  <div def="fragment1"></div> <!-- After resolution -->
  <div def="fragment2"></div> <!-- After resolution -->
</body>
```

<details><summary>All in realtime</summary>

As a realtime module system, `<import> `elements maintain a live relationship with given module definition elements (`<template def>`) and are resolved again in the event that:
+ the `<import>` element points to another module — either by `ref` change or by a change in `importscontext` (below).
+ the module definition element (`<template def>`) has had its contents updated, either programmatically or automatically from having loaded.

Conversely, an `<import>` element that has been resolved will self-restore in the event that:
+ the `<import>` element no longer points to a module; or the module has been emptied or removed.
+ the previously slotted contents have been programmatically removed and slot is empty.

</details>

<details><summary>With SSR Support</summary>

On the server, these `<import>` elements would retain their place in the DOM, but this time, serialized into comment nodes, while having their output rendered just above them as siblings.

The above resolved imports would thus give us something like:

```html
<body>
  <div def="fragment1"></div>
  <!--&lt;import ref="/foo#fragment1"&gt;&lt;/import&gt;-->
  <div def="fragment2"></div>
  <!--&lt;import ref="/foo/nested#fragment2"&gt;&lt;/import&gt;-->
</body>
```

But they also would need to remember the exact imported nodes that they manage so as to be able to re-establish that relationship on getting to the client. This information is automatically encoded as part of the serialised element itself, in something like:

```html
<!--&lt;import ref="/foo/nested#fragment2" nodecount="1"&gt;&lt;/import&gt;-->
```

Now that extra bit of information gets decoded and original relationships are formed again on getting to the client and "hydrating" the `<import>` element. But, the `<import>` element itself stays invisible in the DOM while still continuing to kick as above!

> Note: We know we're on the server when `window.webqit.env === 'server'`. This flag is automatically set by OOHTML's current SSR engine: [OOHTML-SSR](https://github.com/webqit/oohtml-ssr)

</details>

### Programmatic Module Imports

JavaScript applications will need more than a declarative import mechanism.

Here, we get an *HTMLImports* API for programmatic module import:

```js
const moduleObject1 = document.import('/foo#fragment1');
console.log(moduleObject1.value); // divElement
```

```js
const moduleObject2 = document.import('/foo/nested#fragment2');
console.log(moduleObject2.value); // divElement
```

**-->** *with an observable `moduleObject.value` property for working asynchronously; e.g. awaiting and handling remote modules*:

```js
Observer.observe(moduleObject2, 'value', e => {
    console.log(e.value); // divElement
});
```

**-->** *with an equivalent `callback` option on the `import()` method itself*:

```js
document.import('/foo#fragment1', divElement => {
    console.log(divElement);
});
```

**-->** *with an optional `live` parameter for staying subscribed to any mutations made to source module elements*:

```js
const moduleObject2 = document.import('/foo/nested#fragment2', true/*live*/);
console.log(moduleObject2.value);
Observer.observe(moduleObject2, 'value', e => {
    console.log(e.value);
});
```

```js
document.import('/foo#fragment1', true/*live*/, divElement => {
    console.log(divElement); // To be received after remote module has been loaded
});
```

*...both of which would get notified on doing the below*:

```js
document.querySelector('template[def="foo"]').content.firstElementChild.remove();
```

**-->** *with an optional `AbortSignal` parameter for aborting module mutation events*:

```js
const abortController = new AbortController;
```

```js
const moduleObject2 = document.import('/foo/nested#fragment2', { live: true, signal: abortController.signal });
```

*...in the absence of which an `AbortSignal` instance is automatically created internally for the same purpose, such that we're always able to do*:

```js
moduleObject2.abort();
```

*...whereas in the `callback` approach, no automatic `AbortSignals` are created*:

```js
document.import('/foo#fragment1', { live: true, signal: abortController.signal }, divElement => {
    console.log(divElement); // To be received after remote module has been loaded
});
```

```js
setTimeout(() => abortController.abort(), 1000);
```

<details><summary>Extended Imports concepts</summary>

### Lazy-Loading Modules

We can defer module loading until we really need them.

Here, we get the `loading="lazy"` directive for that; and loading is only then triggered on the first attempt to import their contents:

```html
<!-- Loading doesn't happen until the first time this is being accessed -->
<template def="foo" src="/foo.html" loading="lazy"></template>
```

```html
<body>
  <import ref="/foo#fragment1"></import> <!-- Triggers module loading and resolves on load success -->
</body>
```
```js
const moduleObject2 = document.import('/foo#fragment1'); // Triggers module loading and resolves at moduleObject2.value on load success
```

### Scoped Modules

Some modules will only be relevant within a specific context in the page, and these shouldn't map to the global document scope.

Here, we get the `scoped` attribute for scoping those to their respective contexts, and thus, implicitly have an *object-scoped* module system:

```html
<section> <!-- object with own modules -->

  <template def="foo" scoped> <!-- Scoped to host object and not available globally -->
    <div def="fragment1"></div>
  </template>

  <div>
    <import ref="foo#fragment1"></import> <!-- Relative path (beginning without a slash), resolves to the local module: foo#fragment1 -->
    <import ref="/foo#fragment1"></import> <!-- Absolute path, resolves to the global module: /foo#fragment1 -->
  </div>

</section>
```

**-->** *with an equivalent `Element.prototype.import()` API for accessing said scoped modules*:

```js
// Using the HTMLImports API
const moduleHost = document.querySelector('div');
const localImport1 = moduleHost.import('foo#fragment1'); // the local module: foo#fragment1
console.log(localImport1); // { value: div }
```

```js
// Using the HTMLImports API
const moduleHost = document.querySelector('div');
const globalImport1 = moduleHost.import('/foo#fragment1'); // the global module: foo#fragment1
console.log(globalImport1); // { value: div }
```

### Module Inheritance

We'll often have repeating markup structures.

Here, we get module nesting with inheritance to simplify that:

```html
<template def="foo">

  <header def="header"></header>
  <footer def="footer"></footer>

  <template def="nested1" inherits="header footer"> <!-- Using the "inherits" attribute -->
    <main def="main"></main>
  </template>

  <template def="nested2" inherits="header footer"> <!-- Using the "inherits" attribute -->
    <main def="main"></main>
  </template>

</template>
```

```html
<template def="foo">

  <template def="common">
    <header def="header"></header>
    <footer def="footer"></footer>
  </template>

  <template def="nested1" extends="common"> <!-- Using the "extends" attribute -->
    <main def="main"></main>
  </template>

  <template def="nested2" extends="common"> <!-- Using the "extends" attribute -->
    <main def="main"></main>
  </template>

</template>
```

```html
<body>
  <import ref="/foo/nested1#header"></import>
</body>
```

### Imports Contexts

We should be able to define a base path at arbitrary levels in the page against which to resolve import *refs* in subtree.

Here, we get "Imports Contexts" for that:

```html
<body importscontext="/foo">
  <section>
    <import ref="#fragment1"></import> <!-- Relative path (beginning without a slash), resolves to: /foo#fragment1 -->
  </section>
</body>
```

```html
<body importscontext="/foo/nested">
  <section>
    <import ref="#fragment2"></import> <!-- Relative path (beginning without a slash), resolves to: /foo/nested#fragment2 -->
  </section>
</body>
```

```js
// Using the HTMLImports API
const moduleHost = document.querySelector('section');
const globalImport2 = moduleHost.import('#fragment2'); // module:/foo/nested#fragment2
console.log(globalImport2); // { value: div }
```

**-->** *with said "Imports Contexts" optionally having a name*:

```html
<body contextname="context1" importscontext="/foo/nested">

  <import ref="#fragment2"></import> <!-- Relative path (beginning without a slash), resolves to: /foo/nested#fragment2 -->

  <section importscontext="/foo">
    <import ref="#fragment1"></import> <!-- Relative path (beginning without a slash), resolves to: /foo#fragment1 -->
    <div>
      <import ref="@context1#fragment2"></import> <!-- Context-relative path (beginning with a context name), resolves to: /foo/nested#fragment2 -->
    </div>
  </section>

</body>
```

```js
// Using the HTMLImports API
const moduleHost = document.querySelector('div');
const globalImport2 = moduleHost.import('@context1#fragment2'); // module:/foo/nested#fragment2
console.log(globalImport2); // { value: div }
```

**-->** *with said "Imports Contexts" being able to "nest" nicely*:

```html
<body importscontext="/foo">

  <import ref="#fragment1"></import> <!-- Relative path (beginning without a slash), resolves to: /foo#fragment1 -->

  <section importscontext="nested"> <!-- Relative path (beginning without a slash), resolves to: /foo/nested -->
    <import ref="#fragment2"></import> <!-- Relative path (beginning without a slash), resolves to: /foo/nested#fragment2 -->
  </section>

</body>
```

### Scoped Modules and Imports Contexts

Scoped modules and Import Contexts shouldn't be mutually exclusive.

Here, we're able to have *one* element implement *both* at the same time - with scoped modules inheriting Import Contexts:

```html
<body contextname="context1" importscontext="/bar">
  <section importscontext="nested"> <!-- object with own modules, plus inherited context: /bar/nested -->

    <template def="foo" scoped> <!-- Scoped to host object and not available globally -->
      <div def="fragment1"></div>
      <div def="fragment2"></div>
    </template>

    <div>
      <import ref="foo#fragment2"></import> <!-- Relative path (beginning without a slash), resolves to the local module: foo#fragment2, and if not found, resolves from context to the module: /bar/nested/foo#2 -->
      <import ref="/foo#fragment1"></import> <!-- Absolute path, resolves to the global module: /foo#fragment1 -->
      <import ref="@context1#fragment1"></import> <!-- Resolves to the global module: /bar#fragment1 -->
    </div>

  </section>
</body>
```

```js
// Using the HTMLImports API
const moduleHost = document.querySelector('div');
const localOrGlobalImport2 = moduleHost.import('#fragment2'); // the local module: foo#fragment2, and if not found, resolves from context to the module: /bar/nested#fragment2
console.log(localOrGlobalImport2); // { value: div }
```

</details>

## Data Binding

Data binding is about declaratively binding the UI to application data, ensuring that the relevant parts of the UI are *automatically* updated as application state changes.

OOHTML makes this possible in just simple conventions - via a new comment-based data-binding syntax `<?{ }?>` and a complementary new `binding` attribute! And there's one more: Quantum Scripts which brings the most advanced form of reactivity to HTML!

### Discrete Data-Binding

Here, we get a comment-based data-binding tag `<?{ }?>` which works like regular comment but stay "data-charged":

```js
<html>
  <head>
    <title><?{ app.title }?></title>
  </head>
  <body>
    Hi, I'm <?{ name ?? 'Default name' }?>!
    and here's another way to write the same comment: <!--?{ cool }?-->
  </body>
</html>
```

<details><summary>Resolution details</summary>

Here, JavaScript references are resolved from the closest node up the document hierarchy that exposes a corresponding *binding* on its Bindings API ([discussed below](#bindings-api)). Thus, for the above markup, our underlying data structure could be anything like the below:

```js
document.bind({ name: 'James Boye', cool: '100%', app: { title: 'Demo App' } });
document.body.bind({ name: 'John Doe' });
```

```js
document: { name: 'James Boye', cool: '100%', app: { title: 'Demo App' } }
 └── html
  ├── head
  └── body: { name: 'John Doe' }
```

Now, the `name` reference remains bound to the `name` *binding* on the `<body>` element until the meaning of "closest node" changes again:

```js
delete document.body.bindings.name;
```

While the `cool` reference remains bound to the `cool` *binding* on the `document` node until the meaning of "closest node" changes again:

```js
document.body.bindings.cool = '200%';
```

</details>

<details><summary>With SSR Support</summary>

On the server, these data-binding tags would retain their place in the DOM while having their output rendered to their right in a text node.

The following: `<?{ 'Hello World' }?>` would thus give us: `<?{ 'Hello World' }?>Hello World`.

But they also would need to remember the exact text node that they manage, so as to be able to re-establish that relationship on getting to the client. That information is automatically encoded as part of the declaration itself, and that brings us to having a typical server-rendered binding look like this:

```html
<?{ 'Hello World'; [=11] }?>Hello World
```

Now that extra bit of information gets decoded and original relationships are forned again on getting to the client. But the binding tag itself graciously disappears from the DOM, while the now "hydrated" text node continues to kick!

> Note: We know we're on the server when `window.webqit.env === 'server'`. This flag is automatically set by OOHTML's current SSR engine: [OOHTML-SSR](https://github.com/webqit/oohtml-ssr)

</details>

### Inline Data-Binding

Here, we get the `binding` attribute for a declarative and neat, key/value data-binding syntax:

```html
<div binding="<directive> <param>: <arg>;"></div>
```

**-->** *where*:

+ *`<directive>` is the directive, which is always a symbol*
+ *`<param>` is the parameter being bound, which could be a CSS property, class name, attribute name, Structural Directive - depending on the givin directive*
+ *`<arg>` is the bound value or expression*

**-->** *which would give us the following for a CSS property*:

```html
<div binding="& color:someColor; & backgroundColor:'red'"></div>
```

**-->** *without being space-sensitive*:

```html
<div binding="& color:someColor; &backgroundColor: 'red'"></div>
```

**-->** *the rest of which can be seen below*:

| Directive | Type | Usage |
| :---- | :---- | :---- |
| `&`  | CSS Property | `<div binding="& color:someColor; & backgroundColor:someBgColor;"></div>` |
| `%`  | Class Name | `<div binding="% active:app.isActive; % expanded:app.isExpanded;"></div>` |
| `~`  | Attribute Name | `<a binding="~ href:person.profileUrl+'#bio'; ~ title:'Click me';"></a>` |
|   | Boolean Attribute | `<a binding="~ ?required:formField.required; ~ ?aria-checked: formField.checked"></a>` |
| `@`  | Structural Directive: | *See below* |
| `@text`   | Plain text content | `<span binding="@text:firstName+' '+lastName;"></span>` |
| `@html`   | Markup content | `<span binding="@html: '<i>'+firstName+'</i>';"></span>` |
|  `@items`  | A list, with argument in the following format:<br>`<declaration> <of\|in> <iterable> / <importRef>` | *See next two tables* |

<details><summary><code>For ... Of</code> Loops</summary>

|  Idea | Usage |
| :---- | :---- |
| A `for...of` loop over an array/iterable | `<ul binding="@items: value of [1,2,3] / 'foo#fragment';"></ul>` |
| Same as above but with a `key` declaration  | `<ul binding="@items: (value,key) of [1,2,3] / 'foo#fragment';"></ul>` |
| Same as above but with different variable names  | `<ul binding="@items: (product,id) of store.products / 'foo#fragment';"></ul>` |
| Same as above but with a dynamic `importRef`  | `<ul binding="@items: (product,id) of store.products / store.importRef;"></ul>` |

</details>

<details><summary><code>For ... In</code> Loops</summary>

| Idea | Usage |
| :---- | :---- |
| A `for...in` loop over an object | `<ul binding="@items: key in {a:1,b:2} / 'foo#fragment';"></ul>` |
| Same as above but with a `value` and `index` declaration | `<ul binding="@items: (key,value,index) in {a:1, b:2} / 'foo#fragment';"></ul>` |

</details>

<details><summary>Resolution details</summary>

Here, JavaScript references are resolved from the closest node up the document hierarchy that exposes a corresponding *binding* on its Bindings API ([discussed below](#bindings-api)). Thus, for the above CSS bindings, our underlying data structure could be anything like the below:

```js
document.bind({ someColor: 'green', someBgColor: 'yellow' });
document.body.bind({ someBgColor: 'silver' });
```

```js
document: { someColor: 'green', someBgColor: 'yellow' }
 └── html
  ├── head
  └── body: { someBgColor: 'silver' }
```

Now, the `someBgColor` reference remains bound to the `someBgColor` *binding* on the `<body>` element until the meaning of "closest node" changes again:

```js
delete document.body.bindings.someBgColor;
```

While the `someColor` reference remains bound to the `someColor` *binding* on the `document` node until the meaning of "closest node" changes again:

```js
document.body.bindings.someColor = 'brown';
```

</details>

<details><summary>All in realtime</summary>

Bindings are resolved in realtime! And in fact, for lists, in-place mutations - additions and removals - on the *iteratee* are automatically reflected on the UI!

</details>

<details><summary>With SSR Support</summary>

For lists, generated item elements are automatically assigned a corresponding index with a `data-index` attribute! This helps in remapping generated item nodes to their respective entry in *iteratee* - universally.

</details>

### Quantum Scripts

We often still need to write more serious reactive logic on the UI than a declarative data-binding language can provide for. But we shouldn't need to reach for special tooling or some "serious" programming paradigm on top of JavaScript.

Here, from the same `<script>` element we already write, we get a direct upgrade path to reactive programming in just an attribute: `quantum`:

```html
<script quantum>
  // Code here
  console.log(this); // window
</script>
```

```html
<script type="module" quantum>
  // Code here
  console.log(this); // undefined
</script>
```

**-->** *which adds up really well with the `scoped` attribute*:

```html
<main>

  <script scoped quantum>
    // Code here
    console.log(this); // main
  </script>

</main>
```

```html
<main>

  <script type="module" scoped quantum>
    // Code here
    console.log(this); // main
  </script>

</main>
```

**-->** *with content being whatever you normally would write in a `<script>` element, minus the "manual" work for reactivity*:

```html
<main>

  <script type="module" scoped quantum>
    import { someAPI } from 'some-module';

    let clickCount = 0;
    console.log(clickCount);
    someAPI(clickCount);

    this.addEventListener('click', e => clickCount++);
  </script>

</main>
```

**-->** *within which other "live" APIs, like the Namespace API above, fit seamlessly*:

```html
<main namespace>

  <script scoped quantum>
    if (this.namespace.specialButton) {
      console.log('specialButton present!');
    } else {
      console.log('specialButton not present!');
    }
    let specialButton = this.namespace.specialButton;
    console.log(specialButton);
  </script>

</main>
```

```js
const main = document.querySelector('main');
const button = document.createElement('button');
button.id = 'specialButton';

const addButton = () => {
  main.appendChild(button);
  setTimeout(removeButton, 5000);
};
const removeButton = () => {
  button.remove();
  setTimeout(addButton, 5000);
};
```

<details><summary>Details</summary>

It's Imperative Reactive Programming ([IRP](https://en.wikipedia.org/wiki/Reactive_programming#Imperative)) right there and it's the [Quantum](https://github.com/webqit/quantum-js) runtime extension to JavaScript!

Here, the runtime executes your code in a special execution mode that gets literal JavaScript expressions to statically reflect changes. This makes a lot of things possible on the UI! The [Quantum JS](https://github.com/webqit/quantum-js) documentation has a detailed run down.

Now, in each case above, reactivity terminates on script's removal from the DOM or via a programmatic approach:

```js
const script = document.querySelector('script[quantum]');
// const script = document.querySelector('main').scripts[0];
script.abort();
```

But while that is automatic, DOM event handlers bound via `addEventListener()` would still need to be terminated in their own way.

</details>

## Data Plumbing

Components often need to manage, and also be driven by, dynamic data. That could get pretty problematic and messy if all of that should go on DOM nodes as direct properties:

```js
// Inside a custom element
connectedCallback() {
  this.prop1 = 1;
  this.prop2 = 2;
  this.prop3 = 3;
  this.style = 'tall-dark'; // ??? - conflict with the standard HTMLElement: style property
}
```

```js
// Outside the component
const node = document.querySelector('my-element');
node.prop1 = 1;
node.prop2 = 2;
node.prop3 = 3;
node.normalize = true; // ??? - conflict with the standard Node: normalize() method
```

This calls for a decent API and some data-flow mechanism!

### The Bindings API

A place to maintain state need not be a complex state machine! Here, that comes as a simple, read/write, data object exposed on the document object and on DOM elements as a readonly `bindings` property. This is the Bindings API.

**-->** *it's an ordinary JavaScript object that can be read and mutated*:

```js
// Read
console.log(document.bindings); // {}
// Modify
document.bindings.app = { title: 'Demo App' };
console.log(document.bindings.app); // { title: 'Demo App' }
```

```js
const node = document.querySelector('my-element');
// Read
console.log(node.bindings); // {}
// Modify
node.bindings.style = 'tall-dark';
node.bindings.normalize = true;
```

**-->** *with a corresponding `bind()` method that lets us make mutations in batches*:

```js
// ------------
// Set multiple properties
document.bind({ name: 'James Boye', cool: '100%', app: { title: 'Demo App' } });

// ------------
// Replace existing properties with a new set
document.bind({ signedIn: false, hot: '100%' });
// Inspect
console.log(document.bindings); // { signedIn: false, hot: '100%' }

// ------------
// Merge a new set of properties with existing
document.bind({ name: 'James Boye', cool: '100%' }, { merge: true });
// Inspect
console.log(document.bindings); // { signedIn: false, hot: '100%', name: 'James Boye', cool: '100%' }
```

**-->** *and it becomes easy to pass data down a component tree*:

```js
// Inside a custom element
connectedCallback() {
  this.child1.bind(this.bindings.child1Data);
  this.child2.bind(this.bindings.child2Data);
}
```

**-->** *and given the Observer API, reactivity is intrinsic*:

```js
Observer.observe(document.bindings, mutations => {
  mutations.forEach(mutation => console.log(mutation));
});
```

```js
// Inside a custom element
connectedCallback() {
  Observer.observe(this.bindings, 'style', e => {
    // Compunonent should magically change style
    console.log(e.value);
  });
}
```

```js
const node = document.querySelector('my-element');
node.bindings.style = 'tall-dark';
```

<details><summary>Details</summary>

In the current OOHTML, the `document.bindings` and `Element.prototype.bindings` APIs are implemented as proxies over their actual bindings interface to enable some interface-level reactivity. This lets us have reactivity over literal property assignments and deletions on the interface:

```js
node.bindings.style = 'tall-dark'; // Reactive assignment
delete node.bindings.style; // Reactive deletion
```

For mutations at a deeper level to be reactive, the corresponding Observer API method must be used:

```js
Observer.set(document.bindings.app, 'title', 'Demo App!!!');
Observer.deleteProperty(document.bindings.app, 'title');
```

</details>

### The Context API

A complex hierarchy of objects will often call for more than the normal top-down flow of data that the Bindings API facilitates. A child may need the ability to look up the component tree to directly access specific data, or in other words, "request" data from "context". This is possible via the Context API.

And interestingly, the Context API is the resolution system behind HTML Imports and Data Binding in OOHTML!

Here, we simply leverage the DOM's existing event system to fire a "request" event and let an arbitrary "provider" in context fulfill the request. This becomes very simple with the Context API which is exposed on the document object and on element instances as the readonly `context` property.

**-->** *with the `context.request()` method for firing requests*:

```js
// ------------
// Get an arbitrary
const node = document.querySelector('my-element');

// ------------
// Prepare and fire request event
const requestParams = { type: 'html-imports', detail: '/foo#fragment1' };
const request = new ContextRequestEvent(requestParams);
const contextReturnValue = node.context.request(request);

// ------------
// Handle response
console.log(contextReturnValue.value); // It works!
```

**-->** *and the `context.attachProvider()` method for registering providers at arbitrary levels in the DOM tree*:

```js
// ------------
// Define a ContextProvider class
class FakeImportsProvider extends HTMLContextProvider {
  static type = 'html-imports';
  handle(request) {
    console.log(request.detail); // '/foo#fragment1'
    request.respondWith('It works!');
  }
}

// ------------
// Instantiate and attach to a node
const providerId = FakeImportsProvider.createId(); // { type: 'html-imports' }
const fakeImportsProvider = new FakeImportsProvider(providerId);
document.context.attachProvider(fakeImportsProvider);

// ------------
// Detach anytime
document.context.detachProvider(fakeImportsProvider);
```

<details><summary>Details</summary>

In the current OOHTML, the Context API interfaces are exposed on the global `webqit` object:

```js
const { HTMLContextProvider, ContextRequestEvent, ContextReturnValue } = window.webqit;
```

That said...

+ it is possible to specify a name for a provider:

    ```js
    // Instantiate and attach to a node
    const providerId = FakeImportsProvider.createId({ contextName: 'fake-provider' }); // { type: 'html-imports', contextName: 'fake-provider' }
    const fakeImportsProvider = new FakeImportsProvider( providerId );
    document.context.attachProvider(fakeImportsProvider);
    ```

    ...which a request could target:

    ```js
    // Prepare and fire request event that specifies the provider name: 'fake-provider', without which only "type" match is performed
    const requestParams = FakeImportsProvider.createRequest({ contextName: 'fake-provider', detail: '/foo#fragment1' }); // { type: 'html-imports', contextName: 'fake-provider', detail: '/foo#fragment1' }
    const request = new ContextRequestEvent(requestParams);
    const contextReturnValue = node.context.request(request);
    ```

+ and a provider could indicate to manually match requests where the defualt "type" match, plus optional "contextName" match doesn't suffice:

    ```js
    // Define a ContextProvider class
    class ContextProvider extends HTMLContextProvider {
      static type = 'html-imports';
      static matchRequest( id, request ) {
        // The default request matching algorithm
        return request.type === id.type && ( !request.contextName || request.contextName === id.contextName );
      }
      handle(request) {
        console.log(request.detail);
        request.respondWith('It works!');
      }
    }
    ```

+ and a request could choose to stay subscribed to changes on the requested data; the `request` would simply set a `live` flag and either stay alert to said updates on the returned `ContextReturnValue` object or specify a callback function, in which case no `ContextReturnValue` object is returned:

    ```js
    // Set the "live" flag
    requestParams.live = true;
    const request = new ContextRequestEvent(requestParams);
    ```

    ```js
    // Handle response without a callback
    const contextReturnValue = node.context.request(request);
    console.log(contextReturnValue.value); // It works!
    Observer.observe(contextReturnValue, 'value', e => {
      console.log(e.value); // It works live!
    });
    ```

    ```js
    // Handle response with a callback
    node.context.request(request, value => {
      console.log(value);
      // It works!
      // It works live!
    });
    ```

    ...while the provider would simply check for the `request.live` flag and keep the updates flowing:

    ```js
    // Define a ContextProvider class
    class ContextProvider extends HTMLContextProvider {
      static type = 'html-imports';
      handle(request) {
        if (request.live) {
          setTimeout(() => {
            request.respondWith('It works live!');
          }, 5000);
        }
        request.respondWith('It works!');
      }
    }
    ```

+ live requests are terminated via the returned `ContextReturnValue` object...

    ```js
    contextReturnValue.abort();
    ```

    ...or via an initially specified `AbortSignal`:

    ```js
    // Add a signal to the original request
    const abortController = new AbortController;
    requestParams.signal = abortController.signal;
    ```

    ```js
    abortController.abort();
    ```

+ now, when a node in a provider's subtree is suddenly attached an identical provider, any live requests the super provider already serves are automatically "claimed" by the sub provider:

    ```js
    document: // 'fake-provider' here
    └── html
      ├── head
      └── body:  // 'fake-provider' here. Our request above is now served from here.
    ```

    And when the sub provider is suddenly detached from said node, any live requests it had served are automatically hoisted back to the super provider.

    ```js
    document: // 'fake-provider' here. Our request above is now served from here.
    └── html
      ├── head
      └── body:
    ```

    While, in all, the original receiver needs not bother where a response is from!

</details>

**-->** *all of which gives us the programmatic equivalent of declarative HTMLImports and Data Binding*:

```html
<div contextname="vendor1">
  <div contextname="vendor2">
    ...

      <my-element>
        <!-- Declarative import -->
        <import ref="@vendor1/foo#fragment1"></import>
        <!-- Declarative Data Binding -->
        <?{ @vendor2.app.title }?>
      </my-element>

    ...
  </div>
</div>
```

```js
// ------------
// Equivalent import() approach
const contextReturnValue = myElement.import('@vendor1/foo#fragment1');

// ------------
// Equivalent raw Context API approach
const requestParams = { type: 'html-imports', contextName: 'vendor1', detail: '/foo#fragment1' };
const request = new ContextRequestEvent(requestParams);
const contextReturnValue = myElement.context.request(request);

// ------------
// Handle response
console.log(contextReturnValue.value);
```

```js
// ------------
// Equivalent raw Context API approach
const requestParams = { type: 'bindings', contextName: 'vendor2', detail: 'app' };
const request = new ContextRequestEvent(requestParams);
const contextReturnValue = myElement.context.request(request);

// ------------
// Handle response
console.log(contextReturnValue.value.title);
```

## Polyfill

OOHTML is being developed as something to be used today—via a polyfill. This is an active and intentional effort that continues to ensure that the project evolves through a practice-driven process.

<details><summary>Load from a CDN<br>
└───────── <a href="https://bundlephobia.com/result?p=@webqit/oohtml"><img align="right" src="https://img.shields.io/bundlephobia/minzip/@webqit/oohtml?label=&style=flat&colorB=black"></a></summary>

```html
<script src="https://unpkg.com/@webqit/oohtml/dist/main.js"></script>
```

└ This is to be placed early on in the document and should be a classic script without any `defer` or `async` directives!

└ For the Scoped Styles feature, you'd also need something like the [samthor/scoped](https://github.com/samthor/scoped) polyfill (more details below):

```html
<head>
  <script src="https://unpkg.com/style-scoped/scoped.min.js"></script>
</head>
```

</details>

<details><summary>Install from NPM<br>
└───────── <a href="https://npmjs.com/package/@webqit/oohtml"><img align="right" src="https://img.shields.io/npm/v/@webqit/oohtml?style=flat&label=&colorB=black"></a></summary>

```bash
npm i @webqit/oohtml
```

```js
// Import
import init from '@webqit/oohtml';

// Initialize the lib
init.call( window[, options = {} ]);
```

└ To use the polyfill on server-side DOM instances as made possible by libraries like [jsdom](https://github.com/jsdom/jsdom), simply install and initialize the library `@webqit/oohtml` with the DOM instance as above.

└ But all things "SSR" for OOHTML are best left to the [`@webqit/oohtml-ssr`](https://github.com/webqit/oohtml-ssr) package!

</details>

<details><summary>Extended usage concepts</summary>

If you'll be going ahead to build a real app to see OOHTML in action, you may want to consider also using:

+ the [`@webqit/oohtml-cli`](https://github.com/webqit/oohtml-cli) package for operating a file-based templating system.

+ the modest, OOHTML-based [Webflo](https://github.com/webqit/webflo) framework to greatly streamline your application development process!

</details>

<details><summary>Implementation Notes</summary>

+ **Loading Requirements**. As specified above, the OOHTML script tag is to be placed early on in the document and should be a classic script without any `defer` or `async` directives!
    
    If you must load the script "async", one little trade-off has to be made for `<script scoped>` and `<script quantum>` elements to have them ignored by the browser until the polyfill comes picking them up: *employing a custom MIME type in place of the standard `text/javascript` and `module` types*, in which case, a `<meta name="scoped-js">` element is used to configure the polyfill to honor the custom MIME type:

    ```html
    <head>
      <meta name="scoped-js" content="script.mimeType=some-mime">
      <script async src="https://unpkg.com/@webqit/oohtml/dist/main.js"></script>
    </head>
    <body>
      <script type="some-mime" scoped>
        console.log(this); // body
      </script>
    </body>
    ```

    The custom MIME type strategy also comes in as a "fix" for when in a browser or other runtime where the polyfill is not able to intercept `<script scoped>` and `<script quantum>` elements ahead of the runtime - e.g. where...

    ```html
    <body>
      <script scoped>
        console.log(this); // body
      </script>
    </body>
    ```

    ...still gives the `window` object in the console.

+ **Scoped/Quantum Scripts**. This feature is an extension of [Quantum JS](https://github.com/webqit/quantum-js) and the default OOHTML build is based on the [Quantum JS Lite APIs](https://github.com/webqit/quantum-js#quantum-js-lite). Now, while Quantum JS Lite yields faster load times, it also means that `<script quantum></script>` and `<script scoped></script>` elements are parsed "asynchronously", in the same timing as `<script type="module"></script>`!

    This timing works perfectly generally, but if you have a requirment to have classic scripts follow their [native synchronous timing](https://html.spec.whatwg.org/multipage/parsing.html#scripts-that-modify-the-page-as-it-is-being-parsed), then you'd need to use the *realtime* OOHTML build:

    ```html
    <head>
      <script src="https://unpkg.com/@webqit/oohtml/dist/main.realtime.js"></script>
    </head>
    ```

+ **Scoped CSS**. This feature is only in "concept" implementation and doesn't work right now as is. The current implementation simply wraps `<style scoped>` blocks in an `@scope {}` block - which itself isn't supported in any browser. To try this "concept" implementation, set the `style.strategy` config to `@scope`:

    ```html
    <head>
      <meta name="scoped-css" content="style.strategy=@scope"> <!-- Must come before the polyfil -->
      <script src="https://unpkg.com/@webqit/oohtml/dist/main.js"></script>
    <head>
    ```

    Now the following `<style scoped>`...

    ```html
    <style scoped>
      h2 { color: red; }
    </style>
    ```
    
    ...will be wrapped to something like:

    ```html
    <style ref="scoped8eff" scoped>
      @scope from (:has(> style[ref="scoped8eff"])) {
        h2 { color: red; }
      }
    </style>
    ```

    A working implementation may be coming soon, but in the meantime, you could try one of the polyfills for `<style scoped>` out there; e.g. [samthor/scoped](https://github.com/samthor/scoped):

    ```html
    <script src="https://unpkg.com/style-scoped/scoped.min.js"></script>
    ```

+ **HTML Imports**. The attribute names for exposing reusable modules and for referencing them - the `def` and `ref` keywords, respectively - aren't finalized. While the principle of operation remains, these attributes may be renamed in subsequent iterations. But the polyfill is designed to always defer to any syntax that has been explicitly specified using a meta tag. Here's an example:

    ```html
    <head>
      <meta name="html-imports" content="template.attr.moduledef=def; template.attr.fragmentdef=def; import.attr.moduleref=ref;"> <!-- Must come before the polyfil -->
      <script src="https://unpkg.com/@webqit/oohtml/dist/main.js"></script>
    <head>
    ```

    Now, even when the default attribute names change, your `def` and `ref` implementation will still work:
 
</details>

## Examples

Here are a few examples in the wide range of use cases these features cover. While we'll demonstrate the most basic forms of these scenarios, it takes roughly the same principles to build an intricate form and a highly interactive UI.

<details><summary>Example 1: <i>Single Page Application</i><br>
└───────── </summary>

The following is how something you could call a Single Page Application ([SPA](https://en.wikipedia.org/wiki/Single-page_application)) could be made - with zero tooling:

**-->** *First, two components that are themselves analogous to a Single File Component ([SFC](https://vuejs.org/guide/scaling-up/sfc.html))*:

```html
<template def="pages">

  <template def="layout">
    <header def="header"></header>
    <footer def="footer"></footer>
  </template>

  <!-- Home Page -->
  <template def="home" extends="layout">
    <main def="main" namespace>
      <h1 id="banner">Home Page</h1>
      <a id="cta" href="#/products">Go to Products</a>
      <template scoped></template>
      <style scoped></style>
      <script scoped></script>
    </main>
  </template>

  <!-- Products Page -->
  <template def="products" extends="layout">
    <main def="main" namespace>
      <h1 id="banner">Products Page</h1>
      <a id="cta" href="#/home">Go to Home</a>
      <template scoped></template>
      <style scoped></style>
      <script scoped></script>
    </main>
  </template>

</template>
```

**-->** *Then a 2-line router that alternates the view based on the URL hash*:

```html
<body importscontext="/pages/home">

  <import ref="#header"></import>
  <import ref="#main"></import>
  <import ref="#footer"></import>
  
  <script>
  const route = () => { document.body.setAttribute('importscontext', '/pages' + location.hash.substring(1)); };
  window.addEventListener('hashchange', route);
  </script>
  
</body>
```

</details>

<details><summary>Example 2: <i>Multi-Level Namespacing</i><br>
└───────── </summary>

The following is a Listbox component lifted directly from the [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/examples/listbox-grouped/#sc_label) but with IDs effectively "contained" at different levels within the component using the `namespace` attribute.

```html
<div namespace class="listbox-area">
  <div>
    <span id="ss_elem" class="listbox-label">
      Choose your animal sidekick
    </span>
    <div id="ss_elem_list"
         tabindex="0"
         role="listbox"
         aria-labelledby="ss_elem">
      <ul role="group" aria-labelledby="cat" namespace>
        <li role="presentation" id="cat">
          Land
        </li>
        <li id="ss_elem_1" role="option">
          Cat
        </li>
        <li id="ss_elem_2" role="option">
          Dog
        </li>
        <li id="ss_elem_3" role="option">
          Tiger
        </li>
        <li id="ss_elem_4" role="option">
          Reindeer
        </li>
        <li id="ss_elem_5" role="option">
          Raccoon
        </li>
      </ul>
      <ul role="group" aria-labelledby="cat" namespace>
        <li role="presentation" id="cat">
          Water
        </li>
        <li id="ss_elem_6" role="option">
          Dolphin
        </li>
        <li id="ss_elem_7" role="option">
          Flounder
        </li>
        <li id="ss_elem_8" role="option">
          Eel
        </li>
      </ul>
      <ul role="group" aria-labelledby="cat" namespace>
        <li role="presentation" id="cat">
          Air
        </li>
        <li id="ss_elem_9" role="option">
          Falcon
        </li>
        <li id="ss_elem_10" role="option">
          Winged Horse
        </li>
        <li id="ss_elem_11" role="option">
          Owl
        </li>
      </ul>
    </div>
  </div>
</div>
```

</details>

<details><summary>Example 3: <i>Dynamic Shadow DOM</i><br>
└───────── </summary>

The following is a custom element that derives its Shadow DOM from an imported `<tenplate>` element. The idea is to have different Shadow DOM layouts defined and let the "usage" context decide which variant is imported!

**-->** *First, two layout options defined for the Shadow DOM*:

```html
<template def="vendor1">

  <template def="components-layout1">
    <template def="magic-button">
      <span id="icon"></span> <span id="text"></span>
    </template>
  </template>

  <template def="components-layout2">
    <template def="magic-button">
      <span id="text"></span> <span id="icon"></span>
    </template>
  </template>

</template>
```

**-->** *Next, the Shadow DOM creation that imports its layout from context*:

```js
customElements.define('magic-button', class extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.import('@vendor1/magic-button', template => {
      shadowRoot.appendChild( template.content.cloneNode(true) );
    });
  }
});
```

**-->** *Then, the part where we just drop the component in "layout" contexts*:

```html
<div contextname="vendor1" importscontext="/vendor1/components-layout1">

  <magic-button></magic-button>

  <aside contextname="vendor1" importscontext="/vendor1/components-layout2">
    <magic-button></magic-button>
  </aside>

</div>
```

</details>

<details><summary>Example 4: <i>Declarative Lists</i><br>
└───────── </summary>

The following is a hypothetical list page!

```html
<section>

  <!-- The "items" template -->
  <template def="item" scoped>
    <li><a binding="~href: '/animals#'+name;"><?{ index+': '+name }?></a></li>
  </template>

  <!-- The loop -->
  <ul binding="@items: (name,index) of ['dog','cat','ram'] / 'item';"></ul>

</section>
```

</details>

<details><summary>Example 5: <i>Imperative Lists</i><br>
└───────── </summary>

The following is much like the above, but imperative. Additions and removals on the data items are also statically reflected!

```html
<section namespace>

  <!-- The "items" template -->
  <template def="item" scoped>
    <li><a>Item</a></li>
  </template>

  <!-- The loop -->
  <ul id="list"></ul>

  <script scoped>
    // Import item template
    let itemImport = this.import('item');
    let itemTemplate = itemImport.value;

    // Iterate
    let items = [ 'Item 1', 'Item 2', 'Item 3' ];
    for (let entry of items) {
      const currentItem = itemTemplate.content.cloneNode(true);
      // Add to DOM
      this.namespace.list.appendChild(currentItem);
      // Remove from DOM whenever corresponding entry is removed
      if (typeof entry === 'undefined') {
        currentItem.remove();
        continue;
      }
      // Render
      currentItem.innerHTML = entry;
    }

    // Add a new entry
    setTimeout(() => items.push('Item 4'), 1000);
    // Remove an new entry
    setTimeout(() => items.pop(), 2000);
  </script>

</section>
```

</details>

## Getting Involved

All forms of contributions are welcome at this time. For example, syntax and other implementation details are all up for discussion. Also, help is needed with more formal documentation. And here are specific links:

+ [Project](https://github.com/webqit/oohtml)
+ [Documentation](https://github.com/webqit/oohtml/wiki)
+ [Discusions](https://github.com/webqit/oohtml/discussions)
+ [Issues](https://github.com/webqit/oohtml/issues)

## License

MIT.

[npm-version-src]: https://img.shields.io/npm/v/@webqit/oohtml?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/@webqit/oohtml
[npm-downloads-src]: https://img.shields.io/npm/dm/@webqit/oohtml?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/@webqit/oohtml
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@webqit/oohtml?style=flat&colorA=18181B&colorB=F0DB4F
[bundle-href]: https://bundlephobia.com/result?p=@webqit/oohtml
[license-src]: https://img.shields.io/github/license/webqit/oohtml.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/webqit/oohtml/blob/master/LICENSE
