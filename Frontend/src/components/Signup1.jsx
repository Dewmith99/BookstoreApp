import React from 'react'
import { Link } from 'react-router-dom'
import Login from "../components/login";
import { useForm } from "react-hook-form";

function Signup1() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
          console.log(data);
          document.getElementById("my_modal_3").close();
      };
    
  return (
    <>
    <div className="flex h-screen items-center justify-center">
    <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Signup</h3>

    <div className="mt-4 space-y-2">
        <span>Name</span>
        <br/>
        <input type="text" 
        placeholder="Enter your full name" 
        className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("name", { required: "Email is required" })}/>
    </div>
    <br />
                {errors.name &&(<span className="text-red-500">{errors.password.message}</span>)}

    {/* Email */}
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" 
        placeholder="Enter your email" 
        className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("email", { required: "Email is required" })}
        />
         <br />
                {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>)}
    </div>

    {/* password */}
    <div className="mt-4 space-y-2">
        <span>Password</span>
        <br/>
        <input type="text" 
        placeholder="Enter your password" 
        className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("password", { required: "Password is required" })}/>
        <br />
                {errors.password && ( <span className="text-red-500">{errors.password.message}</span>)}
    </div>

    {/* button */}
    <div className="flex justify-around mt-4">
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>

        <p className="text-x2">
            Have Account?{ " " } 
        <button to="/" className="underline text-blue-500 cursor-pointer"
        onClick={()=> document.getElementById("my_modal_3").showModal()}>
             Login
             </button>{ " " }
             <Login />
             </p>
    </div>
    </form>
   
  </div>
</div>
    </div>
    </>
  )
}

export default Signup1