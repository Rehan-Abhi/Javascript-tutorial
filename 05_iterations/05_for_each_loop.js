// for each loop is designed to iterate over arrays.
const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach( function (val){   
//     console.log(val);
// } )

// coding.forEach( (item) => {     // note-> this item is a  not a defined name of parameter that is used to access the items of the array
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);      // note these parameter names are not defined, their order is defined which performs these specific functions
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )