// 47. Utility Types - Record

interface SuperHeros{
  name: string; // Propriété pour stocker le nom du super-héros (de type chaîne de caractères)
  power: number; // Propriété pour stocker la puissance du super-héros (de type nombre)
  marvel: boolean; // Propriété booléenne pour indiquer si le super-héros appartient à Marvel (vrai ou faux)
  dcComics: boolean; // Propriété booléenne pour indiquer si le super-héros appartient à DC Comics (vrai ou faux)
}

type Name = "Barman" | "Spiderman" | "Superman"; // Type union pour restreindre les valeurs possibles de Name à "Barman", "Spiderman" ou "Superman"

let heros: Record<Name, SuperHeros> = { // Variable heros de type Record<Name, SuperHeros> pour stocker un enregistrement de super-héros
  Barman: {name: "Batman", power: 60, marvel: false, dcComics: true}, // Enregistrement pour le super-héros "Barman"
  Spiderman: {name: "Spiderman", power: 60, marvel: true, dcComics: false}, // Enregistrement pour le super-héros "Spiderman"
  Superman: {name: "Superman", power: 60, marvel: false, dcComics: true} // Enregistrement pour le super-héros "Superman"
};

console.log(heros); // Affiche le contenu de la variable heros dans la console

heros.Spiderman.marvel && console.log(`${heros.Spiderman.name} est Marvel`); // Condition pour vérifier si Spiderman appartient à Marvel, et affiche un message correspondant dans la console si c'est le cas
