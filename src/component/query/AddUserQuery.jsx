import React, { useEffect } from 'react'
import { useAddUserData } from './UserService'

export const AddUserQuery = () => {
    const {isLoading ,isIdle , data , isError ,mutate} = useAddUserData();
    useEffect(() => {

        console.log("data", data);
        console.log("isError", isError);
        console.log("isLoading", isLoading);
        console.log("isIdle", isIdle);
    
      }, [isIdle,isLoading])

      const addUser = async () => {

        const user = {
            name:"Harsh",
            email:"Harsh@gmail.com",
            age:20,
            isActive:true
        }
        mutate(user);
    
      }
  return (
    <div>
        <h1>Add User</h1>
        <button onClick={()=>{addUser()}}>Add User</button>

    </div>
  )
}
