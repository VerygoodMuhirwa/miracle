import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FcGoogle } from "react-icons/fc";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signInWithFacebook, signInWithGithub, signInWithGoogle } from "../config/firebase";

// schema fro data
const schema = yup.object().shape({
  email: yup.string().email().required("this field is required"),
  username: yup.string().required(" username is required"),
  password: yup
    .string()
    .min(4, "password must have minimum 4 characters")
    .required("password is required"),
});

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
// setIsSubmitting(false)
  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // Step 1: Create a state variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Step 2: Toggle password visibility when the eye icon is clicked
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = () => {
    clearErrors(); // Clear all errors when the user interacts with the inputs
  };
  if (errors) {
  }
  const handleSubmission = (data) => {
    console.log(data);
    setIsSubmitting(true);
  };


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
  return (
    <div>
      <div className="bg-[#D9D9D9]  flex justify-center items-center py-16">
        <div className="bg-white flex    px-16 py-[4.8em] gap-5   rounded-lg border-2  flex-col">
          <h1 className="text-2xl  font-medium">Sign up</h1>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(handleSubmission)}
          >
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#666666]">
                Email address
              </label>
              <input
                type="email"
                required
                id="email"
                className={`border-2 rounded-lg h-12 focus:outline-none px-5 ${
                  errors?.email?.message ? "border-red-500" : ""
                }`}
                {...register("email")}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="username" className="text-[#666666]">
                username
              </label>
              <input
                type="text"
                id="usernmae"
                className={`border-2 rounded-lg h-12 focus:outline-none px-5 ${
                  errors?.username?.message ? "border-red-500" : ""
                }`}
                {...register("username")}
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
                <span className="underline">
                  Terms of use and Privacy Policy.
                </span>
              </p>
              <input
                type="submit"
                value="Sign up"
                className={` text-white w-full rounded-3xl h-12 font-bold  hover:cursor-pointer  ${
                  isSubmitting ? "bg-[#222222]" : "bg-[#C4C4C4]"
                }`}
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-row gap-3 justify-center items-center">
              <p>Already have an account? </p>
              <Link to="/login" className="underline font-bold">
                Log in
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
  );
};

export default SignUp;
