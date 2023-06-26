// 76. Decorator Factories - Exemple Angular Component

function Component ( id:string) {
  return function (target:any) {
    // console.log(constructor);
    // console.log(template);
    const el = document.getElementById(id)! // ! ça indique q'il existe vraiment 
    const h1 = document.createElement('h1')
   const objCar = new target("FORD", "ROUGE") //Car
  //  console.log(objCar);
  h1.innerHTML=objCar.carDetails()
    el.append(h1)
    
  }
}


@Component( "title")
class Car{
  constructor(private n:string, private c :string){}
  carDetails(){
    return `Marque: ${this.n} | Couleur: ${this.c}`
  }
  
}
// const ford = new Car("FORD", "ROUGE")
// console.log(ford.carDetails());

