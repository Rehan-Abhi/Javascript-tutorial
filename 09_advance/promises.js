const promiseOne = new Promise(function(resolve, reject){
    // promises ke andar hum async task likhte hain
    // DB calls, cryptography, network -> these are things where promise is applied
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()                                  // this is creation of promise 
    }, 1000)
})

promiseOne.then(function(){                       // this is consumption of promise
    console.log("Promise consumed");              // .then() is related to resolve
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)                              // same hi kaam kia, bas humne koi vairable me nhi rakha promise

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){                   // giving data from resolve to then ka function
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')             // reject() is for error handling
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);                          // chaining 
    return user.username             // jo humne ek then me return kra ha wo hum uske agle then me as a parameter use kr sakte hain
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // finally()


//       consuming promises by async and await 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})   // creating a promise
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive  // in order to handle errors in async await, we use try catch
        console.log(response);        // await is like a pause button for the execution of current function. it pauses the execution of further code until that await promise is settled
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()              // note-> response ka data json me convert hone me bhi time lagta ha, isiliye waha pe bhi await lagana zaruri ha, await ka kaam ha ki wo jab tak kaam nhi ho jata code ko aage nhi jane
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')    // using fetch
.then((response) => {                      // note-> fetch ki speacial high priority task queue banti ha (micro task queue), isi liye fetch ka kaam baki kaamo se high priority pe hota ha
    return response.json()
})                                           
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

//fetch can take 2 parameters, in the first one we give the url and in the second one, we can give data like we did in response()

// promise.all
// yes this is also available, kuch reading aap b kro.