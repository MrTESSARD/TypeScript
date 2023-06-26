// 81. Decorator - Return Constructor Function
//Alteration méthodes 
function changeArtist(artist: string) {
  // Ce décorateur de classe reçoit un argument 'artist' de type string.
  return function (constructor: any) {
    // Cette fonction retourne une classe modifiée.
    return class {
      public age: number;
      public eyes: string;
      public artist: string = artist;
      // Cette classe contient une propriété 'artist' qui est initialisée avec la valeur de l'argument 'artist' du décorateur.

      loginMsg() {
        // Cette méthode retourne un message de salutation.
        return "Hello";
      }
    };
  };
}

function methodlog(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  // Cette fonction est vide et n'a pas de logique à l'intérieur.
}

@changeArtist('Jon Singer Sargent')
// Ce décorateur de classe 'changeArtist' est appliqué à la classe 'Person' avec l'argument 'Jon Singer Sargent'.
class Person {
  constructor(
    public age: number,
    public eyes: string,
    public artist: string
  ) {}
  // Cette classe 'Person' possède un constructeur qui initialise les propriétés 'age', 'eyes', et 'artist'.

  loginMsg(minAge: number, textOne: string, textTwo: string) {
    // Cette méthode 'loginMsg' prend trois arguments et retourne un message en fonction de la valeur de 'age'.
    console.log(this.age);
    if (this.age > 17) {
      return textOne;
    }
    return textTwo;
  }
}

const person = new Person(30, "blue", "Picasso");
// Une instance de la classe 'Person' est créée avec les valeurs 30, "blue", et "Picasso".

console.log(`Artist ${person.artist}`);//Artist Jon Singer Sargent
// Affiche le message "Artist Picasso", qui utilise la propriété 'artist' de l'instance 'person'.

console.log(
  person.loginMsg(18, "Inscription autorisée", "Inscription refusée")//Hello
);
// Appelle la méthode 'loginMsg' de l'instance 'person' avec les arguments spécifiés et affiche le résultat en fonction de la valeur de 'age'.

