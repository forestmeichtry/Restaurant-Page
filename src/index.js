import './style.css';
import { createHomePage, removeHomePage } from './homePage.js';
import { createMenuPage } from './menuPage';
import { createContactPage } from './contactPage';
import { shiftPageIn, shiftPageOut, removePage } from './helperMethods';

const content = document.querySelector('#content');

const navContainer = document.createElement('div');
navContainer.classList.add('navContainer');
content.appendChild(navContainer);

const navBar = document.createElement('div');
navContainer.appendChild(navBar);
navBar.classList.add('navbar');

const navBorder = document.createElement('div');
navBorder.classList.add('navBorder');
navContainer.appendChild(navBorder);

const navButtonOne = document.createElement('div');
navButtonOne.classList.add('nav-button');
navBar.appendChild(navButtonOne);

const navButtonTwo = document.createElement('div');
navButtonTwo.classList.add('nav-button');
navBar.appendChild(navButtonTwo);

const navButtonThree = document.createElement('div');
navButtonThree.classList.add('nav-button');
navBar.appendChild(navButtonThree);

createHomePage();
createMenuPage();
createContactPage();

navButtonOne.addEventListener('click', () => {
    shiftPageIn('.pageOne');
    shiftPageIn('.pageTwo');
});

navButtonTwo.addEventListener('click', () => {
    shiftPageIn('.pageTwo');
    shiftPageOut('.pageOne');
});

navButtonThree.addEventListener('click', () => {
    shiftPageOut('.pageOne');
    setTimeout(() => {
        shiftPageOut('.pageTwo');
    }, 200);
});