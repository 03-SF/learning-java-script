//2 types: stack and heap
//stack(primitive), Heap(non primitive)
//stack - copied by value, change doesnt affect original
//heap - copied by refernce, change affects original

let myname = "sumrun"
let anothername = myname
anothername = "ali"

console.log(myname)
console.log(anothername)

let user1 = {
    email: "sam@gmail.com" ,
    age: 20
}

let user2 = user1
user2.email = "ali@gmail.com"

console.log(user1.email);
console.log(user2.email);
