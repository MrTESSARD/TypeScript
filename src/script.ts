// 79. Decorators Méthodes - Accessors

// function setterLog(
//   target: any, propertyKey: string, descriptor: PropertyDescriptor
//   ) {
//     // console.log(target); //prototype de la class
//     // console.log(propertyKey);//setColor
//     // console.log(descriptor);//propriétés du descriptor
  
// }
// function infosLog(
//   target: any, propertyKey: string, descriptor: PropertyDescriptor
//   ) {
//     console.log(target); //prototype de la class
//     console.log(propertyKey);//setColor
//     console.log(descriptor);//propriétés du descriptor
  
// }
// class Car {
//   brand:string
//   private color:string

//   constructor(b:string, c:string) {
//     this.brand=b
//     this.color=c

    
//   }
//   @setterLog
//   setColor(color:string){//private
//     this.color=color
//   }
//   @infosLog
//   infos(){//public
//     return`Marque : ${this.brand} | ${this.color}`
//   }
// }

// const opel=new Car("Opel","red")
// // console.log(opel);
// console.log(opel.infos());
// opel.infos=function () {
//   return "Hello"
  
// }
// console.log(opel.infos());


function readonly(value:boolean){
  return function (
    target: any, propertyKey: string, descriptor: PropertyDescriptor
    ) {
    // console.log(descriptor);
    descriptor.writable=value //interdit la modification   getHairColor(){
    }
}


class Person {
  constructor(public eyes:string, private hair:string) {

    
  }
  @readonly(true)
  getHairColor(){
return this.hair
}
}

const person = new Person("blue","balck")
// person.eyes="brown"
// console.log(person.eyes);
console.log(person.getHairColor());
person.getHairColor=function () {
  return "Hello"
  
}
console.log(person.getHairColor());//script.js:68 Uncaught TypeError: Cannot assign to read only property 'getHairColor' of object '#<Person>'


