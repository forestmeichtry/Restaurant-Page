import { createParallaxWrap } from "./helperMethods";

function createHomePage() {
    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageOne');
    content.appendChild(pageContainer);

    const pageTop = document.createElement('div');
    pageTop.classList.add('tab-content-top');
    pageContainer.appendChild(pageTop);

    const parallaxWrapTop = createParallaxWrap();
    pageTop.appendChild(parallaxWrapTop);

    const outerWrap = document.createElement('div');
    const textContentTop = document.createElement('div');
    outerWrap.classList.add('outerWrap');
    textContentTop.classList.add('textWrap');
    textContentTop.textContent = "Welcome to Glazed and Confused, where we create edible works of art using only the finest ingredients. Come in and let us take you on a journey of sweet and savory flavors.";
    outerWrap.appendChild(textContentTop);
    pageTop.appendChild(outerWrap);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    pageTop.appendChild(logo);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);

    const parallaxWrapBottom = createParallaxWrap();
    pageBottom.appendChild(parallaxWrapBottom);
}

export {createHomePage};