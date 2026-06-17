// this is a deep concept of objects-> of how there are properties related to each key of an object and how can we set them.

const descripter = Object.getOwnPropertyDescriptor(Math, "PI") // this makes us available the properties of a key inside an object/module such as writable, enumerable, configurable

// console.log(descripter);

// console.log(Math.PI);
// Math.PI =  5     // -> becuase the developer has hard coded the value of pi and set its writable property to be false, thus we cannot override this property.
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', { // this is how we can set these properties of a key, here we have set its enumerability to false, thus this name key cannot be iterated.
    //writable: false,
    enumerable: false ,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) { // note we use Object.entries to apply loop of an object
    if (typeof value !== 'function') { // we do not want a method to be iterated
        
        console.log(`${key} : ${value}`); // here on iteration, we will not get name key because we have set its enumerability as false
    }
}