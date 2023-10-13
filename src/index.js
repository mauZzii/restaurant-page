import _ from 'lodash';
import './style.css';

function consoleAlert() {
    console.log('I ran');
};

function addContainer() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');

    body.appendChild(container);

    return container;
};

function addHeading() {
    addContainer();
    const container = document.querySelector('.container');
    const element = document.createElement('h1');
    element.textContent = _.join(['This', 'is', 'a', 'lodash', 'heading'], ' ');

    container.appendChild(element);

    return element;
};

addHeading();

consoleAlert();