export function isOfElement(element, tagName) {
    return element !== null && element.tagName.toUpperCase() === tagName;
}
export function isHtmlDivElement(element) {
    return isOfElement(element, 'DIV');
}
export function isHtmlUlistElement(element) {
    return isOfElement(element, 'UL');
}
export function findElement(selector) {
    return document.querySelector(selector);
}
export function ready(fn) {
    document.addEventListener("DOMContentLoaded", fn);
}
