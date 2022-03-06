document.cookie = "name = JaHangir hussen";
document.cookie = "skill = Php";
document.cookie = "Location = Mirpur";

console.log(document.cookie);






let text = "ami tumake valobashi ";
let result =/(i|ami) (love|tumake) (you|valobashi)/i;
console.log(result.test(text));
let textdata = "I'm MERN  STACK developer";
// The "i" modifier specifies a case-insenitive match.
let result1 = /Developer/i;

console.log(result1.test(textdata));


let textdata2 = "I'm wrodpress developer";

let result2 = /mern|stack/i;

console.log(result2.test(textdata2));


// ^ word ta 1st e thakte hobe. 
let textdata3 = "developer.I'm wrodpress ";

let result3 = /^developer/i;

console.log(result3.test(textdata3));

// ^word$ e thakte hobe/ er pore kichu likhe false hoyejabe. 
let textdata4 = "developer.I'm wrodpress ";

let result4 = /^developer$/i;

console.log(result4.test(textdata4));


let textdata5 = "01718919129";

let result5 = /^0.........9$/i;

console.log(result5.test(textdata5));



let textdata6 = "a%z";

let result6 = /^a[a-zA-Z~!@#$%^&*]z$/; 

console.log(result6.test(textdata6));


let textdata7 = "add2z";

let result7 = /^a[a-zA-Z0-9]{2,3}z$/; 

console.log(result7.test(textdata7));  




let textdata8 = "01741159851";

let result8 = /^[0-9]{11,11}$/; 

console.log(result8.test(textdata8));


let textdata9 = "a01741159851z";

let result9 = /^a[a-zA-Z0-9]*z$/; 

console.log(result9.test(textdata9));

//  [^...] chara sob kichu likha jabe.
let textdata10 = "a01741159851z";

let result10 = /^a[Aa-z]*z$/; 

console.log(result10.test(textdata10));




