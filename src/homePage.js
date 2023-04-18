function removeHomePage() {
    const pageContainer = document.querySelector('.pageContainer');
    removeChildNodes(pageContainer);

    const pageTop = document.createElement('div');
    pageTop.classList.add('tab-content-top');
    pageContainer.appendChild(pageTop);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);

    pageTop.classList.add('shift-up');
    pageBottom.classList.add('shift-down');
    pageTop.addEventListener('animationend', () => {
        pageTop.classList.remove('shift-up');
        pageBottom.classList.remove('shift-down');
    }, {once: true});
}

function createHomePage() {
    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageOne');
    content.appendChild(pageContainer);

    const pageTop = document.createElement('div');
    pageTop.classList.add('tab-content-top');
    pageContainer.appendChild(pageTop);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);
}

export {createHomePage, removeHomePage};