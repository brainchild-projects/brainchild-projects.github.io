export function isOfElement(element, tagName) {
    return element !== null && element.tagName.toUpperCase() === tagName;
}
export function isHtmlDivElement(element) {
    return isOfElement(element, 'DIV');
}
export function isHtmlUlistElement(element) {
    return isOfElement(element, 'UL');
}
export function isHtmlImgElement(element) {
    return isOfElement(element, 'IMG');
}
export function isHtmlFigureElement(element) {
    return isOfElement(element, 'FIGURE');
}
export function findElement(selector) {
    return document.querySelector(selector);
}
export function findElements(selector) {
    return document.querySelectorAll(selector);
}
export function ready(fn) {
    document.addEventListener("DOMContentLoaded", fn);
}
export function onResize(fn) {
    window.addEventListener("resize", fn);
}
export function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}
