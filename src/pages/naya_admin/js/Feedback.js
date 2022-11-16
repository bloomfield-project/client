import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
const Axios = require("axios").default;

function Feedback() {
  const [feedback, setFeedback] = useState([]);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/getFeedback")
      .then((response) => {
        console.log(response.data);
        setFeedback(response.data.data);
      })
      .catch((err) => console.log("error is arized", err));
  }, []);

  console.log("feed back : ", feedback);
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
                <h5 className={"tab-active"}></h5>
              </div>

              <div className="tabs-right"></div>
            </div>

            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                {/* <SampleCard1 arr={data} /> */}
                {feedback != [] ? feedback?.map((item, i) => (
                  <>
                    <div style={{ backgroungColor: "", border: "" }}>
                      <div style={{ backgroundColor: "" }}>{item.feedback}</div>
                      <div style={{ display: "flex" }}>
                        <div style={{ color: "#5C686B", width: "50%", fontWeight:"bold" }}>
                          {item.date}
                        </div>
                        <div style={{ color: "#5C686B", width: "50%" , fontWeight:"bold"}}>
                          {item.name}
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <br></br>
                  </>
                )):<p>No Data To Show</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
