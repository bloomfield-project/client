import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/EditPracticeSessions.css";
import EditRowDetailsWithButton from "../../../component/EditRowDetailsWithButton/EditRowDetailsWithButton";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import CheckBox from "../../../component/CheckBox/CheckBox";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from 'react-bootstrap/Button';
import { useParams, useLocation } from "react-router-dom";
import {fetchData} from '../../AuthServer' ;

function ViewPracticeSessions() {
    const { id } = useParams();
    const [responseData,setResponseData]=useState([]);
    const url= "player/coach/SpecSessionDetails"
    async function getData(url,method){
        
        const reqData ={
            id:id,
        };
        const authRequest = {
        "method":method,
        "url":url,
        "data":reqData
      }
      fetchData(authRequest).then((response)=>{
        console.log(response.data)
        setResponseData(response.data)
        
      }).catch(function(error){
        console.log(error);
      })
    }
    useEffect(() => {
        getData(url,"post")
    }, [])
    // const dataupcomming=responseData.data
    const session =responseData.details
    console.log(session)
    const players =responseData.players
    console.log(players)


   


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

                            <h1>View Practice Session</h1>

                        </div>

                        <div className="EPS-main">

                            <div className="EPS-main-1">
                                <div style={{width:"100%"}}>
                                    <label style={{width:"100%",marginLeft:"10px",fontWeight:"500"}}><h6>Session :</h6></label>
                                    <label style={{width:"100%" ,marginLeft:"50px",fontWeight:"400",fontSize:"1.2rem"}}>{session?.length>0?session[0].type:"no data"}</label>
                                </div>
                                <div style={{width:"100%"}}>
                                    <label style={{width:"100%",marginLeft:"10px",fontWeight:"500"}}><h6>Date :</h6></label>
                                    <label style={{width:"100%",marginLeft:"50px",fontWeight:"400",fontSize:"1.2rem"}}>{session?.length>0?session[0].date:"no data"}</label>
                                </div>
                                <div style={{width:"100%"}}>
                                    <label style={{width:"100%",marginLeft:"10px",fontWeight:"500"}}><h6>Time :</h6></label>
                                    <label style={{width:"100%",marginLeft:"50px",fontWeight:"400",fontSize:"1.2rem"}}>{session?.length>0?session[0].time+" - "+session[0].end_time:"no data"}</label>
                                </div>
                            </div>

                            <div className="EPS-main-2">

                                <h6>Coach</h6>
                                <hr></hr>

                                <Container>
                                    <Row>
                                        <Col className="EPS-main-2-1" style={{fontSize:"1rem",fontWeight:"400"}}>{session?.length>0?session[0].name:"no data"}</Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col> <a href="#"></a> </Col>
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

                                    

                                    {players?.length>0?players?.map((item,i) => <Row>
                                        <Col className="EPS-main-3-1" style={{fontSize:"1rem",fontWeight:"400"}}>{item.name}</Col>
                                        <Col className="EPS-main-3-1" style={{fontSize:"1rem",fontWeight:"400"}}>{"BF-"+item.user_id}</Col>
                                        <Col><Link to={"/coach/MPP/"+item.user_id+"/"+id}> <a href="#">Progress</a> </Link></Col>
                                    </Row>):<p>No Players</p>}

                                    {/* <Row>
                                        <Col className="EPS-main-3-1" style={{fontSize:"1rem",fontWeight:"400"}}>Asitha Muthumala</Col>
                                        <Col className="EPS-main-3-1" style={{fontSize:"1rem",fontWeight:"400"}}>BF-002</Col>
                                        <Col className="Attendance-head-1"> <CheckBox /> </Col>
                                        <Col><Link to={"/coach/MPP/"+id}> <a href="#">Progress</a> </Link></Col>
                                    </Row> */}

                                </Container>

                                <div className="EPS-main-3-2">

                                    {/* <AddMultipleSelections name={"Add Players"} /> */}

                                </div>

                            </div>

                            <div className="EPS-main-4">

                                <Button variant="secondary" style={{visibility:"hidden"}}>Cancel</Button>{' '}
                                <Link to={"/coach/practiceSessions"}>
                                <Button variant="success" style={{marginRight:"30px"}}>Back</Button>{' '}
                                </Link>

                            </div>

                        </div>

                        {/* <EditDetails arr={array} backLink={"/manager/Session"} /> */}

                    </div>

                </div>



            </div>

        </>

    );
}

export default ViewPracticeSessions;
