"use strict";
// 82. Decorator Extends Constructor Function
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function changeArtist(constructor) {
    // Cette fonction de décorateur prend un constructeur comme argument et retourne une classe modifiée.
    return class extends constructor {
        newProperty = "Toto";
    };
}
let Person = 
// Le décorateur 'changeArtist' est appliqué à la classe 'Person'.
class Person {
    age;
    eyes;
    artist;
    constructor(age, eyes, artist) {
        this.age = age;
        this.eyes = eyes;
        this.artist = artist;
    }
    loginMsg(minAge, textOne, textTwo) {
        console.log(this.age);
        if (this.age > 17) {
            return textOne;
        }
        return textTwo;
    }
};
Person = __decorate([
    changeArtist
    // Le décorateur 'changeArtist' est appliqué à la classe 'Person'.
], Person);
const person = new Person(30, "blue", "Picasso");
console.log(person);
