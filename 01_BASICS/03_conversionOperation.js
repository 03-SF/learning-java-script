let score = "33"

console.log(typeof score) //gives output string

let valueInNum = Number(score)

console.log(typeof valueInNum) //gives output number, even for string
console.log(valueInNum) //gives output NaN if score not number and is sthing like 33abd

/* conclusion:
if score = 33(number) and you convert it into Number 
so it also converts string into Number
ex, lets say score is 33amna, and we convert it into valueInNum = Number(score)
and find console.log(typeof valueInNum) , output would be NUmber and not String
but if we find console.log(valueInNum) then it gives NaN as its not number
so we should not entirely rely on this and keep a check from our side

"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn) 

//true => 1; false => 0
//"" => false
// "sam" => true

let num2 = 33
let stringnum = String(num2)

console.log(stringnum)
console.log(typeof stringnum)