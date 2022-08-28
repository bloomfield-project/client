import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../css/ViewAppoinments.css";
import profpic from "../Player.png";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";



function ViewAppoinments() {

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
                            <h1>Appoinments</h1>
                        </div>

                        <div className="VP-Details-box">

                            <div className="VP-Details-box-1">

                                <div className="VP-Details-box-1-1">

                                    <div className="VP-Details-box-1-1-image">
                                        <img className="row-image" src={profpic} alt=""></img>
                                    </div>

                                    <div className="VP-Details-box-1-1-Pdetails">

                                        <Container>
                                            <Row className="VP-Details-box-1-1-Pdetails-d">Gihan Weerasinghe</Row>
                                            <Row className="VP-Details-box-1-1-Pdetails-d">asikv@gmail.com</Row>
                                            <Row className="VP-Details-box-1-1-Pdetails-d">071-1027389</Row>
                                            <Row className="VP-Details-box-1-1-Pdetails-d">
                                                <Col className="VP-Details-box-1-1-Pdetails-d-1">2020 Oct 5</Col>
                                                <Col className="VP-Details-box-1-1-Pdetails-d-1">2.45 PM</Col>
                                            </Row>
                                        </Container>

                                    </div>

                                </div>

                                <div className="VP-Details-box-1-2">

                                    <Container>
                                        <Row className="VP-Details-box-1-2-1">Batting Practice</Row>
                                        <Row className="VP-Details-box-1-2-2"><p>Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension.</p></Row>
                                    </Container>

                                </div>

                            </div>

                            <div className="VP-Details-box-2">

                                <Button variant="secondary" className="VP-Details-box-2-1">Accept</Button>{' '} <br></br>
                                <Button variant="secondary" className="VP-Details-box-2-2">Reject with Leaving Message</Button>{' '} <br></br>
                                <Link to="/couch/A"><Button variant="secondary" className="VP-Details-box-2-3">BACK</Button>{' '}</Link>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewAppoinments;
