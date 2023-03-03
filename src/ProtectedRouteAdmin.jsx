import { Navigate } from "react-router-dom"


const ProtectedRouteAdmin = ({ children}) => {
    const adminToken = localStorage.getItem("adminToken")

    if(!adminToken) {
        return <Navigate to = {"/admin/adminLogin"} replace = {true}></Navigate>
    }
    return children
}

export default ProtectedRouteAdmin