var doc = document, // interface Document extends Node, DocumentOrShadowRoot, FontFaceSource, GlobalEventHandlers, NonElementParentNode, ParentNode, XPathEvaluatorBase
head = document.head, body = document.body, box = document.querySelector(".box"), boxAsDiv = document.querySelector(".box"), input = document.querySelector('input'), inputNull = document.querySelector('input[name="aaa"]'), paragraph = document.querySelector('.paragraph');
console.log('box.classList', box.classList);
//console.log('box.value', box.value); // error TS2339: Property 'value' does not exist on type 'HTMLElement'.
//console.log('boxAsDiv.value', boxAsDiv.value); //  error TS2339: Property 'value' does not exist on type 'HTMLDivElement'.
console.log('input.value', input.value);
//console.log('inputNull.value', inputNull?.value);
//-----------------------------------------------------------------------------
// В этом фрагменте TSC определяет тип HTMLAnchorElement по селектору 'a'.
// Т.е. querySelector с указанием тега HTML дает типизированный элемент.
//-----
var link = document.querySelector('a'), // HTMLAnchorElement
link1 = document.querySelector('a.a-google') // Element
;
console.log('link', link);
console.log('link.href', link.href);
if (link) {
    console.log('link.href', link.href);
    link.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('link.click', 1);
    });
}
link.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('link.click', 2);
});
var audio = document.querySelector('audio') // HTMLAudioElement
;
console.log('audio', audio); // null
//console.log('audio.autoplay', audio.autoplay); // index.js:19 Uncaught TypeError: Cannot read properties of null (reading 'autoplay')
console.log('audio?.autoplay', audio === null || audio === void 0 ? void 0 : audio.autoplay); // undefined
//audio.addEventListener('click', ()=>{}); // Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
audio === null || audio === void 0 ? void 0 : audio.addEventListener('click', function () { }); //
//-----------------------------------------------------------------------------
// В этом фрагменте TSC не способен определить тип HTMLAnchorElement по
// селектору '.a-facebook'.
// Оно и логично - неизвестно какой HTML будет загружен.
//-----
var linkFb = document.querySelector('.a-facebook') // as HTMLAnchorElement
;
if (linkFb) {
    // console.log('linkFb.href', linkFb.href); //  error TS2339: Property 'href' does not exist on type 'Element'.
}
//-----------------------------------------------------------------------------
var 
//links = document.querySelectorAll('.a')
//  error TS2352: Conversion of type 'NodeListOf<Element>' to type 'HTMLElement' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// links = document.querySelectorAll('.a') as HTMLElement,
links = document.querySelectorAll('.a-class');
console.log('links', links);
links.forEach(function (link) {
    console.log('links/link', link, 'href=', link.href);
});
//-----------------------------------------------------------------------------
// document.createElement выдает типизированный элемент
//-----
var el = document.createElement('a'); // TSC автоматически определяет тип HTMLAnchorElement
el.href = 'https://google.com/abc';
console.log('el.getAttributeNames()', el.getAttributeNames());
//-----------------------------------------------------------------------------
