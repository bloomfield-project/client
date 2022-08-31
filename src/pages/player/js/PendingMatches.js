

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import React from "react";
import Team from "../Team.png"
import opTeam from "../opTeam.jpg"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";



function PendingMatches() {
  
  return (
    <div className="page-container-1">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="body-container-1">
        <div className="navbar-container">
          <Navbar></Navbar>
        </div>
        <div className="body-container-2" >
          

              <div className="title">
                <h1>Player Perfomance</h1>
              </div>
            <div className="matches-container-outer-box" style={{width:"95%"}}>
            
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
                    
                </div>


                <div className="Pending-matches-coaches-list">
                    <h1 style={{width:"100%"  , display:"flex" , marginTop:"20px"}}>Coaches</h1>
                    <hr style={{marginTop:"-10px"}}></hr>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1.2rem"}}>Sanath Jayasuriya</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1.2rem"}}>Chaminda Vas</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1.2rem"}}>Mahela Jayawardane</p>
                    
                </div>

                <div className="Pending-matches-coaches-list">
                    <h1 style={{width:"100%"  , display:"flex" , marginTop:"20px"}}>Players</h1>
                    <hr style={{marginTop:"-10px"}}></hr>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Sanath Jayasuriya</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Chaminda Vas</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Mahela Jayawardane</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Sanath Jayasuriya</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Chaminda Vas</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Mahela Jayawardane</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Sanath Jayasuriya</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Chaminda Vas</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Mahela Jayawardane</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Sanath Jayasuriya</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Chaminda Vas</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Mahela Jayawardane</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Sanath Jayasuriya</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Chaminda Vas</p>
                    <p style={{width: "100%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>Mahela Jayawardane</p>
                    
                </div>
            
            
                <div className="match-box-down">
                    <Link to={"/player/Matches"}>
                        <Button variant="secondary">Back</Button>
                    </Link>
                </div>

            
            </div>
        </div>
      </div>
    </div>
  );
}

export default PendingMatches;