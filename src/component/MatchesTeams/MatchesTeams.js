import React from "react";
import Team from "./Team.png";
import opTeam from "./opTeam.jpg";
import Button from "react-bootstrap/Button";
import "./MatchesTeams.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MatchesTeams(props) {

    var condition = "";
    if(props.btns) {

        condition = true;

    }
    else {

        condition = false;

    }

    return (

        <>

            {/* match card start*/}
            <div className="matche-container-outer-box">
                <div className="match-box-up"><div className="go-out"><h4 style={{ color: "#009270", fontSize: "2rem", fontWeight: "bolder" }}>Hero Cup</h4></div></div>
                <div className="match-box-mid">
                    <div className="match-box-mid-left">
                        <div className="box-mid-left-up"><h4 style={{ color: "#a5a5a5" }}>BLOOMFIELD</h4></div>
                        <div className="box-mid-left-mid"><img src={Team}></img></div>
                        <div className="box-mid-left-down"><h5 style={{ color: "#a5a5a5" }}>{props.left}</h5></div>
                    </div>
                    <div className="match-box-mid-mid">
                        <div className="box-mid-mid-up"><h5 style={{ color: "#a5a5a5" }}>T 20</h5></div>
                        <div className="box-mid-mid-mid">VS</div>
                        <div className="box-mid-mid-down"><h5 style={{ color: "#a5a5a5" }}>{props.middle}</h5></div>
                    </div>
                    <div className="match-box-mid-right">
                        <div className="box-mid-right-up"><h4 style={{ color: "#a5a5a5" }}>N.C.C</h4></div>
                        <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                        <div className="box-mid-right-down"><h5 style={{ color: "#a5a5a5" }}>{props.right}</h5></div>
                    </div>
                </div>
                <div className="match-box-down">

                    <Container>
                        <Row>
                            <Col className="match-box-down-1">{props.wonornot}</Col>
                            <Col className="match-box-down-2">{condition ? <h4>{props.btns}</h4> : <Button bsStyle="success">VIEW</Button>}</Col>
                        </Row>
                    </Container>
            
                </div>

            </div>

            <div className="gap-3"></div>
            {/* match card end*/}

        </>

    );

}

export default MatchesTeams;