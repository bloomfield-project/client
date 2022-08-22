import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import "../css/Matches_3.css";
import "../css/PlayerPerformance.css";
import IntroTable from "../../../component/IntroTable/IntroTable"
import player from "../player.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputField from "../../../component/InputField/InputField";
import Button from 'react-bootstrap/Button';


function PlayerPerformance() {

    return (
        <>

            <div className="page-container-1">

                <div className="header-container">
                    <Header></Header>
                </div>

                <div className="page-container-gray">

                    <div className="l-back-r-title">

                        <div className="l-back-r-title-icon">
                            <Link to={"#"}>
                                <IoChevronBackCircleOutline
                                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                                />
                            </Link>
                        </div>

                        <h1>Player Performance</h1>

                    </div>

                    <div className="form-container">

                        <div className="form-container-1">

                            <div className="form-container-1-1">
                                <img className="playerImage" src={player} alt="Italian Trulli" />
                            </div>

                            <div className="form-container-1-2">
                                <IntroTable />
                            </div>

                        </div>

                        <div className="form-container-2">

                            <h4>Batting Career Summary</h4>

                            <hr></hr>

                            <Container>
                                <Row>
                                    <Col> <InputField label="Runs" /> </Col>
                                    <Col> <InputField label="Not out" /> </Col>
                                </Row>
                                <Row>
                                    <Col> <InputField label="Balls" /> </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col> <InputField label="6s" /> </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col> <InputField label="4s" /> </Col>
                                    <Col></Col>
                                </Row>
                            </Container>

                        </div>

                        <div className="form-container-3">

                            <h4>Bowling Career Summary</h4>

                            <hr></hr>

                            <Container>
                                <Row>
                                    <Col> <InputField label="Overs" /> </Col>
                                    <Col> <InputField label="Runs" /> </Col>
                                </Row>
                                <Row>
                                    <Col> <InputField label="Balls" /> </Col>
                                    <Col> <InputField label="Hat-Tricks" /> </Col>
                                </Row>
                                <Row>
                                    <Col> <InputField label="Wkts" /> </Col>
                                    <Col> <InputField label="No Balls" /> </Col>
                                </Row>
                                <Row>
                                    <Col> <InputField label="Maiden" /> </Col>
                                    <Col> <InputField label="Wide Balls" /> </Col>
                                </Row>
                            </Container>

                        </div>

                        <div className="form-container-4">

                            <h4>Batting Career Summary</h4>

                            <hr></hr>

                            <Container>
                                <Row>
                                    <Col> <InputField label="Overs" /> </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col> <InputField label="Overs" /> </Col>
                                    <Col></Col>
                                </Row>
                            </Container>

                        </div>

                        <div className="form-container-5">

                            <Button variant="success" className="form-container-5-btn">Back</Button>{' '}

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default PlayerPerformance;
