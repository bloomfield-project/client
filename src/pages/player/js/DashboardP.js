import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../css/Dashboard.css"
import React from "react";
// import { CChart } from '@coreui/react';



function DashboardP() {

  

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
          <div className="row-player-dashboard-g-1">
            <div className="column-player-dashboard-g-1">
                <CChart
                    type="line" 
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "rgba(220, 220, 220, 0.2)",
                            borderColor: "rgba(220, 220, 220, 1)",
                            pointBackgroundColor: "rgba(220, 220, 220, 1)",
                            pointBorderColor: "#fff",
                            data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: "rgba(151, 187, 205, 0.2)",
                            borderColor: "rgba(151, 187, 205, 1)",
                            pointBackgroundColor: "rgba(151, 187, 205, 1)",
                            pointBorderColor: "#fff",
                            data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                        },
                        ],
                    }}
                />
            </div>
            <div className="column-player-dashboard-g-1">
                
            </div>
            <div className="column-player-dashboard-g-1">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardP;






 
      