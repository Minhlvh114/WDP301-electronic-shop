

// import user from ...
const user = {
    role: "GUEST"
}
//children is program param. when put html tag into html tag parent . all tag in html parent is children 
const AuthGuest = ({children}) => {
    console.log(children)
    if(user.role === "GUEST"){
        return children
    }
    return null
}

export default AuthGuest



// import { Routes } from 'react-router-dom'
// import { createElement } from 'react'

// // import user from ...
// const user = {
//     role: "GUEST"
// }
// //children is program param. when put html tag into html tag parent . all tag in html parent is children 
// const AuthGuest = ({children}) => {
//     console.log(children)
//     if(user.role === "GUEST"){
//         return createElement(Routes, null, children)
//     }
//     return null
// }

// export default AuthGuest

