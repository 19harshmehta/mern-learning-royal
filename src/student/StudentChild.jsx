import React, { useContext } from 'react'
import { AppContext } from '../context'

export const StudentChild = () => {

    const {name} = useContext(AppContext)
    
    const {company} = useContext(AppContext)
  return (
    <div>
        <h1>Student Child</h1>
        <h1>{name}</h1>
        <h1>{company}</h1>

    </div>
  )
}
