import React from "react";
import axios from "axios";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
// import "../css/Matches_3.css";
import "../css/MarkPlayerProgress.css";
import player from "../player.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import { Input } from "antd";
import { useState, useEffect } from "react";
import { fetchData } from "../../AuthServer";
import Checkbox from '@mui/material/Checkbox';
import { FcHighPriority, FcOk } from "react-icons/fc";
import Typography from "@mui/material/Typography";
const { TextArea } = Input;

function PlayerPerformance() {

  const { id, match_id, type } = useParams();
  const [responseDataI, setResponseDataI] = useState([]);

  const [isAttend, setIsAttend] = useState(false);
  const [markedResponse, setMarkedResponse] = useState('');
  const [responseIcon, setResponseIcon] = useState(null);

  const [defensiveShot, setDefensiveShot] = useState(false);
  const [drive, setDrive] = useState(false);
  const [flick, setFlick] = useState(false);

  const [bouncer, setBouncer] = useState(false);
  const [reverseSwing, setReverseSwing] = useState(false);
  const [yorker, setYorker] = useState(false);

  const [wicketKeeping, setWicketKeeping] = useState(false);
  const [positionKeeping, setPositionKeeping] = useState(false);
  const [catching, setCatching] = useState(false);

  const [feedback, setFeedback] = useState('');

  var session_description = "";
  var attendance = 0;

  const createSessionDescription = () => {

    if (isAttend) {
      attendance = 1;
    }
    else {
      attendance = 0;
    }

    if (defensiveShot) {
      session_description = session_description + "Defensive Shot, ";
    }

    if (drive) {
      session_description = session_description + "Drive, ";
    }

    if (flick) {
      session_description = session_description + "Flick, ";
    }

    if (bouncer) {
      session_description = session_description + "Bouncer, ";
    }

    if (reverseSwing) {
      session_description = session_description + "Reverse Swing, ";
    }

    if (yorker) {
      session_description = session_description + "Yorker, ";
    }

    if (wicketKeeping) {
      session_description = session_description + "Wicket Keeping, ";
    }

    if (positionKeeping) {
      session_description = session_description + "Position Keeping, ";
    }

    if (catching) {
      session_description = session_description + "Catching, ";
    }

  }

  const handleSubmit = () => {

    createSessionDescription();

    axios.post("/api/coach/markPracticeSessionAttendance", {
      id: id,
      match_id: match_id,
      attendance: attendance,
      session_description: session_description,
      feedback: feedback
    })
      .then((res) => {

        if (res.data.data) {
          setMarkedResponse(res.data.data);
          setResponseIcon(<FcOk />);
          setTimeout(() => {
            window.location.replace(`/coach/VPS/${match_id}`);
          }, 1500);
        }

        if (res.data.error) {
          setMarkedResponse(res.data.error);
          setResponseIcon(<FcHighPriority />);
        }

      })
      .catch((err) => {

        console.log("Error of mark attendance for practice session", err);

      })

  };

  const urlIntro = "player/intro";

  async function getData(url) {
    const reqData = {
      user_id: id,
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if (url === "player/intro") {
          setResponseDataI(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData(urlIntro);
  }, []);

  const dataupcommingI = responseDataI.data;

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
            <form style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="l-back-r-title">
                <div className="l-back-r-title-icon">
                  <Link to={"/coach/VPS/" + match_id}>
                    <IoChevronBackCircleOutline
                      style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                    />
                  </Link>
                </div>

                <h1>Progress</h1>
              </div>

              <div className="MPP-main-container">
                <div className="MPP-main-container-1">
                  <div className="player-details-box" >
                    <img
                      className="playerImage"
                      src={player}
                      alt="Italian Trulli"
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "200px",
                        width: "fit-content",
                        borderRadius: "10px",
                        marginLeft: "50px",
                      }}
                    >
                      <div
                        style={{
                          width: "351px",
                          height: "52px",
                          backgroundColor: "#006950",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingTop: "5px",
                          borderTopRightRadius: "10px",
                          borderTopLeftRadius: "10px",
                        }}
                      >
                        <h3 style={{ color: "white" }}>
                          {dataupcommingI ? dataupcommingI[0].name : ""}
                        </h3>
                      </div>
                      <div
                        style={{
                          width: "351px",
                          height: "fit-content",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: "175px",
                            height: "36px",
                            backgroundColor: "#009270",
                            paddingTop: "5px",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        >
                          <h5
                            style={{
                              color: "white",
                              fontWeight: "normal",
                              fontSize: "1rem",
                            }}
                          >
                            Age
                          </h5>
                        </div>
                        <div
                          style={{
                            width: "175px",
                            height: "36px",
                            backgroundColor: "#009270",
                            paddingTop: "5px",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        >
                          <h5
                            style={{
                              color: "white",
                              fontWeight: "normal",
                              fontSize: "1rem",
                            }}
                          >
                            {dataupcommingI ? dataupcommingI[0].Age : ""}
                          </h5>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "351px",
                          height: "fit-content",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: "175px",
                            height: "36px",
                            backgroundColor: "#009270",
                            paddingTop: "5px",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        >
                          <h5
                            style={{
                              color: "white",
                              fontWeight: "normal",
                              fontSize: "1rem",
                            }}
                          >
                            Role
                          </h5>
                        </div>
                        <div
                          style={{
                            width: "175px",
                            height: "36px",
                            backgroundColor: "#009270",
                            paddingTop: "5px",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        >
                          <h5
                            style={{
                              color: "white",
                              fontWeight: "normal",
                              fontSize: "1rem",
                            }}
                          >
                            {dataupcommingI ? dataupcommingI[0].player_role : ""}
                          </h5>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "351px",
                          height: "fit-content",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: "175px",
                            height: "36px",
                            backgroundColor: "#009270",
                            paddingTop: "5px",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        >
                          <h5
                            style={{
                              color: "white",
                              fontWeight: "normal",
                              fontSize: "1rem",
                            }}
                          >
                            Batting Style
                          </h5>
                        </div>
                        <div
                          style={{
                            width: "175px",
                            height: "36px",
                            backgroundColor: "#009270",
                            paddingTop: "5px",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        >
                          <h5
                            style={{
                              color: "white",
                              fontWeight: "normal",
                              fontSize: "1rem",
                            }}
                          >
                            {dataupcommingI
                              ? dataupcommingI[0].batting_style
                              : ""}
                          </h5>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "351px",
                          height: "fit-content",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            width: "175px",
                            height: "36px",
                            backgroundColor: "#009270",
                            paddingTop: "5px",
                            textAlign: "left",
                            paddingLeft: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <h5
                            style={{
                              color: "white",
                              fontWeight: "normal",
                              fontSize: "1rem",
                            }}
                          >
                            Bowling Style
                          </h5>
                        </div>
                        <div
                          style={{
                            width: "175px",
                            height: "36px",
                            backgroundColor: "#009270",
                            paddingTop: "5px",
                            textAlign: "left",
                            paddingLeft: "10px",
                            borderBottomRightRadius: "10px",
                          }}
                        >
                          <h5
                            style={{
                              color: "white",
                              fontWeight: "normal",
                              fontSize: "1rem",
                            }}
                          >
                            {dataupcommingI
                              ? dataupcommingI[0].bowling_style
                              : ""}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="MPP-main-container-2">

                  <Typography component="h1" variant="h6" sx={{ mt: 0, mb: 1, color: "#e6222f" }} style={{ fontFamily: "Monospace", fontSize: "1.5rem" }}>
                    {responseIcon}{"\t"}{markedResponse}
                  </Typography>

                  <div style={{ width: "90%", height: "100px", padding: "30px 10px" }}>
                    <Row>
                      <Col style={{ fontSize: "25px", fontWeight: "500" }} className="MPP-main-container-2-data">
                        Attendance
                      </Col>
                      <Col style={{ display: "flex" }}>
                        <Checkbox checked={isAttend} onChange={() => { setIsAttend(!isAttend) }} /> <h5 style={{ fontSize: "18px", marginTop: "10px", color: "#bf2217" }}>(if ~/ marked as attend otherwise not)</h5>
                      </Col>
                    </Row>
                  </div>

                  <Container fluid>
                    <Row className="MPP-main-container-2-heading">
                      <Col>
                        <h5>Batting</h5>
                      </Col>
                      <Col>
                        <h5>Bowling</h5>
                      </Col>
                      <Col>
                        <h5>Fielding</h5>
                      </Col>
                    </Row>
                  </Container>

                  <hr></hr>

                  <Container fluid>
                    <Row>
                      <Col className="MPP-main-container-2-data">Defensive shot</Col>
                      <Col>
                        <Checkbox checked={defensiveShot} onChange={() => { setDefensiveShot(!defensiveShot) }} disabled={!isAttend || type == "Bowling" || type == "Fielding"} />
                      </Col>

                      <Col className="MPP-main-container-2-data">Bouncer</Col>
                      <Col>
                        <Checkbox checked={bouncer} onChange={() => { setBouncer(!bouncer) }} disabled={!isAttend || type == "Batting" || type == "Fielding"} />
                      </Col>

                      <Col className="MPP-main-container-2-data">Wicket Keeping</Col>
                      <Col>
                        <Checkbox checked={wicketKeeping} onChange={() => { setWicketKeeping(!wicketKeeping) }} disabled={!isAttend || type == "Bowling" || type == "Batting"} />
                      </Col>
                    </Row>

                    <Row>
                      <Col className="MPP-main-container-2-data">Drive</Col>
                      <Col>
                        <Checkbox checked={drive} onChange={() => { setDrive(!drive) }} disabled={!isAttend || type == "Bowling" || type == "Fielding"} />
                      </Col>

                      <Col className="MPP-main-container-2-data">Reverse Swing</Col>
                      <Col>
                        <Checkbox checked={reverseSwing} onChange={() => { setReverseSwing(!reverseSwing) }} disabled={!isAttend || type == "Batting" || type == "Fielding"} />
                      </Col>

                      <Col className="MPP-main-container-2-data">Position Keeping</Col>
                      <Col>
                        <Checkbox checked={positionKeeping} onChange={() => { setPositionKeeping(!positionKeeping) }} disabled={!isAttend || type == "Bowling" || type == "Batting"} />
                      </Col>
                    </Row>

                    <Row>
                      <Col className="MPP-main-container-2-data">Flick</Col>
                      <Col>
                        <Checkbox checked={flick} onChange={() => { setFlick(!flick) }} disabled={!isAttend || type == "Bowling" || type == "Fielding"} />
                      </Col>

                      <Col className="MPP-main-container-2-data">Yorker</Col>
                      <Col>
                        <Checkbox checked={yorker} onChange={() => { setYorker(!yorker) }} disabled={!isAttend || type == "Batting" || type == "Fielding"} />
                      </Col>

                      <Col className="MPP-main-container-2-data">Catching</Col>
                      <Col>
                        <Checkbox checked={catching} onChange={() => { setCatching(!catching) }} disabled={!isAttend || type == "Bowling" || type == "Batting"} />
                      </Col>
                    </Row>
                  </Container>

                </div>

                <div className="MPP-main-container-3">

                  <hr></hr>

                  <h5>Feedback</h5>

                  <div className="MPP-main-container-3-1">

                    <div className="MPP-main-container-3-1-1">
                      <TextArea
                        rows={4}
                        placeholder="Type Your Feedback"
                        maxLength={255}
                        onChange={(e) => { setFeedback(e.target.value) }}
                        disabled={!isAttend}
                      />
                    </div>

                    <div className="MPP-main-container-3-1-2">
                      <Button variant="secondary" onClick={() => {window.location.reload()}}>Cancel</Button>{" "}
                      <Button variant="success" style={{ marginLeft: "10px" }} onClick={handleSubmit} >Save</Button>{" "}
                    </div>

                  </div>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </>

  );

}

export default PlayerPerformance;
