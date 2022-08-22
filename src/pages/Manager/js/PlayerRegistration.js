import React from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import Navbar from "../../../component/NavigationBar/Navbar";
import FileUpload from "../../../component/Form/FileUpload";
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import * as yup from "yup";

  
const userSchema = yup.object().shape({
  first_name: yup.string().required('Required!') ,
  last_name: yup.string().required() ,
  email:yup.string().email('plese enter correct email').required() ,
  
});

function PlayerRegistration() {
  let array1 = [
    {
      title: "First Name",
      for: "first-name",
      type: "text",
      name: "first-name",
      placeholder: "First Name",
      id: "first-name",
    },
    {
      title: "Last Name",
      for: "last-name",
      type: "text",
      name: "last-name",
      placeholder: "Last Name",
      id: "last-name",
    },
    {
      title: "E-mail",
      for: "e-mail",
      type: "email",
      name: "e-mail",
      placeholder: "Email",
      id: "email",
    },
    {
      title: "Address",
      for: "address",
      type: "text",
      name: "address",
      placeholder: "Address",
      id: "address",
    },
    {
      title: "NIC",
      for: "nic",
      type: "text",
      name: "nic",
      placeholder: "N I C",
      id: "nic",
    },
    {
      title: "Contact",
      for: "contact",
      type: "text",
      name: "contact",
      placeholder: "Contact",
      id: "contact",
    },
  ];



  const file = {
    filefor: "for",
    filetitle: "Profile",
  };

  const createUser = async (event) =>{
    event.preventDefault();
    console.log(event);

    let userData = {
      first_name: event.target[0].value,
      last_name:event.target[1].value,  
    };
    const isValid = await userSchema.isValid(userData);

    console.log(userData);
    console.log(isValid);
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
                  <Link to={"/manager/Players"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Player Registration</h1>
              </div>

              <div className="form-container">
                <form onSubmit={createUser}>
                  <SampleForm arr={array1} />
                  <AddMultipleSelections />
                  <FileUpload filetitle={"Profile Image"} filefor={"for"} />
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

export default PlayerRegistration;
