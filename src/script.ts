// 87. Mixins

class Person{
  speak(){console.log("je parle");  }
  walk(){console.log("je marche");  }

}

class Alien {
  telepathy(){console.log("Je communique sans parler");}
  
}

// class Roger extends Person, Alien {//pas possible
  
// }
interface Roger extends Person, Alien {// possible pour une interface 
  
}
const test:Roger={//déclarons une variable test de type "Roger" et lui attribuons un objet qui implémente les membres requis par l'interface "Roger". Dans cet exemple, nous fournissons des implémentations vides pour les méthodes speak(), walk(), et telepathy()
  speak():void{ },
  walk():void{},
  telepathy():void{}
}

type Class = new(...arg:any[])=>any

function PersonMixin<Base extends Class>(base:Base) {
  return class extends base{
    speak(){console.log("je parle");  }
    walk(){console.log("je marche");  }
  }
}
function AlienMixin<Base extends Class>(base:Base) {
  return class extends base{
    telepathy(){console.log(`Je communique sans parler. j'ai ${this.age}`);}

  }
}

const Roger = PersonMixin(AlienMixin(class{
age:number=5000//je peux ajouter en plus des propriétés et des mthodes 
}))

const roger = new Roger()
roger.speak()
roger.telepathy()
console.log(roger.age);
console.log(roger
  );







 