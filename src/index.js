import './style.css';
import { createHomePage, removeHomePage } from './homePage.js';
import { createMenuPage } from './menuPage';
import { createContactPage } from './contactPage';
import { shiftPageIn, shiftPageOut, parallaxEffect, addMobileMenuEffect } from './helperMethods';

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

const homeButton = document.createElement('div');
homeButton.textContent = 'Home';
homeButton.classList.add('nav-button');
navBar.appendChild(homeButton);

const menuButton = document.createElement('div');
menuButton.textContent = 'Menu';
menuButton.classList.add('nav-button');
navBar.appendChild(menuButton);

const contactButton = document.createElement('div');
contactButton.textContent = 'Contact';
contactButton.classList.add('nav-button');
navBar.appendChild(contactButton);

createHomePage();
createMenuPage();
createContactPage();

if (window.screen.width > 1024) {
    document.addEventListener("mousemove", parallaxEffect);
} else {
    addMobileMenuEffect();
}

homeButton.addEventListener('click', () => {
    shiftPageIn('.pageTwo');
    setTimeout(() => {
        shiftPageIn('.pageOne');
    }, 200);
});

menuButton.addEventListener('click', () => {
    shiftPageIn('.pageTwo');
    shiftPageOut('.pageOne');
});

contactButton.addEventListener('click', () => {
    shiftPageOut('.pageOne');
    setTimeout(() => {
        shiftPageOut('.pageTwo');
    }, 200);
});