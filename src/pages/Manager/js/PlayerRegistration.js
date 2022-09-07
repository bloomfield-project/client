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
import SelectOption from "../../../component/Form/SelectOption";

const axios = require('axios').default;

  
const userSchema = yup.object().shape({
  first_name: yup.string().required('Required!') ,
  last_name: yup.string().required() ,
  email:yup.string().email('plese enter correct email').required() ,
  
});

function PlayerRegistration() {
  let array1 = [
   
    {
      title: "Name",
      for: "last-name",
      type: "text",
      name: "name",
      placeholder: "Name",
      id: "name",
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

const option = [
  {
    value:"bawling",
    title:"Bawling"
  },
  {
    value:"batting",
    title:"Batting"
  },
  {
    value:"allrounder",
    title:"Allrounder"
  }
]

  const file = {
    filefor: "for",
    filetitle: "Profile",
  };

  const createUser = async (event) =>{
    event.preventDefault();
    console.log(event);

    let userData = {
      name: event.target[0].value,
      e_mail:event.target[1].value,
      address:event.target[2].value,
      nic:event.target[3].value,
      contact:event.target[4].value,
      role:event.target[5].value
      
    };
    // const isValid = await userSchema.isValid(userData);

    console.log(userData.name);

    let res = await axios.post('/api/user/', userData);

    // let data = res.data;
    console.log(res);
    // if(data.data=="Invalid username or password"){
    //     setInvalid("err-G-active")//val
    // }
    // else{
    //     console.log("hey john")
    //     // setLogin(data.data)
        
        
    // }
    // console.log(isValid);
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
                  {/* <AddMultipleSelections /> */}
                  
                  <SelectOption label={"Player Role"} option={option} />
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
