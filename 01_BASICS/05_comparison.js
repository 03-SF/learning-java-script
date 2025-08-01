/*console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);*/

console.log("2">1);
console.log("03">1);
//both true as java converts 
//thus convert itself to avoid errors

console.log("           ")
console.log(null>0)
console.log(null==0)
console.log(null>=0)
// all except "==" converts null to zero 

console.log("           ")
console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)
//undefined always gives false

//== works differently
// >,< work differently than ==

//=== -> striclty check, also checks datatypes
console.log("2"===2); //gives false as diff datatypes
console.log("2"==2); //give true