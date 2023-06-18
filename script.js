// 47. Utility Types - Record
var heros = {
    Barman: { name: "Batman", power: 60, marvel: false, dcComics: true },
    Spiderman: { name: "Spiderman", power: 60, marvel: true, dcComics: false },
    Superman: { name: "Superman", power: 60, marvel: false, dcComics: true } // Enregistrement pour le super-héros "Superman"
};
console.log(heros); // Affiche le contenu de la variable heros dans la console
heros.Spiderman.marvel && console.log("".concat(heros.Spiderman.name, " est Marvel")); // Condition pour vérifier si Spiderman appartient à Marvel, et affiche un message correspondant dans la console si c'est le cas
