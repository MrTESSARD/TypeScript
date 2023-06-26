"use strict";
// 79. Decorators Méthodes - Accessors
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function setterLog(
//   target: any, propertyKey: string, descriptor: PropertyDescriptor
//   ) {
//     // console.log(target); //prototype de la class
//     // console.log(propertyKey);//setColor
//     // console.log(descriptor);//propriétés du descriptor
// }
// function infosLog(
//   target: any, propertyKey: string, descriptor: PropertyDescriptor
//   ) {
//     console.log(target); //prototype de la class
//     console.log(propertyKey);//setColor
//     console.log(descriptor);//propriétés du descriptor
// }
// class Car {
//   brand:string
//   private color:string
//   constructor(b:string, c:string) {
//     this.brand=b
//     this.color=c
//   }
//   @setterLog
//   setColor(color:string){//private
//     this.color=color
//   }
//   @infosLog
//   infos(){//public
//     return`Marque : ${this.brand} | ${this.color}`
//   }
// }
// const opel=new Car("Opel","red")
// // console.log(opel);
// console.log(opel.infos());
// opel.infos=function () {
//   return "Hello"
// }
// console.log(opel.infos());
function readonly(value) {
    return function (target, propertyKey, descriptor) {
        // console.log(descriptor);
        descriptor.writable = value; //interdit la modification   getHairColor(){
    };
}
class Person {
    eyes;
    hair;
    constructor(eyes, hair) {
        this.eyes = eyes;
        this.hair = hair;
    }
    getHairColor() {
        return this.hair;
    }
}
__decorate([
    readonly(true)
], Person.prototype, "getHairColor", null);
const person = new Person("blue", "balck");
// person.eyes="brown"
// console.log(person.eyes);
console.log(person.getHairColor());
person.getHairColor = function () {
    return "Hello";
};
console.log(person.getHairColor()); //script.js:68 Uncaught TypeError: Cannot assign to read only property 'getHairColor' of object '#<Person>'
