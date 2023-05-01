function createMenuPage() {
    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageTwo');
    content.appendChild(pageContainer);

    const pageTop = document.createElement('div');
    pageTop.classList.add('tab-content-top');
    pageContainer.appendChild(pageTop);

    const galaxyDonut = document.createElement('div');
    galaxyDonut.classList.add('galaxyDonut', 'menuImage');
    pageTop.appendChild(galaxyDonut);

    const coffeeDonut = document.createElement('div');
    coffeeDonut.classList.add('coffeeDonut', 'menuImage');
    pageTop.appendChild(coffeeDonut);

    const blueberryDonut = document.createElement('div');
    blueberryDonut.classList.add('blueberryDonut', 'menuImage');
    pageTop.appendChild(blueberryDonut);

    const matchaDonut = document.createElement('div');
    matchaDonut.classList.add('matchaDonut', 'menuImage');
    pageTop.appendChild(matchaDonut);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);
    
    const mintDonut = document.createElement('div');
    mintDonut.classList.add('mintDonut', 'menuImage');
    pageBottom.appendChild(mintDonut);

    const nutellaDonut = document.createElement('div');
    nutellaDonut.classList.add('nutellaDonut', 'menuImage');
    pageBottom.appendChild(nutellaDonut);

    const cerealDonut = document.createElement('div');
    cerealDonut.classList.add('cerealDonut', 'menuImage');
    pageBottom.appendChild(cerealDonut);

    const caramelDonut = document.createElement('div');
    caramelDonut.classList.add('caramelDonut', 'menuImage');
    pageBottom.appendChild(caramelDonut);
}

export {createMenuPage};