// 45. Utility Types - Partial

interface Todo{
  title:string;
  description:string
}

function addTodo(title:string, description:string):Todo { //j'oublige que l'obret retourné correspond à interface Todo mais je crée un objet Partial<Todo>!=interface Todo
  let myTodo:Partial<Todo>={}//partielement obligatoire
  myTodo.title=title
  myTodo.description=description
  return myTodo as Todo//je transforme myTodo en objet interface Todo
}
const todo = addTodo('sport', 'futing')
console.log(todo);
console.log(typeof todo);

//Partial
function addTodo1(title:string, description:string) { //Partial<Todo>
  let myTodo1:Partial<Todo>={}//partielement obligatoire
  myTodo1.title=title
  // myTodo1.description=description
  return myTodo1 //
}
const todo1 = addTodo1('sport', 'futing')
console.log(todo1);
console.log(typeof todo1);