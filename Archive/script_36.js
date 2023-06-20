"use strict";
// 36 Classes (Private, Public, Protected, Readonly)
// public : La variable est accessible de l'extérieur de la classe.
// private : La variable est accessible uniquement à l'intérieur de la classe.
// protected : La variable est accessible à l'intérieur de la classe et à ses classes dérivées (sous-classes).
class Mother {
    name;
    hair;
    eyes;
    // private name:string;
    // private hair:string;
    // private eyes:number;
    constructor(name, hair, eyes) {
        this.name = name;
        this.hair = hair;
        this.eyes = eyes;
    }
    speak() {
        console.log(`je suis ${this.name} et j'ai des cheveux ${this.hair}`);
    }
    //getter
    getName() {
        return this.name;
    }
    //getter
    getHair() {
        return this.hair;
    }
    //setter
    setHairColor(newColor) {
        this.hair = newColor;
    }
}
class Children extends Mother {
    //getter
    getdata() {
        // public : La variable est accessible de l'extérieur de la classe.
        // private : La variable est accessible uniquement à l'intérieur de la classe.
        // protected : La variable est accessible à l'intérieur de la classe et à ses classes dérivées (sous-classes).
        return this.eyes;
    }
    speakMotherLang() {
        super.speak(); //fait référence à la classe parente ou à la superclasse
    }
}
const person1 = new Mother("Rhea", "Marron", 2); //Type Mother
// console.log(person1.getName());
// console.log(person1.setHairColor("Red"));
// console.log(person1);
// console.log(person1.getHair());
const person2 = new Children("Déméter", "Brown", 2); //Type Children
console.log(person2.getdata());
// console.log(person2);
// person2.speak();
// person2.speakMotherLang();
// //Polymorphisme
// class Random {
//   name:string;
//   hair:string;
//   eyes:number;
//   constructor(n:string, h:string, e:number){
//     this.name=n;
//     this.hair=h;
//     this.eyes=e;
//   }
// }
// const person3=new Mother("Rhea", "Marron", 2)//Type Mother
// const person4:Mother = new Children("Déméter", "Brown", 2)//Type Mother!!
// const person5:Mother = new Random("Tom", "Brown", 5)//Type Mother!!
