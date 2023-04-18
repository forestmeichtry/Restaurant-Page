function createContactPage() {
    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageThree');
    content.appendChild(pageContainer);

    const pageTop = document.createElement('div');
    pageTop.classList.add('tab-content-top');
    pageContainer.appendChild(pageTop);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);
}

export {createContactPage};