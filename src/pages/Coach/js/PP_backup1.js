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
import { green } from "@material-ui/core/colors";
import { display } from "@mui/system";

function PlayerPerformance() {
  const { id, player,team } = useParams();

  const [valuess, setValues] = useState([]);
  // const loginData= useSelector(state => state.auth.data)
  const [responseDataI, setResponseDataI] = useState([]);
  const [dataforValidation, setDataforValidation] = useState([]);
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
    notOut,
    AT,
    team
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
      AT:AT,
      team:team,
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
  const [checked3, setChecked3] = useState(false);

  

  function played() {
    setChecked(!checked);
    setChecked3(checked);
  }
  function played2() {
    setChecked2(!checked2);
  }
  function played3() {
    setChecked3(!checked3);
    setChecked(checked3);

  }
  console.log(checked3);
  

  function submitForm(e) {
    e.preventDefault();
    var values = [];
    const bat_runs = e.target[5].value;
    const bat_balls = e.target[2].value;
    const six = e.target[3].value;
    const four = e.target[4].value;
    const AT = e.target[5].value;
    const overs = e.target[6].value;
    const runs = e.target[7].value;
    const balls = e.target[8].value;
    const ht = e.target[9].value;
    const wkt = e.target[10].value;
    const NB = e.target[11].value;
    const maiden = e.target[12].value;
    const WB = e.target[13].value;
    const runOut = e.target[14].value;
    const catches = e.target[15].value;
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
    if (checked3) {
      playedd = 0;
    } else if (!checked3) {
      playedd = 1;
    }
    
    

    


    setValues(values);
    console.log(bat_runs);
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
      notOut,
      AT,
      team
    );
    // window.history.back()
  }

  async function getData2(player,playedd,team){
    const reqData ={
      user_id:player,
      played:playedd,
      match_id:id,
      team:team,
      
    };
    const authRequest = {
    "method":"post",
    "url":"player/coach/updatescore_notP",
    "data":reqData
  }
  fetchData(authRequest).then((response)=>{
    // setResponseData(response.data)
  }).catch(function(error){
    console.log(error);
  })
}
  function notPlayed(e){
    e.preventDefault();
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
    if (checked3) {
      playedd = 0;
    } else if (!checked3) {
      playedd = 1;
    }

    alert(playedd);
    getData2(player,playedd,team)
    window.history.back()
  }
  console.log(valuess);




  async function getDataforValidation() {
    const reqData = {
      match_id: id,
    };
    const authRequest = {
      method: "post",
      url: "player/coach/getDataforValidation", 
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        setDataforValidation(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getDataforValidation() 
  }, [])
  
  console.log(dataforValidation);

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
                <Link to={"/coach/matches3/" + id+"/"+team}>
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
                              style={{ marginBottom: " 5px" ,marginRight:"10px"}}
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
                          <div style={{marginLeft:"40px" }}>
                            <div
                              className="ipm-1"
                              style={{ marginBottom: " 5px",width:"100px"}}
                            >
                              Not Played
                            </div>
                          </div>
                          <form onSubmit={notPlayed} style={{ display:"flex", alignItems:"center" , justifyContent:"space-between",marginBottom:"25px" }}>
                            <div>
                              <input
                                style={{ width: "25px", height: "25px",marginRight:"20px" }}
                                type="checkbox"
                                onChange={played3}
                                checked={checked3}
                              />
                              
                            </div>
                            <div className="form-container-5">
                              <button style={{display: checked3 ? "block" : "none"}} className="form-container-5-btn" type="submit">
                                Submit
                              </button>{" "}
                            </div>
                          </form>
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
                    <h4>Batting Career</h4>

                    <hr></hr>

                    <Container>
                      <Row>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Runs:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col>
                          {" "}
                          <Row>
                            <Col>
                              <div className="ipm-1" style={{ fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Not Out</div>
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
                      <div className="ppppp" style={{color:"blue",display:"flex",paddingLeft:"150px"}}>{dataforValidation?dataforValidation[0]?.format=="T20"?(120-dataforValidation[0]?.balls_faced)+" more balls left":dataforValidation[0]?.format=="ODI"?(300-dataforValidation[0]?.balls_faced)+" more balls left":"":""}</div>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Balls:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          max={dataforValidation?dataforValidation[0]?.format=="T20"?(120-dataforValidation[0]?.balls_faced):dataforValidation[0]?.format=="ODI"?(300-dataforValidation[0]?.balls_faced):200:200}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>6s:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>4s:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                      <Col className="APS-Form-2-2" style={{ display:"none"}}>
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" ,display:"none"}}>AT:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                      
                    </Container>
                  </div>

                  <div className="form-container-3">
                    <h4>Bowling Career</h4>

                    <hr></hr>

                    <Container>
                      <Row>
                      <div className="ppppp" style={{color:"blue",display:"flex",paddingLeft:"150px"}}>{dataforValidation?dataforValidation[0]?.format=="T20"?(20-dataforValidation[0]?.b_overs)+" more overs left":dataforValidation[0]?.format=="ODI"?(50-dataforValidation[0]?.b_overs)+" more overs left":"":""}</div>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Overs:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          max={dataforValidation?dataforValidation[0]?.format=="T20"?(20-dataforValidation[0]?.b_overs):dataforValidation[0]?.format=="ODI"?(50-dataforValidation[0]?.b_overs):200:200}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Runs:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                      </Row>
                      <Row>
                        <Col className="APS-Form-2-2" style={{display:"none"}}>
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Balls:</label>
                        <input
                          type="number"
                          name="name"
                          value={0}
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Hat-Tricks:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          max={3}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                      </Row>
                      <Row>
                      <div className="ppppp" style={{color:"blue",display:"flex",paddingLeft:"150px"}}>{dataforValidation?(10-dataforValidation[0]?.wkts)+" more wkts left":""}</div>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Wkts:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          max={dataforValidation?(10-dataforValidation[0]?.wkts):10}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>No Balls:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                      </Row>
                      <Row>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Maiden:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Wide Balls:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                      </Row>
                    </Container>
                  </div>

                  <div className="form-container-4">
                    <h4>Fielding Career</h4>

                    <hr></hr>

                    <Container>
                      <Row>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Run Outs:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          max={10}
                          value={0}
                          style={{
                            paddingLeft: "10px",
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />{" "}
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px",fontSize:"1.2rem",color:"gray",fontWeight:"600" }}>Catches:</label>
                        <input
                          type="number"
                          name="name"
                          min={0}
                          max={10}
                          value={0}
                          style={{
                            paddingLeft: "10px",
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
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