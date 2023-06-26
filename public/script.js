"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 81. Decorator - Return Constructor Function
//Alteration méthodes 
function changeArtist(artist, id) {
    // Ce décorateur de classe reçoit un argument 'artist' de type string.
    return function (constructor) {
        // Cette fonction retourne une classe modifiée.
        return class extends constructor {
            constructor(...args) {
                super();
                const el = document.getElementById(id);
                const h1 = document.createElement("h1");
                h1.innerText = artist;
                el.append(h1);
                this.age = 20;
            }
        };
    };
}
function methodlog(target, name, descriptor) {
    // Cette fonction est vide et n'a pas de logique à l'intérieur.
}
let Person = 
// Ce décorateur de classe 'changeArtist' est appliqué à la classe 'Person' avec l'argument 'Jon Singer Sargent'.
class Person {
    age;
    eyes;
    artist;
    constructor(age, eyes, artist) {
        this.age = age;
        this.eyes = eyes;
        this.artist = artist;
    }
    // Cette classe 'Person' possède un constructeur qui initialise les propriétés 'age', 'eyes', et 'artist'.
    loginMsg(minAge, textOne, textTwo) {
        // Cette méthode 'loginMsg' prend trois arguments et retourne un message en fonction de la valeur de 'age'.
        console.log(this.age);
        if (this.age > 17) {
            return textOne;
        }
        return textTwo;
    }
};
Person = __decorate([
    changeArtist('Jon Singer Sargent', "title")
    // Ce décorateur de classe 'changeArtist' est appliqué à la classe 'Person' avec l'argument 'Jon Singer Sargent'.
], Person);
const person = new Person(30, "blue", "Picasso");
// Une instance de la classe 'Person' est créée avec les valeurs 30, "blue", et "Picasso".
console.log(`Artist ${person.artist}`); //Artist Jon Singer Sargent
// Affiche le message "Artist Picasso", qui utilise la propriété 'artist' de l'instance 'person'.
console.log(person.loginMsg(18, "Inscription autorisée", "Inscription refusée") //Hello
);
// Appelle la méthode 'loginMsg' de l'instance 'person' avec les arguments spécifiés et affiche le résultat en fonction de la valeur de 'age'.
