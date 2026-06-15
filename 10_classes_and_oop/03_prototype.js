// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);  //-> here we want to create a method called trueLength which tells us that the "true length of a string is ${whatever its true length is}"
// first we will cover some basics then we will solve this challenge

let myHeros = ["thor", "spiderman"] // array


let heroPower = {
    thor: "hammer",                  // object
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`); // we inserted a method called hitesh in the prototype of Object(i.e where all basic properties of an object are already specified
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`); // here we inserted a method in the prototype of Array
}
//note-> in javascript everything is an object. all arrays, functions can access methods written in the prototype of object but not vice versa

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance->

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User // this will add all the properties of user in the Teacher object. but this is an old syntax

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`); // solving the challenge gives at the top
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()