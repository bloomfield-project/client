import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import Header from "./component/header/Header";
// import Login from "./component/Login/Login";
import FogotPassForm from "./component/Login/Login Forms/FogotPassForm";
import ResetPassForm from "./component/Login/Login Forms/ResetPassForm";
import LoginForm from "./component/Login/Login Forms/LoginForm";
import CricketRanking from "./pages/Manager/js/CricketRanking";
import Home from "./pages/Home"

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
          <Route path="/client" element={<Home />} />

          <Route path="/manager/CricketRanking" element={<CricketRanking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
