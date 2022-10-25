import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import "../css/Matches_3.css";
import "../css/PlayerPerformance.css";
import IntroTable from "../../../component/IntroTable/IntroTable";
import player from "../player.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputField from "../../../component/InputField/InputField";
import Button from "react-bootstrap/Button";
import Navbar from "../../../component/NavigationBar/Navbar";
import { useState, useEffect } from "react";
import { fetchData } from "../../AuthServer";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function PlayerPerformance() {
  const { id, player } = useParams();

  const [valuess, setValues] = useState([]);
  // const loginData= useSelector(state => state.auth.data)
  const [responseDataI, setResponseDataI] = useState([]);
  // const location = useLocation();
  // console.log(location.state)
  const urlIntro = "player/intro";
  const url2 = "player/coach/updatescore";
  async function getData(
    url,
    bat_runs,
    bat_balls,
    six,
    four,
    overs,
    runs,
    balls,
    ht,
    wkt,
    NB,
    maiden,
    WB,
    runOut,
    catches,
    playedd,
    notOut
  ) {
    const reqData = {
      user_id: player,
      match_id: id,
      bat_runs: bat_runs,
      bat_balls: bat_balls,
      six: six,
      four: four,
      overs: overs,
      runs: runs,
      balls: balls,
      ht: ht,
      wkt: wkt,
      NB: NB,
      maiden: maiden,
      WB: WB,
      runOut: runOut,
      catches: catches,
      playedd: playedd,
      notOut: notOut,
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
  console.log(dataupcommingI);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  function played() {
    setChecked(!checked);
  }
  function played2() {
    setChecked2(!checked2);
  }
  console.log(checked);

  function submitForm(e) {
    e.preventDefault();
    var values = [];
    const bat_runs = e.target[0].value;
    const bat_balls = e.target[2].value;
    const six = e.target[3].value;
    const four = e.target[4].value;
    const overs = e.target[5].value;
    const runs = e.target[6].value;
    const balls = e.target[7].value;
    const ht = e.target[8].value;
    const wkt = e.target[9].value;
    const NB = e.target[10].value;
    const maiden = e.target[11].value;
    const WB = e.target[12].value;
    const runOut = e.target[13].value;
    const catches = e.target[14].value;
    var playedd;
    var notOut;
    if (checked) {
      playedd = 1;
    } else if (!checked) {
      playedd = 0;
    }
    if (checked2) {
      notOut = 1;
    } else if (!checked2) {
      notOut = 0;
    }
    setValues(values);
    console.log(values);
    getData(
      url2,
      bat_runs,
      bat_balls,
      six,
      four,
      overs,
      runs,
      balls,
      ht,
      wkt,
      NB,
      maiden,
      WB,
      runOut,
      catches,
      playedd,
      notOut
    );
  }
  console.log(valuess);
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
                <Link to={"/coach/matches3/" + id}>
                  <IoChevronBackCircleOutline
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                  />
                </Link>
              </div>

              <h1>Player Performance</h1>
            </div>
            <div className="matchesD-container-outer-box">
              <div className="form-container-G">
                <div className="form-container-1">
                  {/* <div className="form-container-1-1">
                  <img
                    className="playerImage"
                    src={player}
                    alt="Italian Trulli"
                  />
                </div> */}

                  <div className="form-container-1-2">
                    {/* '''''''''''''''''''''''''''''''''''''''''''''''''' */}
                    <Row>
                      <Col>
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
                                {dataupcommingI
                                  ? dataupcommingI[0].player_role
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
                      </Col>
                      <Col>
                        <div
                          style={{
                            display: "flex",
                            width: "100px",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginLeft: "50px",
                          }}
                        >
                          <div>
                            <div
                              className="ipm-1"
                              style={{ marginBottom: " 5px" }}
                            >
                              Played
                            </div>
                          </div>
                          <div>
                            <input
                              style={{ width: "25px", height: "25px" }}
                              type="checkbox"
                              onChange={played}
                              checked={checked}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {/* ................................................... */}
                  </div>
                </div>

                <form
                  onSubmit={submitForm}
                  style={{ display: checked ? "block" : "none" }}
                >
                  <div className="form-container-2">
                    <h4>Batting Career Summary</h4>

                    <hr></hr>

                    <Container>
                      <Row>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Runs"
                          />{" "}
                        </Col>
                        <Col>
                          {" "}
                          <Row>
                            <Col>
                              <div className="ipm-1">Not Out</div>
                            </Col>
                            <Col>
                              <input
                                style={{ width: "25px", height: "25px" }}
                                type="checkbox"
                                onChange={played2}
                                checked={checked2}
                              />{" "}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Balls"
                          />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <InputField value="0" type="number" label="6s" />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <InputField value="0" type="number" label="4s" />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                    </Container>
                  </div>

                  <div className="form-container-3">
                    <h4>Bowling Career Summary</h4>

                    <hr></hr>

                    <Container>
                      <Row>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Overs"
                          />{" "}
                        </Col>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Runs"
                          />{" "}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Balls"
                          />{" "}
                        </Col>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Hat-Tricks"
                          />{" "}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Wkts"
                          />{" "}
                        </Col>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="No Balls"
                          />{" "}
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Maiden"
                          />{" "}
                        </Col>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Wide Balls"
                          />{" "}
                        </Col>
                      </Row>
                    </Container>
                  </div>

                  <div className="form-container-4">
                    <h4>Batting Career Summary</h4>

                    <hr></hr>

                    <Container>
                      <Row>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Run-Outs"
                          />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col>
                          {" "}
                          <InputField
                            value="0"
                            type="number"
                            label="Catches"
                          />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                    </Container>
                  </div>

                  <div className="form-container-5">
                    <button className="form-container-5-btn" type="submit">
                      Save
                    </button>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerPerformance;
