import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
// import "../../Home.css";

function Matches_1() {

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
                            <h1>Practice Sessions</h1>
                        </div>

                        <div className="tabs">

                            <div className="tabs-left">

                                <Button variant="outline-success">+ Add</Button>

                            </div>

                            <div className="tabs-right">
                                
                            </div>

                        </div>

                        <hr></hr>

                        <div className="table-box-1" style={{ backgroundColor: 'blue', height: '100px'}}>

                            <div className="tablee">
                            <div className="matche-container-outer-box">
                            <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>Hero Cup</h4></div></div>
                            <div className="match-box-mid">
                                <div className="match-box-mid-left">
                                    <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                                    <div className="box-mid-left-mid"><img src={Team}></img></div>
                                    <div className="box-mid-left-down"><h5 style={{color:"#a5a5a5"}}>Starts at 09.30</h5></div>
                                </div>
                                <div className="match-box-mid-mid">
                                    <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>T 20</h5></div>
                                    <div className="box-mid-mid-mid">VS</div>
                                    <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>R.Premadasa Stadium</h5></div>
                                </div>
                                <div className="match-box-mid-right">
                                    <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>N.C.C</h4></div>
                                    <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                                    <div className="box-mid-right-down"><h5 style={{color:"#a5a5a5"}}>2022 Oct 16</h5></div>
                                </div>
                            </div>
                            <div className="match-box-down"><Button variant="secondary">View</Button></div>
                        </div>
                        {/* match card */}
                        <div className="gap-3"></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Matches_1;
