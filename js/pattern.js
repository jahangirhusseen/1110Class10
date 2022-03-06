// phone number pattern


// let phnnumber = Number(prompt("Enter The valid Phone Number :"));

let phnnumber = "01719929125";

let phnPattern = /^(01|8801|\+8801)[0-9]{9}$/;
console.log(phnPattern.test(phnnumber)); 


// # Create an email pattern 

let email =(prompt("Enter The valid email : "));

// let email = "jh57@";

let emailPattern = /^[a-z0-9\.-_]*@[a-z0-9-_]*\.[a-z]{3,5}$/; 
console.log(emailPattern.test(email));


// # Create an username pattern 

let username =(prompt("Enter The User Name : "));

// let username = "admin#123@info";

let usernamePattern = /^[a-zA-Z0-9\.@$-_]{6,20}$/; 
console.log(usernamePattern.test(username));



// # Create an password  pattern 

let  password = (prompt("Enter The Password : "));

// let password = "admind!";


let passwordpattern = /^[a-zA-Z0-9\.-_@#$^&+=!]{6,20}$/; 
console.log(passwordpattern.test(password));

// # Create an zipcode   pattern 

let  zipcode  = (prompt("Enter The zipcode : "));

// let zipcode  = "3100";

let zipcodepattern = /^[0-9]{4}$/;
console.log(zipcodepattern.test(zipcode));

