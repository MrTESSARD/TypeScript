"use strict";
// 41. Classes Abstraites - Abstract
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('je suis '); // Méthode "walk" de la classe abstraite "Person" qui affiche un message dans la console
    }
}
class Car {
}
class Child extends Person {
    updateName(name) {
        this.name = name;
        console.log(this.name); // Assignation du paramètre "name" à la propriété "name" de la classe et affichage de la nouvelle valeur dans la console
    }
}
let mario = new Child("mario"); // Instanciation d'un objet "mario" de la classe "Child" avec le paramètre "name" spécifié comme "mario"
console.log(mario.name); // Affiche la valeur de la propriété "name" de l'objet "mario"
mario.updateName("Sony"); // Appel de la méthode "updateName" de l'objet "mario" avec le paramètre "name" spécifié comme "Sony"
mario.walk(); // Appel de la méthode "walk" de l'objet "mario"
const person1 = new Person('Toto');
person1.walk();
