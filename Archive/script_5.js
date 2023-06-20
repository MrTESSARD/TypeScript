"use strict";
//les tuple
let tuple;
tuple = ["hello", 20];
console.log(tuple);
//un objet qui contient uniquement un string et un number
const member = {
    level: ["admin", 1],
};
member.level[0] = 5;
//un push prend le desus sur restriction de type
member.level.push(5);
let age = [25, true];
let age1 = 25;
age1 = true;
//enum
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Vert"] = 1] = "Vert";
    Couleur[Couleur["Bleu"] = 2] = "Bleu";
})(Couleur || (Couleur = {}));
let maCouleur = Couleur.Vert;
console.log(maCouleur); // Affiche 1
