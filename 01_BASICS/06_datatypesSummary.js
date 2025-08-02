//JavaScript is a dynamically typed language. 
//Because data type will automatically assigned at the time of compilation or code execution.

/*primitive and non primitive
call by value and reference
->primitive: 7 types :
  String, Number, Boolean, null, undefined, Sybmbol, BigInt(for scientific values)
*/
const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //its type would be object
let userEmail; //undefined

//defining symbol
const id = Symbol('123');
const id2 = Symbol('123');
console.log(id===id2);

//BigInt
const bigNumber = 34567888888888n //now number bigint as it has n in the end

/*->reference (Non primitive)
  Array, Objects, Functions
*/
//arrays:
const fruits = ["apple", "pineapple", "strawbery", "guava"]

//objects: are in curly braces
let obj= {
    name: "sumrun",
    age: 20,
}
console.log(obj)

//declaring function as a variable
const myfunction = function(){
    console.log("HI bro, me here")
}

/*
* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)

This is my research and output if anythig is wrong please feel proud to reply me 
*/