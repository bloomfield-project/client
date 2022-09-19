import React , {useState} from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import Navbar from "../../../component/NavigationBar/Navbar";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import FileUpload from "../../../component/Form/FileUpload";
import { Result } from "antd";
import Modal from "react-bootstrap/Modal";

const axios = require("axios").default;

let array1 = [
  {
    title: "Title",
    // for: "exampleInputEmail1",
    type: "text",
    placeholder: "Title",
    id: "f-name",
    required: "true",
  },
  {
    title: "Date",
    // for: "exampleInputEmail1",
    type: "date",
    placeholder: "",
    id: "email",
    required: "true",
  },
  {
    title: "Description",
    // for: "exampleInputEmail1",
    type: "text",
    placeholder: "description",
    id: "contact",
  },
];

let success = null;
function AddTeamAchivement() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    window.location.reload()
  };
  const handleShow = () => setShow(true);

  const createAchievment = (event) => {
    event.preventDefault();

    console.log(event);

    let achivData = {
      title: event.target[0].value,
      date: event.target[1].value,
      description: event.target[2].value,
      // date:currentDate,
    };

    axios.post("/api/manager/addteamAchi", achivData).then((results) => {
      success = results.data;
      handleShow();
    });

    console.log("ach : ", achivData);
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
          {/* <p
            style={{
              color: "#f0677b",
              textAlign: "center",
              fontSize: "large",
              backgroundColor: "white",
              margin: "0",
            }}
          >
            {error_email}
          </p> */}
          <p
            style={{
              color: "#03d1a1",
              textAlign: "center",
              fontSize: "large",
              backgroundColor: "white",
              margin: "0",
            }}
          >
            {/* {success} */}
            Successfully Added
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
                <form onSubmit={createAchievment}>
                  <SampleForm arr={array1} />
                  <FileUpload filetitle={"Image"} filefor={"for"}></FileUpload>
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

export default AddTeamAchivement;
