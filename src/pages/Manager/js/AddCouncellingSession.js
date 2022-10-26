import React, { useState } from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import Navbar from "../../../component/NavigationBar/Navbar";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import moment from 'moment';
import Modal from "react-bootstrap/Modal";

import axios from "axios";

function AddCouncellingSession() {
  const [errorMsg, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var date = new Date();
  date.setDate(date.getDate() + 7);

  var currentDate = moment(date).format("YYYY-MM-DD");
 

  console.log("current date : ",currentDate)

  let array1 = [
    {
      title: "Councelling Session Title",

      type: "text",
      placeholder: "",
      id: "c-session",
      required: "true",
    },
    {
      title: "Date",
      min: String(currentDate),
      // max: currentDate,

      type: "date",
      placeholder: "",
      id: "date",
      required: "true",
    },
    {
      title: "Time",

      type: "time",
      placeholder: "",
      id: "time",
      required: "true",
    },
    {
      title: "Place",

      type: "text",
      placeholder: "",
      id: "place",
      required: "true",
    },
    {
      title: "Mentor",

      type: "mentor",
      placeholder: "",
      id: "contact",
      required: "true",
    },
    {
      title: "Mentor Details",

      type: "text",
      placeholder: "",
      id: "mentor-details",
      required: "true",
    },
  ];

  const AddSession = (event) => {
    event.preventDefault();

    console.log(event);

    let formData = {
      title: event.target[0].value,
      date: moment.utc(event.target[1].value).format('YYYY-MM-DD'),
      time: event.target[2].value,
      place: event.target[3].value,
      mentor: event.target[4].value,
      mentor_details: event.target[5].value,
    };

    axios
      .post("http://localhost:3001/api/manager/AddCouncellingSession", formData)
      .then((results) => {
        setError(results.data.message);
        setSuccess(results.data.success);
        console.log(errorMsg);
        handleShow();
        window.history.back()

        if (errorMsg) {
          // edate = errorMsg.event_name;
          //alert(edate);
          handleShow();
        }
      })
      .catch((err) => console.log("error : ", err));
  };

  return (
    <>
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
          {success === 0 ? (
            <p
              style={{
                color: "#f0677b",
                textAlign: "center",
                fontSize: "large",
                backgroundColor: "white",
                margin: "0",
              }}
            >
              {errorMsg}
              {/* {edate} */}
            </p>
          ) : (
            <p
              style={{
                color: "#626d80",
                textAlign: "center",
                fontSize: "large",
                backgroundColor: "white",
                margin: "0",
              }}
            >
              {errorMsg}
              {/* {edate} */}
            </p>
          )}

          {/* <h1>Render Count: {count.current}</h1> */}
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Link to={success === 1? "/manager/Session" : "#"}>
            <button type="button" class="btn btn-success" onClick={handleClose}>
              OK
            </button>
          </Link>
        </Modal.Footer>
      </Modal>

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
