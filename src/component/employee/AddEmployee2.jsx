import React from 'react'
import { useForm } from 'react-hook-form'

export const AddEmployee2 = () => {

        const {register,handleSubmit,formState:{errors={}}} = useForm()
        
        console.log("errors...",errors);
        const submitHandler = (data)=>
        {
            console.log(data);

        }
        const validationSchema = {
            nameValidation:{
                required:
                {
                    value:true,
                    message:"Name is required!!"
                }
            },
            age:{
                required:{
                    value:true,
                    message:"Age is required!!"
                },
                min:{
                    value:18,
                    message:"Age should be greater than 18"
                },
                max:{
                    value:60,
                    message:"Age should be less than 60"
                }
            },
            address:{
                required:{
                    value:true,
                    message:"Address is required!!"
                },
                minLength:{
                    value:10,
                    message:"Address should be greater than 10"
                },
                maxLength:{
                    value:100,
                    message:"Address should be less than 100"
                }
            }
        }
  return (
    <div>
        <h1>AddEmployee2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                {/* <input type='text' {...register,("name",{required:true})}/> */}
                {/* <input type="text" {...register("name",{required:{value:true,message:"name is required!!"}})}></input> */}
                <input type="text" {...register("name",validationSchema.nameValidation)}></input>
                {
                    errors.name && <p>{errors.name.message}</p>
                }
            </div>
            
            <div>
                <label>AGE</label>
                <input type="text" {...register("age",validationSchema.age)}></input>
                {
                    errors.age && <p>{errors.age.message}</p>
                }
            </div>
            <div>
                <label>ADDRESS</label>
                <input type="text" {...register("address",validationSchema.address)}></input>
                {
                    errors.address && <p>{errors.address.message}</p>
                }
            </div>

            <div>
                {
                    errors.name || errors.age || errors.address || errors?.length
                    ? <input type='submit' value='ADD EMPLOYEE' disabled />
                    : <input type='submit' value='ADD EMPLOYEE' />
                }
            </div>
        </form>
    </div>
  )
}
