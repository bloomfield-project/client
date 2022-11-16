import React, { useState } from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import Navbar from "../../../component/NavigationBar/Navbar";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

const axios = require("axios").default;

function AddEvent() {
  const [errorMsg, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // var edate;
  var date = new Date();
  date.setDate(date.getDate() + 7);

  var currentDate = moment(date).format("YYYY-MM-DD");

  console.log("current date : ", currentDate);

  // String(currentDate)

  // alert(String(day).length)
  // alert(currentDate)

  let array1 = [
    {
      title: "Event Name",
      // for: "eventname",
      type: "text",
      placeholder: "Event Name",
      id: "event_name",
      required: "true",
    },
    {
      title: "Date",
      // for: "date",
      type: "date",
      min: String(currentDate),

      placeholder: "Date",
      id: "l-name",
      required: "true",
    },
    {
      title: "Start Time",
      // for: "starttime",
      type: "time",
      placeholder: "Start Time",
      id: "start_time",
      required: "true",
    },
    {
      title: "Description",
      // for: "description",
      type: "text",
      placeholder: "Description",
      id: "description",
      required: "true",
    },
  ];

  const createEvent = (event) => {
    event.preventDefault();
    console.log("inside createEvent");
    console.log(event);
    console.log("inside event function");

    let eventData = {
      name: event.target[0].value,
      date: event.target[1].value,
      time: event.target[2].value,
      description: event.target[3].value,
    };

    console.log(eventData);

    axios
      .post("/api/manager/addevent", eventData)
      .then((results) => {
        setError(results.data.result.message);
        setSuccess(results.data.result.success);
        setStatus(results.data.result.status);
        console.log(results.data.result.message);
        console.log(results);

        if (results.data.result.message) {
          setError(results.data.result.message);
          handleShow();
        } else {
          setError(null);
          alert("Submit Again!");
          window.location.reload();
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
          <Modal.Title> {status} </Modal.Title>
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
          <Link to={success === 1 ? "/manager/Session" : "#"}>
            <button type="button" class="btn btn-success" onClick={handleClose}>
              OK
            </button>
          </Link>
        </Modal.Footer>
      </Modal>

      <div className="page-container-1">
        <div className="header-container"><Header></Header></div>

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

                <h1>Add Event</h1>
              </div>

              <div className="form-container">
                <form onSubmit={createEvent}>
                  <SampleForm arr={array1} />
                  <ResetSubmit></ResetSubmit>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEvent;
