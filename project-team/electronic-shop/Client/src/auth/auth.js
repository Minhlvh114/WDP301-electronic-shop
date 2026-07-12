// import { useState } from "react"


let user = {
    role: 'GUEST'
}
const SignIn = (user) => {
    user = {
        ...user,
        role: 'ADMIN'
    }
    return user
}

const Logout = () => {
    user = {
        role: 'GUEST'
    }
    return user
}

const auth = {
    SignIn,
    Logout,
    user
}


export default auth