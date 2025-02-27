import { debounce, findElements, isHtmlFigureElement, onResize, ready } from './utilities.js';
function getLineHeightInPixels() {
    const body = document.querySelector('body');
    const lineHeight = window.getComputedStyle(body).lineHeight;
    return Number.parseInt(lineHeight);
}
function findImagesInFigures() {
    return findElements('figure > img');
}
function findFiguratives() {
    return findElements('figure > .figurative');
}
function adjustFigurativeOnResize() {
    const lineHeight = getLineHeightInPixels();
    findFiguratives().forEach((div) => {
        const currentWidth = div.offsetWidth;
        const height = Number.parseInt(div.dataset.imgHeight);
        const width = Number.parseInt(div.dataset.imgWidth);
        const adjustedHeight = Math.round(currentWidth * (height / width) / lineHeight) * lineHeight;
        // div.style.height = `${adjustedHeight}px`;
        div.style.aspectRatio = `${currentWidth} / ${adjustedHeight}`;
    });
}
// Make figure images follow the baseline grid
export default function figurative() {
    ready(() => {
        const lineHeight = getLineHeightInPixels();
        findImagesInFigures().forEach((img) => {
            const parentFigure = img.parentElement;
            if (isHtmlFigureElement(parentFigure)) {
                // get image height and width
                const height = img.naturalHeight;
                const width = img.naturalWidth;
                const currentWidth = img.width;
                const div = document.createElement('div');
                div.dataset.imgHeight = height.toString();
                div.dataset.imgWidth = width.toString();
                const adjustedHeight = Math.round(currentWidth * (height / width) / lineHeight) * lineHeight;
                div.classList.add('figurative');
                // div.style.height = `${adjustedHeight}px`;
                div.style.aspectRatio = `${currentWidth} / ${adjustedHeight}`;
                div.appendChild(img.cloneNode(true));
                parentFigure.replaceChild(div, img);
            }
        });
        onResize(debounce(adjustFigurativeOnResize, 300));
    });
}
