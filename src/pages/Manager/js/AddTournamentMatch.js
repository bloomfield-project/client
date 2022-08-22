import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import SampleForm from "../../../component/Form/SampleForm";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import Button from "react-bootstrap/Button";
import "antd/dist/antd.css";
import Team from "../../player/Team.png";
import opTeam from "../../player/player.jpg";
import MatchesTeams from "../../../component/MatchesTeams/MatchesTeams";

function AddTournamentMatch() {
  let array1 = [
    {
      title: "First Name",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "First Name",
      id: "f-name",
    },
    {
      title: "Last Name",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "Last Name",
      id: "l-name",
    },
    {
      title: "e-mail",
      for: "exampleInputEmail1",
      type: "email",
      placeholder: "Email",
      id: "email",
    },
    {
      title: "Contact",
      for: "exampleInputEmail1",
      type: "number",
      placeholder: "Contact Number",
      id: "contact",
    },
  ];

  let file = {
    filefor: "for",
    filetitle: "Logo",
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
            <div className="page-container-gray" style={{ width: "100%" }}>
              <div className="l-back-r-title">
                <div className="l-back-r-title-icon">
                  <Link to={"/manager/AddMatch"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Add Tournament Match</h1>
              </div>

              <div className="form-container">
                <div className="table-box-1">
                  <div className="tablee">
                    <div className="matche-container-outer-box">
                      <div className="match-box-up">
                        <div className="go-out">
                          <h4
                            style={{
                              color: "#009270",
                              fontSize: "2rem",
                              fontWeight: "bolder",
                            }}
                          >
                            Hero Cup
                          </h4>
                        </div>
                      </div>
                      <div
                        className="match-box-mid"
                        style={{ height: "auto", minWidth: "100%" }}
                      >
                        <SampleForm arr={array1} upload={true} file1={file} />
                      </div>
                    </div>
                    <div className="tablee">
                      <MatchesTeams
                        btns=""
                        wonornot="BLOOMFIELD won by 7 wkts"
                        left="Starts at 09.30"
                        middle="R.Premadasa Stadium"
                        right="2022 Oct 16"
                      />
                      <MatchesTeams
                        btns=""
                        wonornot="BLOOMFIELD won by 7 wkts"
                        left="Starts at 09.30"
                        middle="R.Premadasa Stadium"
                        right="2022 Oct 16"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTournamentMatch;
