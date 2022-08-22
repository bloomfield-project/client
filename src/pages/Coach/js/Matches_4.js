import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/Matches_4.css";
import "../../Home.css";
import MatchesTeams from "../../../component/MatchesTeams/MatchesTeams";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';




function Matches_4() {

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

                        <h1>Matches</h1>

                    </div>

                    <div className="main-container">

                        <div className="main-container-1">
                            <MatchesTeams btns="" wonornot="BLOOMFIELD won by 7 wkts" left="Starts at 09.30" middle="R.Premadasa Stadium" right="2022 Oct 16" />
                        </div>

                        <div className="main-container-2">

                            <Container>

                                <Row>
                                    <Col className="main-container-2-left">Bloomfield</Col>
                                    <Col className="main-container-2-right">160-6(20.0)</Col>
                                </Row>

                            </Container>


                        </div>

                        <div className="main-container-3">

                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Batter</th>
                                        <th></th>
                                        <th>R</th>
                                        <th>B</th>
                                        <th>4s</th>
                                        <th>6s</th>
                                        <th>SR</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>Jos Buttler</td>
                                        <td>c W Madsen b Matthew parkinson</td>
                                        <td>41</td>
                                        <td>34</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>120.59</td>
                                    </tr>

                                    <tr>
                                        <td>Jos Buttler</td>
                                        <td>c W Madsen b Matthew parkinson</td>
                                        <td>41</td>
                                        <td>34</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>120.59</td>
                                    </tr>

                                    <tr>
                                        <td>Jos Buttler</td>
                                        <td>c W Madsen b Matthew parkinson</td>
                                        <td>41</td>
                                        <td>34</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>120.59</td>
                                    </tr>

                                    <tr>
                                        <td>Jos Buttler</td>
                                        <td>c W Madsen b Matthew parkinson</td>
                                        <td>41</td>
                                        <td>34</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>120.59</td>
                                    </tr>

                                    <tr>
                                        <td>Jos Buttler</td>
                                        <td>c W Madsen b Matthew parkinson</td>
                                        <td>41</td>
                                        <td>34</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>120.59</td>
                                    </tr>

                                    <tr>
                                        <td>Jos Buttler</td>
                                        <td>c W Madsen b Matthew parkinson</td>
                                        <td>41</td>
                                        <td>34</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>120.59</td>
                                    </tr>

                                    <tr>
                                        <td>Jos Buttler</td>
                                        <td>c W Madsen b Matthew parkinson</td>
                                        <td>41</td>
                                        <td>34</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>120.59</td>
                                    </tr>

                                    <tr>
                                        <td>Jos Buttler</td>
                                        <td>c W Madsen b Matthew parkinson</td>
                                        <td>41</td>
                                        <td>34</td>
                                        <td>3</td>
                                        <td>2</td>
                                        <td>120.59</td>
                                    </tr>

                                    <tr>
                                        <td>Extras</td>
                                        <td></td>
                                        <td colSpan={5}>13 (b 1,lb 7,w 5,nb 0,p 0)</td>
                                    </tr>

                                    <tr>
                                        <td>Total</td>
                                        <td></td>
                                        <td colSpan={5}>160 (6 wkts, 100 bls)</td>
                                    </tr>

                                    <tr>
                                        <td>Did not Bat</td>
                                        <td>Asitha Muthumala, Kota Bim, Kota Dev</td>
                                        <td colSpan={5}></td>
                                    </tr>

                                </tbody>
                            </Table>

                        </div>

                        <div className="main-container-4">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Bowler</th>
                                        <th>O</th>
                                        <th>MO</th>
                                        <th>R</th>
                                        <th>W</th>
                                        <th>NB</th>
                                        <th>WD</th>
                                        <th>Econ</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>Asitha Muthumala</td>
                                        <td>20</td>
                                        <td>11</td>
                                        <td>35</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>17.5</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Asitha Muthumala</td>
                                        <td>20</td>
                                        <td>11</td>
                                        <td>35</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>17.5</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Asitha Muthumala</td>
                                        <td>20</td>
                                        <td>11</td>
                                        <td>35</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>17.5</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Asitha Muthumala</td>
                                        <td>20</td>
                                        <td>11</td>
                                        <td>35</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>17.5</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Asitha Muthumala</td>
                                        <td>20</td>
                                        <td>11</td>
                                        <td>35</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>17.5</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Asitha Muthumala</td>
                                        <td>20</td>
                                        <td>11</td>
                                        <td>35</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>17.5</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Asitha Muthumala</td>
                                        <td>20</td>
                                        <td>11</td>
                                        <td>35</td>
                                        <td>1</td>
                                        <td>0</td>
                                        <td>2</td>
                                        <td>17.5</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}

export default Matches_4;
