"use strict";
// 83. Exercice 1: Méthode decorator pour bind this
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function bindF(target, name, descriptor) {
    const orgMethod = descriptor.value;
    let newDescriptor;
    newDescriptor = {
        get() {
            return orgMethod.bind(this);
        }
    };
    return newDescriptor;
}
class Person {
    userName;
    constructor(name) {
        this.userName = name;
    }
    getName() {
        console.log(this.userName);
    }
    getThis() {
        console.log(this.userName);
        console.log(this);
    }
    getBind() {
        console.log(this.userName);
        console.log(this);
    }
}
__decorate([
    bindF
], Person.prototype, "getBind", null);
const btn = document.querySelector('button');
const steve = new Person('Steve Smith');
btn.addEventListener('click', () => steve.getName()); // Steve Smith
btn.addEventListener('click', steve.getName); // undefined
btn.addEventListener('click', steve.getThis); // <button>Click my</button> !! car il y a une confusion entre this de la classe et this de l'objet "button"
btn.addEventListener('click', () => steve.getThis()); //Person {userName: 'Steve Smith'} objet
btn.addEventListener('click', steve.getThis.bind(steve)); // Person {userName: 'Steve Smith'} objet
// Person {userName: 'Steve Smith'} objet !! il n'y a plus de confusion entre la classe et l'objet "button" car il y a le decorator avec get(){
//   return orgMethod.bind(this)
// }
btn.addEventListener('click', steve.getBind);
