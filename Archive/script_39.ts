// 39. Interfaces avec les classes

interface HumanSound{
  talk():string
  // took?():string
}
interface AlienSound{
  telepathy():string
  // took?():string
}

class Person implements HumanSound{
  constructor(readonly nom:string, private age : number) {}
  
  talk(){
    return `Je m'appelle ${this.nom}`
  }
}
class Alien{
  constructor(readonly name:string, private age : number) {
    
  }
  telepathy(){
    return `Je m'appelle ${this.name}. j'ai ${this.age}`
  }
}
// let homer = new Person("Homer", 43)
// let roger = new Alien("Roger", 1500)

// console.log(homer.talk());
// console.log(roger.telepathy());

// let humans: HumanSound
// humans = homer//ok
// // humans = roger//NOK Property 'talk' is missing in type 'Alien' but required in type 'HumanSound'

// let humanMembers: HumanSound[];
// humanMembers=[]
// humanMembers.push(homer)//OK
// humanMembers.push(homer)//OK

// console.log(humanMembers);

const form = document.getElementById('signupForm') as HTMLFormElement
const firstName = document.getElementById('firstName') as HTMLInputElement
const age = document.getElementById('age') as HTMLInputElement
const species = document.getElementById('species') as HTMLSelectElement

form.addEventListener('submit', (e:Event)=>{
  e.preventDefault()

  let humanUser:HumanSound
  let alienUser:AlienSound
  if (species.value==='Human') {
    
    humanUser = new Person(firstName.value, +age.value)
    console.log(humanUser,humanUser.talk() );
  }else{
    
    alienUser = new Alien(firstName.value, +age.value)
    console.log(alienUser,alienUser.telepathy() );
  }
})