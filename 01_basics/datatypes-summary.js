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

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// types of memory->
// stack (primitive) , heap(non-primitive) 
// stack -> creates a copy, thus original memory location me koi change nhi hota
// heap -> original memory location ka refernce diya jata ha, thus jo bhi change hota ha wo sab oriinal memory location me change hota ha

let myYtName = "ranjana abhi"
let anotherName = myYtName // now being stack, anotherName has got a copy of the og myYtName, so anychanges made in this anotherName will not hinder myYtName
anotherName="reinh bah"
console.log(anotherName); // reinh bah
console.log(myYtName); // ranjana abhi

let userOne= {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne // now userTwo has got a refernce of original memory location, thus any change in the valure of userTwo will change the value in userOne as well

userTwo.email="abc@google.com"
console.log(userTwo.email); // abc@google.com
console.log(userOne.email); // abc@google.com



