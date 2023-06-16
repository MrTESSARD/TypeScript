// 42. Generics

let colors = ["red","green", "blue"]
let colors2:Array<string>=[]

// let list :number[]=[1,2,3,] //la même chose 
// let list: Array<number>=[1,2,3,]//la même chose 

function identity(arg:number):number{
return arg
}

console.log(identity(200));
function identity2(arg:any):any{
return arg
}
let output=identity2("hello")
 
console.log(identity2("Hello"));
console.log(identity2(true));

function identity3<T>(arg:T):T{
return arg
}
let output1=identity3("hello")
let output2=identity3(200)

function identity4<T extends {title:string}>(arg:T):T{
  return arg
  }
  let output3=identity4({title:"Hello World"})


  const objOne  = {name: "bart"}
  const objTwo  = {age: 8}
  function objInArray<N extends {name:string}, A  extends {age:number}>(n:N, a:A){
    let data: Array<object>=[]
    data.push(n,a)
    return data
   
    }
    const user = objInArray(objOne, objTwo)
    console.log(user);//un array d'objets 