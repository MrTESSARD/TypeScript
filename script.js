// 41. Classes Abstraites - Abstract
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.walk = function () {
        console.log('je suis '); // Méthode "walk" de la classe abstraite "Person" qui affiche un message dans la console
    };
    return Person;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.updateName = function (name) {
        this.name = name;
        console.log(this.name); // Assignation du paramètre "name" à la propriété "name" de la classe et affichage de la nouvelle valeur dans la console
    };
    return Child;
}(Person));
var mario = new Child("mario"); // Instanciation d'un objet "mario" de la classe "Child" avec le paramètre "name" spécifié comme "mario"
console.log(mario.name); // Affiche la valeur de la propriété "name" de l'objet "mario"
mario.updateName("Sony"); // Appel de la méthode "updateName" de l'objet "mario" avec le paramètre "name" spécifié comme "Sony"
mario.walk(); // Appel de la méthode "walk" de l'objet "mario"
var person1 = new Person('Toto');
person1.walk();
