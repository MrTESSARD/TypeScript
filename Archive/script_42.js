"use strict";
// 42. Generics
let colors = ["red", "green", "blue"];
let colors2 = [];
// let list :number[]=[1,2,3,] //la même chose 
// let list: Array<number>=[1,2,3,]//la même chose 
function identity(arg) {
    return arg;
}
console.log(identity(200));
function identity2(arg) {
    return arg;
}
let output = identity2("hello");
console.log(identity2("Hello"));
console.log(identity2(true));
function identity3(arg) {
    return arg;
}
let output1 = identity3("hello");
let output2 = identity3(200);
function identity4(arg) {
    return arg;
}
let output3 = identity4({ title: "Hello World" });
const objOne = { name: "bart" };
const objTwo = { age: 8 };
function objInArray(n, a) {
    let data = [];
    data.push(n, a);
    return data;
}
const user = objInArray(objOne, objTwo);
console.log(user); //un array d'objets 
