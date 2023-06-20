"use strict";
// 39. Interfaces avec les classes
class Person {
    nom;
    age;
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
    talk() {
        return `Je m'appelle ${this.nom}`;
    }
}
class Alien {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    telepathy() {
        return `Je m'appelle ${this.name}. j'ai ${this.age}`;
    }
}
// let homer = new Person("Homer", 43)
// let roger = new Alien("Roger", 1500)
// console.log(homer.talk());
// console.log(roger.telepathy());
// let humans: HumanSound
// humans = homer//ok
// // humans = roger//NOK Property 'talk' is missing in type 'Alien' but required in type 'HumanSound'
// let humanMembers: HumanSound[];
// humanMembers=[]
// humanMembers.push(homer)//OK
// humanMembers.push(homer)//OK
// console.log(humanMembers);
const form = document.getElementById('signupForm');
const firstName = document.getElementById('firstName');
const age = document.getElementById('age');
const species = document.getElementById('species');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let humanUser;
    let alienUser;
    if (species.value === 'Human') {
        humanUser = new Person(firstName.value, +age.value);
        console.log(humanUser, humanUser.talk());
    }
    else {
        alienUser = new Alien(firstName.value, +age.value);
        console.log(alienUser, alienUser.telepathy());
    }
});
