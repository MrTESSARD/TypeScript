//Type Rest

let colors = function (arg1:string, ...restOfColors:string[]) {
  console.log(arguments.length);//4 argumenrts
  for (let i in restOfColors) { //3 arguments
   console.log(restOfColors[i]);
    
  }
  
}
colors("h1","red", "blue", "green")

