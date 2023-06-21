"use strict";
// 61. Modules Namespaces
/// <reference path="PersonInterface.ts"/>
var App;
(function (App) {
    const person = new Person("Homer", 25);
    console.log(person);
})(App || (App = {}));
