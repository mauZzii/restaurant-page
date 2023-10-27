import { createHeader, createNavbar, handleTabClick, createFooter } from './modules/pageElements.js';
import loadHome from './modules/home.js';
import loadMenu from './modules/menu.js';
import loadContact from './modules/contact';

import './styles/normalize.css'
import './styles/style.css'

function initializePage() {
    const mainGridContainer = document.createElement('div');
    mainGridContainer.classList.add('main-grid-container');

    const header = createHeader();

    const mainSection = document.createElement('main');
    mainSection.setAttribute('id', 'main');

    const footer = createFooter();
    
    mainGridContainer.appendChild(header);
    mainGridContainer.appendChild(mainSection);
    mainGridContainer.appendChild(footer);
    document.body.appendChild(mainGridContainer);

    loadHome();
}

initializePage();