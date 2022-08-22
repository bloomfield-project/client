import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import "../css/Matches_1.css";
import MatchesTeams from "../../../component/MatchesTeams/MatchesTeams";


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
                            <h1>Matches</h1>
                        </div>

                        <div className="tabs">

                            <div className="tabs-left">

                                <Button variant="outline-success">+ Add</Button>

                            </div>

                            <div className="tabs-right">

                                

                            </div>

                        </div>

                        <hr></hr>

                        <div className="table-box-1">

                            <div className="tablee">
                                <MatchesTeams btns="" wonornot="BLOOMFIELD won by 7 wkts" left="Starts at 09.30" middle="R.Premadasa Stadium" right="2022 Oct 16" />
                                <MatchesTeams btns="" wonornot="BLOOMFIELD won by 7 wkts" left="Starts at 09.30" middle="R.Premadasa Stadium" right="2022 Oct 16" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Matches_1;
