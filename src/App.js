import React from "react";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import FormSignUp from "./component/FormSignUp";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<FormSignUp />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
