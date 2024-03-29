import React from 'react'
import { useForm } from 'react-hook-form';

export const Login = () => {

    const {register, handleSubmit,formState:{errors}} = useForm();
    const submitHandler = async(data) => {
        console.log(data);
        const id = "fjkdbjsdbjs6325348589425"
        localStorage.setItem("id",id)
        sessionStorage.setItem("id",id)
    }



  return (
    <div>
        <h1>Login User</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter Email" {...register("email")} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="Enter Password" {...register("password")}/>
            </div>
            <div>
                <input type="submit" value="Login" />   
            </div>
        </form>
    </div>
  )
}
