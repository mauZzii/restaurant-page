function createMenuTab () {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    menuContainer.textContent = 'This is the menu page';

    return menuContainer;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenuTab());
}

export default loadMenu;