// 77. Decorator Composition - Evaluation

// function Component ( id:string) {
//   return function (target:any) {
//     // console.log(constructor);
//     // console.log(template);
//     const el = document.getElementById(id)! // ! ça indique q'il existe vraiment 
//     const h1 = document.createElement('h1')
//    const objCar = new target("FORD", "ROUGE") //Car
//   //  console.log(objCar);
//   h1.innerHTML=objCar.carDetails()
//     el.append(h1)
    
//   }
// }


// @Component( "title")
// class Car{
//   constructor(private n:string, private c :string){}
//   carDetails(){
//     return `Marque: ${this.n} | Couleur: ${this.c}`
//   }
  
// }
// // const ford = new Car("FORD", "ROUGE")
// // console.log(ford.carDetails());




function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}

//first(): factory evaluated
//script.js:37 second(): factory evaluated
//script.js:39 second(): called
//script.js:33 first(): called