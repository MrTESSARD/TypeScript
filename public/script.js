"use strict";
// 77. Decorator Composition - Evaluation
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// function Component ( id:string) {
//   return function (target:any) {
//     // console.log(constructor);
//     // console.log(template);
//     const el = document.getElementById(id)! // ! ça indique q'il existe vraiment 
//     const h1 = document.createElement('h1')
//    const objCar = new target("FORD", "ROUGE") //Car
//   //  console.log(objCar);
//   h1.innerHTML=objCar.carDetails()
//     el.append(h1)
//   }
// }
// @Component( "title")
// class Car{
//   constructor(private n:string, private c :string){}
//   carDetails(){
//     return `Marque: ${this.n} | Couleur: ${this.c}`
//   }
// }
// // const ford = new Car("FORD", "ROUGE")
// // console.log(ford.carDetails());
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
class ExampleClass {
    method() { }
}
__decorate([
    first(),
    second()
], ExampleClass.prototype, "method", null);
