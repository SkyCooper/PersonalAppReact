import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuthCall from "../hooks/useAuthCall";
import { Link } from "react-router-dom";
const registerSchema = yup.object().shape({
  username: yup.string().required("Please enter an username"),
  // email: yup
  //   .string()
  //   .email("Please enter valid email")
  //   .required("Please enter an email"),
  password: yup
    .string()
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .required("Please enter a password"),
  // .matches(/\d+/, "Password must have a number")
  // .matches(/[a-z]+/, "Password must have a lowercase")
  // .matches(/[A-Z]+/, "Password must have a uppercase")
  // .matches(/[!,?{}><%&$#£+-.]+/, "Password must have a special chars"),
  // first_name: yup.string().required("Please enter a First Name"),
  // last_name: yup.string().required("Please enter a Last Name"),
});
const Login = () => {
  const { login } = useAuthCall();
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      console.log(values);
      login(values);
      action.resetForm();
    },
  });
  return (
    <div className="flex justify-center items-center flex-col mt-[10%]">
      <h1 className="font-bold text-2xl">Login</h1>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={values.username}
              />
            </div>
            <p>{errors.username || ""}</p>
          </div>
          <div className="form-group mb-6">
            <input
              type="password"
              className="form-control block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <p>{errors.password || ""}</p>
          <button
            type="submit"
            className="
w-full
px-6
py-2.5
bg-blue-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
          >
            Sign in
          </button>
          <Link to="/register">
            <button
              type="submit"
              className="mt-2
w-full
px-6
py-2.5
bg-red-600
text-white
font-medium
text-xs
leading-tight
uppercase
rounded
shadow-md
hover:bg-blue-700 hover:shadow-lg
focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
active:bg-blue-800 active:shadow-lg
transition
duration-150
ease-in-out"
            >
              Dont you have an account ? Sing up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
