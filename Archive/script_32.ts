//32. Type Assertions
const form1 = document.querySelector('#signupForm') as HTMLFormElement
console.log(form1.childNodes);

const form2 = document.querySelector('#signupForm') as HTMLFormElement;

const firstName2 = document.getElementById('firstName') as HTMLInputElement;

const age4 = document.getElementById("age") as HTMLInputElement;

const gender = document.getElementById("gender") as HTMLSelectElement;

// Validation form

form2.addEventListener('submit', (e: Event) => {
e.preventDefault()

console.log(firstName2.value, age4.value, gender.value) 
})