//represents milliseconds since the midnight at the beginning of JANUARY 1, 1970

let date = new Date()
console.log(date) // not readable 

//ways of making it readable 
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(typeof date)//its object

let myCreatedDate = new Date(2023, 0, 23, 5, 4)
console.log(myCreatedDate.toLocaleString())

let newdate = new Date("2023-04-15")//for formatting on ur own
console.log(newdate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)//gives long as milliseconds
console.log(myCreatedDate.getTime()) //for finding millisecond from Date()

console.log(Math.floor(Date.now()/1000)) //for finding in seconds

//for finding specific months, date, etc

let datenew = new Date()
console.log(datenew)
console.log(datenew.getMonth()+1)
console.log(datenew.getDay())