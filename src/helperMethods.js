function shiftPageIn(page) {
    const pageContainer = document.querySelector(page);

    if (page === '.pageTwo' && window.screen.width <= 1024) {
        pageContainer.classList.remove('sliced');
    } else {
        const pageTop = pageContainer.querySelector('.tab-content-top');
        const pageBottom = pageContainer.querySelector('.tab-content-bottom');

        pageContainer.classList.remove('hidden');
        pageTop.classList.remove('offscreen');
        pageBottom.classList.remove('offscreen');
    }
}

function shiftPageOut(page) {
    const pageContainer = document.querySelector(page);

    if (page === '.pageTwo' && window.screen.width <= 1024) {
        pageContainer.classList.add('sliced');
    } else {
        const pageTop = pageContainer.querySelector('.tab-content-top');
        const pageBottom = pageContainer.querySelector('.tab-content-bottom');

        pageTop.classList.add('offscreen');
        pageBottom.classList.add('offscreen');
        pageContainer.classList.add('hidden');
    }
}

function addMobileMenuEffect() {
    // todo, toggle info panel class (should use same rules as hover) for selected element
    let menuItems = document.querySelectorAll('.menuImage');
    for (let item of menuItems) {
        item.addEventListener('click', function() {
            this.classList.toggle('infoVisible');
        });
    }
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

export {shiftPageIn, shiftPageOut, parallaxEffect, createParallaxWrap, addMobileMenuEffect};