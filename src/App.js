import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Header from "./component/header/Header";
// import Login from "./component/Login/Login";
import FogotPassForm from "./component/Login/Login Forms/FogotPassForm";
import ResetPassForm from "./component/Login/Login Forms/ResetPassForm";
import LoginForm from "./component/Login/Login Forms/LoginForm";
import Navbar from "./component/NavigationBar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <FogotPassForm /> */}
        {/* <ResetPassForm /> */}
        <Routes>
          <Route path="/ResetPassword" element={<ResetPassForm />} />
          <Route path="/FogotPassword" element={<FogotPassForm/>} />
          <Route path="/" element={<LoginForm/>} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Header" element={<Header/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
