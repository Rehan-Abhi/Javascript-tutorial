// Immediately Invoked Function Expressions (IIFE) -> USE->. immediatelty function execute/invoke ho jata ha + MOST IMPORTANTLY->ye hume global scope pollution se bachata ha, i.e jo function ke scope ke bahr variables declared ha wo function block ko pollute krte hain, but in case of iife, aisa nahi hota

// syntax of iife-> ()() -> the first () is for defining the function, we can do that either by normal function expression or by arrow function method  |  //the second () is for execution, we can add arguement values in second(),

(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);
})();  // note-> ye ; bahut important ha because iife ko btana padta ha ki kab end krna ha 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
