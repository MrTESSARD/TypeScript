//Function
function gift(num:number) {
  return num +3 
  }
const gift1 = (num:number) => {
  return num +3 
  }
let age:Function
let ageBonneFunction:(num:number)=> number

age = gift;
// age = "Bonjour"//erreur oK!
console.log(age(12));