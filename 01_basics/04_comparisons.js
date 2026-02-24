// console.log(2>1);
// console.log(2>=1); 
// console.log(2<=1);    { the answers to all of these are going to be boolean}
// console.log(2==1);
// console.log(2!=1); 

console.log("2" > 1); // true
console.log("02" > 1); //true

console.log(null > 0); // false {NOTE->THIS HAPPENS BECAUSE COMPARISON OPERATORS CONVERT ANYTHING TO NUMBER, i.e NULL TO ZERO}
console.log(null == 0); // false {BUT, THE EQUALITY OPERATOR i.e == DOES NOT CONVERT NULL OR ANYTHING ELSE TO NUMBER}
console.log(null >= 0); // true  {AND THIS HAPPENS BECAUSE THE GREATER THAN OR EQUAL TO OPERATOR CONVERTS NULL TO ZERO, AND ZERO IS EQUAL TO ZERO, SO IT RETURNS TRUE}

// simmilarly, when we will do all the comparisons with undefined, everything will be false becuase undefined's number value is also undefined


// === STRICT CHECK -> also check the datatype of the value | similarly we have !==
console.log("2" ==2)// true
console.log("2"===2)// false