const user = {
    role: "ADMIN"
}

const cart = []

const AuthAdmin = ({children}) => {
    if(user.role === "ADMIN"){
        return children
    }
    return null
}

export default AuthAdmin
