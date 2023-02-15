import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/ViewTeam.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../AuthServer";
import Modal from "react-bootstrap/Modal";

function ViewTeam() {
  const { id } = useParams();
  console.log(id);
  const [responseData, setResponseData] = useState([]);
  const [responseDatap, setResponseDatap] = useState([]);
  const [modelShow, setModelShow] = useState(false);
  const [modelShow2, setModelShow2] = useState(false);
  const [show, setShow] = useState(false);
  const url = "player/coach/getTeamDetails";
  const Deleteurl = "player/coach/deleteTeam";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function getData(url, Team = "") {
    const reqData = {
      team_id: id,
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if (url === "player/coach/getTeamDetails") {
          setResponseData(response.data);
        } else if (url === "player/coach/deleteTeam") {
          setResponseDatap(response.data);
          if (response.data.data.message == "you cant delete this") {
            setModelShow2(true);
          } else if (response.data.data.message == "deleted successfully") {
            window.history.back();
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData(url);
  }, []);
  const dataupcomming = responseData.data;
  const dataupcommingp = responseDatap.data;
  console.log(dataupcomming);
  console.log(dataupcommingp);

  function goBack() {
    window.history.back();
  }

  function deleteTeam(e) {
    e.preventDefault();
    setModelShow(true);
    // getData(Deleteurl)
    // window.history.back()
  }

  function deleteTeam2(e) {
    e.preventDefault();
    setModelShow(false);
    getData(Deleteurl);
    handleShow();
  }

  function cancel2(e) {
    e.preventDefault();
    setModelShow(false);
    setModelShow2(false);
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
            <div className="title">
              <h1>Team</h1>
            </div>
            <div className="Payments-table-box-1">
              <div className="tablee">
                <div className="table-head">
                  <div className="coll-4-113">Team ID</div>
                  <div className="coll-4-113">Team</div>
                  <div className="coll-4-113">Date</div>
                </div>

                <div className="table-row">
                  <div className="coll-4-113">T-{id}</div>
                  <div className="coll-4-113">
                    {dataupcomming ? dataupcomming[0].name : ""}
                  </div>
                  <div className="coll-4-113">
                    {dataupcomming ? dataupcomming[0].date : ""}
                  </div>
                </div>
                <hr></hr>
              </div>

              <div className="tablee">
                <h3
                  style={{
                    width: "100%",
                    textAlign: "left",
                    paddingLeft: "40px",
                  }}
                >
                  Players
                </h3>
                <hr></hr>
              </div>
              <Container style={{ marginLeft: "25px" }}>
                {dataupcomming
                  ? dataupcomming.map((item, i) => (
                      <Row>
                        <Col
                          className="EPS-main-3-1"
                          style={{ fontSize: "1rem", fontWeight: "400" }}
                        >
                          {item.username}
                        </Col>
                        <Col
                          className="EPS-main-3-1"
                          style={{ fontSize: "1rem", fontWeight: "400" }}
                        >
                          BF-{item.user_id}
                        </Col>
                        <Col className="Attendance-head-1"></Col>
                        <Col> {/* <a href="#">Remove</a>{" "} */}</Col>
                      </Row>
                    ))
                  : ""}
              </Container>

              <div className="btn-2-2" style={{ marginTop: "30px" }}>
                <button
                  type="reset"
                  className="btn btn-secondary"
                  onClick={goBack}
                >
                  Cancel
                </button>
                <button
                  style={{ marginLeft: "80%" }}
                  className="btn btn-danger"
                  onClick={deleteTeam}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={modelShow}
        onHide={true}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header style={{ backgroundColor: "white", border: "none" }}>
          <Modal.Title> Are you sure to delete this team? </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          {/* <h1>Render Count: {count.current}</h1> */}
          <form className="form-group mb-3">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
              <button onClick={cancel2} className="btn btn-secondary">
                Cancel
              </button>
              <button onClick={deleteTeam2} className="btn btn-danger">
                Delete
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none", height: 0 }}
        ></Modal.Footer>
      </Modal>
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
          <Modal.Title>
            {" "}
            <p style={{ color: "red", fontSize: "medium", margin: "0" }}>
              Unable to Delete <br />
              Team already assign to a match
            </p>{" "}
            <p style={{ margin: "0" }}>Enter password </p>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        ></Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>{" "}
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
          <Modal.Title>
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          <h4 style={{ color: "red", marginLeft:'15px' }}>
            Unable To Delete <br />
            Team Already Assigned To a Match
          </h4>{" "}
        
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewTeam;
