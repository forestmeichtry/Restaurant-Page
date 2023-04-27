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

    const outerWrapTop = document.createElement('div');
    const textContentTop = document.createElement('div');
    outerWrapTop.classList.add('outerWrap');
    textContentTop.classList.add('textWrap');
    textContentTop.textContent = "Welcome to Glazed and Confused, where we create edible works of art using only the finest ingredients. Come in and let us take you on a journey of sweet and savory flavors.";
    outerWrapTop.appendChild(textContentTop);
    pageTop.appendChild(outerWrapTop);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    pageTop.appendChild(logo);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);

    const parallaxWrapBottom = createParallaxWrap();
    pageBottom.appendChild(parallaxWrapBottom);

    const textContentBottom = document.createElement('div');
    textContentBottom.classList.add('textWrap');
    const hoursList = document.createElement('ul')
    hoursList.classList.add('hoursList');
    const listHeader = document.createElement('div');
    listHeader.classList.add('listHeader');
    listHeader.textContent = 'Hours';
    const weekdayListEntry = document.createElement('li');
    weekdayListEntry.textContent = 'Mon - Fri : 9am - 4pm';
    hoursList.appendChild(weekdayListEntry);
    const saturdayListEntry = document.createElement('li');
    saturdayListEntry.textContent = 'Sat: 10am - 7pm';
    hoursList.appendChild(saturdayListEntry);
    const sundayListEntry = document.createElement('li');
    sundayListEntry.textContent = 'Sun: Closed';
    hoursList.appendChild(sundayListEntry);

    textContentBottom.appendChild(listHeader);
    textContentBottom.appendChild(hoursList);
    pageBottom.appendChild(textContentBottom);
}

export {createHomePage};