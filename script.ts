// 43. Generics avec Interfaces

interface User<T>{
  id:number,
  data:T
}

const userData:User<string[]>={
  id:24,
  data:['mari', 'moderazteu']
}
const userData2:User<object>={
  id:24,
  data:["toto", "tata"]
}
const userData3:User<{name:string, role: string}>={
  id:24,
  data:{name:"Marion", role: "Moderator"}

}
console.log(userData3); 