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
import ResetSubmit from "../../../component/Form/ResetSubmit";
import FileUpload from "../../../component/Form/FileUpload";
import moment from "moment";
const Axios = require("axios").default;

var edate;
var date = new Date();
date.setDate(date.getDate() + 7);

var currentDate = moment(date).format("YYYY-MM-DD");

const formControl = (event) =>{
  event.preventDefault();
  console.log("this is event : ",event)

  const formData = {
    date: event.target[0].value,
    time: event.target[1].value,
    title: "Practice",
    ground: event.target[3].value,
    match_format: "practice",
    op_team_name: event.target[2].value,

  }

  console.log("form data : ",formData)

  Axios.post("http://localhost:3001/api/manager/addPracticeMatch", formData)
  .then((res) => {
    // console.log("res", res);
    
    if (res.data.message != null) {
      alert(res.data.message);
    } else {
      alert("Match Add Successfully");
      window.location.reload();
    }

    // setPost(res);
  })
  .catch((err) => console.log("error is arized", err));
}

function AddPracticeMatch() {
  let array1 = [
    {
      title: "Date",
      for: "exampleInputEmail1",
      type: "date",
      placeholder: "",
      id: "date",
      min: currentDate,
    },
    {
      title: "Time",
      for: "exampleInputEmail1",
      type: "time",
      placeholder: "",
      id: "time",
    },
    {
      title: "Oppesite Team",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "",
      id: "opposote",
    },
    {
      title: "Ground",
      for: "exampleInputEmail1",
      type: "text",
      placeholder: "",
      id: "ground",
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

                <h1>Add Practice Match</h1>
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
                           Practice Match
                          </h4>
                        </div>
                      </div>
                      <div
                        className="match-box-mid"
                        style={{ height: "auto", minWidth: "100%" }}
                      >
                        <div className="form-container">
                          <form onSubmit={formControl}>
                            <SampleForm arr={array1} />
                            <FileUpload filefor="logo" filetitle="Logo" />
                            <ResetSubmit />
                          </form>
                        </div>
                      </div>
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

export default AddPracticeMatch;
