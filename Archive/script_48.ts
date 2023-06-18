// 48 - Utility Types - Pick

interface Todo{
  title: string; // 
  description: string; // 
  completed: boolean; // 
}

let todo1:Todo={
  title: "Sport",
  description: "Footing",
  completed: true
}

type TodoPreieuw=Pick<Todo, "title"| "completed">

let todo2:TodoPreieuw={
  title:"fare les courses",
  completed:false
}