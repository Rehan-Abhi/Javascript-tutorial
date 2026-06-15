function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype); // every function has a prototype property which is {} by default. we can insert methods or properties in it which will be accessible for all the instancesof that patricular function.

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){  // here we inserted an "increment" method in the prototype of createUser function. this can accessed by all the instances of this function
    this.score++ // here this keyword is important to specify the context
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); // similarly here we inserted a printMe method
}

const chai = new createUser("chai", 25) // all this prototype and this context and created by using new keyword, new keyword actually creates that new empty context where we do all that shit that we discussed
const tea = createUser("tea", 250) // this is incorrect as it does not have new keyword

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/