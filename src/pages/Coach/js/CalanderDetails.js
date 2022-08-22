import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../css/CalanderDetails.css";

function CalanderDetails() {

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
                            <h1>Calander</h1>
                        </div>

                        <div className="calander-details-main-box">
                            <h2>Include calander</h2>
                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default CalanderDetails;
