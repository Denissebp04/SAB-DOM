import { createRandomFact, createfunFacts } from './Modules/quoteGen.js';
import { validForm } from './Modules/Form.js';
import { newWindow } from './Modules/tripAdWindow.js';
let funFacts = [
    `Brazil was a colony of Portugal from the 16th century until its independence in 1822.`,
    `Brazil's population exceeds 210 million, making it the sixth-most populous country globally.`,
    `Brazil's Recife city is known as the Brazilian Venice due to its many bridges and canals.`,
    `Brazil's official national sport is not soccer but footvolley, a blend of football and volleyball.`,
    `Brazil's Santa Catarina state has some of the best surfing beaches in the world.`,
    `Over 90% of Brazil's residents can dance the Samba.`,
    `Brazil's São Paulo hosts the largest gay pride parade in the world.`,
    `Brazil's flag features 27 stars, representing the 26 states and the federal district.`
];

window.onload = function(event) {
    // Display a random fact
    createRandomFact();
    createfunFacts();

    // Modify the "todo" element
    let diversity = document.getElementById('todo');
    if (diversity && diversity.children.length > 4) {
        diversity.removeChild(diversity.children[4]);
    }

    // Add a new list item to "Top-4"
    let li = document.createElement('li');
    li.textContent = 'The Diversity';
    document.getElementById('Top-4').appendChild(li);

    // Populate museums list
    const museums = document.getElementById('museums');
    const docFrag = document.createDocumentFragment();

    let museum1 = document.createElement('li');
    let museum2 = document.createElement('li');
    let museum3 = document.createElement('li');
    museum1.innerText = 'Museum of Art of Sao Paulo (MASP)';
    museum2.innerText = 'Pinacoteca do Estado de Sao Paulo';
    museum3.innerText = 'Art Museum of Belem (MABE)';

    docFrag.appendChild(museum2); // Adding museum2 first
    docFrag.appendChild(museum3); // Then adding museum3
    docFrag.appendChild(museum1); // Finally adding museum1

    museums.prepend(docFrag);

    // Add mouseover and mouseout events for "brazil2025"
    const fun = document.getElementById("brazil2025");
    if (fun) {
        fun.addEventListener('mouseover', () => {
            fun.classList.add("red");
            fun.textContent = "Click and Find Out More";
        });
        fun.addEventListener('mouseout', () => {
            fun.classList.remove('red');
            fun.textContent = "Brazil 2025!";
        });
    }

    // Add mouseover and mouseout events for "Top-4"
    const leftside = document.getElementById("Top-4");
    if (leftside) {
        leftside.addEventListener('mouseover', () => {
            leftside.classList.add("green");
        });
        leftside.addEventListener('mouseout', () => {
            leftside.classList.remove('green');
        });
    }

    // Add mouseover and mouseout events for "todo"
    const rightside = document.getElementById("todo");
    if (rightside) {
        rightside.addEventListener('mouseover', () => {
            rightside.classList.add("green");
        });
        rightside.addEventListener('mouseout', () => {
            rightside.classList.remove('green');
        });
    }

    // Add mouseover and mouseout events for "museums"
    const rightbelow = document.getElementById("museums");
    if (rightbelow) {
        rightbelow.addEventListener('mouseover', () => {
            rightbelow.classList.add("green");
        });
        rightbelow.addEventListener('mouseout', () => {
            rightbelow.classList.remove('green');
        });
    }

    // Set up the form button to open the form
    const openFormButton = document.getElementById('fuimonos');
    if (openFormButton) {
        openFormButton.addEventListener('click', validForm);
    }

    // TripAdvisor
    window.onload = function() {
        const openTripAdvisorButton = document.getElementById('brazil2025');
        if (openTripAdvisorButton) {
            openTripAdvisorButton.addEventListener('click', newWindow);
        }
    };
};