"use strict";
// 76. Decorator Factories - Exemple Angular Component
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(id) {
    return function (target) {
        // console.log(constructor);
        // console.log(template);
        const el = document.getElementById(id); // ! ça indique q'il existe vraiment 
        const h1 = document.createElement('h1');
        const objCar = new target("FORD", "ROUGE"); //Car
        //  console.log(objCar);
        h1.innerHTML = objCar.carDetails();
        el.append(h1);
    };
}
let Car = class Car {
    n;
    c;
    constructor(n, c) {
        this.n = n;
        this.c = c;
    }
    carDetails() {
        return `Marque: ${this.n} | Couleur: ${this.c}`;
    }
};
Car = __decorate([
    Component("title")
], Car);
// const ford = new Car("FORD", "ROUGE")
// console.log(ford.carDetails());
