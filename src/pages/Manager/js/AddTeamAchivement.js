// import React , {useState} from "react";
// import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
// import { IoChevronBackCircleOutline } from "react-icons/io5";
// import SampleForm from "../../../component/Form/SampleForm";
// import { Link } from "react-router-dom";
// import Navbar from "../../../component/NavigationBar/Navbar";
// import ResetSubmit from "../../../component/Form/ResetSubmit";
// import FileUpload from "../../../component/Form/FileUpload";
// import { Result } from "antd";
// import Modal from "react-bootstrap/Modal";

// const axios = require("axios").default;

// let array1 = [
//   {
//     title: "Title",
//     // for: "exampleInputEmail1",
//     type: "text",
//     placeholder: "Title",
//     id: "f-name",
//     required: "true",
//   },
//   {
//     title: "Date",
//     // for: "exampleInputEmail1",
//     type: "date",
//     placeholder: "",
//     id: "email",
//     required: "true",
//   },
//   {
//     title: "Description",
//     // for: "exampleInputEmail1",
//     type: "text",
//     placeholder: "description",
//     id: "contact",
//   },
// ];

// let success = null;
// function AddTeamAchivement() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => {
//     window.history.back()
//   };
//   const handleShow = () => setShow(true);

//   const createAchievment = (event) => {
//     event.preventDefault();

//     console.log(event);

//     let achivData = {
//       title: event.target[0].value,
//       date: event.target[1].value,
//       description: event.target[2].value,
//       // date:currentDate,
//     };

//     axios.post("/api/manager/addteamAchi", achivData).then((results) => {
//       success = results.data;
//       handleShow();
//     });

//     console.log("ach : ", achivData);
//   };

//   return (
//     <>
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         centered
//       >
//         <Modal.Header
//           closeButton
//           style={{ backgroundColor: "white", border: "none" }}
//         >
//           <Modal.Title> </Modal.Title>
//         </Modal.Header>
//         <Modal.Body
//           style={{
//             backgroundColor: "white",
//             height: "fit-content",
//             padding: "0",
//           }}
//         >
//           {/* <p
//             style={{
//               color: "#f0677b",
//               textAlign: "center",
//               fontSize: "large",
//               backgroundColor: "white",
//               margin: "0",
//             }}
//           >
//             {error_email}
//           </p> */}
//           <p
//             style={{
//               color: "#03d1a1",
//               textAlign: "center",
//               fontSize: "large",
//               backgroundColor: "white",
//               margin: "0",
//             }}
//           >
//             {/* {success} */}
//             Successfully Added
//           </p>
//         </Modal.Body>
//         <Modal.Footer style={{ backgroundColor: "white", border: "none" }}>
//           {/*<Button variant="secondary" onClick={handleClose}>
//             Cancell
//   </Button>*/}
//           <button type="button" class="btn btn-success" onClick={handleClose}>
//             OK
//           </button>
//         </Modal.Footer>
//       </Modal>

//       <div className="page-container-1">
//         <div className="header-container">
//           <Header></Header>
//         </div>
//         <div className="body-container-1">
//           <div className="navbar-container">
//             <Navbar></Navbar>
//           </div>
//           <div className="body-container-2">
//             <div className="page-container-gray" style={{ width: "100%" }}>
//               <div className="l-back-r-title">
//                 <div className="l-back-r-title-icon">
//                   <Link to={"/manager/Achivement"}>
//                     <IoChevronBackCircleOutline
//                       style={{
//                         color: "rgba(0, 146, 112, 1)",
//                         fontSize: " 40px",
//                       }}
//                     />
//                   </Link>
//                 </div>

//                 <h1>Add Achivement</h1>
//               </div>

//               <div className="form-container">
//                 <form onSubmit={createAchievment}>
//                   <SampleForm arr={array1} />
//                   <FileUpload filetitle={"Image"} filefor={"for"}></FileUpload>
//                   <ResetSubmit />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddTeamAchivement;

import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import SampleForm from "../../../component/Form/SampleForm";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import "antd/dist/antd.css";

// import opTeam from "../../player/player.jpg";
import MatchesTeams from "../../../component/MatchesTeams/MatchesTeams";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import FileUpload from "../../../component/Form/FileUpload";
import SelectOption from "../../../component/Form/SelectOption";
import { object } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../../src/firebase";
import { v4 } from "uuid";
// import { use } from "../../../../../server/api/manager/manager.router";

const fileTypes = ["JPG", "PNG", "GIF"];

const Axios = require("axios").default;

var date = new Date();
date.setDate(date.getDate());

var currentDate = moment(date).format("YYYY-MM-DD");

console.log("current date : ", currentDate);

var imgurl;
var user;

const AddTournament = (event) => {
  event.preventDefault();

  console.log(user);
  let formData = {
    title: event.target[0].value,
    date: event.target[1].value,
    description: event.target[2].value,
    image: imgurl,
    // user_id:user.data.user_id,
  };

  console.log("POST img url : ", formData);

  Axios.post("http://localhost:3001/api/manager/AddAchivement", formData)
    .then((res) => {
      // console.log("res", res);

      if (res.data.validation != null) {
        alert(res.data.validation);
      } else {
        alert("Achivement Add Successfully");
        window.history.back();
      }

      // setPost(res);
    })
    .catch((err) => console.log("error is arized", err));
};

function AddTeamAchivement(props) {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrls] = useState(null);
  const { type } = useParams();

  const imagesListRef = ref(storage, "images/");
  const loginData = useSelector((state) => state.auth.data);
  user = loginData

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("image uploaded");
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
        imgurl = url;
        console.log("imgurl : ", imgurl);
      });
    });
  };

  console.log("type is : " + type);

  let array1 = [
    {
      title: "Title",
      type: "text",
      placeholder: "",
      id: "title",
      required: "true",
    },
    {
      title: "Date",
      max: String(currentDate),
      type: "date",
      placeholder: "",
      id: "date",
      required: "true",
    },
  ];

  console.log("post data function ");
  // if (post) return null;

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
                  <Link to={"/manager/AddMatch"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Add Achivement </h1>
              </div>

              <div className="form-container">
                <div className="table-box-1" style={{ margin: "auto" }}>
                  <div className="tablee">
                    <div className="matche-container-outer-box">
                      <div className="match-box-up">
                        <div className="go-out">
                          <h4
                            style={{
                              color: "#009270",
                              fontSize: "2rem",
                              fontWeight: "bolder",
                            }}
                          >
                            {type}
                          </h4>
                        </div>
                      </div>
                      <div
                        className="match-box-mid"
                        style={{ height: "auto", minWidth: "100%" }}
                      >
                        <div
                          className="form-container"
                          onSubmit={AddTournament}
                        >
                          <form>
                            {/* <input type="hidden" value={type}></input> */}

                            <SampleForm arr={array1} />
                            <div className="form-group" style={{margin:"17px"}} >
                              <label for="exampleFormControlTextarea3" className="d-flex justify-content-start">
                                Description
                              </label>
                              <textarea
                                className="form-control"
                                id="exampleFormControlTextarea3"
                                rows="7"
                                required
                              ></textarea>
                            </div>
                            <div className="form-group file-upload-wrapper w-100 p-3 mb-2">
                              <input
                                type="file"
                                onChange={(event) => {
                                  setImageUpload(event.target.files[0]);
                                }}
                                className="form-control"
                              />
                              <br></br>
                              <button
                              type="button"
                                onClick={uploadFile}
                                className="btn btn-primary"
                                style={{ float: "right" }}
                              >
                                {" "}
                                Upload Image
                              </button>
                              <br></br>
                              <img src={imageUrl? imageUrl : ""} style={{ width: "150px" }} />
                            </div>

                            <ResetSubmit />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTeamAchivement;
