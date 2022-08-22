import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SampleCard1 from "../../../component/Card/SampleCard1";
// import profpic from "../header/profpic.jfif";
import profpic from "../../../component/header/profpic.jfif";

const data = [
  {
    title: "Won the hero cup ODI series",
    img: <img className="card-detail-img" src={profpic} alt=""></img>,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"#"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },

  {
    title: "Won the hero cup ODI series",
    img: <img className="card-detail-img" src={profpic} alt=""></img>,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"#"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },
  {
    title: "Won the hero cup ODI series",
    img: <img className="card-detail-img" src={profpic} alt=""></img>,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"#"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },
  {
    title: "Won the hero cup ODI series",
    img: <img className="card-detail-img" src={profpic} alt=""></img>,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"#"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },
];



function Feedback() {
    
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
            <div className="title">
              <h1>{"Feedback"}</h1>
            </div>
            <div className="tabs">
              <div className="tabs-left">
                <h5 className={ "tab-active"}>
                 
                  
                 
                </h5>
                
              </div>

              <div className="tabs-right">
                
              </div>
            </div>

            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
              
                  <SampleCard1 arr={data} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
