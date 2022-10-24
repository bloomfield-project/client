import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import InputField from "../../../component/InputField/InputField";
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import "../css/AddPracticeSession.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
<<<<<<< HEAD

import moment from "moment";
=======
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";
import moment from "moment";

>>>>>>> c36e308314576779cfc4c9bbd78f93507c5d1064

const Axios = require("axios").default;

var date = new Date();
date.setDate(date.getDate() + 7);

var currentDate = moment(date).format("YYYY-MM-DD");

const addPracticeSession = (event)=>{
    event.preventDefault();
    console.log("event value : ",event);

    const formData = {
        type : event.target[0].value,
        date : event.target[1].value,
        time : event.target[2].value,
    }

    console.log("form data set : ",formData)
}

function AddPracticeSession() {

    // const [newDate, setDate] = useState(currentDate)
    var newDate = currentDate

    const func = (event)=>{
        event.preventDefault();
        console.log(event.target.value);
        var edate = event.target.value;
        console.log(edate)
        // setDate(edate)
        newDate = edate;
        console.log("ndate : ",newDate)
        alert("buttton cliked"+ newDate);
        console.log("target value : ", newDate)

    //     Axios
    //   .post("/api/manager/addevent", eventData)
    //   .then((results) => {
    //     setError(results.data.message);
    //     setSuccess(results.data.success);
    //     console.log(errorMsg);

    //     if (errorMsg) {
    //       edate = errorMsg.event_name;
    //       alert(edate);
    //       handleShow();
    //     }
    //   })
    //   .catch((err) => console.log("error : ", err));
        
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

                        <div className="APS-Form" onSubmit={addPracticeSession}>
                        <form >

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
                                        <Col className="APS-Form-2-1" onChange={func}><InputField label="Date" pc="session date" type ="date" min={currentDate} default={currentDate} /></Col>
                                        <Col className="APS-Form-2-2"><InputField label="Time" pc="session time" type="time" /></Col>
                                    </Row>
                                </Container>

                            </div>

                            {/* <div className="APS-Form-5">
                                <Button variant="secondary" className="APS-Form-5-1" type="reset">Reset</Button>{' '}
                                <Button variant="success" className="APS-Form-5-2" type="submit" onClick={func} >Set</Button>{' '}

                            </div> */}
                            
                            <div className="APS-Form-3">

                                <div className="APS-Form-3-1">
                                    <AddMultipleSelections name="Couches" placeHolder="Add couches" />
                                </div>

                            </div>

                            <div className="APS-Form-4">

                                <div className="APS-Form-4-1">
                                    <AddMultipleSelections name="Players" placeHolder="Add Players" />
                                </div>

                            </div>

                            <div className="APS-Form-5">

                                <Button variant="secondary" className="APS-Form-5-1" type="reset">Cancel</Button>{' '}
                                <Button variant="success" className="APS-Form-5-2" type="submit">Add</Button>{' '}

                            </div>
<<<<<<< HEAD
                        </form>
=======

                        </form>

>>>>>>> c36e308314576779cfc4c9bbd78f93507c5d1064

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AddPracticeSession;
