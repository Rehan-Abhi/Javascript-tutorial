// const tinderUser = new Object() -> constructor method| this method and the method in the next line is almost same to decalre an object, but in this method a singleton is created while in the other mutliple instances can be there 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy" // adding elemets in an already declared object
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",       // depicts nesting of an object
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); -> shows how we can go into as much depth of nesting as required

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } -> objects in an object
// const obj3 = Object.assign({}, obj1, obj2, obj4) ->this .assign puts all the values of souce objects i.e all objects except first object into the target object that is the first object, example -> here all the elements from obj1,obj2,obj3 are added to {} 

const obj3 = {...obj1, ...obj2} // wahi apna spread method
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"    // objects in array
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email 
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); -> prints all the keys of desired object in an **array**
// console.log(Object.values(tinderUser)); -> prints all the values of keys of a desired object in an **array**
// console.log(Object.entries(tinderUser)); -> prints both keys and values of an object in an **array**

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); -> checks if a specific key exsists in an object


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
