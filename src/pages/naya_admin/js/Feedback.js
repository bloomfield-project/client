import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import Modal from "react-bootstrap/Modal";
const Axios = require("axios").default;

function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [oldFeedback, setOldFeedback] = useState([]);
  const [search, setSearch] = useState("");
  const [oldsearch, setoldSearch] = useState("");
  const [change, setChange] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/getFeedback")
      .then((response) => {
        setFeedback(response.data.data);
      })
      .catch((err) => console.log("error is arized", err));
    Axios.get("http://localhost:3001/api/manager/getOldFeedback")
      .then((response) => {
        setOldFeedback(response.data.data);
      })
      .catch((err) => alert(err));
  }, [change]);

  const check = (id) => {
    const data = {
      feedback_id: id,
    };
    Axios.post("http://localhost:3001/api/manager/updateFeedbackStatus", data)
      .then((results) => {
        alert("Checked");
        setChange(!change);
      })
      .catch((err) => alert(err));
  };

  const getCheckList = () => {
    handleShow();
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
            <div className="title">
              <h1>{"Feedback"}</h1>
            </div>
            <div className="tabs">
              <div className="tabs-left"></div>

              <div className="tabs-right">
                {" "}
                <Button
                  variant="primary"
                  className="mx-3"
                  onClick={getCheckList}
                >
                  Checked List
                </Button>
              </div>
            </div>

            <hr></hr>

            <div className="table-box-1">
              <div className="tablee">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    console.log(typeof search + search);
                  }}
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    border: "none",
                    borderBottom: "1px solid black",
                  }}
                />
                {/* {console.log(feedback)} */}
                {feedback !== [] ? (
                  feedback
                    ?.filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.name?.toLowerCase().includes(search) ||
                            item.date?.includes(search);
                    })
                    .map((item, i) => (
                      <>
                        <div style={{ backgroungColor: "", border: "" }}>
                          <div style={{ backgroundColor: "" }}>
                            {item.feedback}
                          </div>
                          <div style={{ display: "flex" }}>
                            <div
                              style={{
                                color: "#5C686B",
                                width: "50%",
                                fontWeight: "bold",
                              }}
                            >
                              {item.date}
                            </div>
                            <div
                              style={{
                                color: "#5C686B",
                                width: "50%",
                                fontWeight: "bold",
                              }}
                            >
                              {item.name}
                            </div>
                            <div
                              style={{
                                float: "right",
                              }}
                            >
                              <Button
                                variant="outline-success"
                                className="mx-3"
                                onClick={() => check(item.feedback_id)}
                              >
                                Check
                              </Button>
                            </div>
                          </div>
                        </div>

                        <hr></hr>
                        <br></br>
                      </>
                    ))
                ) : (
                  <p>No Data To Show</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" size={"lg"}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title>
            <h2>Old Feedbacks</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            // width:'auto',
            maxWidth: "800px",
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          <div className="table-box-1">
            <div className="tablee">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setoldSearch(e.target.value);
                  console.log(typeof search + search);
                }}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              />
              {oldFeedback !== [] ? (
                oldFeedback
                  ?.filter((item) => {
                    return oldsearch.toLowerCase() === ""
                      ? item
                      : item.name?.toLowerCase().includes(oldsearch) ||
                          item.date?.includes(oldsearch);
                  })
                  .map((item, i) => (
                    <>
                      <div style={{ backgroungColor: "", border: "" }}>
                        <div style={{ backgroundColor: "" }}>
                          {item.feedback}
                        </div>
                        <div style={{ display: "flex" }}>
                          <div
                            style={{
                              color: "#5C686B",
                              width: "50%",
                              fontWeight: "bold",
                            }}
                          >
                            {item.date}
                          </div>
                          <div
                            style={{
                              color: "#5C686B",
                              width: "50%",
                              fontWeight: "bold",
                            }}
                          >
                            {item.name}
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                      <br></br>
                    </>
                  ))
              ) : (
                <p>No Data To Show</p>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>
    </>
  );
}

export default Feedback;
