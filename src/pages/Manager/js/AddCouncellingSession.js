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
import SelectOption from "../../../component/Form/SelectOption";

function AddCouncellingSession() {
  let array1 = [
    {
      title: "Councelling Session Title",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "",
      id: "f-name",
    },
    {
      title: "Date",
      for: "exampleInputEmail1",
      type: "date",
      placeholder: "",
      id: "l-name",
    },
    {
      title: "Place",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "",
      id: "email",
    },
    {
      title: "Mentor",
      for: "exampleInputEmail1",
      type: "number",
      placeholder: "",
      id: "contact",
    },
  ];

  const option = [
    {
      value:"bawling",
      title:"Mr.SamaraNayaka"
    },
    {
      value:"batting",
      title:"Mr.Jayasooriya"
    },
    {
      value:"allrounder",
      title:"Mr.Athapaththus"
    }
  ]

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
                  
                  {/* <SelectOption label={"Mentor "} option={option} /> */}
                  {/* <FileUpload /> */}
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
