import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import "../css/Matches_3.css";
import "../css/MarkPlayerProgress.css";
import IntroTable from "../../../component/IntroTable/IntroTable"
import player from "../player.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckBox from "../../../component/CheckBox/CheckBox";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from 'react-bootstrap/Button';
import { Input } from 'antd';
const { TextArea } = Input;


function PlayerPerformance() {

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
                                <Link to={"/couch/VPS"}>
                                    <IoChevronBackCircleOutline
                                        style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                                    />
                                </Link>
                            </div>

                            <h1>Progress</h1>

                        </div>

                        <div className="MPP-main-container">

                            <div className="MPP-main-container-1">

                                <div className="MPP-main-container-1-1">
                                    <img className="playerImage" src={player} alt="Italian Trulli" />
                                </div>

                                <div className="MPP-main-container-1-2">
                                    <IntroTable />
                                </div>

                            </div>

                            <div className="MPP-main-container-2">

                                <Container fluid>

                                    <Row className="MPP-main-container-2-heading">

                                        <Col><h5>Batting</h5></Col>
                                        <Col><h5>Bowling</h5></Col>

                                    </Row>

                                </Container>

                                <hr></hr>

                                <Container fluid>

                                    <Row>

                                        <Col className="MPP-main-container-2-data">Defensive shot</Col>
                                        <Col><CheckBox /></Col>
                                        <Col className="MPP-main-container-2-data">Bouncer</Col>
                                        <Col><CheckBox /></Col>

                                    </Row>

                                    <Row>

                                        <Col className="MPP-main-container-2-data">Drive</Col>
                                        <Col><CheckBox /></Col>
                                        <Col className="MPP-main-container-2-data">Reverse Swing</Col>
                                        <Col><CheckBox /></Col>

                                    </Row>

                                    <Row>

                                        <Col className="MPP-main-container-2-data">Flick</Col>
                                        <Col><CheckBox /></Col>
                                        <Col className="MPP-main-container-2-data">Yorker</Col>
                                        <Col><CheckBox /></Col>

                                    </Row>

                                </Container>

                            </div>

                            <div className="MPP-main-container-3">

                                <hr></hr>

                                <h5>Feedback</h5>

                                <div className="MPP-main-container-3-1">

                                    <div className="MPP-main-container-3-1-1">

                                        <TextArea rows={4} placeholder="Type Your Feedback" maxLength={6} />

                                    </div>

                                    <div className="MPP-main-container-3-1-2">

                                        <Container>

                                            <Row>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col><Button variant="secondary">Cancel</Button>{' '}</Col>
                                                <Col><Button variant="success">Save</Button>{' '}</Col>
                                            </Row>

                                        </Container>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>



            </div>

        </>
    );
}

export default PlayerPerformance;
