"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 80. Decorator sur Paramètres
function methodlog(target, name, descriptor) {
    console.log("je suis dans le decorator de la méthode");
}
function logparam(target, name, position) {
    console.log(target); //proto
    console.log(name); //loginMsg
    console.log(position); //0
    console.log("je suis dans le decorator du paramètre");
}
class Person {
    age;
    eyes;
    hair;
    constructor(age, eyes, hair) {
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
    }
    loginMsg(minAge, textOne, textTwo) {
        console.log(this.age);
        if (this.age > 17) {
            return textOne;
        }
        return textTwo;
    }
}
__decorate([
    methodlog,
    __param(0, logparam)
], Person.prototype, "loginMsg", null);
//sortie
//je suis dans le decorator du paramètre
//script.js:13 je suis dans le decorator de la méthode
const person = new Person(30, "blue", "balck");
// console.log(
//   person.loginMsg(18, "Inscription autorisée", "Inscription refusée")
// );
// console.log(
//   person.loginMsg(18, "Inscription autorisée", "Inscription refusée")
// );
