import React, { useState } from 'react'

export const UserReg = (props) => {

  const [id, setid] = useState()
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [age, setage] = useState(0)
  
   var user = {
        
                  // id: Math.round((Math.random()*10000)).toString(),
                  // name: "harsh",
                  // email: "harsh@gmail.com",
                  // age: 20,
                  id: Math.round((Math.random()*10000)).toString(),
                  name:name,
                  email:email,
                  age:age
                
            }


    const submitHandler = (event)=>{

        event.preventDefault()
        console.log("submitHandler Called")
        console.log(id)
        console.log(name)
        console.log(email);
        console.log(age);

    } 

    const idHandler = (event)=>{
      console.log(event)
      console.log(event.target.value)
      setid(event.target.value)
    }
  
    return (
    <div>
        <h1>UserReg -- Component</h1>
        {/* <form onSubmit={(event)=>{submitHandler(event)}}>
        <div>
        <label>ID:</label>
        <input type='text' onChange={(event)=>idHandler(event)}/>
        {id}
        <br></br><label>Name:</label>
        <input type='text' onChange={(event)=>setname(event.target.value)}/>
        <br></br>
        <label>Email:</label>
        <input type='text' onChange={(event)=>setemail(event.target.value)}/>
        <br></br>
        <label>Age:</label>
        <input type='number' onChange={(event)=>setage(event.target.value)}/>
        </div>
        <input type='submit' value="submit"/> 
        <input type='button' value="Add" className='btn btn-primary' onClick={()=>props.addUsers(user)}/> 
        </form> */}


        <form>
        <div>
        {/* <label>ID:</label>
        <input type='text' onChange={(event)=>idHandler(event)}/>
        {id} */}
        
        <br></br><label>Name:</label>
        <input type='text' onChange={(event)=>setname(event.target.value)}/>
        <br></br>
        <label>Email:</label>
        <input type='text' onChange={(event)=>setemail(event.target.value)}/>
        <br></br>
        <label>Age:</label>
        <input type='number' onChange={(event)=>setage(event.target.value)}/>
        </div>
        {/* <input type='submit' value="submit"/>  */}
        <input type='button' value="Add" className='btn btn-primary' onClick={()=>props.addUsers(user)}/> 
        </form>
    </div>
  )
}
