import { findElement, ready, isHtmlDivElement } from './utilities.js';
function onKeypress(key, fn) {
    document.addEventListener("keyup", function (e) {
        if (e.isTrusted && key.key === e.key && key.ctrlKey === e.ctrlKey) {
            e.preventDefault();
            fn(e);
        }
    });
}
class OverlayElement {
    constructor(containerSelector) {
        this.containerSelector = containerSelector;
    }
    listen() {
        ready(() => {
            onKeypress({ key: "g", ctrlKey: true }, () => {
                this.toggleOverlay();
            });
        });
    }
    container() {
        const container = findElement(this.containerSelector);
        if (!isHtmlDivElement(container)) {
            throw Error("Could not find container");
        }
        return container;
    }
    overlayExists() {
        return findElement(`${this.containerSelector} .grid-overlay`) !== null;
    }
    overlay() {
        const overlayElement = findElement(`${this.containerSelector} .grid-overlay`);
        if (isHtmlDivElement(overlayElement)) {
            return overlayElement;
        }
        return this.createOverlay();
    }
    showOverlay() {
        this.overlay().style.display = "block";
    }
    hideOverlay() {
        this.overlay().style.display = "none";
    }
    toggleOverlay() {
        if (this.overlayIsVisible()) {
            this.hideOverlay();
        }
        else {
            this.showOverlay();
        }
    }
    overlayIsVisible() {
        return this.overlayExists() && this.overlay().style.display !== "none";
    }
    createDiv() {
        const div = document.createElement("div");
        if (isHtmlDivElement(div)) {
            return div;
        }
        throw Error("Could not create overlay element");
    }
    createOverlay() {
        const container = this.container();
        const overlay = this.createDiv();
        overlay.classList.add("grid-overlay");
        container.style.position = "relative";
        container.appendChild(overlay);
        return overlay;
    }
}
export default OverlayElement;
