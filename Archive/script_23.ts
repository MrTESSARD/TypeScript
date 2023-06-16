//Paramètres facultatifs et par défaut

function buildName(firstName:string,lastName ?:string,) {
  return firstName + " " + lastName
  
}
let result1 = buildName("bob") //OK 1 arguments si lastName ?:string,
// let result2 = buildName("bob","adams", "tom") //NOK 3 arguments
let result3 = buildName("bob","adams") //NOK 3 arguments
console.log(result3);

function buildName1(firstName:string,lastName="tom") {
  return firstName + " " + lastName
}

// let result4 = buildName("bob","adams") //OK 2 arguments =>bob adams
let result4 = buildName1("bob") //OK  1 arguments =>bob tom
// let result4 = buildName1("bob", undefined) //OK 1 arguments =>bob tom
// console.log(result4);


function buildName2(firstName="tom", lastName:string,) {
  return firstName + " " + lastName
}
console.log(buildName2(undefined, "Bob"));//ok