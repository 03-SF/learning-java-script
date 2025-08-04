const repCount = 50
let namee = "ali"
//console.log(name +repCount + " value")
//better way of writing:
console.log(`Hello may name is ${namee} and my repo count is ${repCount}`)

//declaring string is an object
//declaring string:
const gameName = new String('chessssss')

console.log(gameName.__proto__)

console.log(gameName.toUpperCase())
//checking whcih position a certain character is at: 
console.log("chart at: "+gameName.charAt(2))

//for checking character position
console.log(gameName.indexOf("n"))

let name = new String('Sumrun')

console.log(name.length);              // 6 → length of the string
console.log(name.toUpperCase());      // "SUMRUN" → converts to uppercase
console.log(name.toLowerCase());      // "sumrun" → already lowercase
console.log("  sumrun  ".trim());     // "sumrun" → removes whitespace
console.log("  sumrun  ".trimStart()); // "sumrun  " → trims only start
console.log("  sumrun  ".trimEnd());   // "  sumrun" → trims only end

// --- Searching & Checking ---
console.log(name.includes("run"));     // true → substring exists
console.log(name.startsWith("su"));    // true → starts with "su"
console.log(name.endsWith("un"));      // true → ends with "un"
console.log(name.indexOf("u"));        // 1 → index of first "u"
console.log(name.lastIndexOf("u"));    // 4 → index of last "u"

// --- Extracting Parts ---
console.log(name.charAt(3));           // "r" → character at index 3
console.log(name[3]);                  // "r" → same using bracket notation
//can also give negative values for slices(goes oppositie then)
console.log(name.slice(1, 4));         // "umr" → from index 1 to 3
//for substring, last value is not included:
console.log(name.substring(1, 4));     // "umr" → similar to slice
console.log(name.substr(1, 3));        // "umr" → deprecated, but still works

// --- Modifying Strings ---
console.log(name.replace("u", "x"));    // "sxmrun" → first "u" replaced
console.log(name.replaceAll("u", "x")); // "sxmrxn" → all "u" replaced
console.log(name.repeat(2));            // "sumrunsumrun" → repeated
console.log(name.padStart(10, "*"));    // "****sumrun" → pad to length 10
console.log(name.padEnd(10, "-"));      // "sumrun----" → pad to length 10

// --- Splitting & Joining ---
console.log(name.split(""));           // ["s", "u", "m", "r", "u", "n"] → split to array of chars
console.log(["sum", "run"].join("-")); // "sum-run" → join array with "-"

// --- Encoding/Character Codes ---
console.log(name.charCodeAt(0));       // 115 → ASCII code for 's'
console.log(String.fromCharCode(115)); // "s" → back to character

// --- Regex Example ---
console.log(name.match(/[aeiou]/g));   // ["u", "u"] → matches all vowels
console.log(name.search(/m/));         // 2 → index of 'm'

// --- Raw String ---
console.log(String.raw`Hi\n${name}`);  // "Hi\\nsumrun" → raw string literal
