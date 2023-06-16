//Literal Types
let PI1:3.14

function total(arg1:number, arg2:number, totalversion:"getStringValue"|"getsquare") {
  let result
  if (totalversion==="getStringValue") {
    result = arg1.toString() + arg2.toString()
    
  }else if(totalversion==="getsquare"){
    const val = arg1+arg2
    result = val **2

  }else{
    result = arg1 + arg1
  }
  return result
  
}
const totalOne = total(20,10, "getStringValue");
console.log(totalOne);
const totalTwo = total(20,10, "getsquare");
console.log(totalTwo);
const totalThree = total(20,10, "getsquar"); //erreur type inconnu
console.log(totalThree);