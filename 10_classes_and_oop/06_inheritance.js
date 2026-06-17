class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{                  // this is what we call inheritance. Teacher class inherits the User class
    constructor(username, email, password){
        super(username)      // this keyword under the hood does all that .call and use of 'this' that we learnt in 04_call.js
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);  // by this keyword, we can check if an object is an instance of a class