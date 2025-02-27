import { ready, findElement, isHtmlUlistElement, isOfElement } from './utilities.js';
function gatherTags(ulCloud) {
    const items = ulCloud.querySelectorAll('li[data-count]');
    let max = 30;
    let min = Infinity;
    const elements = [];
    items.forEach((item) => {
        if (isOfElement(item, 'LI')) {
            const count = Number.parseFloat(item.getAttribute('data-count') ?? '');
            if (Number.isInteger(count)) {
                elements.push({ element: item, count });
                if (count > max) {
                    max = count;
                }
                if (count < min) {
                    min = count;
                }
            }
        }
    });
    if (min === Infinity) {
        min = 1;
    }
    return {
        max, min, elements
    };
}
// TODO: Better size scaling using min
function sizeTags({ max, elements }) {
    const maxSize = 30;
    const factor = max > maxSize ? (maxSize / max) : 1;
    elements.forEach(({ element, count }) => {
        element.style.setProperty("--size", (count * factor).toString());
    });
}
export default function tagCloud() {
    ready(() => {
        const element = findElement(".tag-cloud");
        if (isHtmlUlistElement(element)) {
            const tags = gatherTags(element);
            sizeTags(tags);
        }
    });
}
