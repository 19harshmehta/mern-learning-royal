import axios from 'axios'
import React from 'react'

export const ApiDemo5 = () => {
    const addUser = async () => {

        const user = {
            name:"hiten",
            email:"h101@gmail.com",
            status:"active",
            gender:"male"
        }

        try{
            const res = await axios.post("https://gorest.co.in/public/v2/users",user,{
                headers:{
                    "Authorization":"Bearer d3dafa68749e808e6585444242472dadb12121cbfc20a204d71acb6bd3d35532"
                }
            })
            console.log(res.data)           

        }catch(err){

                console.log("catch",err)

        }



    }


  return (
    <div>
        <button onClick={()=>{addUser()}}>Add User</button>
    </div>
  )

}
