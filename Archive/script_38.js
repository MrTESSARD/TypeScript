"use strict";
// 38. Interfaces
class Mother {
    name;
    eyes;
    name = "red"; // Déclaration et initialisation de la variable "name" de type string avec une valeur par défaut "red"
    eyes = 4; // Déclaration et initialisation de la variable "eyes" de type number avec une valeur par défaut 4
    constructor(name, eyes) {
        this.name = name;
        this.eyes = eyes;
        // Constructeur de la classe qui prend un paramètre "name" en lecture seule (readonly) et "eyes" en accès public (public)
        this.name = name; // Assignation de la valeur du paramètre "name" à la variable "name" de la classe
        this.eyes = eyes; // Assignation de la valeur du paramètre "eyes" à la variable "eyes" de la classe
    }
    speak() {
        // Méthode "speak" de la classe
        console.log("Je me présente " + this.name); // Affiche le message avec le nom de la personne
    }
}
let henri = new Mother("Henri", 2); // Instanciation d'un objet "henri" de la classe "Mother" avec les valeurs spécifiées
console.log(henri); // Affiche l'objet "henri"
henri.speak(); // Appel de la méthode "speak" de l'objet "henri"
let helene; // Déclaration d'une variable "helene" de type "Person"
helene = {
    name: "Helene",
    eyes: 2,
    speak(a) {
        return a + " " + this.name; // Retourne la concaténation de la chaîne "a" avec le nom de la personne
    },
};
console.log(helene); // Affiche l'objet "helene"
const talkingPerson = (a, b) => {
    return a.speak(b); // Appelle la méthode "speak" de l'objet "a" avec le paramètre "b" et renvoie le résultat
};
const result = talkingPerson(helene, "Je m'appelle"); // Appel de la fonction "talkingPerson" avec l'objet "helene" et la chaîne "Je m'appelle"
console.log(result); // Affiche le résultat retourné par la fonction
let cyclope = {
    name: "cyclope",
    eyes: 1,
    speak(a) {
        return a + " " + this.name; // Retourne la concaténation de la chaîne "a" avec le nom de la personne
    },
};
cyclope.name = "toto";
cyclope.eyes = 2; //readonly
