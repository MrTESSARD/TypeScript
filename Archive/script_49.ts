// 49 - Utility Type - Omit

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

type TodoPreieuw=Omit<Todo, "title"| "completed">

let todo2:TodoPreieuw={
  description:"Regarder"
}