import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";

import Button from "react-bootstrap/Button";
import "antd/dist/antd.css";
import Team from "../../player/Team.png";
import opTeam from "../../player/player.jpg";

const Axios = require("axios").default;

function MatchDetail() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/AddTournamentMatch").then(
      (response) => {
        setPost(response.data);
      }
    );
  }, []);
  console.log("post data function ", post);

    

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
            {/* <div > */}
            <div className="title">
              <h1>Matches</h1>
            </div>

            <div className="tabs">
              <div className="tabs-left"></div>

              <div className="tabs-right">
                <Link to={"/manager/AddMatch"}>
                  <Button to={"/manager/AddMatch"} variant="outline-success">
                    + Add
                  </Button>
                </Link>
              </div>
            </div>
            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <div className="gap-3"></div>

                {post ? (
                  post.data.map((item, i) => {
                    return (
                      <>
                        <div className="matche-container-outer-box" key={i}>
                          <div className="match-box-up">
                            <div className="go-out">
                              <h4
                                style={{
                                  color: "#009270",
                                  fontSize: "2rem",
                                  fontWeight: "bolder",
                                }}
                              >
                                {item.title}
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
                              <div className="box-mid-left-down"></div>
                            </div>
                            <div className="match-box-mid-mid">
                              <div className="box-mid-mid-up">
                                <h5 style={{ color: "#a5a5a5" }}>
                                  {item.match_format}
                                </h5>
                              </div>
                              <div className="box-mid-mid-mid">VS</div>
                              <div className="box-mid-mid-down">
                                <h5 style={{ color: "#a5a5a5" }}>
                                  {item.ground}
                                </h5>
                              </div>
                            </div>
                            <div className="match-box-mid-right">
                              <div className="box-mid-right-up">
                                <h4 style={{ color: "#a5a5a5" }}>
                                  {item.op_team_name}
                                </h4>
                              </div>
                              <div className="box-mid-right-mid">
                                <img src={opTeam}></img>
                              </div>
                              <div className="box-mid-right-down"></div>
                            </div>
                          </div>
                          <div className="match-box-down-1">
                            <div className="match-box-down-1-left">
                              <h5 style={{ color: "#009270" }}>
                                {/* BLOOMFIELD won by 4 wkts */}
                              </h5>
                            </div>
                            <div className="match-box-down-1-right">
                              <h5 style={{ color: "#a5a5a5" }}>{item.date}</h5>
                            </div>
                          </div>
                          <div className="match-box-down">
                            <Button variant="secondary">View</Button>
                          </div>
                        </div>
                        <div className="gap-3"></div>
                      </>
                    );
                  })
                ) : (
                  <div className="spinner-border m-5" role="status">
                    <span className="sr-only"></span>
                  </div>
                )}

                {/* match card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MatchDetail;
