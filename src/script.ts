// 83. Exercice 1: Méthode decorator pour bind this

function bindF(target:any, name:string, descriptor:PropertyDescriptor) {
  const orgMethod =descriptor.value
  let newDescriptor:PropertyDescriptor
  newDescriptor={
    get(){
      return orgMethod.bind(this)
    }
  }
  return newDescriptor
  
}

class Person {
  userName: string
  constructor(name:string
  ) {
    this.userName=name
    
  }
  getName(){
    console.log(this.userName);
  }
  getThis(){//sans decorator
    console.log(this.userName);
    console.log(this);
  }
  @bindF
  getBind(){//avec decorator
    console.log(this.userName);
    console.log(this);
  }

}
const btn = document.querySelector('button')!
const steve = new Person('Steve Smith')
btn.addEventListener('click',()=>steve.getName())// Steve Smith

btn.addEventListener('click',steve.getName)// undefined

btn.addEventListener('click',steve.getThis)// <button>Click my</button> !! car il y a une confusion entre this de la classe et this de l'objet "button"

btn.addEventListener('click',()=>steve.getThis())//Person {userName: 'Steve Smith'} objet

btn.addEventListener('click',steve.getThis.bind(steve))// Person {userName: 'Steve Smith'} objet

// Person {userName: 'Steve Smith'} objet !! il n'y a plus de confusion entre la classe et l'objet "button" car il y a le decorator avec get(){
  //   return orgMethod.bind(this)
  // }
btn.addEventListener('click',steve.getBind)