const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,                     // this is an example of object literal

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);       // this is used for same context
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this          // agar hum explicitly return nhi bhi likhenge to bhi wo implicitly return ho hi jayega
}

const userOne = new User("hitesh", 12, true) // this new keyword creates a new instance for the same method
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); // this will giv the reference of itself 
//console.log(userTwo);

// note-> if we do not use new keyword and keep on creating instances, then every instance will override its previous instance, because there is only one instance in that case.