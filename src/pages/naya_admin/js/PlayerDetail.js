import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";
import EditDetails from "../../../component/EditDetail/EditDetails";
import { IoChevronBackCircleOutline } from "react-icons/io5";


// console.log(data[0]);
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

function PlayerDetail() {
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
          <div className="page-container-gray" style={{width:"100%"}}>
          <div className="l-back-r-title" style={{display:"flex" , justifyContent:"space-between !important", width:"100% "}}>
            <div className="l-back-r-title-icon">
              <Link to={"/admin/Accounts"}>
                <IoChevronBackCircleOutline
                  style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                />
              </Link>
            </div>

            <h1>Player Details</h1>
          </div>

          <div className="form-container">
            
          </div>
        </div>
            {/* <div > */}
            
            
            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <EditDetails arr={array} backLink = {"/admin/Accounts"} border = {true} btn = {false} />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <Container className="page-container-1">
        <Row className="header-container">
          <Col >
            <Header />
          </Col>
        </Row>
        <Row className="body-container-1">
          <Col md="auto">
            <Navbar/>
          </Col>
          <Col md="auto">
            <Tables list={List} colNames={colNames} />
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default PlayerDetail;
