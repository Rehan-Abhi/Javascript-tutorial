// for in loop is used to iterate the keys/names of an object.
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
} // here it iterates just the keys of an object by default.

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
} // as for in loops iterates over the keys of an object, for an array it iterates over the index of the array.

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// } // NOTE-> FOR IN LOOP DOES NOT WORK WITH MAPS. Atleast not directly.