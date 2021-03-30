const  fetch  = require("node-fetch");

//This is a useful testsuite for API
//Write functions here and as if they are an API fetch call on front end. 
//then throw it in the testAPI function.

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
const testGetUsersSlashme = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/users/me`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJDb3JleSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTcwNjQ5MDUsImV4cCI6MTYxNzE1MTMwNX0.yx4soW8cKkVt9OyHIRy7v-LvTHl208-sS-0R1noMJuc'
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



const testAPI = async () => {
    try {
//you can consolelog tests here.
//npm run testAPI make sure to control+c and re-run after adjustments 
        //console.log(await testUsersDOTget())
        console.log(await testGetUsersSlashme())
    } catch (error) {
        console.error(error)
    }
    

}

testAPI()