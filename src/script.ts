// 81. Decorator - Return Constructor Function
//Alteration méthodes 
function changeArtist(artist: string, id:string) {
  // Ce décorateur de classe reçoit un argument 'artist' de type string.
  return function<T extends {new (...args:any[]):{age:number}}> (constructor: T) {
    // Cette fonction retourne une classe modifiée.
    return class extends constructor{
      constructor(...args:any[]){
        super()
        const el= document.getElementById(id) as HTMLDivElement
        const h1 = document.createElement("h1")
        h1.innerText=artist
        el.append(h1)
          this.age=20
        
      }

    }
  };
}

function methodlog(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  // Cette fonction est vide et n'a pas de logique à l'intérieur.
}

@changeArtist('Jon Singer Sargent', "title")
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

