import React from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import Navbar from "../../../component/NavigationBar/Navbar";
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import FileUpload from "../../../component/Form/FileUpload";
import ResetSubmit from "../../../component/Form/ResetSubmit";

function AddCouncellingSession() {
  let array1 = [
    {
      title: "First Name",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "First Name",
      id: "f-name",
    },
    {
      title: "Last Name",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "Last Name",
      id: "l-name",
    },
    {
      title: "e-mail",
      for: "exampleInputEmail1",
      type: "email",
      placeholder: "Email",
      id: "email",
    },
    {
      title: "Contact",
      for: "exampleInputEmail1",
      type: "number",
      placeholder: "Contact Number",
      id: "contact",
    },
  ];


  const createUser = (event) =>{
    event.preventDefault();
    console.log("submited");
    let FormData ={
      
    };
  }
  return (
    <>
      <div className="page-container-1">
        <div className="header-container">
          <Header></Header>
        </div>
        <div className="body-container-1">
          <div className="navbar-container">
            <Navbar></Navbar>
          </div>
          <div className="body-container-2">
            <div className="page-container-gray" style={{ width: "100%" }}>
              <div className="l-back-r-title">
                <div className="l-back-r-title-icon">
                  <Link to={"/manager/Session"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Add Counseling Session</h1>
              </div>

              <div className="form-container">
                <form onSubmit={createUser}>
                  <SampleForm arr={array1} />
                  <AddMultipleSelections />
                  <FileUpload />
                  <ResetSubmit />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCouncellingSession;
