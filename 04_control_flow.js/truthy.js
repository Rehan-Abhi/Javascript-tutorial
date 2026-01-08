const userEmail = [] // this empty array is also a truthy value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN -> all values except these are truthy values

//truthy values
// "0", 'false', " ", [], {}, function(){} -> some examples of confusiong truthy values

// if (userEmail.length === 0) {
//     console.log("Array is empty");     method to check if an array is empty
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");                   // method to check if an object is empty
}

// Nullish Coalescing Operator (??): null undefined

let val1;                          
// val1 = 5 ?? 10                          ye acche se baad me samj aayega
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator -> alternative of if else where code is written is a single line

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")