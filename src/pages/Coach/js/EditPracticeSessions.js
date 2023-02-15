import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/EditPracticeSessions.css";
import EditRowDetailsWithButton from "../../../component/EditRowDetailsWithButton/EditRowDetailsWithButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import Button from "react-bootstrap/Button";
import Navbar from "../../../component/NavigationBar/Navbar";
import { useParams, useLocation } from "react-router-dom";

function EditPracticeSessions() {
  const { id } = useParams();
  const array1 = [
    {
      lable: "Session type",
      data: "Batting",
    },
  ];

  const array2 = [
    {
      lable: "Date",
      data: "2022 Oct 16",
    },
  ];

  const array3 = [
    {
      lable: "Time",
      data: "9.30 AM",
    },
  ];

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
            <div className="l-back-r-title">
              <div className="l-back-r-title-icon">
                <Link to={"/coach/practiceSessions"}>
                  <IoChevronBackCircleOutline
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                  />
                </Link>
              </div>

              <h1>Edit Practice Session</h1>
            </div>

            <div className="EPS-main">
              <div className="EPS-main-1">
                <EditRowDetailsWithButton arr={array1} btn={false} />
                <EditRowDetailsWithButton arr={array2} btn={true} />
                <EditRowDetailsWithButton arr={array3} btn={true} />
              </div>

              <div className="EPS-main-2">
                <h6>Coaches</h6>
                <hr></hr>

                <Container>
                  <Row>
                    <Col className="EPS-main-2-1">Asitha Muthumala</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                      {" "}
                      {/* <a href="#">Remove</a>{" "} */}
                    </Col>
                  </Row>

                  <Row>
                    <Col className="EPS-main-2-1">Asitha Muthumala</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                      {" "}
                      {/* <a href="#">Remove</a>{" "} */}
                    </Col>
                  </Row>
                </Container>

                <div className="EPS-main-2-2">
                  {/* <AddMultipleSelections name={"Add Couches"} /> */}
                </div>
              </div>

              <div className="EPS-main-3">
                <h6>Players</h6>
                <hr></hr>

                <Container>
                  <Row>
                    <Col className="EPS-main-3-1">Asitha Muthumala</Col>
                    <Col className="EPS-main-3-1">BF-002</Col>
                    <Col className="Attendance-head-1"></Col>
                    <Col>
                      {" "}
                      {/* <a href="#">Remove</a>{" "} */}
                    </Col>
                  </Row>

                  <Row>
                    <Col className="EPS-main-3-1">Asitha Muthumala</Col>
                    <Col className="EPS-main-3-1">BF-002</Col>
                    <Col className="Attendance-head-1"></Col>
                    <Col>
                      {" "}
                      {/* <a href="#">Remove</a>{" "} */}
                    </Col>
                  </Row>
                </Container>

                <div className="EPS-main-3-2">
                  {/* <AddMultipleSelections name={"Add Players"} /> */}
                </div>
              </div>

              <div className="EPS-main-4">
                <Button variant="secondary">Cancel</Button>{" "}
                <Button variant="success">Save</Button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPracticeSessions;
