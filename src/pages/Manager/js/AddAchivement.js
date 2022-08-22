import React from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import Navbar from "../../../component/NavigationBar/Navbar";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import FileUpload from "../../../component/Form/FileUpload";

function AddAchivement() {
  let array1 = [
    {
      title: "Title",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "First Name",
      id: "f-name",
    },
    {
      title: "Neme",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "Name",
      id: "l-name",
    },
    {
      title: "Date",
      for: "exampleInputEmail1",
      type: "date",
      placeholder: "",
      id: "email",
    },
    {
      title: "Description",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "description",
      id: "contact",
    },
  ];
  let file = {
    filefor: "for",
    filetitle: "Logo",
  };

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
                  <Link to={"/manager/Achivement"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Add Achivement</h1>
              </div>

              <div className="form-container">
                <SampleForm
                  arr={array1}
          
                />
                <FileUpload filetitle={"Logo"} filefor={"for"}></FileUpload>
                <ResetSubmit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddAchivement;
