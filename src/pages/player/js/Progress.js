import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import IntroTable from "../../../component/IntroTable/IntroTable"
import React from "react";
import player from "../player.jpg"
import "../../Home.css"
import "../css/Progress.css"
import { PieChart } from 'react-minimal-pie-chart';

function Progress() {
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
                <h1>Player Progress</h1>
              </div>
              <div className="player-details-box">
                <img className="playerImage" src={player} alt="Italian Trulli" />
                <IntroTable/>
              </div>
              
              <div className="player-content" style={{width:"95%" ,marginTop:"50px"}}>
                <div className="tableTopic"><h4>Attendance for sessions</h4></div>
                <hr></hr>
                <div className="pie-chart-box" style={{width:"97%"}}>
                    <div className="pie-chart" style={{width:"250px"}}>
                        <PieChart
                            data={[
                                { title: 'One', value: 15, color: '#009270' },
                                { title: 'Two', value: 5, color: '#A1A1A1' },
                            ]}

                            viewBoxSize={[100,100]}
                            
                        />
                    </div>

                    <div className="mapPie">
                        <div className="mapPie-row">
                            <div className="mapPie-col-1">
                                <div className="color-box-1"></div>
                                <h5>Total Sessions</h5>
                            </div>
                            <div className="mapPie-col-2"><h5>-</h5></div>
                            <div className="mapPie-col-3"><h5>44</h5></div>
                        </div>

                        <div className="mapPie-row">
                            <div className="mapPie-col-1">
                                <div className="color-box-2"></div>
                                <h5>Present</h5>
                            </div>
                            <div className="mapPie-col-2"><h5>-</h5></div>
                            <div className="mapPie-col-3"><h5>33 (75%)</h5></div>
                        </div>

                        <div className="mapPie-row">
                            <div className="mapPie-col-1">
                                <div className="color-box-3"></div>
                                <h5>Absent</h5>
                            </div>
                            <div className="mapPie-col-2"><h5>-</h5></div>
                            <div className="mapPie-col-3"><h5>11 (25%)</h5></div>
                        </div>
                    </div>


                    
                </div> 

                <span className="gap-2"></span> 

                {/*begin*/}
                <div className="tablee-14">
                    <div className="table-head-14">
                        <div className="col-4-1"><h5>Session ID</h5></div>
                        <div className="col-4-2"><h5>Session</h5></div>
                        <div className="col-4-3"><h5>Attendance</h5></div>
                        <div className="col-4-4"><h5></h5></div>
                        
                    </div>
                    <div className="table-row-14">
                        <div className="col-4-1">S-001</div>
                        <div className="col-4-2">Batting Practice</div>
                        <div className="col-4-3">Present</div>
                        <div className="col-4-4"><a href="#">Details</a></div>
                        
                    </div>
                    <hr></hr>
                    <div className="table-row-14">
                        <div className="col-4-1">S-001</div>
                        <div className="col-4-2">Batting Practice</div>
                        <div className="col-4-3">Present</div>
                        <div className="col-4-4"><a href="#">Details</a></div>
                        
                    </div>
                    <hr></hr>
                    <div className="table-row-14">
                        <div className="col-4-1">S-001</div>
                        <div className="col-4-2">Batting Practice</div>
                        <div className="col-4-3">Present</div>
                        <div className="col-4-4"><a href="#">Details</a></div>
                        
                    </div>
                    <hr></hr>
                    <div className="table-row-14">
                        <div className="col-4-1">S-001</div>
                        <div className="col-4-2">Batting Practice</div>
                        <div className="col-4-3">Present</div>
                        <div className="col-4-4"><a href="#">Details</a></div>
                        
                    </div>
                    <hr></hr>
                    <div className="table-row-14">
                        <div className="col-4-1">S-001</div>
                        <div className="col-4-2">Batting Practice</div>
                        <div className="col-4-3">Present</div>
                        <div className="col-4-4"><a href="#">Details</a></div>
                        
                    </div>
                    <hr></hr>
                    
                    
                </div>
                {/*end*/}  
                
              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default Progress;