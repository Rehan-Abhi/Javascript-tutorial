//var c = 300 -> we never use var because var does not obey block scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"        // simple concept-> hum parent block ke variables ko daughter block me use kr sakte hain but ulta kaam nhi kr sakte -> very obvious
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // isme error nhi aayega

function addone(num){
    return num + 1             // by this method of declaring functions, we can execute the function before declararion 
}



addTwo(5)    // isme error aa jayega
const addTwo = function(num){   // by this method of declaration of functions, we cannot execute the function before declaration
    return num + 2
}