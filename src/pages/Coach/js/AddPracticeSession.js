import React, { useState,useEffect } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import InputField from "../../../component/InputField/InputField";
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import "../css/AddPracticeSession.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fetchData } from "../../AuthServer";
import {useDispatch,useSelector} from 'react-redux';


import moment from "moment";

// ..........................................................................................................................................

import { Table } from "antd";
import { flexbox } from "@mui/system";


// ...........................................................................

function AddPracticeSession() {
  const loginData= useSelector(state => state.auth.data)
    const userID=loginData.data.user_id
  //.....................
    // guide msg usestate eka
    const [msg, setMsg] = useState("none");
  //.....................
  const [responseDataP, setResponseDataP] = useState([]);
  const [matchData, setMatchData] = useState([]);
  const [sessionData, setSessionData] = useState([]);
  const [sessionId, setSessionId] = useState(0);
  const [responseDataCheck, setResponseDataCheck] = useState([]);
  const [checkTBL,setCheckTBL] = useState("none");

  const [sessionAdded, setSessionAdded] = useState("");
  const players = "player/coach/getPlayers";
  const checkAvailabilityForSession = "player/coach/checkAvailabilityForSession";
  const addplayers = "player/coach/getPlayersToSessions"







  async function getData2(url, data) {
    const reqData = {
      list: data,
      id:sessionId,
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if (url === "player/coach/getPlayersToSessions") {
          console.log(response.data)
          setSessionAdded(response.data)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  
  
  
  
  
  
  
  
  async function getData(url,id="",title="",session_date="",starting_time="",ending_time="") {
    const reqData = {
      user_id:userID,
      title:title,
      session_date: session_date,
      starting_time: starting_time,
      ending_time: ending_time,
      new_ses_id:sessionId,
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if (url === "player/coach/checkAvailabilityForSession") {
          console.log(response.data)
          setResponseDataCheck(response.data)
          if(response.data.status==="successfully added"){
            setCheckTBL("block")
            setSessionData([])
            setMatchData([])
            setSessionId(response.data.new_session_id[0].new_session_id)
            console.log(response.data.new_session_id[0].new_session_id)

          }
          else if(response.data.status==="sessions exist"){
            setSessionData(response.data.session_data)
            setMatchData([])
            
            console.log(sessionData)
          }
          else if(response.data.status==="matches exist"){
            setMatchData(response.data.match_data)
            setSessionData([])
            console.log(matchData)
          }
          
        } else if (url === "player/coach/getPlayers") {
          setResponseDataP(response.data);
        } else if (url === "player/coach/deleteNewses") {
          // alert(response.data);
        }
        
      })
      .catch(function (error) {
        console.log(error); 
      });
  }
  
 
 
 
 
 
 
 
 
 
 
  const columns = [
    {
      title: "Player ID",
      dataIndex: "playerid",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];
  const data = [];
  useEffect(() => {
    getData(players);
  }, []);
  const dataupcommingP = responseDataP.data;
  for (let i = 0; i < dataupcommingP?.length; i++) {
    data.push({
      key: dataupcommingP ? dataupcommingP[i].user_id : "",
      playerid: `BF- ${dataupcommingP ? dataupcommingP[i].user_id : ""}`,
      name: dataupcommingP ? dataupcommingP[i].name : "",
      role: dataupcommingP ? dataupcommingP[i].player_role : "",
    });
  }

  
  
  
  
  
  
  
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  

 
  console.log(sessionId);
  console.log(matchData)
  

  
  
  
  function checkAvailability(e){
    e.preventDefault();
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    console.log(e.target[4].value)
    getData(checkAvailabilityForSession,"",e.target[0].value,e.target[1].value,e.target[2].value,e.target[4].value)
    // console.log(responseDataCheck?.status)
    // if(responseDataCheck?.status==="successfully added"){
    //   setCheckTBL("block")
    // }
  }

  function addSession(e){
    e.preventDefault();
    console.log(selectedRowKeys)
    if(hasSelected){
      // alert("selected")
      setMsg("none")
      getData2(addplayers,selectedRowKeys)
    }
    else{
      setMsg("block")
    }
  }




  function deleteNew(){
    console.log("hi")
    if((sessionId>0)&&(sessionAdded!=="Added players to the session")){
      // console.log("bye")
      getData("player/coach/deleteNewses")
      window.location.reload()
    }
    else if(sessionAdded==="Added players to the session"){
      window.location.reload()
    }
    
  }


 
  

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

              <h1>Add Practice session</h1>
            </div>

            <div className="APS-Form" >
              <form style={{height:"fit-content", paddingBottom:"20px"}} onSubmit={checkAvailability}>
                <div className="APS-Form-1">
                  <div className="APS-Form-1-1">
                    <h5>Session type</h5>

                    <Form.Select aria-label="Default select example">
                      <option value="Fielding">Fielding</option>
                      <option value="Batting">Batting</option>
                      <option value="Bowling">Bowling</option>
                    </Form.Select>
                  </div>
                </div>

                <div className="APS-Form-2">
                  <Container>
                    <Row>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px" }}>Date:</label>
                        <input
                          type="date"
                          name="name"
                          
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />
                      </Col>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px" }}>Starting Time:</label>
                        <input
                          type="time"
                          name="name"
                         
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="APS-Form-2-2" style={{visibility:"hidden"}}>
                        <label style={{ width: "100px" }}>Date:</label>
                        <input
                          type="date"
                          name="name"
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                            marginBottom: "20px",
                          }}
                        />
                      </Col>
                      <Col className="APS-Form-2-2">
                        <label style={{ width: "100px" }}>Ending Time:</label>
                        <input
                          type="time"
                          name="name"
                          style={{
                            width: "300px",
                            border: "1px solid #ced4da",
                            height: "38px",
                            borderRadius: "5px",
                          }}
                        />
                      </Col>
                    </Row>
                    <div style={{width:"100%", display:"flex", justifyContent:"flex-end", paddingRight:"2%"}}><Button type="submit" className="APS-Form-5-2">Select</Button></div>
                  </Container>
                </div>
                </form>
                {/* <div className="APS-Form-5">
                                <Button variant="secondary" className="APS-Form-5-1" type="reset">Reset</Button>{' '}
                                <Button variant="success" className="APS-Form-5-2" type="submit" onClick={func} >Set</Button>{' '}

                            </div> */}
                            {matchData?.length>0?<div style={{width:"100%", display:"flex", flexDirection:"column",alignItems:"center", marginBottom:"20px"}}>
                              <div style={{fontSize:"1.2rem", marginBottom:"20px",color:"red"}}>Below match held on ... </div>
                              <div style={{display:"flex", width:"90%",height:"50px",border:"1px solid #999999",justifyContent:"space-around", alignItems:"center"}}>
                                  <div style={{width:"33.3%"}}>{matchData[0].title}</div>
                                  <div style={{width:"33.3%"}}>{"BloomField  vs  "+matchData[0].op_team_name}</div>
                                  <div style={{width:"33.3%"}}>{matchData[0].date}</div>
                                  
                              </div>
                            </div>:<></>}

                           { sessionData?.length>0?sessionData?.map((item,i)=><div style={{width:"100%", display:"flex", flexDirection:"column",alignItems:"center", marginBottom:"20px"}}>
                              <div style={{fontSize:"1.2rem", marginBottom:"20px",color:"red"}}>Below sessions ... </div>
                              <div style={{display:"flex", width:"90%",height:"50px",border:"1px solid #999999",justifyContent:"space-around", alignItems:"center"}}>
                                  <div>{item.type}</div>
                                  <div>{item.date}</div>
                                  <div>{item.time+" - "+item.end_time}</div>
                              </div>
                            </div>):<></>}
                <form onSubmit={addSession} style={{display:checkTBL}}>
                            <h5>Add Players to the session</h5>
                <div className="APS-Form-3">
                  <div
                    style={{
                      width: "90%",
                      marginLeft:"5%"
                      // padding: "0 20px"
                    }}
                  >
                    <div
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      <span
                        style={{
                          marginLeft: 8,
                        }}
                      >
                        {hasSelected
                          ? `Selected ${selectedRowKeys.length} Players`
                          : ""}
                      </span>
                      
                    </div>
                    {data?.length>0?<Table
                      rowSelection={rowSelection}
                      columns={columns}
                      dataSource={data}
                    />:<p>No players to display</p>}
                    <span
                        style={{
                          marginLeft: 8,
                          display:msg,
                          color:"red"
                        }}
                      >
                        {"Please Select Players for the session"}
                      </span>
                  </div>
                </div>

                <div className="APS-Form-4">
                  {/* <div className="APS-Form-4-1">
                                    <AddMultipleSelections name="Players" placeHolder="Add Players" />
                                </div> */}
                </div>

                <div className="APS-Form-5">
                  <Button
                    variant="secondary"
                    className="APS-Form-5-1"
                    type="reset"
                    onClick={deleteNew}
                  >
                    Cancel
                  </Button>{" "}
                  <Button
                    variant="success"
                    className="APS-Form-5-2"
                    type="submit"
                  >
                    Add
                  </Button>{" "}
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPracticeSession;
