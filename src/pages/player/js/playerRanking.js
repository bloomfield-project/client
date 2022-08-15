import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import React from "react";
import "../../Home.css"
import "../css/playerRanking.css"
import player from "../player.jpg"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';


const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

function playerRanking() {
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
                <div className="playerTable"></div>
              </div>
              <div className="playerPreformanceBody">
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    
                        <TabPane tab="Tab 1" key="1">
                            <div className="player-content">1</div>
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            <div className="player-content">2</div>
                        </TabPane>
                    
                </Tabs>
              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default playerRanking;