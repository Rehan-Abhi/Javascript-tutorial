const score = 400
// console.log(score);

const balance = new Number(100) // defined in an object which is of number type
// console.log(balance);
console.log(typeof balance) // object

// console.log(balance.toString().length); -> .toString converts it into string, then we can use all the things that we use in string
// console.log(balance.toFixed(2)); -> specifies the number of digits after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); ->toPrecision soecifies the number of digits to be shown and rounds off accordingly | eg-> answer -> 123.9 | note -> agar digit kam pad gye to fir wo uska answer exponential me de dega  

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); -> answer-> 10,00,000 | if 'en-In' is not specified, then commmas are added as per US standard 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); -> absolute value
// console.log(Math.round(4.6)); -> round off
// console.log(Math.ceil(4.2)); -> upper value, answer->5
// console.log(Math.floor(4.9)); -> lower valure, answer-> 4
// console.log(Math.min(4, 3, 6, 8)); 
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // gives a random value between 0 and 1 (decimal value)
console.log((Math.random()*10) + 1); // formula to create values between 1 and 10.something
console.log(Math.floor(Math.random()*10) + 1); // to create an integer value 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // learn | formula to create values between any two numbers
// can be used to create a dice