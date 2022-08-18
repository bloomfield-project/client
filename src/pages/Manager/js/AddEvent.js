import React from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";


function AddEvent() {

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
      
  return (
    <>
      <div className="page-container-1">
        <div className="header-container">
          <Header></Header>
        </div>
        <div className="page-container-gray">
          <div className="l-back-r-title">
            <div className="l-back-r-title-icon">
            
            <Link to={"/manager/Session"}>
            
              <IoChevronBackCircleOutline
                style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
              />
              </Link>
            </div>

            <h1>Add Event</h1>
          </div>

          <div className="form-container">
            <SampleForm arr={array1} upload = {true} />
          </div>
        </div>
      </div>
      
    </>
  );
}

export default AddEvent;
