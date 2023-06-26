// 80. Decorator sur Paramètres
function methodlog(
  target: any,
  name: string,
  descriptor: PropertyDescriptor) {
    console.log("je suis dans le decorator de la méthode");
  
}
function logparam(
  target: any,
    name: string,
    position: number
) {
  console.log(target); //proto
  console.log(name);//loginMsg
  console.log(position);//0
  console.log("je suis dans le decorator du paramètre");

}

class Person {
  constructor(public age: number, public eyes: string, private hair: string) {}
 
  @methodlog
  loginMsg(@logparam minAge: number, textOne: string, textTwo: string) {
    console.log(this.age);
    if (this.age > 17) {
      return textOne;
    }
    return textTwo;
  }
}

//sortie
//je suis dans le decorator du paramètre
//script.js:13 je suis dans le decorator de la méthode
const person = new Person(30, "blue", "balck");

// console.log(
//   person.loginMsg(18, "Inscription autorisée", "Inscription refusée")
// );
// console.log(
//   person.loginMsg(18, "Inscription autorisée", "Inscription refusée")
// );
