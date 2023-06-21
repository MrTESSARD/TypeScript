"use strict";
var App;
(function (App) {
    class Person {
        name;
        age;
        constructor(n, a) {
            this.name = n;
            this.age = a;
        }
    }
    App.Person = Person;
})(App || (App = {}));
// 61. Modules Namespaces
/// <reference path="PersonInterface.ts"/>
var App;
(function (App) {
    const person = new App.Person("Homer", 25);
    console.log(person);
})(App || (App = {}));
