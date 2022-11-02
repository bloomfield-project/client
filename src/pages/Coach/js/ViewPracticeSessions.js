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
    const url= "manager/getOldSession"
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
            setResponseData(response.data)
        
      }).catch(function(error){
        console.log(error);
      })
    }
    useEffect(() => {
        getData(url,"get")
    }, [])
    const dataupcomming=responseData.data
    console.log(dataupcomming)


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

                            <h1>View Practice Session</h1>

                        </div>

                        <div className="EPS-main">

                            <div className="EPS-main-1">

                                <EditRowDetailsWithButton arr={array1} btn={false} />
                                <EditRowDetailsWithButton arr={array2} btn={false} />
                                <EditRowDetailsWithButton arr={array3} btn={false} />

                            </div>

                            <div className="EPS-main-2">

                                <h6>Couches</h6>
                                <hr></hr>

                                <Container>

                                    <Row>
                                        <Col className="EPS-main-2-1">Asitha Muthumala</Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col> <a href="#"></a> </Col>
                                    </Row>

                                    <Row>
                                        <Col className="EPS-main-2-1">Asitha Muthumala</Col>
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

                                    <Row>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col className="Attendance-head">Attendance</Col>
                                        <Col></Col>
                                    </Row>

                                    <Row>
                                        <Col className="EPS-main-3-1">Asitha Muthumala</Col>
                                        <Col className="EPS-main-3-1">BF-002</Col>
                                        <Col className="Attendance-head-1"> <CheckBox /> </Col>
                                        <Col><Link to={"/coach/MPP/"+id}> <a href="#">Progress</a> </Link></Col>
                                    </Row>

                                    <Row>
                                        <Col className="EPS-main-3-1">Asitha Muthumala</Col>
                                        <Col className="EPS-main-3-1">BF-002</Col>
                                        <Col className="Attendance-head-1"> <CheckBox /> </Col>
                                        <Col><Link to={"/coach/MPP/"+id}> <a href="#">Progress</a> </Link></Col>
                                    </Row>

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
