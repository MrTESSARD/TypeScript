// 74. Introduction aux Decorators

function Test(constructor:Function) {
  console.log(constructor);
  
}
@Test
class Car{
  constructor(private n:string, private c :string){}
carDetails(){
  return `Marque: ${this.n} | Couleur: ${this.c}`
}

}
// const ford = new Car("FORD", "ROUGE")
// console.log(ford.carDetails());