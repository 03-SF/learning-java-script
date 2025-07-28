"use strict"; //treat all JS code as newer version

//alert("hello") //this is done in browser, not node js
//alert(3+3)

console.log(2*100)

let name = "Sumrun" //string datatype
let age = 20 //int datatype 
let income = 200.22 //decimal datatype 
let happy = false //bool data type

//TYPES-PRIMITIVE:
//number : 2 powered 53
//string : with ""
//boolean : true/false
//null : its a stand alone value and a type (can be assigned)
//undefined : when variable declared but value not assigned
//symbol : used in react for uniqueness 

//OBJECTS :


console.table([name, age, income, happy])
console.log(typeof "sumrun") // tells us the datatype 
console.log(typeof null) //gives us output as object and not null
                    //this is a flaw of the language as type should be null (there is conflicting opinion)