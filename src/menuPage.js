function createMenuPage() {
    let menuItems = [];

    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageTwo');
    content.appendChild(pageContainer);

    const galaxyDonut = document.createElement('div');
    galaxyDonut.classList.add('galaxyDonut', 'menuImage');
    const galaxyInfo = document.createElement('div');
    galaxyInfo.classList.add('menuInfo');
    const galaxyHeader = document.createElement('div');
    galaxyHeader.classList.add('menuHeader');
    galaxyHeader.textContent = 'Galactic Glaze';
    const galaxyText = document.createElement('div');
    galaxyText.classList.add('menuText');
    galaxyText.textContent = "A chocolate glazed donut topped with crumbled Mars bars. Rich chocolate goodness meets crunchy candy bar bits for an otherworldly treat.";
    galaxyInfo.appendChild(galaxyHeader);
    galaxyInfo.appendChild(galaxyText);
    galaxyDonut.appendChild(galaxyInfo);
    menuItems.push(galaxyDonut);

    const coffeeDonut = document.createElement('div');
    coffeeDonut.classList.add('coffeeDonut', 'menuImage');
    const coffeeInfo = document.createElement('div');
    coffeeInfo.classList.add('menuInfo');
    const coffeeHeader = document.createElement('div');
    coffeeHeader.classList.add('menuHeader');
    coffeeHeader.textContent = 'Mocha Mania';
    const coffeeText = document.createElement('div');
    coffeeText.classList.add('menuText');
    coffeeText.textContent = "A mocha-flavored donut with chocolate glaze and topped with chocolate-covered espresso beans. A caffeine-lover's dream come true.";
    coffeeInfo.appendChild(coffeeHeader);
    coffeeInfo.appendChild(coffeeText);
    coffeeDonut.appendChild(coffeeInfo);
    menuItems.push(coffeeDonut);

    const blueberryDonut = document.createElement('div');
    blueberryDonut.classList.add('blueberryDonut', 'menuImage');
    const blueberryInfo = document.createElement('div');
    blueberryInfo.classList.add('menuInfo');
    const blueberryHeader = document.createElement('div');
    blueberryHeader.classList.add('menuHeader');
    blueberryHeader.textContent = 'Blueberry Blast';
    const blueberryText = document.createElement('div');
    blueberryText.classList.add('menuText');
    blueberryText.textContent = "A juicy blueberry donut with tangy lemon icing and fresh blueberries. Fruity sweetness and tangy zing for a delightful anytime indulgence.";
    blueberryInfo.appendChild(blueberryHeader);
    blueberryInfo.appendChild(blueberryText);
    blueberryDonut.appendChild(blueberryInfo);
    menuItems.push(blueberryDonut);

    const matchaDonut = document.createElement('div');
    matchaDonut.classList.add('matchaDonut', 'menuImage');
    const matchaInfo = document.createElement('div');
    matchaInfo.classList.add('menuInfo');
    const matchaHeader = document.createElement('div');
    matchaHeader.classList.add('menuHeader');
    matchaHeader.textContent = 'Matcha Madness';
    const matchaText = document.createElement('div');
    matchaText.classList.add('menuText');
    matchaText.textContent = "A green tea-flavored donut with a green tea glaze and topped with matcha powder. The perfect treat for matcha lovers.";
    matchaInfo.appendChild(matchaHeader);
    matchaInfo.appendChild(matchaText);
    matchaDonut.appendChild(matchaInfo);
    menuItems.push(matchaDonut);
    
    const mintDonut = document.createElement('div');
    mintDonut.classList.add('mintDonut', 'menuImage');
    const mintInfo = document.createElement('div');
    mintInfo.classList.add('menuInfo');
    const mintHeader = document.createElement('div');
    mintHeader.classList.add('menuHeader');
    mintHeader.textContent = 'Andes Adventure';
    const mintText = document.createElement('div');
    mintText.classList.add('menuText');
    mintText.textContent = "A mint chocolate chip donut with a rich chocolate glaze and topped with chopped Andes mints. Cool mint and chocolate collide for a refreshing treat.";
    mintInfo.appendChild(mintHeader);
    mintInfo.appendChild(mintText);
    mintDonut.appendChild(mintInfo);
    menuItems.push(mintDonut);

    const nutellaDonut = document.createElement('div');
    nutellaDonut.classList.add('nutellaDonut', 'menuImage');
    const nutellaInfo = document.createElement('div');
    nutellaInfo.classList.add('menuInfo');
    const nutellaHeader = document.createElement('div');
    nutellaHeader.classList.add('menuHeader');
    nutellaHeader.textContent = 'Chocolate Banana Bonanza';
    const nutellaText = document.createElement('div');
    nutellaText.classList.add('menuText');
    nutellaText.textContent = "A fluffy donut topped with Nutella and fresh banana slices. Creamy Nutella and fruity banana slices create the perfect pairing for a scrumptious treat.";
    nutellaInfo.appendChild(nutellaHeader);
    nutellaInfo.appendChild(nutellaText);
    nutellaDonut.appendChild(nutellaInfo);
    menuItems.push(nutellaDonut);

    const cerealDonut = document.createElement('div');
    cerealDonut.classList.add('cerealDonut', 'menuImage');
    const cerealInfo = document.createElement('div');
    cerealInfo.classList.add('menuInfo');
    const cerealHeader = document.createElement('div');
    cerealHeader.classList.add('menuHeader');
    cerealHeader.textContent = 'Cinnamon Crunch Craze';
    const cerealText = document.createElement('div');
    cerealText.classList.add('menuText');
    cerealText.textContent = "A creamy, crunchy explosion of flavor awaits with our Cinnamon Crunch Crazy donut. Topped with milky icing and Cinnamon Toast Crunch cereal, satisfy your cravings now!";
    cerealInfo.appendChild(cerealHeader);
    cerealInfo.appendChild(cerealText);
    cerealDonut.appendChild(cerealInfo);
    menuItems.push(cerealDonut);

    const caramelDonut = document.createElement('div');
    caramelDonut.classList.add('caramelDonut', 'menuImage');
    const caramelInfo = document.createElement('div');
    caramelInfo.classList.add('menuInfo');
    const caramelHeader = document.createElement('div');
    caramelHeader.classList.add('menuHeader');
    caramelHeader.textContent = 'Caramel Dream';
    const caramelText = document.createElement('div');
    caramelText.classList.add('menuText');
    caramelText.textContent = "A perfect balance of sweet and salty awaits with our Caramel Dream donut. Topped with a rich caramel glaze and a sprinkle of sea salt, experience caramel heaven in every bite!";
    caramelInfo.appendChild(caramelHeader);
    caramelInfo.appendChild(caramelText);
    caramelDonut.appendChild(caramelInfo);
    menuItems.push(caramelDonut);

    if (window.screen.width > 1024) {
        const pageTop = document.createElement('div');
        pageTop.classList.add('tab-content-top');
        pageContainer.appendChild(pageTop);

        const pageBottom = document.createElement('div');
        pageBottom.classList.add('tab-content-bottom');
        pageContainer.appendChild(pageBottom);

        for (let i = 0; i < menuItems.length; i++) {
            if (i < 4) {
                pageTop.appendChild(menuItems[i]);
            } else {
                pageBottom.appendChild(menuItems[i]);
            }
        }
    } else {
        for (let item of menuItems) {
            pageContainer.appendChild(item);
        }
    }
}

export {createMenuPage};