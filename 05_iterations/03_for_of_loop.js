// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // for-of loop me hume koi increment, koi condition kuch nhi dalna hota, wo sab apne aap kr leta ha
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps -> objects ki hi behn ha

const map = new Map() // Map is a collection of key value pairs, where keys can be of any data type and values can also be of any data type. It maintains the order of insertion and allows duplicate values but not duplicate keys.
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") 

// note-> in order to use forof for objects, we need to convert the object into an array of key-value pairs using Object.entries() method. This method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. But in case of Map, we can directly use for-of loop to iterate over its entries without any conversion. This is because Map is designed to be iterable and provides built-in methods for iteration, such as keys(), values(), and entries(). Therefore, we can directly use for-of loop to iterate over the entries of a Map without needing to convert it into an array of key-value pairs.


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { 
//     console.log(key, ':-', value);
    
// }
// this will give an error because myObject is not iterable, we need to convert it into an array of key-value pairs using Object.entries() method}