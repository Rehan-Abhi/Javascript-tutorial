// this syntax of getter setters is less used and is a lil old.
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase() // these are the same propeties as we learnt by using Object.getOwnPropertyDescriptor(user, "email").here we have hard coded the value and writable properties with these functions which means that whenever we try to read or write to this property, specific getters and setters will be executed.
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);