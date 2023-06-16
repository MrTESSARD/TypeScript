//void quand ne retourne rien

function gift1(age:number) {
  const result = age + 3
  return result.toString()//string
}
gift1(40)
function gift2(age:number):string {
  const result = age + 3
  return result.toString() //string
}
function gift3(age:number):number {
  return age + 3 //number
}

//void quand ne retourne rien
function gift4(arg) {//void
 console.log("hello");
//  return arg //pas de return = void
}
gift4(5)

function gift5() {//void
 console.log("hello");
//  return arg //pas de return = void
}

console.log(gift5());//undefined // valeur en javaScript