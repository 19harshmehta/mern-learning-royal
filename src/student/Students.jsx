import React, { useState } from 'react'
import { StudentList } from './StudentList'
import { AppContext } from '../context'

export const Students = () => {

  const [students, setstudents] = useState([

    {
      id:1,
      name:"Harsh",
      age:20,
      marks:80
    },
    {   
      id:2,
      name:"Hiten",
      age:21,
      marks:90
    },
    {
      id:3,
      name:"Mahek",
      age:22,
      marks:70
    }
  ])

  const studentDispatcher = (action,payload) =>{
    switch(action){

      case "ADD_STUDENT":
          setstudents([...students,payload])
      break;
      case "DELETE_STUDENT":
          setstudents(students.filter((student)=>student.id!=payload.id))
      break;

    }
  }
  return (
    <div>
      <div>
        <AppContext.Provider value={{name:"harsh",students,studentDispatcher}}>
            <StudentList/>
        </AppContext.Provider>
    </div>
    </div>
  )
}

