const  fetch  = require("node-fetch");
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGJlcnQiLCJlbWFpbCI6ImFsYmVydEBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjE3MTI4MDExfQ.sqxuCkUByfS4mgcuIAOB-kmiYov5PnTDJCK4KqJ-VJQ'
//This is a useful testsuite for API
//Write functions here and as if they are an API fetch call on front end. 
//then throw it in the testAPI function.

const testCartItemDOTdelete = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/cart/2`)
        const data = response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const testCartDOTget = async () => { //get /cartbyId
    try {
        const response = await fetch(`http://localhost:3000/api/cart/1`)
        const data = response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
const testUsersDOTget = async () => { //get /users
    try {
        const response = await fetch(`http://localhost:3000/api/users`)
        const data = response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const testSLASHproducts = async () => { //get /products
    try {
        const response = await fetch(`http://localhost:3000/api/products`
    )
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}
const testUsersSLASHregister = async () => { //get /users
    try {
        const response = await fetch(`http://localhost:3000/api/users/register`,
            {
                method: "POST",
                body: JSON.stringify({ username: 'Corey', password: 'BlargityBlargBlarg',  email: 'RainbowSprinkles@tuba.net'}),
                headers: {
                    "Content-Type": "application/json",
                },
            }
    )
        const data = response.json()
        //console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

const testSLASHgenre = async () => { //get /products
    try {
        const response = await fetch(`http://localhost:3000/api/products/genre`
    )
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}
const testGetUsersSLASHMe = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/users/me`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGJlcnQiLCJlbWFpbCI6ImFsYmVydEBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjE3MTI4MDExfQ.sqxuCkUByfS4mgcuIAOB-kmiYov5PnTDJCK4KqJ-VJQ'
                }
            }
    )
        const data = response.json()
        //console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

const testUsersPostSLASHLogin = async () => { //get /users
    try {
        const response = await fetch(`http://localhost:3000/api/users/login`,
            {
                method: "POST",
                body: JSON.stringify({ username: 'albert', password: 'bertie99'}),
                headers: {
                    "Content-Type": "application/json",
                }
            }
    )
        const data = response.json()
        //console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

const testGetUsersSLASHUsernameSLASHcart = async () => {
    const username = "albert"
    try {

        const response = await fetch(`http://localhost:3000/api/users/${username}/cart`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
    )
        const data = response.json()
        //console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

const testGetUsersSLASHUsernameSLASHorders = async (/* username */) => {
    const username = "albert"
    try {

        const response = await fetch(`http://localhost:3000/api/users/${username}/orders`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
    )
        const data = response.json()
        //console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

const testUsersPatchSLASHUserId = async (/* userId */) => { //get /users
    const userId = 1
    try {
        const response = await fetch(`http://localhost:3000/api/users/${userId}`,
            {
                method: "PATCH",
                body: JSON.stringify({ username: 'FatherGregory', email: "handmemyboomstick@yahoo.com"}),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
    )
        const data = response.json()
        //console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}



const testAPI = async (testFunction, string) => {
    try {
//you can consolelog tests here.
//npm run testAPI make sure to control+c and re-run after adjustments 
        //console.log(await testUsersDOTget())

        console.log(`RESULTS FOR ${string}`) 
        console.log(await testFunction())
        //console.log("RESULTS", await testUsersPostSLASHLogin())
    } catch (error) {
        console.error(error)
    }
    

}

testAPI(testCartItemDOTdelete, 'testCartItemDOTdelete')