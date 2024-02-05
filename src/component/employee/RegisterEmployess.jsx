import React from 'react'
import { useForm } from 'react-hook-form'

export const RegisterEmployess = () => {

    const {register,handleSubmit,formState:{errors},reset} = useForm(
        {
            mode:"all"
        }
    )
    const submitHandler = (data)=>{

        console.log(data)
        reset()
        console.log(errors)

    }

    const validationSchema = {
        name:{
            required:
            {
                value:true,
                message:"Name is required!!"
                
            },
            minLength:{
                value:3,
                message:"Name should be minimum of 3"
            }
            
        },
        gender:{
            required:{
                value:true,
                message:"Gender is Required*"
            }
        },
        department:{
            required:{
                value:true,
                message:"Select one Department "
            }
        },
        skills:{
            required:{
                value:true,
                message:"Skills is Required*"
            },
            validate:(value) =>{
                return value.length >= 2 || "Select atleast 2 Skills"
            }
        },
        contact:{
            required:{
                value:true,
                message:"Contact is Required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Invalid Contact Number*"
            }
        },
        email:{
            required:{
                value:true,
                message:"Email is Required*"
            },
            pattern:{
                value:/[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,4}$/,
                message:"Invalid Email*"
            }

        },
        password:{
            required:{
                value:true,
                message:"Password Required*"
            },
            pattern:{
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                message:"Password Invalid"
            }
        }
        
    }

  return (
    <div>
        <h1>Register Employee</h1>
        
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text'{...register("name",validationSchema.name)}></input><br/>
                        {
                            errors.name && <span style={{color:"red"}}>{errors.name.message}</span>
                        }
            </div>
            <div>
                    <label>GENDER</label>
                    <br/>
                    MALE : <input type="radio" name='gender' value="male" {...register("gender",validationSchema.gender)}></input> <br/>
                    FEMALE : <input type="radio" name='gender' value="female" {...register("gender",validationSchema.gender)}></input> <br/>
                    {
                        errors.gender && <span style={{color:"red"}}>{errors.gender.message}</span>
                    }
            </div>
            <div>
                <label>Department</label>
                <select {...register("department",validationSchema.department)}>
                        <option value="">Select One</option>
                        <option value="IT">IT</option>
                        <option value="HR">HR</option>
                        <option value="SALES">SALES</option>
                </select><br/>
                {
                        errors.department && <span style={{color:"red"}}>{errors.department.message}</span>
                }
            </div>
            <div>
            <label>SKILLS</label>
                    <br/>
                    JAVA : <input type="checkbox" name='skills' value="java" {...register("skills", validationSchema.skills)}></input> <br/>
                    HTML : <input type="checkbox" name='skills' value="html" {...register("skills",validationSchema.skills)}></input> <br/>
                    CPP : <input type="checkbox" name='skills' value="python" {...register("skills",validationSchema.skills)}></input> <br/>
                    {
                        errors.skills && <span style={{color:"red"}}>{errors.skills.message}</span>
                    }
            </div>

            <div>
                    <label>CONTACT</label>
                    <input type="text" {...register("contact",validationSchema.contact)}></input><br/>
                    {
                        errors.contact && <span style={{color:"red"}}>{errors.contact.message}</span>
                    }
            </div>

            <div>
                    <label>Email</label>
                    <input type="text" {...register("email",validationSchema.email)}></input><br/>
                    {
                        errors.email && <span style={{color:"red"}}>{errors.email.message}</span>
                    }
            </div>

            <div>
                    <label>Password</label>
                    <input type="password" {...register("password",validationSchema.password)}></input><br/>
                    {
                        errors.password && <span style={{color:"red"}}>{errors.password.message}</span>
                    }
            </div>

            <div>
                <input type='submit' value="Add Employee"></input>
                <input type='button' value="Reset" onClick={()=> reset()}/>
            </div>

        </form>  
    </div>
  )
}
