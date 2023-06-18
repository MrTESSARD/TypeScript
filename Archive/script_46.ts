// 46 - Utility Types - Readonly

interface Todo{
  title:string;
  description:string
}

const myTodo:Readonly<Todo>={
  title:"Sport",
  description:"Faire un footing "
}

console.log(myTodo.title);
// myTodo.title="Test"//error