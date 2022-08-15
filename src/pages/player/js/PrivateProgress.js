import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import IntroTable from "../../../component/IntroTable/IntroTable"
import React from "react";
import player from "../player.jpg"
import "../../Home.css"
import "../css/PrivateProgress.css"





function PrivateProgress() {
    return (
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
                <h1>Player Perfomance</h1>
              </div>
              <div className="player-details-box">
                <img className="playerImage" src={player} alt="Italian Trulli" />
                <IntroTable/>
              </div>
              <div className="playerPreformanceBody">
                    
                        
                        
                <div className="player-content">
                    <div className="tableTopic"><h4>Objectives</h4></div>
                    <hr></hr>
                    <div className="sesNameNo" style={{marginLeft:"50px"}}><h4>Defensive shot.</h4></div>
                    <div className="sesNameNo" style={{marginLeft:"50px"}}><h4>Drive</h4></div>
                    <div className="sesNameNo" style={{marginLeft:"50px"}}><h4>Flick</h4></div>

                    <span className="gap"></span>
                    <div className="tableTopic"><h4>Feedback</h4></div>
                    <hr></hr>
                    <p style={{textAlign:"left" , width:"95%"}}>While coaching, you might see a dozen things you want to feed back. But rather than pointing out a bunch of cricket tips,stay quiet and pick out the one thing that will help most in a session.</p>
                    <div style={{width:"95%"}}><h5>Mr. Roshan Mahanama</h5></div>
                </div>
                        
              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default PrivateProgress;