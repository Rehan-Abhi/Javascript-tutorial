// console.log(2>1);
// console.log(2>=1); 
// console.log(2<=1);    { the answers to all of these are going to be boolean}
// console.log(2==1);
// console.log(2!=1); 

console.log("2" > 1); // true
console.log("02" > 1); //true

console.log(null > 0); // false
console.log(null == 0); // false {NOTE->THIS HAPPENS BECAUSE COMPARISON OPERATORS CONVERT ANYTHING TO NUMBER, i.e NULL TO ZERO}
console.log(null >= 0); // true  {BUT, THE EQUALITY OPERATOR i.e == DOES NOT CONVERT NULL OR ANYTHING ELSE TO NUMBER}

// simmilarly, when we will do all the comparisons with undefined, everything will be false becuase undefined's number value is also undefined


// === STRICT CHECK -> also check the datatype of the value
console.log("2" ==2)// true
console.log("2"===2)// false