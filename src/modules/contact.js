function createContactTab () {
    const contactContainer = document.createElement('div');
    const contactHeading = document.createElement('h3');
    const contactPhone = document.createElement('p');
    const contactAddress = document.createElement('p');
    const contactCity = document.createElement('p');
    const contactDays = document.createElement('p');
    const contactHours = document.createElement('p');
    contactContainer.setAttribute('id', 'contact-container');

    const img = document.createElement('img');
    img.classList.add('contact-img');
    img.src = './images/cafe-outside.png';
    img.alt = 'picture of cafe from outside';

    contactHeading.textContent = 'Where to Find Us';
    contactPhone.textContent = '620-506-7405';
    contactAddress.textContent = '123 Example Street';
    contactCity.textContent = 'Arkansas City, KS, 67005';
    contactDays.textContent = 'Monday - Sunday';
    contactHours.textContent = '5am - 2pm'

    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactAddress);
    contactContainer.appendChild(contactCity);
    contactContainer.appendChild(img);
    contactContainer.appendChild(contactDays);
    contactContainer.appendChild(contactHours);
    contactContainer.appendChild(contactPhone);

    return contactContainer;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContactTab());
}

export default loadContact;