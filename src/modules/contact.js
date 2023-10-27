function createContactTab () {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contact-container');

    contactContainer.textContent = 'This is the contact page';

    return contactContainer;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContactTab());
}

export default loadContact;