import React from "react";
import Header from "../../../component/header/Header";
import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import EditDetails from "../../../component/EditDetail/EditDetails";
import opTeam from "../../player/opTeam.jpg";

import Button from "react-bootstrap/Button";
import Team from "../../player/Team.png";
import Navbar from "../../../component/NavigationBar/Navbar";

function AddTournamentDetail() {
  const array = [
    {
      lable: "Name",
      data: "kasun kalhara",
    },
    {
      lable: "Age",
      data: "25",
    },
    {
      lable: "Role",
      data: "supervisore",
    },
    {
      lable: "Name",
      data: "kasun kalhara",
    },
    {
      lable: "Age",
      data: "25",
    },
    {
      lable: "Role",
      data: "supervisore",
    },
  ];
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

                <h1>Tournament Match Details</h1>
              </div>

              <div
                className="form-container border border-secondary rounded border-opacity-10"
                style={{ padding: "10px", backgroundColor: "white" }}
              >
                <div className="border border-secondary rounded border-opacity-10">
                  <div className="matche-container-outer-box">
                    <div className="match-box-mid">
                      <div className="match-box-mid-left">
                        <div className="box-mid-left-up">
                          <h4 style={{ color: "#a5a5a5" }}>BLOOMFIELD</h4>
                        </div>
                        <div className="box-mid-left-mid">
                          <img src={Team}></img>
                        </div>
                        <div className="box-mid-left-down">
                          <h5>176-6 (18.3)</h5>
                        </div>
                      </div>
                      <div className="match-box-mid-mid">
                        <div className="box-mid-mid-up">
                          <h5 style={{ color: "#a5a5a5" }}>T 20</h5>
                        </div>
                        <div className="box-mid-mid-mid">VS</div>
                        <div className="box-mid-mid-down">
                          <h5 style={{ color: "#a5a5a5" }}>
                            R.Premadasa Stadium
                          </h5>
                        </div>
                      </div>
                      <div className="match-box-mid-right">
                        <div className="box-mid-right-up">
                          <h4 style={{ color: "#a5a5a5" }}>N.C.C</h4>
                        </div>
                        <div className="box-mid-right-mid">
                          <img src={opTeam}></img>
                        </div>
                        <div className="box-mid-right-down">
                          <h5>175-7 (20)</h5>
                        </div>
                      </div>
                    </div>
                    <div className="match-box-down-1">
                      <div className="match-box-down-1-left">
                        <h5 style={{ color: "#009270" }}>
                          BLOOMFIELD won by 4 wkts
                        </h5>
                      </div>
                      <div className="match-box-down-1-right">
                        <h5 style={{ color: "#a5a5a5" }}>2022 JUL 16</h5>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <SampleForm arr={array1} upload={false} border={true} file1={""} /> */}
                <EditDetails
                  arr={array}
                  backLink={"/manager/AddMatch"}
                  border={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTournamentDetail;
