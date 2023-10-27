function createHomeTab() {
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'home-container');

    const greetingSection = document.createElement('section');
    const sectionHeading = document.createElement('h2');
    const sectionParagraph = document.createElement('p');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');

    greetingSection.classList.add('restaurant-greeting');

    sectionHeading.textContent = 'Where Every Meal is a Taste of Home';
    sectionParagraph.textContent = "Come and experience the warmth of Two Rivers Cafe, where every meal is a reminder of home, where the flavors flow as steadily as the Two Rivers that grace our town. You're not just dining with us; you're sharing in a tradition of togetherness, one bite at a time.";

    imgContainer.classList.add('restaurant-picture');
    img.src = './images/cafe-coffee-counter.png';
    img.alt = 'cafe coffee counter'
    imgContainer.appendChild(img);

    greetingSection.appendChild(sectionHeading);
    greetingSection.appendChild(sectionParagraph);
    greetingSection.appendChild(imgContainer);

    homeContainer.appendChild(greetingSection);
    return homeContainer;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHomeTab());
}

export default loadHome;