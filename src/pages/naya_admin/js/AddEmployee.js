// import React from "react";
// import Header from "../../../component/header/Header";
// // import "../css/PlayerRegistration.css";
// import { IoChevronBackCircleOutline } from "react-icons/io5";
// import SampleForm from "../../../component/Form/SampleForm";
// import { Link } from "react-router-dom";

// function AddEmployee() {
//   let array1 = [
//     {
//       title: "First Name",
//       for: "exampleInputEmail1",
//       type: "text",
//       placeholder: "First Name",
//       id: "f-name",
//     },
//     {
//       title: "Last Name",
//       for: "exampleInputEmail1",
//       type: "text",
//       placeholder: "Last Name",
//       id: "l-name",
//     },
//     {
//       title: "e-mail",
//       for: "exampleInputEmail1",
//       type: "email",
//       placeholder: "Email",
//       id: "email",
//     },
//     {
//       title: "Contact",
//       for: "exampleInputEmail1",
//       type: "number",
//       placeholder: "Contact Number",
//       id: "contact",
//     },
//   ];

//   const file = {
//     filefor: "for",
//     filetitle: "Profile",
//   };

//   return (
//     <>
//       <div className="page-container-1">
//         <div className="header-container">
//           <Header></Header>
//         </div>
//         <div className="page-container-gray">
//           <div className="l-back-r-title">
//             <div className="l-back-r-title-icon">
//               <Link to={"/admin/Employees"}>
//                 <IoChevronBackCircleOutline
//                   style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
//                 />
//               </Link>
//             </div>

//             <h1>Employee Registration</h1>
//           </div>

//           <div className="form-container">
//             <SampleForm arr={array1} upload={true} border={true} file1={file} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddEmployee;


import React, { useState } from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link, useParams, useLocation } from "react-router-dom";
import Navbar from "../../../component/NavigationBar/Navbar";
import FileUpload from "../../../component/Form/FileUpload";
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import * as yup from "yup";
import SelectOption from "../../../component/Form/SelectOption";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../../src/firebase";
import { v4 } from "uuid";

const fileTypes = ["JPG", "PNG", "GIF"];

const axios = require("axios").default;

// const userSchema = yup.object().shape({
//   first_name: yup.string().required("Required!"),
//   last_name: yup.string().required(),
//   email: yup.string().email("plese enter correct email").required(),
// });

let error_msg = null;
let error_field=null;
let success = null;
var imgurl;

function AddEmployee() {
  const [show, setShow] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrls] = useState(null);
  const { type } = useParams();

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {

      alert("image uploaded")
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
        imgurl = url;
        console.log("imgurl : ",imgurl);
      });

    });
  };

  const handleClose = () => {
    setShow(false);
    window.history.back()

  };
  const handleShow = () => setShow(true);

  let array1 = [
    {
      title: "Name",
      // for: "last-name",
      type: "text",
      name: "name",
      placeholder: "Name",
      id: "name",
      required: "true",
    },
    {
      title: "E-mail",
      // for: "e-mail",
      type: "email",
      name: "e-mail",
      placeholder: "Email",
      id: "email",
      required: "true",
    },
    {
      title: "Address",
      // for: "address",
      type: "text",
      name: "address",
      placeholder: "Address",
      id: "address",
      required: "true",
    },
    {
      title: "NIC",
      // for: "nic",
      type: "text",
      name: "nic",
      placeholder: "N I C",
      id: "nic",
      required: "true",
    },
    {
      title: "Contact",
      // for: "contact",
      type: "text",
      name: "contact",
      placeholder: "Contact",
      id: "contact",
      required: "true",
    },
  ];

  const option = [
    {
      value: "coach",
      title: "Coach",
    },
    {
      value: "manager",
      title: "Manager",
    },
  ];

  // const file = {
  //   filefor: "for",
  //   filetitle: "Profile",
  // };


  const createUser = (event) => {
    event.preventDefault();
    console.log("eevent : : ", event);

    let userData = {
      name: event.target[0].value,
      e_mail: event.target[1].value,
      address: event.target[2].value,
      nic: event.target[3].value,
      contact: event.target[4].value,
      role: event.target[5].value,
      image:imgurl ? imgurl : "",
      // date:currentDate,
    };
    // const isValid = await userSchema.isValid(userData);

    console.log("before post request ");

    //let res =  axios.post('/api/user/', userData);
    axios
      .post("/api/user/", userData)
      .then((results) => {
        console.log("user data " ,userData);
        console.log("results ",results)
       
        if(results.data.err){
          error_field = (results.data.err).split(" ");
          error_msg  = ` ${error_field[2]} Has Allready Used `;
          success = null;
        }
        else if(!results.data.err){
          error_msg  = null;
          success = "Register Successful";
        }

        handleShow();

      })
      .catch((err) => console.log("error is arized", err));

    console.log("after post request ");
  };

  return (
    <>
      {/*Before pop up model*/}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title> </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
    
          <p
            style={{
              color: "#f0677b",
              textAlign: "center",
              fontSize: "large",
              backgroundColor: "white",
              margin: "0",
            }}
          >
            {error_msg}
          </p>
          
          <p
            style={{
              color: "#03d1a1",
              textAlign: "center",
              fontSize: "large",
              backgroundColor: "white",
              margin: "0",
            }}
          >
            {success}
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "white", border: "none" }}>
          {/*<Button variant="secondary" onClick={handleClose}>
            Cancell
  </Button>*/}
          <button type="button" class="btn btn-success" onClick={handleClose}>
            OK
          </button>
        </Modal.Footer>
      </Modal>

      {/* After pop up model */}
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
                  <Link to={"/admin/Employees"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Employee Registration</h1>
              </div>

              <div className="form-container">
                <form onSubmit={createUser}>
                  <SampleForm arr={array1} />
                  {/* <AddMultipleSelections /> */}

                  <SelectOption label={"Player Role"} option={option} />
                  <div className="form-group file-upload-wrapper w-100 p-3 mb-2">
                              <input
                                type="file"
                                onChange={(event) => {
                                  setImageUpload(event.target.files[0]);
                                }}
                                className="form-control"
                              />
                              <br></br>
                              <button onClick={uploadFile} className="btn btn-primary" style={{float:"right"}}>
                                {" "}
                                Upload Image
                              </button>
                              <br></br>
                                <img src={imageUrl} style={{width:"150px"}}/>
                              

                            </div>
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

export default AddEmployee;


