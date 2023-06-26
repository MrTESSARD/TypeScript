// 78. Decorator pour une propriété de classe
function PropretyLog(target:any, propretykey:string) {
  console.log(target);
  console.log(propretykey);
  
}

class Car {
  @PropretyLog
  brand:string
  color:string

   constructor(b:string,c:string) {
    this.brand=b
    this.color=c
  }
  getInfos(){
    return `Marque : ${this.brand} | Couleur : ${this.color}`
  }
}

const opel = new Car("Opel", "red")
console.log(opel);
