
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");  // function is just a medium of containing a bunch of code which can easily be accessed/referred/executed whenever required
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() -> by sayMyName -> we refer to the function and by adding () we execute that function 

// function addTwoNumbers(number1, number2){    -> these number1 and number 2 are parameters of the function

//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5) -> these 3 and 5 are called arguements of the function
// now we can store this in a variable -> const result = addTwoNumbers(3,5) | but still if we try to console.log(result), we will get undefined, i.e the value of the executed function is not yet returned to the variable. for that aage ka code padho         

function addTwoNumbers(number1, number2){

    // let result = number1 + number2       // now that we have returned this value, now we can use this value in a variable
    // return result                        // NOTE-> after return, no code is executed | return ke neeche ka code execute nhi hoga 
    return number1 + number2    // alternate way of writing the same shit
    
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function loginUserMessage(username = "sam"){   // by specifying a value of usernamme, we prevent undefined value of username in case no arguement value is there while calling the function, i.e in this case, if wala code execute hoga hi nhi 
    if(!username){            // this !username means username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))



function calculateCartPrice(val1, val2, ...num1){     // this is used when number of input values is not known | this ... here is called rest operator which puts all the values of arguement value in an array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) -> here 200 gets stored in val1, 400 gets stored in val2 and rest of the elements get stored in num1 in array format 

const user = {
    username: "hitesh",                 // used to show how to use an object in a function
    prices: 199           
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",       // shows that we can directly put an object in the arguement value
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]                   // shows how to use an array with a function
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //shows that we can directly put an array in the arguement value