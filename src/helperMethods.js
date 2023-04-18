function shiftPageIn(page) {
    const pageContainer = document.querySelector(page);
    const pageTop = pageContainer.querySelector('.tab-content-top');
    const pageBottom = pageContainer.querySelector('.tab-content-bottom');

    pageTop.classList.remove('offscreen');
    pageBottom.classList.remove('offscreen');
}

function shiftPageOut(page) {
    const pageContainer = document.querySelector(page);
    const pageTop = pageContainer.querySelector('.tab-content-top');
    const pageBottom = pageContainer.querySelector('.tab-content-bottom');

    pageTop.classList.add('offscreen');
    pageBottom.classList.add('offscreen');
}

export {shiftPageIn, shiftPageOut};