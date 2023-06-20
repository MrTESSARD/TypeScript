"use strict";
// 35 Héritage et Polymorphisme
class Mother {
    name;
    hair;
    eyes;
    constructor(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    speak() {
        console.log(`je suis ${this.name} et j'ai des cheveux ${this.hair}`);
    }
}
const person1 = new Mother("Rhea", "Marron", 2); //Type Mother
console.log(person1);
person1.speak();
class Children extends Mother {
    //methodes
    speak() {
        console.log(`I am ${this.name} and i have ${this.hair} hair`);
    }
    speakMotherLang() {
        super.speak(); //fait référence à la classe parente ou à la superclasse
    }
}
const person2 = new Children("Déméter", "Brown", 2); //Type Children
console.log(person2);
person2.speak();
person2.speakMotherLang();
//Polymorphisme
class Random {
    name;
    hair;
    eyes;
    constructor(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
}
const person3 = new Mother("Rhea", "Marron", 2); //Type Mother
const person4 = new Children("Déméter", "Brown", 2); //Type Mother!!
const person5 = new Random("Tom", "Brown", 5); //Type Mother!!
