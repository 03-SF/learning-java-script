// Arrays in JavaScript are objects
// They are dynamic/resizable (you can add/remove elements)
// Indexed collections (accessed via index, not value)
// They make a shallow copy (same reference for objects)

const my_arr = [100, 2, 3, 4, 5];

//another way of declaring an array
const arr2 = new Array(11,22,334,44,"sumrun")

console.log(arr2[4])

//Array methods
my_arr.push("sam")//ads at end
console.log(my_arr)
arr2.pop() // Removes last element
console.log(arr2)

my_arr.unshift(10) //10 inserted at start, so value of each gets shifted by 2
console.log(my_arr)

my_arr.shift() // Removes first element
console.log(my_arr)

console.log(my_arr.includes(100)) //true if exists
console.log(my_arr.indexOf(3)) // Returns index of 3 if found; otherwise returns -1

//changing an array to string
const newArr = my_arr.join()

console.log(newArr);
console.log(typeof newArr) //ans-> string

//slice, splice
console.log("A", my_arr);

const myn1 = my_arr.slice(1,3) //last string not included
console.log("B", myn1)

const myn2 = my_arr.splice(1,3)// spilces changes the original array
console.log("C", myn2)
console.log(my_arr) 

//slice() returns a shallow copy of a portion of an array without modifying the original,
//while splice() modifies the original array by adding, removing, or replacing elements.

const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marverl.push(dc);
// console.log(marverl) //array in array. dc added as an entire array and not individually 
// //so add like this:
// marverl.concat(dc);
// console.log(marverl)//gives same error as push

//using concat
const all_heroes = marvel.concat(dc);
console.log(all_heroes);

//another method - spread operator 
const all_new_heros = [...marvel, ...dc]
console.log(all_new_heros)



