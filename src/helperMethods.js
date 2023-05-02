function shiftPageIn(page) {
    const pageContainer = document.querySelector(page);
    const pageTop = pageContainer.querySelector('.tab-content-top');
    const pageBottom = pageContainer.querySelector('.tab-content-bottom');

    pageContainer.classList.remove('hidden');
    pageTop.classList.remove('offscreen');
    pageBottom.classList.remove('offscreen');
}

function shiftPageOut(page) {
    const pageContainer = document.querySelector(page);
    const pageTop = pageContainer.querySelector('.tab-content-top');
    const pageBottom = pageContainer.querySelector('.tab-content-bottom');

    pageTop.classList.add('offscreen');
    pageBottom.classList.add('offscreen');
    pageContainer.classList.add('hidden');
}

function createParallaxWrap() {
    const parallaxOuterWrap = document.createElement('div');
    parallaxOuterWrap.classList.add('parallaxOuterWrap');
    const parallaxInnerWrap = document.createElement('div');
    parallaxInnerWrap.classList.add('parallaxInnerWrap');

    parallaxOuterWrap.appendChild(parallaxInnerWrap);

    return parallaxOuterWrap;
}

function parallaxEffect(event) {
    this.querySelectorAll('.parallaxInnerWrap').forEach((shift) => {
        const position = 2;
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

export {shiftPageIn, shiftPageOut, parallaxEffect, createParallaxWrap};