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



const fun = document.getElementById("brazil2025");
fun.addEventListener('mouseover', window.onload = () =>{
    fun.classList.add("red")
    fun.textContent = "Click and Find Out More"
})
fun.addEventListener('mouseout', window.onload = () =>{
    fun.classList.remove('red')
    fun.textContent = "Brazil 2025!"
})

const leftside = document.getElementById("Top-4");
leftside.addEventListener('mouseover', window.onload = () =>{
    leftside.classList.add("green")
})
leftside.addEventListener('mouseout', window.onload = () =>{
    leftside.classList.remove('green')
})

const rightside = document.getElementById("todo");
rightside.addEventListener('mouseover', window.onload = () =>{
    rightside.classList.add("green")
})
rightside.addEventListener('mouseout', window.onload = () =>{
    rightside.classList.remove('green')
})

const rightbelow = document.getElementById("museums");
rightbelow.addEventListener('mouseover', window.onload = () =>{
    rightbelow.classList.add("green")
})
rightbelow.addEventListener('mouseout', window.onload = () =>{
    rightbelow.classList.remove('green')
})


let myWindow;
function newWindow (){
    myWindow = window.open(
        "https://www.tripadvisor.com/Tourism-g294280-Brazil-Vacations.html",
        "Brazil",
        "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
    );
    myWindow.focus();
}

document.getElementById('brazil2025').addEventListener("click", newWindow);


let form;
function validform(){
    form = window.open(
        "form.html",
        "Nos fuimos ;)",
        "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
    );
    form.focus()
}

document.getElementById('fuimonos').addEventListener("click", validform);

}
