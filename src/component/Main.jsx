import React, { useState } from "react";
import Form from "./Form";
import FormSuccess from "./FormSuccess";

const Main = () => {
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div className=" flex items-center justify-center ">
      <div>
        {!IsSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </div>
  );
};

export default Main;
