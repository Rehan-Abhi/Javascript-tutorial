const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this means current context, using this. helps to access the variable from current context
        console.log(this); // this will print the current context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  -> answer:{}, but agar hum isi ko browser me jake krte to windows ke related bahut bhara hua object aata ha, thus node ka global env is an empty object whereas browser ka global env is windows ke sare elements
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // NOTE-> FUNCTION KA CONTET ALAG SA HI AATA HA, ISME HUM AISE this.username USE NHI KR SAKTE, WO HUM SIRF OBJECTS ME HI USE KR SAKTE HAIN | isme answer undefined aayega
// }

// chai()

// const chai = function () {
//     let username = "hitesh"    // just another way of decalaring a function but isme bhi same ooper wale jaisa hi kaam hoga
//     console.log(this.username);  
// }

const chai =  () => {     // arrow function ka syntax -> (parameters) => {expression}
    let username = "hitesh"
    console.log(this); // answer-> {} | arrow functions do not have thier own bindings to this like our normal functions
}


// chai()

// const addTwo = (num1, num2) => { 
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 -> if we omit curly braces, then return is implicitly there, if we write curly braces, then return has to be explicitly written | we can also omit () if we have a single simple parameter

// const addTwo = (num1, num2) => ( num1 + num2 ) -> expression me () ye parenthesis ka ye fayda ha ki agar hume andar object return krwana ha to krwa sakte hain

const addTwo = (num1, num2) => ({username: "hitesh"}) // -> parenthesis made it possible to return this object in expression


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

