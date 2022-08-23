import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PlayerDetailsPerformance from "../../../component/PlayerDetailsPerformance/PlayerDetailsPerformance";
import Navbar from "../../../component/NavigationBar/Navbar";


function EditEvent() {
  const array = [
    {
      lable: "First Name",
      data: "Asitha",
    },
    {
      lable: "Last Name",
      data: "Muthumala",
    },
    {
      lable: "Name with initials",
      data: "A.K.Muthumala",
    },
    {
      lable: "NIC",
      data: "990472939v",
    },
    {
      lable: "Email",
      data: "asikavinda1999@gmail.com",
    },
    {
      lable: "Contact",
      data: "0711027389",
    },
    {
      lable: "Address",
      data: "NO 63 Doowawaththa Moraketiara West Nakulugamuwa",
    },
    {
      lable: "Role",
      data: "Batsman",
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

            <div className="l-back-r-title">

              <div className="l-back-r-title-icon">
                <Link to={"/couch/Players1"}>
                  <IoChevronBackCircleOutline
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                  />
                </Link>
              </div>

              <h1>Player Details</h1>

            </div>

            <div className="form-container" style={{width: "90%"}}>
              <PlayerDetailsPerformance arr={array} backLink_1={"/couch/PD1"} backLink_2={"/couch/Players1"} />
            </div>

          </div>


        </div>

      </div>

    </>
  );
}

export default EditEvent;
