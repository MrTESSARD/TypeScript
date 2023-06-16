// 38. Interfaces
class Mother {
  name: string = "red"; // Déclaration et initialisation de la variable "name" de type string avec une valeur par défaut "red"
  eyes: number = 4; // Déclaration et initialisation de la variable "eyes" de type number avec une valeur par défaut 4

  constructor(readonly name: string, public eyes: number) {
    // Constructeur de la classe qui prend un paramètre "name" en lecture seule (readonly) et "eyes" en accès public (public)
    this.name = name; // Assignation de la valeur du paramètre "name" à la variable "name" de la classe
    this.eyes = eyes; // Assignation de la valeur du paramètre "eyes" à la variable "eyes" de la classe
  }

  speak(): void {
    // Méthode "speak" de la classe
    console.log("Je me présente " + this.name); // Affiche le message avec le nom de la personne
  }
}

let henri = new Mother("Henri", 2); // Instanciation d'un objet "henri" de la classe "Mother" avec les valeurs spécifiées
console.log(henri); // Affiche l'objet "henri"
henri.speak(); // Appel de la méthode "speak" de l'objet "henri"

interface Person {
  name: string; // Propriété obligatoire de type string
  // eyes?: number; // Propriété facultative de type number
  readonly eyes: number; // Propriété facultative de type number
  speak(a: string): string; // Méthode "speak" qui prend un paramètre "a" de type string et renvoie une valeur de type string
}

let helene: Person; // Déclaration d'une variable "helene" de type "Person"
helene = {
  name: "Helene", // Assignation de la valeur "Helene" à la propriété "name"
  eyes: 2, // Assignation de la valeur 2 à la propriété "eyes"
  speak(a): string {// Définition de la méthode "speak" de l'objet "helene"
    return a + " " + this.name; // Retourne la concaténation de la chaîne "a" avec le nom de la personne
  },
};

console.log(helene); // Affiche l'objet "helene"
const talkingPerson = (a: Person, b: string) => {// Fonction "talkingPerson" qui prend un paramètre de type "Person" et une chaîne de caractères "b"
  return a.speak(b); // Appelle la méthode "speak" de l'objet "a" avec le paramètre "b" et renvoie le résultat
};

const result = talkingPerson(helene, "Je m'appelle"); // Appel de la fonction "talkingPerson" avec l'objet "helene" et la chaîne "Je m'appelle"
console.log(result); // Affiche le résultat retourné par la fonction

let cyclope: Person={
  name: "cyclope", // Assignation de la valeur "Helene" à la propriété "name"
  eyes: 1, // Assignation de la valeur 2 à la propriété "eyes"
  speak(a): string {// Définition de la méthode "speak" de l'objet "helene"
    return a + " " + this.name; // Retourne la concaténation de la chaîne "a" avec le nom de la personne
  },
}
cyclope.name = "toto"
cyclope.eyes = 2//readonly