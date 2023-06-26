// 75. Decorators Factories

function Test(hw:string) {
  return function (constructor:Function) {
    console.log(constructor);
    console.log(hw);
    
  }
}


@Test('Hello World')
class Car{
  constructor(private n:string, private c :string){}
carDetails(){
  return `Marque: ${this.n} | Couleur: ${this.c}`
}

}
// const ford = new Car("FORD", "ROUGE")
// console.log(ford.carDetails());

