import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { Login } from "../component/Login"




const useAuth = () => {
    const [id, setid] = useState()

    useEffect(() => {
        setid(localStorage.getItem("id"))
    }, [])
    
    if(id != undefined){
        return true;
    }
    return false;

}


const ProtectedRoute = () =>{
     const auth = useAuth();

     return auth == true ? <Outlet/> : <Login/>
};

export default ProtectedRoute;