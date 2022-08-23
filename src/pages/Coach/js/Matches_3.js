import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MatchesTeams from "../../../component/MatchesTeams/MatchesTeams";
import "../css/Matches_3.css";
import "../../Home.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../../../component/NavigationBar/Navbar";


function Macthes_3() {

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
                                <Link to={"/couch/M2"}>
                                    <IoChevronBackCircleOutline
                                        style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                                    />
                                </Link>
                            </div>

                            <h1>Matches</h1>

                        </div>

                        <div className="M3-main-container">

                            <div className="M3-main-container-1">

                                <MatchesTeams btns="" wonornot="BLOOMFIELD won by 7 wkts" left="Starts at 09.30" middle="R.Premadasa Stadium" right="2022 Oct 16" />

                            </div>

                            <div className="M3-main-container-2">

                                <h4>Players</h4>

                            </div>

                            <div className="M3-main-container-3">

                                <hr></hr>

                                <Container>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                    <Row>
                                        <Col className="M3-main-container-3-1" sm={4}> <h6> <a href="/couch/PF">Asitha Muthumala</a> </h6> </Col>
                                        <Col className="M3-main-container-3-2" sm={4}> <h6>BF-0099</h6> </Col>
                                        <Col className="M3-main-container-3-3" sm={4}></Col>
                                    </Row>
                                    <br></br>

                                </Container>

                            </div>


                        </div>

                    </div>

                </div>



            </div>

        </>
    );
}

export default Macthes_3;
