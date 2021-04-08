const  fetch  = require("node-fetch");
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJnbGFtZ2FsIiwiZW1haWwiOiJnbGFtZ2FsQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxNzY3Mzk2OH0.hgRsJ7kqChS_QxSmHH9EY83eyHEUKwBUBO6eEZ-pcu4"
//This is a useful testsuite for API
//Write functions here and as if they are an API fetch call on front end. 
//then throw it in the testAPI function.

const testGetAllProductsWithReviews = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/products/`)
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

const testUsersPostSLASHLogin = async (username, password) => { //get /users
    try {
        const response = await fetch(`http://localhost:3000/api/users/login`,
            {
                method: "POST",
                body: JSON.stringify({ username: username, password: password }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
        const data = response.json()
            //console.log(data)
            return data
        } catch (error) {
            console.error(error)
        }
    }


const testProductsSLASHgenre = async (genre) => { //get /products
    const genreParam = genre.replaceAll(" ", "%20")
    try {
        const response = await fetch(`http://localhost:3000/api/products/genre/${genreParam}`
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
            })
            const data = response.json()
            console.log(data)
            return data
        } catch (error) {
            console.error(error)
        }
    }
        //console.log(data)
const testProductsSLASHartist = async (artist) => { //get /artist
    const artistParam = artist.replaceAll(" ", "%20")
    try {
        const response = await fetch(`http://localhost:3000/api/products/artist/${artistParam}`
    )
        const data = response.json()
        console.log(data)
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
// const testCartItemDOTdelete = async () => {
//     try {
//         const response = await fetch(`http://localhost:3000/api/cart/2`)
//         const data = response.json()
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// const testCartDOTget = async () => { //get /cartbyId
//     try {
//         const response = await fetch(`http://localhost:3000/api/cart/1`)
//         const data = response.json()
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }
// const testUsersDOTget = async () => { //get /users
//     try {
//         const response = await fetch(`http://localhost:3000/api/users`)
//         const data = response.json()
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// const testSLASHproducts = async () => { //get /products
//     try {
//         const response = await fetch(`http://localhost:3000/api/products`
//     )
//         const data = response.json()
//         console.log(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }
// const testUsersSLASHregister = async () => { //get /users
//     try {
//         const response = await fetch(`http://localhost:3000/api/users/register`,
//             {
//                 method: "POST",
//                 body: JSON.stringify({ username: 'Corey', password: 'BlargityBlargBlarg',  email: 'RainbowSprinkles@tuba.net'}),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//     )
//         const data = response.json()
//         //console.log(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// const testSLASHgenre = async () => { //get /products
//     try {
//         const response = await fetch(`http://localhost:3000/api/products/genre`
//     )
//         const data = response.json()
//         console.log(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }
// const testGetUsersSLASHMe = async () => {
//     try {
//         const response = await fetch(`http://localhost:3000/api/users/me`,
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGJlcnQiLCJlbWFpbCI6ImFsYmVydEBnbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjE3MTI4MDExfQ.sqxuCkUByfS4mgcuIAOB-kmiYov5PnTDJCK4KqJ-VJQ'
//                 }
//             }
//     )
//         const data = response.json()
//         //console.log(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// const testUsersPostSLASHLogin = async () => { //get /users
//     try {
//         const response = await fetch(`http://localhost:3000/api/users/login`,
//             {
//                 method: "POST",
//                 body: JSON.stringify({ username: 'albert', password: 'bertie99'}),
//                 headers: {
//                     "Content-Type": "application/json",
//                 }
//             })
//         const data = response.json()
//             //console.log(data)
//             return data
//         } catch (error) {
//             console.error(error)
//         }
//     }


// const testSLASHgenre = async (genre) => { //get /products
    
//     try {
//         const response = await fetch(`http://localhost:3000/api/products/genre/${genre}`
//     )
//         const data = response.json()
//         //console.log(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// const testGetUsersSLASHUsernameSLASHcart = async () => {
//     const username = "albert"
//     try {

//         const response = await fetch(`http://localhost:3000/api/users/${username}/cart`,
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//     )
//         const data = response.json()
//         //console.log(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// const testGetUsersSLASHUsernameSLASHorders = async (/* username */) => {
//     const username = "albert"
//     try {

//         const response = await fetch(`http://localhost:3000/api/users/${username}/orders`,
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`
//                 }
//             })
//             const data = response.json()
//             console.log(data)
//             return data
//         } catch (error) {
//             console.error(error)
//         }
//     }
//         const data = response.json()
//         //console.log(data)
// const testSLASHartist = async () => { //get /artist
//     const artist = 'Best ever'
//     try {
//         const response = await fetch(`http://localhost:3000/api/products/${artist}`
//     )
//         const data = response.json()
//         console.log(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// const testUsersPatchSLASHUserId = async (/* userId */) => { //get /users
//     const userId = 1
//     try {
//         const response = await fetch(`http://localhost:3000/api/users/${userId}`,
//             {
//                 method: "PATCH",
//                 body: JSON.stringify({ username: 'FatherGregory', email: "handmemyboomstick@yahoo.com"}),
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`
//                 }
//             }
//     )
//         const data = response.json()
//         //console.log(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

const testproductsSLASHReview = async (review) => { //get /artist
    const artistParam = artist.replaceAll(" ", "%20")
    try {
        const response = await fetch(`http://localhost:3000/api/products/artist/${artistParam}`
    )
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}

const testProductsPostSLASH = async () => { 
    try {
        const response = await fetch(`http://localhost:3000/api/products`,
            {
                method: "POST",
                body: JSON.stringify({ 
                    title: "The Razors Edge", 
                    imageLink: "https://upload.wikimedia.org/wikipedia/en/a/a8/Razorsedge.jpg",  
                    artist: "AC/DC", 
                    genre: "Hard Rock",
                    releaseDate: "09/10/1990",
                    description: "Songs listed, etc.",
                    price: 12.00,
                    quantity: 13
                }),
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

const testProductsDeleteSLASHProductId = async (productId) => { 
    try {
        const response = await fetch(`http://localhost:3000/api/products/${productId}`,
            {
                method: "DELETE",
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

const testProductsPatchSLASH = async (productId) => { 
    try {
        const response = await fetch(`http://localhost:3000/api/products/update/${productId}`,
            {
                method: "PATCH",
                body: JSON.stringify({ 
                    title: "The Open Door", 
                    imageLink: "https://upload.wikimedia.org/wikipedia/en/a/a8/Razorsedge.jpg",  
                    artist: "Evanescence", 
                    //genre: "Hard Rock",
                    releaseDate: "09/10/2002",
                    //description: "Songs listed, etc.",
                    price: 20.00,
                    quantity: 16
                }),
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
        console.log(await testFunction(5))
        //console.log("RESULTS", await testUsersPostSLASHLogin())
        // console.log(await testSLASHproducts())
        // console.log(await testSLASHgenre())
        // console.log(await testSLASHartist())
        //console.log(await testUsersSLASHregister())
        console.log(await testGetAllProductsWithReviews())
    } catch (error) {
        console.error(error)
    }
    

}

testAPI(testGetAllProductsWithReviews, 'testGetAllProductsWithReviews')
