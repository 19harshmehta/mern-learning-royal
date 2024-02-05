import axios from 'axios';
import React from 'react'

export const ApiDemo3 = () => {

    const deleteApiDemo = async () => {

        const res = await axios.delete("https://node5.onrender.com/user/user/6589801fb9c5d74da688995b")
        console.log(res);
        if(res.status == 204){
            alert("User Deleted Successfully")
        }
        else{
            alert("Something Went Wrong")
        }
    }
  return (
    <div>
        <h1>DELETE Api Demo</h1>

        <button onClick={()=>deleteApiDemo()}>Delete Api Demo</button>
    </div>
  )
}
