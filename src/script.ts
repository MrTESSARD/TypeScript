// 61. Modules Namespaces

/// <reference path="PersonInterface.ts"/>
namespace App{
  
  const person = new Person("Homer", 25)

  console.log(person);
}