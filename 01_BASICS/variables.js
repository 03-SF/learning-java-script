const accountId = 1234
let accountEmail = "sumrun@gmail.com"
var accountPassword = 12345
accountCity = "Islamabad" //this way can be declared but avoid it


//accountId = 2
//accountEmail = "fatima@gmail.com"
//accountPassword = "none"
//accountCity = "Pindi"

//console.log(accountId);
//console.log(accountEmail);
//console.log(accountPassword);
//console.log(accountCity);

/*
dont use "var"
cuz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])