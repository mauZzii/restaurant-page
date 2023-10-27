import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact'

export function createHeader() {
    const header = document.createElement('header');
    const navbar = createNavbar();
    const headerName = document.createElement('h1');

    headerName.textContent = 'Two Rivers Cafe';
    headerName.classList.add('restaurant-name');
    header.classList.add('header');

    header.appendChild(navbar);
    header.appendChild(headerName);
    return header;

}

function createNavbar() {
    const navbar = document.createElement('nav');
    const ul = document.createElement('ul');
    const navbarLinks = ['home', 'menu', 'contact'];

    navbar.classList.add('navbar');

    navbarLinks.forEach((tabName) => {
        const li = document.createElement('li');
        li.textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);
        li.classList.add('nav-link');
        ul.appendChild(li);

        li.addEventListener('click', () => {
            handleTabClick(tabName);
        });
    });

    navbar.appendChild(ul);
    return navbar;
}

function handleTabClick(tabName) {
    const main = document.getElementById('main');

    main.textContent = '';

    if (tabName === 'home') {
        loadHome();
    } else if (tabName === 'menu') {
        loadMenu();
    } else if (tabName === 'contact') {
        loadContact();
    }
}

export function createFooter() {
    const footer = document.createElement('footer');
    const footerContainer = document.createElement('footer-container');
    const a = document.createElement('a');

    footer.classList.add('footer');
    footerContainer.classList.add('footer-container');
    a.classList.add('author')
    a.setAttribute('href', 'https://github.com/mauZzii');
    a.textContent = 'mauZzii';

    footerContainer.appendChild(a);
    footer.appendChild(footerContainer);

    return footer;
}