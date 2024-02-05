import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const AddEmployee = () => {

    const {register,handleSubmit} = useForm()
    const [employee, setemployee] = useState({})
    const [isSubmitted, setisSubmitted] = useState(Boolean)
    const colorStyle = {
        color: employee.color
    }

    const submitHandler = (data)=>{

        console.log(data)
        setemployee(data)
        setisSubmitted(true)
    }
  return (
    <div>
        <h1>AddEmployee</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text'{...register("name")}></input>
            </div>
            <div>
                <label>Age</label>
                <input type='number'{...register("age")}></input>
            </div>
            <div>
                    <label>GENDER</label>
                    <br/>
                    MALE : <input type="radio" name='gender' value="male" {...register("gender")}></input> <br/>
                    FEMALE : <input type="radio" name='gender' value="female" {...register("gender")}></input> <br/>
            </div>
            <div>
                <label>Department</label>
                <select {...register("dept")}>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="SALES">SALES</option>
                </select>
            </div>
            <div>
            <label>SKILLS</label>
                    <br/>
                    JAVA : <input type="checkbox" name='skills' value="java" {...register("skills")}></input> <br/>
                    HTML : <input type="checkbox" name='skills' value="html" {...register("skills")}></input> <br/>
                    CPP : <input type="checkbox" name='skills' value="python" {...register("skills")}></input> <br/>
            </div>
            <div>
                <label>Color</label>
                <input type='color' {...register("color")}></input>
            </div>
            <div>
                <input type='submit' value="Add Employee"></input>
            </div>

        </form>
        {
            isSubmitted &&
        
        <div style={colorStyle}>
                <h1>Employee Details</h1>
                <h4>Name : {employee.name}</h4>
                <h4>Age : {employee.age}</h4>
                <h4>Gender: {employee.gender}</h4>
                <h4>Color:{employee.color}</h4>
                {
                    employee.skills && employee.skills?.map((skill)=>{
                        return <h4>Skill: {skill}</h4>
                    })
                }
            </div>
        }
    </div>
  )
}
