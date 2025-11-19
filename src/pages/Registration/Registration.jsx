import React from 'react';
import { useForm } from 'react-hook-form';

const Registration = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    const handleRegister = (data) =>{

    }
    return (
      <div>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              {...register("text", { required: true })}
              className="input"
              placeholder="name"
            />
            {errors.text?.type === "required" && (
              <p className="text-red-500">Name is Required</p>
            )}

            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input"
              placeholder="Your photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is Required</p>
            )}

            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is Required</p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">password is Required</p>
            )}

            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be at least 6 characters
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    );
};

export default Registration;