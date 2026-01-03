//  Primitive (call by value )

//  7 types of primitive : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // NOTE->in js we dont tell the type of data at compilation time
const scoreValue = 100.3 // js me float jaisa kuch nhi hota, sab number hi hota ha

//NOTE-> JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime (when the program is executing) rather than at compile-time (before the program runs). 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false -> symbol makes it unique

// const bigNumber = 3456543576654356754n -> end me n likhne se wo bigInt me save hota ha



// Reference (Non primitive) -> call by refernce -> memory me directly inka reference allocate kia ja sakta ha

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //arrays
let myObj = {
    name: "hitesh",      //objects
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");     //function
}
// datatype of null -> object
// datatype of function -> function (waise object function hota ha)
// note-> sab non primitive walo ka datatype functions hota ha
// datatype of symbol -> symbol 

console.log(typeof anotherId);
