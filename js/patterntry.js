// phone number pattern


// let phnnumber = Number(prompt("Enter The valid Phone Number :"));
let phnnumber = '01741159851';

let phnpattern = /^(01|8801|\+8801)[0-9]$/
console.log(phnpattern.test(phnnumber));


let email = 'abc@gmail.com';
// let emailPattern = /^[a-z0-9]*@[a-z0-9]*\.[a-z]*$/;
let emailPattern = /\d/;
console.log(emailPattern.search(email));


