# О лекции

В этом уроке мы узнаем, какие особенности работы с DOM в TS

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/53)


## Ключевая информация о DOM в TS 

### Соотношение HTML элемента с интерфейсом 

````text
<document>           
                declare var document: Document;
<head>
                interface Document ...
                    readonly head: HTMLHeadElement;
<body>
                interface Document ...
                    body: HTMLElement;
````

### Иерархия интерфейсов DOM

* EventTarget
  * Node
    * Document
      * HTMLDocument
    * Element
      * HTMLElement - "<html>"
        * HTMLAnchorElement  - "<a>"
        * HTMLBodyElement - "<body>" 
        * HTMLButtonElement - "<button>"
        * HTMLDataListElement 
        * HTMLDivElement - "<div>"
        * HTMLLIElement - "<li>"
        * HTMLHeadElement - "<head>"
        * HTMLSourceElement - "<source>"
        * HTMLStyleElement - "<style>"


### Объявление интерфейсов:

````ts
interface Document extends Node, DocumentOrShadowRoot, FontFaceSource, GlobalEventHandlers, NonElementParentNode, ParentNode, XPathEvaluatorBase{}
interface Element extends Node, ARIAMixin, Animatable, ChildNode, InnerHTML, NonDocumentTypeChildNode, ParentNode, Slottable{}
interface ElementCSSInlineStyle {}
interface EventTarget {}
interface HTMLAnchorElement extends HTMLElement, HTMLHyperlinkElementUtils {}
interface HTMLDataListElement extends HTMLElement {}
interface HTMLDocument extends Document {}
interface HTMLDivElement extends HTMLElement {}
interface HTMLElement extends Element, ElementCSSInlineStyle, ElementContentEditable, GlobalEventHandlers, HTMLOrSVGElement{}
interface HTMLBodyElement extends HTMLElement, WindowEventHandlers{}
interface HTMLButtonElement extends HTMLElement {}
interface HTMLLIElement extends HTMLElement {}
interface HTMLHeadElement extends HTMLElement {}
interface HTMLSourceElement extends HTMLElement {}
interface HTMLStyleElement extends HTMLElement, LinkStyle {}
interface HTMLHyperlinkElementUtils {}
interface Node extends EventTarget {}
````

## Дополнительные материаллы

* EN [DOM Manipulation](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html#handbook-content)
* [dom.generated.d.ts github/microsoft/TypeScript](https://github.com/microsoft/TypeScript/blob/main/src/lib/dom.generated.d.ts)
@see [dom.generated.d.ts в этом проекте](./dom-interfaces/vscode/dom.generated.d.ts)
* EN [mozilla: HTML_DOM_API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API)

## Run

````shell
tsc ./010-demo/index.ts
````