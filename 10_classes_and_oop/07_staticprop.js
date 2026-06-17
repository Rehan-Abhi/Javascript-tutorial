//static properties are the properties of a class which all its instances cannot access. for eg-> agar hum koi random id generate krwa rhe hain har instance ki to hum nhi chahte ki wo method har instance use kr sake apne aap.
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // this property/method now cannot be used by any of its instance or its child
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());  // here even its child cannot access that static property/method