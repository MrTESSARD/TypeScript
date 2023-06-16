// 41. Classes Abstraites - Abstract

abstract class Person {
  constructor(public name: string) {    // Constructeur de la classe abstraite "Person" qui prend un paramètre "name" de type string et le rend accessible en tant que propriété publique (public)
  }

  walk() {
    console.log('je suis ');    // Méthode "walk" de la classe abstraite "Person" qui affiche un message dans la console
  }

  abstract updateName(name: string): void;  // Méthode abstraite "updateName" qui prend un paramètre "name" de type string et ne renvoie aucune valeur (void)
}

abstract class Car {
  abstract updateName(name: string): void;  // Méthode abstraite "updateName" qui prend un paramètre "name" de type string et ne renvoie aucune valeur (void)
}

class Child extends Person {
  updateName(name: string) {    // Implémentation de la méthode abstraite "updateName" de la classe "Person" dans la classe dérivée "Child"
    this.name = name;
    console.log(this.name);    // Assignation du paramètre "name" à la propriété "name" de la classe et affichage de la nouvelle valeur dans la console
  }
}

let mario = new Child("mario");// Instanciation d'un objet "mario" de la classe "Child" avec le paramètre "name" spécifié comme "mario"
console.log(mario.name);// Affiche la valeur de la propriété "name" de l'objet "mario"
mario.updateName("Sony");// Appel de la méthode "updateName" de l'objet "mario" avec le paramètre "name" spécifié comme "Sony"
mario.walk();// Appel de la méthode "walk" de l'objet "mario"


const person1 = new Person('Toto')
person1.walk()
