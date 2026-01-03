let score = "33"
console.log(typeof (score)) // -> string
 let valueInNumber = Number(score) // -> now it has converted the string into a number
 /* "33" -> 33
 "33abc" -> NaN( not a number), NOTE-> THE DATATYPE OF NAN IS number
 null-> 0 (dekho isne null ki value 0 de di, but ye iski galat baat ha
 undefined -> NaN
 true -> 1
 false-> 0 */
 let isLoggedIn =1
 let booleanIsLoggedIn = Boolean(isLoggedIn) //-> now it has converted from number to boolean
 /* 1-> true
  0-> false
  ""(emptystring) -> false
  "rehan"(non empty string) -> true
  */
 let someNumber = 33
 let stringSomeNumber = String(someNumber) // -> now it has converted from number to string


// **************************************Operations*************************************************


let value = 3
let negValue = -value 
console.log(negValue) // -> -3 easypeasy
/* some simple arithmetic operations
 console.log(2+2)
 console.log(2-2)
 console.log(2/2)
 console.log(2*2)
 console.log(2**2) -> it means 2 to the power 2
 console.log(2%2)
 */
let str1 = "hello"
let str2 = " rehan"
let str3 = str1 + str2
console.log(str3) //-> it prints hello rehan -> thus we can add strings

console.log("1"+2); // 12
console.log(1+"2"); //12               {dhyaan se sammjho ye kaise kaam kr rha ha}
console.log("1" + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32 


console.log (+true); // ->1
//console.log (true+);  -> error
console.log(+"") // -> 0

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"           {concept of prefix  and suffix increment}

// let a = 3;                           
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

