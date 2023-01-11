import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import useAuthCall from "../hook/useAuthCall";

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter an email"),
  password: yup.string().min(8, "Password must have min 8 chars"),
  // .max(16, "Password must have max 16 chars")
  // .required("Please enter a password")
  // .matches(/\d+/, "Password must have a number")
  // .matches(/[a-z]+/, "Password must have a lowercase")
  // .matches(/[A-Z]+/, "Password must have a uppercase")
  // .matches(/[!,?{}><%&$#£+-.]+/, "Password must have a special chars"),

  first_name: yup.string().required("Please enter a First Name"),
  last_name: yup.string().required("Please enter a Last Name"),
});

const Register = () => {
  const { register } = useAuthCall();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "a",
      first_name: "",
      last_name: "",
      email: "",
      password: "12345678",
      password2: "12345678",
    },
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      register(values);
      // console.log("values", values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="font-bold text-2xl mt-32">Register</h1>
        <div className="flex justify-center p-6 rounded-lg shadow-lg bg-white max-w-md">
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
                  placeholder="First name"
                  onChange={handleChange}
                  value={values.first_name}
                  name="first_name"
                />
                <p>{errors.first_name || ""}</p>
              </div>
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
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  placeholder="Last name"
                  onChange={handleChange}
                  value={values.last_name}
                  name="last_name"
                />
              </div>
              <p>{errors.last_name || ""}</p>
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
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
                id="exampleInput125"
                placeholder="Email address"
                onChange={handleChange}
                value={values.email}
                name="email"
              />
              <p>{errors.email || ""}</p>
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
                onChange={handleChange}
                value={values.password}
                name="password"
              />
              <p>{errors.password || ""}</p>
            </div>
            <div className="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck25"
                defaultChecked
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck25"
              >
                Subscribe to our newsletter
              </label>
            </div>
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
              Sign up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
