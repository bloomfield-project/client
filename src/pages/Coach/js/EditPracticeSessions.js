import React, { useState }  from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/EditPracticeSessions.css";
import EditRowDetailsWithButton from "../../../component/EditRowDetailsWithButton/EditRowDetailsWithButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import Button from "react-bootstrap/Button";
import Navbar from "../../../component/NavigationBar/Navbar";
import { useParams, useLocation } from "react-router-dom";
import {useEffect} from "react";
import {fetchData} from '../../AuthServer' ;

function EditPracticeSessions() {
  const { id } = useParams();
  const [responseData,setResponseData]=useState([]);
  const [responseDataList,setResponseDataList]=useState([]);
  const url="player/coach/getUppcomingSession"
  const url2="player/coach/getUppcomingSessionPlayerList"
  async function getData(url){
    
    const reqData ={
      session_id:id,
    };
    const authRequest = {
    "method":"post",
    "url":url,
    "data":reqData
  }
  fetchData(authRequest).then((response)=>{
        setResponseData(response.data)
    
  }).catch(function(error){
    console.log(error);
  })
}
async function getData2(url){
    
  const reqData ={
    session_id:id,
  };
  const authRequest = {
  "method":"post",
  "url":url,
  "data":reqData
}
fetchData(authRequest).then((response)=>{
      setResponseDataList(response.data)
  
}).catch(function(error){
  console.log(error);
})
}
useEffect(() => {
    getData(url)
    getData2(url2)
}, [])

console.log(responseData)
console.log(responseDataList)

  const array1 = [
    {
      lable: "Session type",
      data: "Batting",
    },
  ];

  const array2 = [
    {
      lable: "Date",
      data: "2022 Oct 16",
    },
  ];

  const array3 = [
    {
      lable: "Time",
      data: "9.30 AM",
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
                <Link to={"/coach/practiceSessions"}>
                  <IoChevronBackCircleOutline
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                  />
                </Link>
              </div>

              <h1>Edit Practice Session</h1>
            </div>

            <div className="EPS-main">
              <div className="EPS-main-1">
                  <div className="ERDWB-main-1">
                      <label>{"Session type"}</label>
                      <h6>{responseData?responseData[0]?.type:""} </h6>
                  </div>
                  <div className="ERDWB-main-1">
                      <label>{"Date"}</label>
                      <h6>{responseData?responseData[0]?.date:""} </h6>
                  </div>
                  <div className="ERDWB-main-1">
                      <label>{"Start time"}</label>
                      <h6>{responseData?responseData[0]?.time:""} </h6>
                  </div>
                  <div className="ERDWB-main-1">
                      <label>{"End time"}</label>
                      <h6>{responseData?responseData[0]?.end_time:""} </h6>
                  </div>
              </div>

              <div className="EPS-main-2">
                <h6>Couches</h6>
                <hr></hr>

                <Container>
                  <Row>
                    <Col className="EPS-main-2-1"></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                      {" "}
                      {/* <a href="#">Remove</a>{" "} */}
                    </Col>
                  </Row>

                  <Row>
                    <Col className="EPS-main-2-1">{responseData?responseData[0]?.name:""}a</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                      {" "}
                      {/* <a href="#">Remove</a>{" "} */}
                    </Col>
                  </Row>
                </Container>

                <div className="EPS-main-2-2">
                  {/* <AddMultipleSelections name={"Add Couches"} /> */}
                </div>
              </div>

              <div className="EPS-main-3">
                <h6>Players</h6>
                <hr></hr>

                <Container>
                {responseDataList!=[]?responseDataList?.map((item,i)  => 
                  <Row>
                  <Col className="EPS-main-3-1">{item.name}</Col>
                  <Col className="EPS-main-3-1">{"BF-"+item.user_id}</Col>
                  <Col className="Attendance-head-1"></Col>
                  <Col>
                    {" "}
                    {/* <a href="#">Remove</a>{" "} */}
                  </Col>
                </Row>):""
                }
                </Container>

                <div className="EPS-main-3-2">
                  {/* <AddMultipleSelections name={"Add Players"} /> */}
                </div>
              </div>

              <div className="EPS-main-4">
                <div style={{width:"10px"}}></div>
                <Link to={"/coach/practiceSessions"}>
                <Button variant="secondary">Back</Button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPracticeSessions;
