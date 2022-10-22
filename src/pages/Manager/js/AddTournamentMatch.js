import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import SampleForm from "../../../component/Form/SampleForm";
import { IoChevronBackCircleOutline } from "react-icons/io5";

// import Button from "react-bootstrap/Button";
import "antd/dist/antd.css";
// import Team from "../../player/Team.png";
// import opTeam from "../../player/player.jpg";
import MatchesTeams from "../../../component/MatchesTeams/MatchesTeams";
import ResetSubmit from "../../../component/Form/ResetSubmit";
import FileUpload from "../../../component/Form/FileUpload";
import SelectOption from "../../../component/Form/SelectOption";
import { object } from "prop-types";
import moment from "moment";

const Axios = require("axios").default;

var date = new Date();
date.setDate(date.getDate() + 7);

var currentDate = moment(date).format("YYYY-MM-DD");

console.log("current date : ", currentDate);

function SetValidation(res) {
  const [post, setPost] = useState(null);
  setPost(res);
  console.log("Data set eka ", post);
}

const AddTournament = (event) => {
  event.preventDefault();

  console.log(event);

  let formData = {
    date: event.target[0].value,
    time: event.target[1].value,
    ground: event.target[2].value,
    match_format: event.target[4].value,
    op_team_name: event.target[3].value,
  };

  Axios.post("http://localhost:3001/api/manager/AddTournamentMatch", formData)
    .then((res) => {
      return SetValidation(res);
    })
    .catch((err) => console.log("error is arized", err));
};

function AddTournamentMatch(props) {
  const { type } = useParams();

  console.log("type is : " + type);

  const option = [
    {
      value: "T20",
      title: "T20",
    },
    {
      value: "Test",
      title: "Test",
    },
    {
      value: "ODI",
      title: "ODI",
    },
  ];

  let array1 = [
    {
      title: "Date",
      min: String(currentDate),
      type: "date",
      placeholder: "",
      id: "date",
      required: "true",
    },
    {
      title: "Time",

      type: "time",
      placeholder: "",
      id: "time",
      required: "true",
    },
    {
      title: "Ground",
      type: "text",
      placeholder: "",
      id: "ground",
      required: "true",
    },
    {
      title: "Opposite Team Name",

      type: "text",
      placeholder: "",
      id: "op_team_name",
      required: "true",
    },
  ];

  let file = {
    filefor: "for",
    filetitle: "Logo",
  };

  console.log("post data function ");
  // if (post) return null;

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

                <h1>Add Tournament Match </h1>
                {/* <ul>
                  {this.post.data.map((item, i) => {
                    return (
                      <li key={i}>
                        {item.ground} - {item.date}
                      </li>
                    );
                  })}
                </ul> */}
              </div>

              <div className="form-container">
                <div className="table-box-1" style={{ margin: "auto" }}>
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
                            {type}
                          </h4>
                        </div>
                      </div>
                      <div
                        className="match-box-mid"
                        style={{ height: "auto", minWidth: "100%" }}
                      >
                        <div
                          className="form-container"
                          onSubmit={AddTournament}
                        >
                          <form>
                            <SampleForm arr={array1} />
                            <SelectOption
                              label={"Match Format"}
                              option={option}
                            />
                            <FileUpload
                              filefor="opIcon"
                              filetitle="Opposite Teame Icon"
                            />
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

export default AddTournamentMatch;
