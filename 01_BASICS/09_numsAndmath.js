const score = 400

const balance = new Number (11) //writing like this ensures that its number
console.log(balance)

//making a string:
console.log(balance.toString());
//now string methods can be used like:
console.log(balance.toString().length)

//to give decimal places
console.log(balance.toFixed(2))//gives 2 decimal places

const othernumber = 24.4822
console.log(othernumber.toPrecision(2)) //gives precision value

const hundreds = 1000000
console.log(hundreds.toLocaleString()) //gives commas

//++++++++++++ MATHS +++++++++
console.log("                   ")
console.log("                   ")


// --- 📌 Math Constants ---
console.log(Math.PI);         // 3.14159... → Value of π
console.log(Math.E);          // 2.71828... → Euler's number
console.log(Math.SQRT2);      // 1.4142... → Square root of 2
console.log(Math.LN2);        // 0.6931... → Natural log of 2

// --- 🔢 Rounding Methods ---
console.log(Math.round(4.7));   // 5 → Nearest integer
console.log(Math.floor(4.9));   // 4 → Always rounds down
console.log(Math.ceil(4.1));    // 5 → Always rounds up
console.log(Math.trunc(4.9));   // 4 → Removes decimal part (no rounding)

// --- ➕➖ Absolute and Sign ---
console.log(Math.abs(-10));     // 10 → Absolute value, changes all - to +, + remain +
console.log(Math.sign(-5));     // -1 → Sign: -1 (negative), 0 (zero), 1 (positive)
console.log(Math.sign(0));      // 0
console.log(Math.sign(7));      // 1

// --- ✖️ Power and Roots ---
console.log(Math.pow(2, 3));    // 8 → 2^3
console.log(Math.sqrt(25));     // 5 → Square root
console.log(Math.cbrt(27));     // 3 → Cube root

// --- 📐 Trigonometric Functions (radians) ---
console.log(Math.sin(Math.PI / 2));    // 1
console.log(Math.cos(0));              // 1
console.log(Math.tan(Math.PI / 4));    // 1

console.log(Math.asin(1));             // π/2 → Inverse sine
console.log(Math.acos(1));             // 0 → Inverse cosine
console.log(Math.atan(1));             // π/4 → Inverse tangent

// --- 🧮 Logarithmic Functions ---
console.log(Math.log(10));        // 2.302 → Natural log (base e)
console.log(Math.log10(100));     // 2 → Log base 10
console.log(Math.log2(8));        // 3 → Log base 2

// Random integer between min and max (inclusive)
let min = 1, max = 10;
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt);           // Example: 4 → Random integer from 1 to 10

// --- 📊 Min and Max ---
console.log(Math.max(5, 2, 9));   // 9 → Largest number
console.log(Math.min(5, 2, 9));   // 2 → Smallest number

//EXPLORING THE RANDM METHOD
console.log((Math.random() * 10) + 1)//1 added so we dont get 0 as 0 can come as well

//for number without decimal places
console.log(Math.floor(Math.random() * 10) + 1)

const Min = 10
const Max = 20

console.log(Math.floor(Math.random() * (Max-Min + 1)) + Min)