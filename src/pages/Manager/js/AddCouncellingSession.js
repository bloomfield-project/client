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

import axios from "axios";

const AddSession  = (event) =>{
  // event.preventDefault();
  console.log(event);

  let formData = {
    title: event.target[0].value,
    date: event.target[1].value,
    time: event.target[2].value,
    place: event.target[3].value,
    mentor: event.target[4].value,
    mentor_details: event.target[5].value,

  };

  axios.post("http://localhost:3001/api/manager/AddCouncellingSession", formData)
    .then((res) => console.log("Posting data", res))
    .catch((err) => console.log("error is arized", err));
}

function AddCouncellingSession() {
  let array1 = [
    {
      title: "Councelling Session Title",
      for: "title",
      type: "text",
      placeholder: "",
      id: "c-session",
    },
    {
      title: "Date",
      for: "date",
      type: "date",
      placeholder: "",
      id: "date",
    },
    {
      title: "Time",
      for: "time",
      type: "time",
      placeholder: "",
      id: "time",
    },
    {
      title: "Place",
      for: "place",
      type: "text",
      placeholder: "",
      id: "place",
    },
    {
      title: "Mentor",
      for: "mentor",
      type: "mentor",
      placeholder: "",
      id: "contact",
    },
    {
      title: "Mentor Details",
      for: "mentor-details",
      type: "text",
      placeholder: "",
      id: "mentor-details",
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
                <form onSubmit={AddSession}>
                  <SampleForm arr={array1} />
                  
                  {/* <SelectOption label={"Mentor "} option={option} /> */}
                  {/* <FileUpload /> */}
                  {/* <textarea></textarea> */}
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
