// 79. Decorators Méthodes - Accessors

function setterLog(
  target: any, propertyKey: string, descriptor: PropertyDescriptor
  ) {
    // console.log(target); //prototype de la class
    // console.log(propertyKey);//setColor
    // console.log(descriptor);//propriétés du descriptor
  
}
function infosLog(
  target: any, propertyKey: string, descriptor: PropertyDescriptor
  ) {
    console.log(target); //prototype de la class
    console.log(propertyKey);//setColor
    console.log(descriptor);//propriétés du descriptor
  
}
class Car {
  brand:string
  private color:string

  constructor(b:string, c:string) {
    this.brand=b
    this.color=c

    
  }
  @setterLog
  setColor(color:string){//private
    this.color=color
  }
  @infosLog
  infos(){//public
    return`Marque : ${this.brand} | ${this.color}`
  }
}

const opel=new Car("Opel","red")
// console.log(opel);
console.log(opel.infos());
opel.infos=function () {
  return "Hello"
  
}
console.log(opel.infos());


