import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../css/Dashboard.css"
import React from "react";
import LineChart from "../../../component/Chart/LineChart";
import Bchart from "../../../component/Chart/BarChart";
// import { CChart } from '@coreui/react';

// import {Bar} from "react-chartjs-2";

import {useSelector} from 'react-redux'



const data =[
  {
    id:1,
    year:2022,
    userGain:234,
    lost:23
  },
  {
    id:2,
    year:2022,
    userGain:234,
    lost:23
  },
  {
    id:3,
    year:2022,
    userGain:234,
    lost:23
  },
  {
    id:4,
    year:2022,
    userGain:234,
    lost:23
  },
  {
    id:5,
    year:2022,
    userGain:234,
    lost:23
  },
]

function DashboardP() {

  const loginData= useSelector(state => state.auth.data)
  console.log(loginData);

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
          <h5 style={{width:"92%",textAlign:"left", marginTop:"20px"}}>Batting summary</h5>
          <hr style={{width:"92%"}}></hr>
          <div className="row-player-dashboard-g-1">
            <div className="column-player-dashboard-g-1">
            <Bchart />
            </div>
            <div className="column-player-dashboard-g-1">
            <LineChart />
            </div>
            <div className="column-player-dashboard-g-1">
            <LineChart />
            </div>
          </div>



          <h5 style={{width:"92%",textAlign:"left", marginTop:"20px"}}>Bowling summary</h5>
          <hr style={{width:"92%"}}></hr>
          <div className="row-player-dashboard-g-1" >
            <div className="column-player-dashboard-g-1">
            <LineChart />
            </div>
            <div className="column-player-dashboard-g-1">
            <LineChart />
            </div>
            <div className="column-player-dashboard-g-1">
            <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DashboardP;






 
      