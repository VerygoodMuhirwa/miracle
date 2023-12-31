import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { signInWithFacebook, signInWithGithub, signInWithGoogle } from "../config/firebase";
import { useSelector } from "react-redux";

// schema fro data
const schema = yup.object().shape({
  email: yup.string().email().required("this field is required"),
  password: yup
    .string()
    .min(4, "password must have minimum 4 characters")
    .required("password is required"),
});

const Login = () => {
  // form handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleInputChange = () => {
    clearErrors(); // Clear all errors when the user interacts with the inputs
  };
  if (errors) {
    console.log(errors);
  }
  const handleSubmission = (data) => {
    setIsSubmitting(true)
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };



  //login with platform

//   sign up with difference platform
const handleWithGoogle=async()=>{
  const ress=await signInWithGoogle()
  console.log(ress);
 
}
const handleWithFacebook=async()=>{
  const ress=await signInWithFacebook()
  console.log(ress);
 
}
const handleWithGithub=async()=>{
  const ress=await signInWithGithub()
  console.log(ress);
 
}


const isLoggedIn = useSelector((state) => state.logged.loggedIn);
  return (
    <>
    {!isLoggedIn && (
      <div>
      <div className="bg-[#D9D9D9]  flex justify-center items-center py-16">
        <div className="bg-white flex    px-16 py-[6.2em] gap-5   rounded-lg border-2  flex-col">
          <h1 className="text-2xl  font-medium">Log in</h1>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(handleSubmission)}
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#666666]">
                {" "}
                Email address or user name
              </label>
              <input
                type="email"
                id="email"
                className={`border-2 rounded-lg h-12 focus:outline-none px-5 ${
                  errors?.email?.message ? "border-red-500" : ""
                }`}
                {...register("email")}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <label htmlFor="password" className="text-[#666666]">
                  Password
                </label>
                {/* Step 3: Use the state variable to conditionally set input type */}
                <div
                  className="flex flex-row items-center gap-2"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <AiOutlineEye size={22} />
                  ) : (
                    <AiOutlineEyeInvisible size={22} />
                  )}
                  <p className="text-[#666666]">
                    {showPassword ? "Hide" : "Show"}
                  </p>
                </div>
              </div>
              <input
                type={showPassword ? "text" : "password"} // Use showPassword state to toggle the input type
                id="password"
                className={`border-2 rounded-lg h-12 focus:outline-none px-5 ${
                  errors?.password?.message ? "border-red-500" : ""
                }`}
                {...register("password")}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex flex-row gap-3">
              <input type="checkbox" name="rememberMe" id="" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="flex flex-col gap-3">
              <p>
                By continuing, you agree to the{" "}
                <span className="underline cursor-pointer">
                  Terms of use and Privacy Policy.
                </span>
              </p>
              <input
                type="submit"
                value="Log in"
                className={` text-white w-full rounded-3xl h-12 font-bold  hover:cursor-pointer  ${isSubmitting ?"bg-[#222222]" :"bg-[#C4C4C4]"}`}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex flex-1 justify-center items-center">
              <p className="underline font-bold hover:cursor-pointer">
                Forget your password
              </p>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center">
              <p>Don’t have an acount? </p>
              <Link to="/signUp" className="underline font-bold">
                Sign up{" "}
              </Link>
            </div>
            <div>
              <img
                src="/assets/continue.png"
                alt=" continue with"
                className="object-contain"
              />
            </div>
            <div className="flex flex-row items-center  justify-center gap-5">
              <div onClick={handleWithGoogle} className="hover:cursor-pointer">
                <FcGoogle  size={24}/>
              </div>
              <div onClick={handleWithFacebook} className="hover:cursor-pointer">
                <img
                  src="/assets/Facebook.png"
                  alt="facebook"
                  className="object-contain"
                />
              </div>
              <div onClick={()=>{}} className="hover:cursor-pointer">
                <img
                  src="/assets/LinkedIn.png"
                  alt=" linkedIn "
                  className="object-contain"
                />
              </div>
              <div onClick={handleWithGithub} className="hover:cursor-pointer">
                <AiFillGithub  size={24}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )}
    </>
    
  );
};

export default Login;
