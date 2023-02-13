import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
// import "../css/MatchDetails.css";
import Team from "../Team.png";
import opTeam from "../opTeam.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { fetchData } from "../../AuthServer";

function Matches_4() {
  const { id } = useParams();

  console.log("type is : " + id);
  const [responseP, setResponseP] = useState([]);
  const [responsePB,setResponsePB]=useState([]);

  async function getData() {
    const reqData = {
      match_id: id,
      statuss: 1,
    };
    const authRequest = {
      method: "post",
      url: "player/matchPlayer",
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        setResponseP(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  async function getData2() {
    const reqData = {
      match_id: id,
      statuss: 1,
    };
    const authRequest = {
      method: "post",
      url: "player/matchPlayerBowl",
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        setResponsePB(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
    getData2();
  }, []);

  console.log(responseP);
  console.log(responsePB);
  const successP = responseP.success;
  const players = responseP.data
  const marks = responseP.data2
  const playersBowl = responsePB.data

  return (
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
            <h1>Matches</h1>
          </div>

          <div className="matchesD-container-outer-box">
            {/* match card */}
            {players === undefined ? (
              <h1>hi</h1>
            ) : (
              <div className="matche-container-outer-box">
                <div className="match-box-up">
                  <div className="go-out">
                    <h4
                      style={{
                        color: "#009270",
                        fontSize: "1.5rem",
                        fontWeight: "bolder",
                      }}
                    >
                      {players.length > 0 ? players[0].title : ""}
                    </h4>
                  </div>
                </div>
                <div className="match-box-mid">
                  <div className="match-box-mid-left">
                    <div className="box-mid-left-up">
                      <h4 style={{ color: "#a5a5a5" }}>BLOOMFIELD</h4>
                    </div>
                    <div className="box-mid-left-mid">
                      <img src={Team}></img>
                    </div>
                    <div className="box-mid-left-down">
                      <h5>
                        {marks[0].total+
                          "-" +
                          marks[0].wkts +
                          " (" +
                          marks[0].our_balls +
                          ")"}
                      </h5>
                    </div>
                  </div>
                  <div className="match-box-mid-mid">
                    <div className="box-mid-mid-up">
                      <h5 style={{ color: "#a5a5a5" }}>
                        {players.length > 0 ? players[0].match_format : ""}
                      </h5>
                    </div>
                    <div className="box-mid-mid-mid">VS</div>
                    <div className="box-mid-mid-down">
                      <h5 style={{ color: "#a5a5a5" }}>
                        {players.length > 0 ? players[0].ground : ""}
                      </h5>
                    </div>
                  </div>
                  <div className="match-box-mid-right">
                    <div className="box-mid-right-up">
                      <h4 style={{ color: "#a5a5a5" }}>
                        {players.length > 0 ? players[0].op_team_name : ""}
                      </h4>
                    </div>
                    <div className="box-mid-right-mid">
                      <img src={opTeam}></img>
                    </div>
                    <div className="box-mid-right-down">
                      <h5>
                        {players[0].op_score +
                          "-" +
                          players[0].op_wickets +
                          " (" +
                          players[0].op_overs +
                          ")"}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="match-box-down-1">
                  <div className="match-box-down-1-left">
                    <h5 style={{ color: "#009270" }}>
                      {marks[0].total > players[0].op_score
                        ? "BLOOMFIELD won"
                        : players[0].op_team_name + " won"}
                    </h5>
                  </div>
                  <div className="match-box-down-1-right">
                    <h5 style={{ color: "#a5a5a5" }}>
                      {players.length > 0 ? players[0].date : " "}
                    </h5>
                  </div>
                </div>
              </div>
            )}
            {/* match card */}
            <div className="gap-3"></div>

            {/*begin*/}
            <div className="tablee-14">
              <div className="table-headMD">
                <div className="col-MD1">
                  <h5>BLOOMFIELD</h5>
                </div>
                {players === undefined ? (
              <h1>hi</h1>
            ) : (
                <div className="col-MD2">
                  <h5>{marks[0].total+"-"+marks[0].wkts}({marks[0].our_balls})</h5>
                </div>)}
              </div>
              <div className="table-head-MD">
                <div className="col-MD-1">
                  <h5>Batter</h5>
                </div>
                <div className="col-MD-2">
                  <h5></h5>
                </div>
                <div className="col-MD-3">
                  <h5>Runs</h5>
                </div>
                <div className="col-MD-4">
                  <h5>Balls</h5>
                </div>
                <div className="col-MD-5">
                  <h5>6s</h5>
                </div>
                <div className="col-MD-6">
                  <h5>4s</h5>
                </div>
                <div className="col-MD-7">
                  <h5>SR</h5>
                </div>
              </div>
              {players !== undefined
                ? players
                    ?.filter((player) => player.match_id > 0)
                    ?.map((item, i) => (
                      <>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            {item.name}
                          </div>
                          <div className="col-MD-2"></div>
                          <div className="col-MD-3">{item.runs}</div>
                          <div className="col-MD-4">{item.no_of_balls_faced}</div>
                          <div className="col-MD-5">{item.sixes}</div>
                          <div className="col-MD-6">{item.fours}</div>
                          <div className="col-MD-7">{(item.runs*100/item.no_of_balls_faced).toFixed(2)}</div>
                        </div>
                        <hr></hr>
                        
                      </>
                    ))
                : "No players to display"}

              <hr></hr>
              <div className="table-row-MD">
                {/* <div className="col-MD-1">Did Not Bat</div>
                <div className="col-MD-list">
                  <a href="#">Maheesh Theekshana</a> <b>,</b>{" "}
                  <a href="#">Jefry Vandesay</a>{" "}
                </div> */}
              </div>
            </div>
            {/*end*/}

            <div className="gap-3"></div>

            {/*begin*/}
            <div className="tablee-14">
              <div className="table-head-MD">
                <div className="col-MD-1">
                  <h5>Bowler</h5>
                </div>
                <div className="col-MD-3">
                  <h5>Overs</h5>
                </div>
                <div className="col-MD-3">
                  <h5>Wkts</h5>
                </div>
                <div className="col-MD-4">
                  <h5>Runs</h5>
                </div>
                <div className="col-MD-5">
                  <h5>Wide Balls</h5>
                </div>
                <div className="col-MD-6">
                  <h5>No Balls</h5>
                </div>
                <div className="col-MD-7">
                  <h5>MO</h5>
                </div>
                <div className="col-MD-6">
                  <h5>Econ</h5>
                </div>
              </div>

              
                
                        {playersBowl?playersBowl?.map((item,i)=><>
                          <div className="table-row-MD">
                            <div className="col-MD-1">
                              {item.name}
                            </div>
                            <div className="col-MD-3">{item.b_no_of_overs}</div>
                            <div className="col-MD-3">{item.b_wkts}</div>
                            <div className="col-MD-4">{item.b_runs}</div>
                            <div className="col-MD-5">{item.b_wide_balls}</div>
                            <div className="col-MD-6">{item.b_no_balls}</div>
                            <div className="col-MD-7">{item.b_maiden_overs}</div>
                            <div className="col-MD-6">{(item.b_runs/(Math.trunc(item.b_no_of_overs)+(item.b_no_of_overs%1))).toFixed(2)}</div>
                          </div>
                          <hr></hr>
                        </>):"No players to display"}
            </div>
            {/*end*/}

            <div className="match-box-down">
              <Link to={"/coach/Matches"}>
                <Button variant="secondary">Back</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matches_4;