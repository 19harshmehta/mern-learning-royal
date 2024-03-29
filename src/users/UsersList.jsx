import React from 'react'

export const UsersList = (props) => {
  return (
    <div><h1>UsersList</h1>
    


<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {props.users?.map((u)=>{
        return (
            <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                <td>
                  <button onClick={()=>{props.deleteUser(u.id)}} className="btn btn-danger">DELETE</button>
                </td>

            </tr>

        )
    })}
    
  </tbody>
</table>
<h1>
{
        props.users?.length === 0 ? "No Record Found":""
}
</h1>
    <button onClick={()=>{props.test("HArsh")}}>Test NAme</button>
    </div>
  )
}
 