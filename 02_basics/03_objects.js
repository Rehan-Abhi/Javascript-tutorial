// singleton -> jab hum constructor se object banate hain to singleton object banta ha
// Object.create -> method of creating an object from constructor | we will learn this later

// object literals -> isse method se multipleton object banta ha -> in this page, we are learning this object from literals

const mySym = Symbol("key1") // used in order to learn how to use symbol as a key in an object


const JsUser = {
    name: "Hitesh",                     // note-> all these keys are string by default, i.e actually they are "name"
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                  // method of using a symbol as a key
    age: 18,                                
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) -> one method of accessing any key of an object, waise it is the best way
// console.log(JsUser["email"]) -> best method to access any key | note-> we had to put "email" in double quotes because the key is actually a string
// console.log(JsUser["full name"]) -> this full name key could not have been accessed by . wala method
// console.log(JsUser[mySym]) -> this also could not have been accessed by . wala method

JsUser.email = "hitesh@chatgpt.com" // we can change the value of any key
//Object.freeze(JsUser) by this we can lock the values of keys in an object, i.e any change to the keys will not be propogated to the object
JsUser.email = "hitesh@microsoft.com" // -> if we have freeed the object, then this change will not get propagated
// console.log(JsUser); 

JsUser.greeting = function(){ // by this, we can add a new key to an object
    console.log("Hello JS user"); 
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this operation accesses the keys of ongoing object, i.e agar bahut sare objects hain ek hi code me, then *this* operation wo object me se key access krega jo ongoing use me aa rha ha
}

console.log(JsUser.greeting()); // NOTE-> we have not written JsUser.greeting, we have added those (), because it is a function
console.log(JsUser.greetingTwo());