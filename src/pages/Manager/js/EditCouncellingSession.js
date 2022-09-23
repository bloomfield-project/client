import React ,{useState} from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import EditDetails from "../../../component/EditDetail/EditDetails";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link, useParams, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import ResetSubmit from "../../../component/Form/ResetSubmit";

const Axios = require("axios").default;

var date = new Date();
date.setDate(date.getDate() + 7);

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

var currentDate;
if (String(day).length == 1) {
  currentDate = `${year}-${month}-0${day}`;
}
if (String(month).length == 1) {
  currentDate = `${year}-0${month}-${day}`;
}

var errorMsg = "";
var success = "";

function EditCouncellingSession() {
  const [event, setevent] = React.useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    
  } 
  const handleShow = () => setShow(true);
 

  const { id } = useParams();
  const session_id = {
    id: id,
  };

  console.log("session id : ", id);

  React.useEffect(() => {
    Axios.post("http://localhost:3001/api/manager/getSession", session_id)
      .then((response) => {
        console.log(response);
        setevent(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!event) return null;

  const array = [
    {
      lable: "Title",
      data: event.data[0].title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      type: "text",
    },
    {
      lable: "Date",
      data: moment.utc(event.data[0].date).format("YYYY-MM-DD"),
      type: "date",
      min: String(currentDate),
    },
    {
      lable: "Time",
      data: event.data[0].time,
      type: "time",
    },
    {
      lable: "Mentor",
      data: event.data[0].mentor.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      type: "text",
    },
    {
      lable: "Mentor Details",
      data: event.data[0].mentor.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      type: "text",
    },

    {
      lable: "Place",
      data: event.data[0].place.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      type: "text",
    },
  ];

  const handleSumit = (event) => {
    event.preventDefault();
    console.log("event :: ", event);
    let formData = {
      title: event.target[0].value,
      date: event.target[1].value,
      mentor: event.target[2].value,
      time: event.target[3].value,
      place: event.target[4].value,
      mentor_details: event.target[5].value,
    };

    Axios
      .post("http://localhost:3001/api/manager/EditSession", formData)
      .then((results) => {
        errorMsg = results.data.message;
        success = results.data.success;
        console.log("error meddage : " + errorMsg + "success : "+success);


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

                <h1>Session Details</h1>
              </div>

              <div className="form-container">
                <form onSubmit={handleSumit}>
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

export default EditCouncellingSession;
