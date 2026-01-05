// array

const myArr = [0, 1, 2, 3, 4, 5] // array can include elements of any datatype, and they are resizable
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // object -> array
// console.log(myArr[1]); -> prints the elemment of index 1, indexing starts from 0

// Array methods

// myArr.push(6) -> adds an element (6 in this case), to an array , i.e makes changes directly to the original array
// myArr.push(7)
// myArr.pop() -> deletes last element from an array

// myArr.unshift(9) -> adds an element to the 0th index of an array, well this shifts all the other elements one index up, so it is not good for computer optimisation
// myArr.shift() -> deletes the element from 0th index of an array

// console.log(myArr.includes(9)); -> boolean output
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() -> combines all the elements of an array into a string and does not modify the original array, it seprates all the elements with commas

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice gives an array with elements of given index range but does not include the last index | slice does not modify the original array 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice gives an array with elements of given index range including both first and last indexes of the range | splice cuts out the array of given inex range from the original array and thus changes the original array
console.log("C ", myArr);
console.log(myn2);