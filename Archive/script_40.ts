// 40. Propriétés et Méthodes en Static

class Person {
  static readonly age : number = 30
  constructor(private name:string) { //static ne peut pas etre declarer dans constructeur 
    
  }
  // private talk(){
  static talk(){
    console.log('je suis une personne '+ Person.age);//si le talc ne pas statique mais age si
    console.log('je suis une personne '+ this.age);//si talc est statique et age aussi
  }
}
const person1 = new Person('Toto')
// person1.talk()//ne peux pas acceder si static
// person1.talk()//ne peux pas acceder si private
Person.talk()//peux acceder si static mais directement par la classe
Person.talk()//ne peux acceder si private directement par la classe
console.log(Person.age);
Person.age=40;
console.log(Person.age);
Person.talk()
// new Person('Toto2').talk()

// Person.prototype.talk();//accecible uniquement si pas private 

// Person.prototype.talk();//accecible uniquement si pas private 


class Exemple {
  private static proprietePrivee: string = "Ceci est une propriété privée statique.";
  private proprieteInstance: string = "Ceci est une propriété privée d'instance.";

  static afficherProprietePriveeStatique(): void {
    console.log(Exemple.proprietePrivee);
  }

  afficherProprieteInstance(): void {
    console.log(this.proprieteInstance);
  }
}

Exemple.afficherProprietePriveeStatique(); // Affiche "Ceci est une propriété privée statique."

let instance = new Exemple();
instance.afficherProprieteInstance(); // Affiche "Ceci est une propriété privée d'instance."

console.log(Exemple.proprietePrivee); // Erreur : La propriété 'proprietePrivee' est privée et statique

// Dans cet exemple, nous utilisons à la fois la propriété statique et la propriété privée dans une classe.

// La classe "Exemple" contient une propriété statique privée appelée "proprietePrivee" et une propriété privée d'instance appelée "proprieteInstance".

// La méthode statique "afficherProprietePriveeStatique" peut accéder directement à la propriété statique privée "proprietePrivee" à l'intérieur de la classe.

// La méthode "afficherProprieteInstance" est une méthode d'instance et peut accéder à la propriété privée d'instance "proprieteInstance" en utilisant le mot-clé "this".

// Lorsque nous utilisons la classe "Exemple", nous pouvons appeler la méthode statique "afficherProprietePriveeStatique" directement à partir de la classe. Cela affiche la valeur de la propriété privée statique.

// Lorsque nous créons une instance de la classe "Exemple" et appelons la méthode "afficherProprieteInstance", cela affiche la valeur de la propriété privée d'instance.

// Cependant, si nous essayons d'accéder directement à la propriété statique privée à partir de l'extérieur de la classe en utilisant "Exemple.proprietePrivee", cela entraînera une erreur car la propriété est à la fois privée et statique.

// En résumé, les propriétés statiques peuvent être accédées directement à partir de la classe elle-même, tandis que les propriétés privées ne sont accessibles qu'à l'intérieur de la classe et ne peuvent pas être accédées directement à partir de l'extérieur de la classe.
