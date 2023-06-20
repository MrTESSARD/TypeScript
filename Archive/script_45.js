"use strict";
// 45. Utility Types - Partial
function addTodo(title, description) {
    let myTodo = {}; //partielement obligatoire
    myTodo.title = title;
    myTodo.description = description;
    return myTodo; //je transforme myTodo en objet interface Todo
}
const todo = addTodo('sport', 'futing');
console.log(todo);
console.log(typeof todo);
//Partial
function addTodo1(title, description) {
    let myTodo1 = {}; //partielement obligatoire
    myTodo1.title = title;
    // myTodo1.description=description
    return myTodo1; //
}
const todo1 = addTodo1('sport', 'futing');
console.log(todo1);
console.log(typeof todo1);
