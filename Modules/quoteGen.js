// Declare funFacts at a higher scope so it's accessible in both functions
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

// Function to create or update funFacts (if needed)
export function createfunFacts() {
    // If you want to modify or add facts, do it here.
    // For now, it remains the same since it's already defined at the top.
}

// Function to create and display a random fact
export function createRandomFact() {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.querySelector('#random-funfact').textContent = `"${randomFact}"`;
}

