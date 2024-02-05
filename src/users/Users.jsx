import React, { useState } from 'react'
import { UsersList } from './UsersList';
import { UserReg } from './UserReg';

export const Users = () => {
 


    var [count, setCount] = useState(0);
//     var users = [
//     {
//       id: 1,
//       name: "amit",
//       email: "amit@gmail.com",
//       age: 23,
//     },
//     {
//       id: 2,
//       name: "raj",
//       email: "raj@gmail.com",
//       age: 24,
//     },
//     {
//       id: 3,
//       name: "akshit",
//       email: "akshit@gmail.com",
//       age: 24,
//     },
//   ];
   var [users, setusers] = useState([
    {
        id: 1,
        name: "HArsh",
        email: "harsh@gmail.com",
        age: 20,
      },
      {
        id: 2,
        name: "hiten",
        email: "hiten@gmail.com",
        age: 22,
      },
      {
        id: 3,
        name: "mahek",
        email: "mahek@gmail.com",
        age: 19,
      },
   ])

  const deleteUser = (id) => {
        console.log("delete user", id);
        console.log("before delete", users);
        users = users.filter((u) => {
        return u.id !== id;
        });
        console.log("after delete...users", users);
    
    
    //update
    setusers(users)
    }

  const test = (name)=>{
     alert("name" + name)
  }
  const increment = () => {
    //count = count + 1;
    setCount(count + 1);
  };

  const addUsers = (user) => {

    users = [...users,user]
    setusers(users)
    console.log("Add User")

  }


return (
    <div>
      <h1>Users</h1>
      <UserReg addUsers={addUsers}/>
    <UsersList users={users} test={test} increment={increment} deleteUser={deleteUser}/>
    {/* <button onClick={()=>test("Harsh")}>Test</button> */}
    {/* <h1>Count -- {count}</h1> */}
    {/* <button  onClick={() => {increment();}}>Increament</button> */}
    </div>

  )
}
