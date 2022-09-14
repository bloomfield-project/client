import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/ViewTeam.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ViewTeam() {

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
                                <Link to={"/coach/Teams"}>
                                    <IoChevronBackCircleOutline
                                        style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                                    />
                                </Link>
                            </div>

                            <h1>Team Players</h1>

                        </div>

                        <div className="VT-main">

                            <div className="VT-main-1">

                                <Container>

                                    <Row>
                                        <Col>Player ID</Col>
                                        <Col>Player Name</Col>
                                    </Row>

                                    <Row>
                                        <Col>PL-001</Col>
                                        <Col>Asitha Muthumala</Col>
                                    </Row>

                                </Container>

                            </div>

                            <div className="VT-main-2">

                                nvjnsvnjnk
                                
                            </div>

                        </div>

                    </div>

                </div>



            </div>

        </>
    );
}

export default ViewTeam;
