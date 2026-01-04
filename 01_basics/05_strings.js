const name = "rehan"
const repoCount = 2

// console.log(name + repoCount + " Value"); -> this is the old method of adding strings and it is very outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is the new, more readable syntax of adding strings 

const gameName = new String('hitesh-hc-com') // this is how we declare strings, by this we can access the substrings within the string and do any manipulation required

// console.log(gameName[0]); -> this will access the 0th key of the string; the indexing of a string is done from 0 to n-1;
// console.log(gameName.__proto__);


// console.log(gameName.length); -> tells the number of elements
// console.log(gameName.toUpperCase()); -> NOTE- this is a string, this does not change the original string(stack)
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // prints the substring from 0th key till 3rd key, i.e 4th key is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4) // same as substring, but in slice, we can also use negative values
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trims extra starting and ending spaces/ trimStart and trimEnd also exsist


const url = "https://hitesh.com/hitesh%20choudhary" // browser does not understand spaces, i.e if a user has added space in url, browser automatically replaces it with %20  

console.log(url.replace('%20', '-')) // pretty obvious by syntax itself

console.log(url.includes('sundar')) // boolean output -> false

console.log(gameName.split('-')); // converts the string into array with respect to some seprator('-' for this case)