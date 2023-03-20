import React from "react";
import { useNavigate } from "react-router-dom";

const FormSuccess = () => {
  const navigate = useNavigate();
  return (
    <form className="rounded-md mt-36 shadow-3xl py-5 px-8 bg-white text-black h-96">
      <div>
        <h1 className="pt-28 font-bold text-2xl text-center">
          Account Created
        </h1>
      </div>
      <div className="flex justify-center mt-32">
        <button
          type="button"
          className="btn btn-outline btn-secondary "
          onClick={() => {
            navigate("/signin");
          }}
        >
          Back to Signup
        </button>
      </div>
    </form>
  );
};

export default FormSuccess;
