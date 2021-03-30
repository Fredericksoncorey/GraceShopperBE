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



const testAPI = async () => {
    try {
//you can consolelog tests here.
//npm run testAPI make sure to control+c and re-run after adjustments 
        //console.log(await testUsersDOTget())
        //console.log(await testUsersSLASHregister())
        console.log(await testCartDOTget())
    } catch (error) {
        console.error(error)
    }
}

testAPI()