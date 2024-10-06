let funFacts = [
    `Brazil was a colony of Portugal from the 16th century until its independence in 1822.`,
    `Brazil population exceeds 210 million, making it the sixth-most populous country globally.`,
    `Brazil Recife city is known as the Brazilian Venice due to its many bridges and canals.`,
    `Brazil official national sport is not soccer but footvolley, a blend of football and volleyball.`,
    `Brazil Santa Catarina state has some of the best surfing beaches in the world.`,
    `Over 90% of Brazil residents can dance the Samba.`,
    `Brazil São Paulo hosts the largest gay pride parade in the world.`,
    `Brazil flag features 27 stars, representing the 26 states and the federal district.`
];

window.onload = function(event) {

const randomFact = function() {
    document.querySelector('#random-funfact').textContent = `"${
        funFacts[Math.floor(Math.random()*funFacts.length)]
    }"`;
};
randomFact();


let diversity = document.getElementById('todo');
diversity.removeChild(diversity.children[4])



let li = document.createElement('li');
li.textContent = 'The Diversity'
document.getElementById('Top-4').appendChild(li);



const museums = document.getElementById('museums');
const docFrag = document.createDocumentFragment();

let musum1 = document.createElement('li')
let museum2 = document.createElement('li')
let museum3 = document.createElement('li')
musum1.innerText = 'Museum of Art of Sao Paulo (MASP)'
museum2.innerText = 'Pinacoteca do Estado de Sao Paulo'
museum3.innerText = 'Art Museum of Belem (MABE)'

docFrag.appendChild(musum1);
docFrag.prepend(museum2);
docFrag.prepend(museum3);

museums.prepend(docFrag)





}

