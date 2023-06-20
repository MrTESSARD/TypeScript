"use strict";
//void quand ne retourne rien
function gift1(age) {
    const result = age + 3;
    return result.toString(); //string
}
gift1(40);
function gift2(age) {
    const result = age + 3;
    return result.toString(); //string
}
function gift3(age) {
    return age + 3; //number
}
//void quand ne retourne rien
function gift4(arg) {
    console.log("hello");
    //  return arg //pas de return = void
}
gift4(5);
function gift5() {
    console.log("hello");
    //  return arg //pas de return = void
}
console.log(gift5()); //undefined // valeur en javaScript
