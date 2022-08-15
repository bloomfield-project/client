import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import React from "react";
import "../../Home.css"
import "../css/playerRanking.css"
import player from "../player.jpg"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Tablee from "../../../component/ScoreTable/ScoreTable";
import IntroTable from "../../../component/IntroTable/IntroTable"








const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

const COL_NAMES = [" ","M", "Inn", "NO", "Runs" , "HS", "Avg", "Ducks", "SR","50","100","200" ,"4s", "6s"];
const LIST = [
  { format: "ODI", M:"10" , Inn:"10" , NO:"10" , Runs:"10" ,HS:"10" , Avg:"10" , Ducks:"10" , SR:"87.65" , fifty:"10" , hunderd :"10", doubleH:"10" ,fours:"10" ,sixes:"10"},
  { format: "T20", M:"10" , Inn:"10" , NO:"10" , Runs:"10" ,HS:"10" , Avg:"10" , Ducks:"10" , SR:"121.23" , fifty:"10" , hunderd :"10", doubleH:"10" ,fours:"10" ,sixes:"10" },
  { format: "TEST", M:"10" , Inn:"10" , NO:"10" , Runs:"10" ,HS:"10" , Avg:"10" , Ducks:"10" , SR:"10" , fifty:"10" , hunderd :"10", doubleH:"10" ,fours:"10" ,sixes:"10" },
];

const COL_NAMES_M = [" ","M", "Inn", "NO", "Runs" , "HS", "Avg", "Ducks", "SR","50","100","200" ,"4s", "6s"];
const LIST_M = [
  { format: "ODI", M:"10" , Inn:"10" , NO:"10" , Runs:"10" ,HS:"10" , Avg:"10" , Ducks:"10" , SR:"87.65" , fifty:"10" , hunderd :"10", doubleH:"10" ,fours:"10" ,sixes:"10"},
  { format: "T20", M:"10" , Inn:"10" , NO:"10" , Runs:"10" ,HS:"10" , Avg:"10" , Ducks:"10" , SR:"121.23" , fifty:"10" , hunderd :"10", doubleH:"10" ,fours:"10" ,sixes:"10" },
  { format: "TEST", M:"10" , Inn:"10" , NO:"10" , Runs:"10" ,HS:"10" , Avg:"10" , Ducks:"10" , SR:"10" , fifty:"10" , hunderd :"10", doubleH:"10" ,fours:"10" ,sixes:"10" },
];


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
                <IntroTable/>
              </div>
              <div className="playerPreformanceBody">
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    
                        <TabPane tab="Career" key="1">
                            <div className="player-content">
                                <div className="tableTopic"><h4>Bating Career Summary</h4></div>
                                <hr></hr>
                                <Tablee
                                    list={LIST}
                                    colNames={COL_NAMES}
                                    width="100%"
                                />
                                 <span className="gap"></span>   

                                <div className="tableTopic"><h4>Bowling Career Summary</h4></div>
                                <hr></hr>
                                <Tablee
                                    list={LIST}
                                    colNames={COL_NAMES}
                                    width="100%"
                                />
                                <span className="gap"></span>   

                                <div className="tableTopic"><h4>Fielding Career Summary</h4></div>
                                <hr></hr>

                                <div className="fielding">
                                    <div className="fielding-row">
                                        <div className="coll-1">
                                            <h5>Catches</h5>
                                        </div><div className="coll-2">
                                            <h5>:</h5>
                                        </div>
                                        <div className="coll-3">
                                            <h5>24</h5>
                                        </div>
                                    </div>
                                    <div className="fielding-row">
                                        <div className="coll-1">
                                            <h5>Run-Outs</h5>
                                        </div><div className="coll-2">
                                            <h5>:</h5>
                                        </div>
                                        <div className="coll-3">
                                            <h5>24</h5>
                                        </div>
                                    </div>
                                </div>
                                <span className="gap"></span>  
                                <div className="tableTopic"><h4>Matches</h4></div>
                                <hr></hr>


                                <div className="table-tabs">
                                    <div className="table-tab">ODI</div>
                                    <div className="table-tab-active">T20</div>
                                    <div className="table-tab">TEST</div>
                                </div>
                                
                                <span className="gap-2"></span> 

                                {/*begin*/}
                                <div className="tablee-14">
                                    <div className="table-head-14">
                                        <div className="col-14-1"><h5>Match</h5></div>
                                        <div className="col-14-2"><h5>AT</h5></div>
                                        <div className="col-14-3"><h5>Runs</h5></div>
                                        <div className="col-14-14"><h5>balls</h5></div>
                                        <div className="col-14-4"><h5>SR</h5></div>
                                        <div className="col-14-5"><h5>6s</h5></div>
                                        <div className="col-14-6"><h5>4s</h5></div>
                                        <div className="col-14-7"><h5>Overs</h5></div>
                                        <div className="col-14-8"><h5>Runs</h5></div>
                                        <div className="col-14-9"><h5>Econ</h5></div>
                                        <div className="col-14-10"><h5>Wkts</h5></div>
                                        <div className="col-14-11"><h5>MO</h5></div>
                                        <div className="col-14-12"><h5>NB</h5></div>
                                        <div className="col-14-13"><h5>WB</h5></div>
                                    </div>
                                    <div className="table-row-14">
                                        <div className="col-14-1"><a href="#">vs SSC<br/>Pallekale stadium</a></div>
                                        <div className="col-14-2">AT-2</div>
                                        <div className="col-14-3">87</div>
                                        <div className="col-14-14">72</div>
                                        <div className="col-14-4">107.2</div>
                                        <div className="col-14-5">3</div>
                                        <div className="col-14-6">5</div>
                                        <div className="col-14-7">-</div>
                                        <div className="col-14-8">-</div>
                                        <div className="col-14-9">-</div>
                                        <div className="col-14-10">-</div>
                                        <div className="col-14-11">-</div>
                                        <div className="col-14-12">-</div>
                                        <div className="col-14-13">-</div>
                                    </div>
                                    <hr></hr>
                                    <div className="table-row-14">
                                        <div className="col-14-1"><a href="#">vs SSC<br/>Pallekale stadium</a></div>
                                        <div className="col-14-2">AT-2</div>
                                        <div className="col-14-3">87</div>
                                        <div className="col-14-14">72</div>
                                        <div className="col-14-4">107.2</div>
                                        <div className="col-14-5">3</div>
                                        <div className="col-14-6">5</div>
                                        <div className="col-14-7">-</div>
                                        <div className="col-14-8">-</div>
                                        <div className="col-14-9">-</div>
                                        <div className="col-14-10">-</div>
                                        <div className="col-14-11">-</div>
                                        <div className="col-14-12">-</div>
                                        <div className="col-14-13">-</div>
                                    </div>
                                    <hr></hr>
                                    <div className="table-row-14">
                                        <div className="col-14-1"><a href="#">vs SSC<br/>Pallekale stadium</a></div>
                                        <div className="col-14-2">AT-2</div>
                                        <div className="col-14-3">87</div>
                                        <div className="col-14-14">72</div>
                                        <div className="col-14-4">107.2</div>
                                        <div className="col-14-5">3</div>
                                        <div className="col-14-6">5</div>
                                        <div className="col-14-7">-</div>
                                        <div className="col-14-8">-</div>
                                        <div className="col-14-9">-</div>
                                        <div className="col-14-10">-</div>
                                        <div className="col-14-11">-</div>
                                        <div className="col-14-12">-</div>
                                        <div className="col-14-13">-</div>
                                    </div>
                                    <hr></hr>
                                    <div className="table-row-14">
                                        <div className="col-14-1"><a href="#">vs SSC<br/>Pallekale stadium</a></div>
                                        <div className="col-14-2">AT-2</div>
                                        <div className="col-14-3">87</div>
                                        <div className="col-14-14">72</div>
                                        <div className="col-14-4">107.2</div>
                                        <div className="col-14-5">3</div>
                                        <div className="col-14-6">5</div>
                                        <div className="col-14-7">-</div>
                                        <div className="col-14-8">-</div>
                                        <div className="col-14-9">-</div>
                                        <div className="col-14-10">-</div>
                                        <div className="col-14-11">-</div>
                                        <div className="col-14-12">-</div>
                                        <div className="col-14-13">-</div>
                                    </div>
                                    <hr></hr>
                                    <div className="table-row-14">
                                        <div className="col-14-1"><a href="#">vs SSC<br/>Pallekale stadium</a></div>
                                        <div className="col-14-2">AT-2</div>
                                        <div className="col-14-3">87</div>
                                        <div className="col-14-14">72</div>
                                        <div className="col-14-4">107.2</div>
                                        <div className="col-14-5">3</div>
                                        <div className="col-14-6">5</div>
                                        <div className="col-14-7">-</div>
                                        <div className="col-14-8">-</div>
                                        <div className="col-14-9">-</div>
                                        <div className="col-14-10">-</div>
                                        <div className="col-14-11">-</div>
                                        <div className="col-14-12">-</div>
                                        <div className="col-14-13">-</div>
                                    </div>
                                    <hr></hr>
                                    
                                    
                                </div>
                                {/*end*/}
                                
                            </div>

                            
                            
                        </TabPane>
                        <TabPane tab="Practice" key="2">
                            <div className="player-content">
                                <div className="tableTopic"><h4>Batting</h4><h5>No of sessions</h5></div>
                                <hr></hr>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>11</h5></div></div>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>11</h5></div></div>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>11</h5></div></div>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>11</h5></div></div>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>11</h5></div></div>


                                
                                
                                <span className="gap"></span>
                                <div className="tableTopic"><h4>Bowling</h4><h5>No of sessions</h5></div>
                                <hr></hr>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>22</h5></div></div>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>11</h5></div></div>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>11</h5></div></div>
                                <div className="sesNameNo"><h4>Batting</h4><div className="Noses"><h5>11</h5></div></div>
                            </div>
                        </TabPane>
                    
                </Tabs>
              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default playerRanking;