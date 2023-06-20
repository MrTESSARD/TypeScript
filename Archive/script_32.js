"use strict";
//32. Type Assertions
const form1 = document.querySelector('#signupForm');
console.log(form1.childNodes);
const form2 = document.querySelector('#signupForm');
const firstName2 = document.getElementById('firstName');
const age4 = document.getElementById("age");
const gender = document.getElementById("gender");
// Validation form
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(firstName2.value, age4.value, gender.value);
});
