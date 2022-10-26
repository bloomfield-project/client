import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../css/MatchDetails.css";
import Team from "../Team.png";
import opTeam from "../opTeam.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { fetchData } from "../../AuthServer";

function MatchDetails() {
  const { id } = useParams();

  console.log("type is : " + id);
  const [responseP, setResponseP] = useState([]);
  // const [responseC,setResponseC]=useState([]);

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

  useEffect(() => {
    getData();
  }, []);

  console.log(responseP);
  const successP = responseP.success;
  const players = responseP.data;

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
                      Hero Cup
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
                        {players[0].full +45+
                          "-" +
                          players[0].our_wickets +
                          " (" +
                          players[0].our_overs +
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
                        {players.length > 0 ? players[0].op_team : ""}
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
                      {players[0].our_score > players[0].op_score
                        ? "BLOOMFIELD won"
                        : players[0].op_team + " won"}
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
                  <h5>{players[0].full+45+"-"+players[0].our_wickets}({players[0].our_overs})</h5>
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
                            Gihan Weerasinghe
                          </div>
                          <div className="col-MD-2"></div>
                          <div className="col-MD-3">18</div>
                          <div className="col-MD-4">20</div>
                          <div className="col-MD-5">0</div>
                          <div className="col-MD-6">2</div>
                          <div className="col-MD-7">90</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            Asitha perera
                          </div>
                          <div className="col-MD-2"></div>
                          <div className="col-MD-3">17</div>
                          <div className="col-MD-4">24</div>
                          <div className="col-MD-5">3</div>
                          <div className="col-MD-6">0</div>
                          <div className="col-MD-7">88.62</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            Bimsara franando
                          </div>
                          <div className="col-MD-2"></div>
                          <div className="col-MD-3">30</div>
                          <div className="col-MD-4">20</div>
                          <div className="col-MD-5">1</div>
                          <div className="col-MD-6">2</div>
                          <div className="col-MD-7">109.62</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            Gihan Nissanka
                          </div>
                          <div className="col-MD-2"></div>
                          <div className="col-MD-3">40</div>
                          <div className="col-MD-4">20</div>
                          <div className="col-MD-5">2</div>
                          <div className="col-MD-6">3</div>
                          <div className="col-MD-7">200</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            Asitha Muthumala
                          </div>
                          <div className="col-MD-2"></div>
                          <div className="col-MD-3">25</div>
                          <div className="col-MD-4">10</div>
                          <div className="col-MD-5">3</div>
                          <div className="col-MD-6">0</div>
                          <div className="col-MD-7">90</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            Dilukshan Bimsara
                          </div>
                          <div className="col-MD-2"></div>
                          <div className="col-MD-3">18</div>
                          <div className="col-MD-4">20</div>
                          <div className="col-MD-5">0</div>
                          <div className="col-MD-6">2</div>
                          <div className="col-MD-7">90</div>
                        </div>
                        <hr></hr>
                      </>
                    ))
                : "jnknknknknkn"}

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

              
                
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            <a href="#"> Lahiru Kumara</a>
                          </div>
                          <div className="col-MD-3">4</div>
                          <div className="col-MD-3">2</div>
                          <div className="col-MD-4">20</div>
                          <div className="col-MD-5">1</div>
                          <div className="col-MD-6">1</div>
                          <div className="col-MD-7">0</div>
                          <div className="col-MD-6">5.00</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            <a href="#"> Gihan Weerasinghe</a>
                          </div>
                          <div className="col-MD-3">4</div>
                          <div className="col-MD-3">0</div>
                          <div className="col-MD-4">36</div>
                          <div className="col-MD-5">4</div>
                          <div className="col-MD-6">0</div>
                          <div className="col-MD-7">0</div>
                          <div className="col-MD-6">9.00</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            <a href="#"> Dilukshan Bimsara</a>
                          </div>
                          <div className="col-MD-3">4</div>
                          <div className="col-MD-3">1</div>
                          <div className="col-MD-4">24</div>
                          <div className="col-MD-5">4</div>
                          <div className="col-MD-6">1</div>
                          <div className="col-MD-7">0</div>
                          <div className="col-MD-6">6.00</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            <a href="#"> Gihan Weerasinghe</a>
                          </div>
                          <div className="col-MD-3">4</div>
                          <div className="col-MD-3">0</div>
                          <div className="col-MD-4">36</div>
                          <div className="col-MD-5">4</div>
                          <div className="col-MD-6">0</div>
                          <div className="col-MD-7">0</div>
                          <div className="col-MD-6">9.00</div>
                        </div>
                        <hr></hr>
                        <div className="table-row-MD">
                          <div className="col-MD-1">
                            <a href="#"> Gihan Weerasinghe</a>
                          </div>
                          <div className="col-MD-3">4</div>
                          <div className="col-MD-3">0</div>
                          <div className="col-MD-4">32</div>
                          <div className="col-MD-5">4</div>
                          <div className="col-MD-6">0</div>
                          <div className="col-MD-7">0</div>
                          <div className="col-MD-6">8.00</div>
                        </div>
                        <hr></hr>
                     
            </div>
            {/*end*/}

            <div className="match-box-down">
              <Link to={"/player/Matches"}>
                <Button variant="secondary">Back</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetails;
