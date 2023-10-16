import './styles/style.css';

//test to make sure imported correctly
// function consoleAlert() {
//     console.log('I ran');
// };

function addGridContainer() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('main-grid-container');

    body.appendChild(container);

    return container;
};


//START: Create header
function addHeader() {
    const gridContainer = document.querySelector('.main-grid-container');
    const header = document.createElement('header');
    const navbar = createNavbar();
    const title = createHeaderTitle();
    header.classList.add('header');

    gridContainer.appendChild(header);
    header.appendChild(navbar);
    header.appendChild(title)

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

    return navContainer;
}

function createHeaderTitle() {
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Two Rivers Cafe'; //maybe have it change based on page name?

    return restaurantName;
}
//END: Create header

//START: Create main section
function createMainSection() {
    const mainSection = document.createElement('main');
    const mainContainer = document.createElement('div');
    const mainGridContainer = document.querySelector('.main-grid-container');

    mainSection.classList.add('main');
    mainContainer.classList.add('main-container');

    mainSection.appendChild(mainContainer);
    mainGridContainer.appendChild(mainSection);


    return mainSection;
}
//END: Create main section



//Build page
addGridContainer();
addHeader();
createMainSection();
// consoleAlert();