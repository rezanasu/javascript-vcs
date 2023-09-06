const login = (username, password) => {


    if(username === "admin"  && password === "admin") {
        console.log("Login successfull")
    } else {
        console.log("Login failed")
    }
}

let username = "admin"
let password = "adminxcvxcvxcv"

login(username, password)