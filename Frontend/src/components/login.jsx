import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>

          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            
            {/* Email */}
            <div className="mt-4 space-y-2">
                <label>Email</label>
                <br/>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: "Email is required" })}/>
                  <br />
                {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>)}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
                <label>Password</label>
                <br/>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: "Password is required" })}/>
                  <br />
                {errors.password && ( <span className="text-red-500">{errors.password.message}</span>)}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4">
                <button 
                  type="submit" 
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Login
                </button>
                <p>Not Registered?{" "} 
                <Link to="/signup1" className="underline text-blue-500 cursor-pointer"> SignUp</Link>
                </p>
            </div>
          </form>

          {/* Close Button */}
          <Link 
            to="/" 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >✕</Link>
        </div>
      </dialog>
    </div>
  )
}

export default Login;
