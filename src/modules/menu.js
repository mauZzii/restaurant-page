function createMenuTab () {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    return menuContainer;
}

function createMenuItem(item, description, cost) {
    const itemContainer = document.createElement('div');
    const itemName = document.createElement('h3');
    const itemDesc = document.createElement('p');
    const itemCost = document.createElement('p');

    itemContainer.classList.add('item-container');
    itemName.classList.add('item-name');
    itemDesc.classList.add('item-desc');
    itemCost.classList.add('item-price');

    itemName.textContent = item;
    itemDesc.textContent = description;
    itemCost.textContent = cost;

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDesc);
    itemContainer.appendChild(itemCost);

    return itemContainer;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    
    const menuContainer = createMenuTab();

    const menuItems = [
        {item: 'Espresso', description: 'A classic coffee shot. Perfect way to start the day with a quick caffeine boost.', cost: '$2.50'},
        {item: 'Cappucino', description: 'A well-balanced coffee consisting of a shot of espresso, steamed milk, and a layer of frothy milk.', cost: '$4.00'},
        {item: 'Latte', description: 'A mild and creamy coffee made with a shot of espresso and a larger amount of steamed milk.', cost: '$4.50'},
        {item: 'Mocha', description: 'A delightful blend of espresso, steamed milk, and chocolate, topped with whipped cream.', cost: '$4.75'},
        {item: 'Cold Brew', description: 'Coffee that is brewed with cold water for an extended period, resulting in a smooth and less acidic flavor.', cost: '$3.75'},
        {item: 'Americano', description: 'A simple coffee made by diluting a shot of espresso with hot water.', cost: '$3.00'},
        {item: 'Macchiato', description: 'An espresso "stained" or "marked" with a small amount of frothy milk.', cost: '$3.25'},
        {item: 'Chai Latte', description: 'A spiced tea latte made with black tea, steamed milk, and a blend of aromatic spices like cinnamon.', cost: '$4.50'},
        {item: 'Iced Coffee', description: 'Regular brewed coffee that is cooled and served over ice, sweeteners, milk, or syrups are added often.', cost: '$3.50'},
        {item: 'French Press Coffee', description: 'Coffee brewed using a French press, which results in a full-bodied and rich coffee.', cost: '$4.00'},
        {item: 'Flavored Syrups', description: 'Range of flavored syrups such as Hazelnut, Chocolate, Vanilla, and more', cost: '$0.25'},
    ];

    menuItems.forEach((menuItem) => {
        const itemContainer = createMenuItem(menuItem.item, menuItem.description, menuItem.cost);
        menuContainer.appendChild(itemContainer);
    });

    main.appendChild(menuContainer);
}

export default loadMenu;