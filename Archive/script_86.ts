// 85. Conditional Types

type MyType = number
type MyType2 = MyType

//via le conditional type
type MyConditionalType = MyType extends string? string : null//null
type MyConditionalType2 = MyType extends number? string : null//string

type MyType3<T> = T extends number ? "number" : "random"
type WithNumber = MyType3<number>//number
type WithString = MyType3<string>//number

type TypeName<T> = 
  T extends string  ? "string": 
  T extends number  ? "number"  : 
  T extends boolean  ? "boolean"  : 
  T extends undefined  ? "undefined"  : 
  T extends Function  ? "function"  : 
  "object";

  function typeName<T>(arg:T) :TypeName<T>{
    return typeof arg as TypeName<T>
    
  }
  const strVal=typeName("Hello")//string
  const numVal=typeName(20)//number
  const undefinedVal=typeName(undefined)//undefined
  const funVal=typeName(()=>console.log(("hello")))//function
  const objVal=typeName([])//object
  const nullVal=typeName(null)//null
  console.log(typeName);