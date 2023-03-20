import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./Validation";
import gambar from "../img/icons.jpg";

const Form = ({ submitForm }) => {
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },

    validationSchema,
    onSubmit: (value) => {
      const { username } = value;
      const key = `User1_${username}`;
      localStorage.setItem(key, JSON.stringify(value));
      //pada baris ini bisa digunakan untuk mengirim data ke server melalui api
      setDataIsCorrect(true);
      submitForm();
    },
  });

  useEffect(() => {
    if (Object.keys(validationSchema).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [validationSchema, dataIsCorrect]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      className="flex py-5 items-center rounded-lg bg-white mt-20"
    >
      <div className="  bg-white  py-5 px-8 text-black md:w-1/2">
        <h1 className=" font-bold text-center">Create an Account</h1>
        <div className="my-5 mx-2  ">
          <p>Username</p>
          <input
            type="text"
            name="username"
            className="border-2 w-full border-pink-300 py-0.5 px-2 focus:outline-none rounded-lg bg-white enabled:hover:border-pink-500"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && formik.errors.username && (
            <div className="text-red-600 text-[12px] absolute ">
              {formik.errors.username}
            </div>
          )}
        </div>

        <div className="my-5 mx-2">
          <p>Email</p>
          <input
            type="email"
            name="email"
            className="border-2 w-full border-pink-300 py-0.5 px-2 focus:outline-none rounded-lg bg-white enabled:hover:border-pink-500"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600 text-[12px] absolute ">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="my-5 mx-2">
          <p>Password</p>
          <input
            type="password"
            name="password"
            className="border-2 w-full border-pink-300 py-0.5 px-2 focus:outline-none rounded-lg bg-white enabled:hover:border-pink-500"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-600 text-[12px] absolute ">
              {formik.errors.password}
            </div>
          )}
        </div>

        <div className="my-5 mx-2 ">
          <p>Confirm Password</p>
          <input
            type="password"
            name="confirmPassword"
            className="border-2 w-full border-pink-300 py-0.5 px-2 focus:outline-none rounded-lg bg-white enabled:hover:border-pink-500"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-600 text-[12px] absolute ">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>

        <div className="my-6 mx-2">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            className="checkbox checkbox-secondary w-4 h-4 rounded-md  "
            {...formik.getFieldProps("agreement")}
          />

          <label htmlFor="agreement" className=" pl-1.5 text-[13px] ">
            I agree to Terms and Services
          </label>
          {formik.touched.agreement && formik.errors.agreement && (
            <div className="text-red-600 text-[12px] absolute ">
              {formik.errors.agreement}
            </div>
          )}
        </div>
        <div className=" flex item-center justify-center ">
          <button type="submit" className="btn btn-outline btn-secondary w-2/5">
            Register
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
    </form>
  );
};

export default Form;
