import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/AddPracticeSession.css";
import InputField from "../../../component/InputField/InputField";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddMultipleSelections from "../../../component/AddMultipleSelections/AddMultipleSelections";


function AddPracticeSession() {

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
                                <Link to={"/couch/PSessions"}>
                                    <IoChevronBackCircleOutline
                                        style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                                    />
                                </Link>
                            </div>

                            <h1>Add Practice session</h1>

                        </div>

                        <div className="APS-Form">

                            <div className="APS-Form-1">

                                <div className="APS-Form-1-1">

                                    <h5>Session type</h5>

                                    <Form.Select aria-label="Default select example">
                                        <option>Batting / Bowling ......</option>
                                        <option value="Batting">Batting</option>
                                        <option value="Bowling">Bowling</option>
                                    </Form.Select>

                                </div>



                            </div>

                            <div className="APS-Form-2">

                                <Container>
                                    <Row>
                                        <Col className="APS-Form-2-1"><InputField label="Date" pc="session date" /></Col>
                                        <Col className="APS-Form-2-2"><InputField label="Time" pc="session time" /></Col>
                                    </Row>
                                </Container>

                            </div>

                            <div className="APS-Form-3">

                                <div className="APS-Form-3-1">
                                    <AddMultipleSelections name="Couches" placeHolder="Add couches" />
                                </div>

                                <div className="APS-Form-3-2">
                                    <AddMultipleSelections name="Players" placeHolder="Add Players" />
                                </div>


                            </div>

                            <div className="APS-Form-4">

                                <Button variant="secondary" className="APS-Form-4-1">Cancel</Button>{' '}
                                <Button variant="success" className="APS-Form-4-2">Add</Button>{' '}

                            </div>


                        </div>



                    </div>

                </div>



            </div>

        </>
    );
}

export default AddPracticeSession;
