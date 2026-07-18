// this is the latest syntax of using getters and setters in class.
class User {
    constructor(email, password){
        this.email = email;  // now that we have get and set methods for these properties, this constructor will not be called when we try to get or set these properties, rather their get and set methods will executed in that case.
        this.password = password
    }

    get email(){               
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value // if we used the same email variable here, then it means that we are setting a value to email, then again the setter for email would get executed and this would lead to an infinite loop
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc") 
console.log(hitesh.email); // when we try to read this email property, its get method gets executed.