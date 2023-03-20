import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "./Validation";
import gambar from "../img/icon2.jpg";

const FormSignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (event) => {
      event.preventDefault();
    },
  });

  return (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className=" bg-red-200 h-screen flex items-center justify-center"
    >
      <div className="bg-white flex py-5 px-8 text-black  rounded-lg">
        <div className=" bg-white text-black ">
          <h1 className=" font-bold text-center">Hi, Welcome Back!</h1>
          <div className="my-5 mx-2  ">
            <p>Username/Email</p>
            <input
              autoComplete="off"
              type="text"
              name="username"
              {...formik.getFieldProps("username")}
              className="border-2 w-full border-pink-300 py-0.5 px-2 focus:outline-none rounded-lg bg-white hover:border-pink-500"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-600 text-[12px] absolute ">
                {formik.errors.username}
              </div>
            )}
          </div>
          <div className="my-5 mx-2  ">
            <p>Password</p>
            <input
              autoComplete="off"
              type="password"
              name="password"
              {...formik.getFieldProps("password")}
              className="border-2 w-full border-pink-300 py-0.5 px-2 focus:outline-none rounded-lg bg-white hover:border-pink-500"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600 text-[12px] absolute ">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="flex justify-center mt-32">
            <button type="button" className="btn btn-outline btn-secondary ">
              Signup
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={gambar}
            alt="gambar"
            className=" bg-white w-[400px] h-[400px] hidden md:block"
          />
        </div>
      </div>
    </form>
  );
};

export default FormSignUp;
