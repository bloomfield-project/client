import React, { useState } from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import EditDetails from "../../../component/EditDetail/EditDetails";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link, useParams, useLocation } from "react-router-dom";
import moment from "moment";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import Modal from "react-bootstrap/Modal";



const Axios = require("axios").default;
var errorMsg = "";
  var success = "";

function EditEvent() {
  const [eventdata, setevent] = useState("");
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const { id } = useParams();
  const userData = {
    id: id,
  };

  console.log(id);

  React.useEffect(() => {
    console.log("inside useEffect")
    Axios.post("http://localhost:3001/api/manager/getEvent", userData)
      .then((response) => {
        console.log(response);
        setevent(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log("event : ",event)
  // console.log("event.data.event_name : ",eventdata.data)

  if (!eventdata) return null;
  // var event_id = event.data[0].event_id;
  const array = [
    {
      lable: `Event Name ${id}`,
      data: eventdata.data[0].event_name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      type:"text"
    },
    {
      lable: "Start Time",
      data: eventdata.data[0].time,
      type:"time",
      required:"true"
    },
    {
      lable: "Date",
      data: moment.utc(eventdata.data[0].date).format("YYYY-MM-DD"),
      type:"date"
    },
    {
      lable: "Description",
      data: eventdata.data[0].description,
      type:"text"
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("eevent : : ", event);
    let eventData = {
      event_id: id,
      name: event.target[0].value,
      time: event.target[1].value,
      date: event.target[2].value,
      description: event.target[3].value,
    };
    console.log( "eventdata edit ::  ",eventData);

    Axios
      .post("/api/manager/editEvent", eventData)
      .then((results) => {
        console.log("results.data.message :" ,results.data.message)
        
        errorMsg = results.data.message;
        success = results.data.success;
        console.log("error meddage : " + errorMsg + "success : "+success);

        if (errorMsg ) {
          // edate = errorMsg.event_name;
          // alert(edate);
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
              Event Update Successful
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

                <h1>Event Details</h1>
              </div>

              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <EditDetails arr={array} backLink={"/manager/Session"} />

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

export default EditEvent;
