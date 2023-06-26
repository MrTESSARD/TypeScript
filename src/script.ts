// 82. Decorator Extends Constructor Function

function changeArtist<T extends { new (...args: any[]): {} }>(constructor: T) {
  // Cette fonction de décorateur prend un constructeur comme argument et retourne une classe modifiée.
  return class extends constructor {
    newProperty = "Toto";
    // Cette classe étend le constructeur d'origine et ajoute une nouvelle propriété 'newProperty'.
  };
}

@changeArtist
// Le décorateur 'changeArtist' est appliqué à la classe 'Person'.
class Person {
  constructor(
    public age: number,
    public eyes: string,
    public artist: string
  ) {}

  loginMsg(minAge: number, textOne: string, textTwo: string) {
    console.log(this.age);
    if (this.age > 17) {
      return textOne;
    }
    return textTwo;
  }
}

const person = new Person(30, "blue", "Picasso");
console.log(person);
