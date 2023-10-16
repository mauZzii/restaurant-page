import _ from 'lodash';
import './styles';

function consoleAlert() {
    console.log('I ran');
};

function addGridContainer() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('main-grid-container');

    body.appendChild(container);

    return container;
};

function addHeader() {
    const gridContainer = document.querySelector('.main-grid-container');
    const header = document.createElement('header');
    const navbar = createNavbar();
    header.classList.add('header');

    gridContainer.appendChild(header);
    header.appendChild(navbar);

    return header;
}

function createNavbar() {
    const navContainer = document.createElement('nav');
    const navList = document.createElement('ul');
    const navItems = ['HOME', 'MENU', 'CONTACT'];

    for (let i = 0; i < 3; i += 1) {
        const li = document.createElement('li');
        li.textContent = navItems[i];
        navList.appendChild(li);
    };

    navContainer.classList.add('navbar');
    
    navContainer.appendChild(navList);
}