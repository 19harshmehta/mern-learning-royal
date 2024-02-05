import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

const fetchUserData = async ()=>{
    return axios.get("/user/user")
}

const useFetchUserData = () => {
    return useQuery("user",fetchUserData,{
        refetchOnMount:false,
        enabled:false,
        retry:10,
        retryDelay:1000,
    })
}

const addUserData = async (data) =>{
    return axios.post("/user/user",data)
}

const useAddUserData = () =>{
    var navigate = useNavigate()
    return useMutation(addUserData,{
        onSuccess:(data) =>{
            console.log("on sucess",data);
            navigate("/apidemo1")
        }
    })
}

export { useFetchUserData,useAddUserData}