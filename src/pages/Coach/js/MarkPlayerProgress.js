import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
// import "../css/Matches_3.css";
import "../css/MarkPlayerProgress.css";
import IntroTable from "../../../component/IntroTable/IntroTable";
import player from "../player.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CheckBox from "../../../component/CheckBox/CheckBox";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import { Input } from "antd";
import { useState, useEffect } from "react";
import { fetchData } from "../../AuthServer";
const { TextArea } = Input;

function PlayerPerformance() {
  const {id,match_id} = useParams();
  const [responseDataI, setResponseDataI] = useState([]);
  // const location = useLocation();
  // console.log(location.state)
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
        // if(url==="player/performance"){
        //     setResponseData(response.data)
        // }
        // else if(url==="player/performanceBowl"){
        //     setResponseDataB(response.data)
        // }
        // else if(url==="player/performanceFld"){
        //     setResponseDataF(response.data)
        // }
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
  console.log(dataupcommingI);
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
          <form style={{width:"100%" ,display:"flex" , flexDirection:"column", alignItems:"center"}}>
            <div className="l-back-r-title">
              <div className="l-back-r-title-icon">
                <Link to={"/coach/VPS/"+match_id}>
                  <IoChevronBackCircleOutline
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                  />
                </Link>
              </div>

              <h1>Progress</h1>
            </div>
            f
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
                <div style={{width:"90%", height:"100px" ,padding:"30px 10px"}}><Row>
                    <Col className="MPP-main-container-2-data">
                        Attendance
                    </Col>
                    <Col>
                        <CheckBox />
                    </Col>
                </Row></div>
                <Container fluid>
                  <Row className="MPP-main-container-2-heading">
                    <Col>
                      <h5>Batting</h5>
                    </Col>
                    <Col>
                      <h5>Bowling</h5>
                    </Col>
                  </Row>
                </Container>

                <hr></hr>

                <Container fluid>
                  <Row>
                    <Col className="MPP-main-container-2-data">
                      Defensive shot
                    </Col>
                    <Col>
                      <CheckBox />
                    </Col>
                    <Col className="MPP-main-container-2-data">Bouncer</Col>
                    <Col>
                      <CheckBox />
                    </Col>
                  </Row>

                  <Row>
                    <Col className="MPP-main-container-2-data">Drive</Col>
                    <Col>
                      <CheckBox />
                    </Col>
                    <Col className="MPP-main-container-2-data">
                      Reverse Swing
                    </Col>
                    <Col>
                      <CheckBox />
                    </Col>
                  </Row>

                  <Row>
                    <Col className="MPP-main-container-2-data">Flick</Col>
                    <Col>
                      <CheckBox />
                    </Col>
                    <Col className="MPP-main-container-2-data">Yorker</Col>
                    <Col>
                      <CheckBox />
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
                      maxLength={6}
                    />
                  </div>

                  <div className="MPP-main-container-3-1-2">
                    <Container>
                      <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                          <Button variant="secondary">Cancel</Button>{" "}
                        </Col>
                        <Col>
                          <Button variant="success">Save</Button>{" "}
                        </Col>
                      </Row>
                    </Container>
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
