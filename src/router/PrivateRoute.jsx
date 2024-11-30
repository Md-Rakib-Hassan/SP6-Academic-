import { Navigate } from "react-router-dom";

 const PrivateRoute = ({ children })=>{
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    if (name&&email) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
    
}

export default PrivateRoute;