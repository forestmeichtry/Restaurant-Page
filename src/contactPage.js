import { createParallaxWrap } from "./helperMethods";

function createContactPage() {
    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageThree');
    content.appendChild(pageContainer);

    let parallaxWrap = createParallaxWrap();
    pageContainer.appendChild(parallaxWrap);

    const outerWrap = document.createElement('div');
    const textWrap = document.createElement('div');
    outerWrap.classList.add('outerWrap');
    textWrap.classList.add('textWrap');
    outerWrap.appendChild(textWrap);
    pageContainer.appendChild(outerWrap);

    const contactHeader = document.createElement('div');
    contactHeader.classList.add('contactHeader');
    contactHeader.textContent = 'Contact Us';
    textWrap.appendChild(contactHeader);

    const contactText = document.createElement('div');
    contactText.classList.add('contactText');
    contactText.textContent = "Thank you for your interest in our donut shop! We'd love to hear from you. Please feel free to contact us using the information below, we'll get back to you as soon as possible.";
    textWrap.appendChild(contactText);

    const contactNumber = document.createElement('div');
    contactNumber.classList.add('contactText', 'contactNumber');
    contactNumber.textContent = "Phone: (123) 456-7890";
    textWrap.appendChild(contactNumber);

    const contactEmail = document.createElement('div');
    contactEmail.classList.add('contactText');
    contactEmail.textContent = "Email: info@glazedandconfused.com";
    textWrap.appendChild(contactEmail);

    const addressHeader = document.createElement('div');
    addressHeader.classList.add('contactHeader');
    addressHeader.textContent = "Address:";
    textWrap.appendChild(addressHeader);

    const addressList = document.createElement('ul');
    addressList.classList.add('contactAddressList');
    textWrap.appendChild(addressList);
    const lineOne = document.createElement('li');
    lineOne.textContent = "Glazed and Confused Donut Shop";
    addressList.appendChild(lineOne);
    const lineTwo = document.createElement('li');
    lineTwo.textContent = "123 Main Street";
    addressList.appendChild(lineTwo);
    const lineThree = document.createElement('li');
    lineThree.textContent = "Anytown, USA 12345";
    addressList.appendChild(lineThree);
    
}

export {createContactPage};