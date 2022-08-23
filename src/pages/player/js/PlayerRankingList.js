import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../../Manager/css/CricketRanking.css"
import "../../Manager/css/table.css"
import profpic from "../../../component/header/profpic.jfif"
import { Tabs } from 'antd';
import React from 'react';



const { TabPane } = Tabs;




const onChange = (key) => {
    console.log(key);
  };

function PlayerRankingList() {

    return (
<<<<<<< HEAD

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
                        <h1>BLOOMFIELD Cricket Rankings</h1>
                    </div>

                    {/* <div className="tabs">
                    <h5 className="tab-active">Batting<hr></hr></h5>
                    <h5 className="tab">Balling</h5>
                    <h5 className="tab">All-rounders</h5>
                    </div> */}

                    {/* <div className="PplayerPreformanceBody">

                        <Tabs defaultActiveKey="1" onChange={onChange}>

                            <TabPane tab="Tab 1" key="1">


                                <div className="table-box-11">
                                    <div className="table-tabs">
                                        <div className="table-tab">ODI</div>
                                        <div className="table-tab-active">T20</div>
                                        <div className="table-tab">TEST</div>
                                    </div>
                                    <div className="tablee">
                                        <div className="table-head">
                                            <div className="col-3-1">Position</div>
                                            <div className="col-3-2">Player</div>
                                            <div className="col-3-3">Rating</div>
                                        </div>
                                        <div className="table-row">
                                            <div className="col-3-1">1</div>
                                            <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                            <div className="col-3-3">932</div>

                                        </div>
                                        <hr></hr>
                                        <div className="table-row">
                                            <div className="col-3-1">1</div>
                                            <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                            <div className="col-3-3">932</div>

                                        </div>
                                        <hr></hr>
                                        <div className="table-row">
                                            <div className="col-3-1">1</div>
                                            <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                            <div className="col-3-3">932</div>
                                            <div className="PplayerPreformanceBody">
                                                <Tabs defaultActiveKey="1" onChange={onChange}>
                                                    <TabPane tab="Batting" key="1">
                                                        <div className="table-box-11">
                                                            <div className="table-tabs">
                                                                <div className="table-tab">ODI</div>
                                                                <div className="table-tab-active">T20</div>
                                                                <div className="table-tab">TEST</div>
                                                            </div>
                                                            <div className="tablee">
                                                                <div className="table-head">
                                                                    <div className="col-3-1">Position</div>
                                                                    <div className="col-3-2">Player</div>
                                                                    <div className="col-3-3">Rating</div>
                                                                </div>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>
=======
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
                <h1>BLOOMFIELD Cricket Rankings</h1>
              </div>
              {/* <div className="tabs">
                <h5 className="tab-active">Batting<hr></hr></h5>
                <h5 className="tab">Balling</h5>
                <h5 className="tab">All-rounders</h5>
              </div> */}
                <div className="PplayerPreformanceBody">
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Batting" key="1">
                    <div className="table-box-11">
                        <div className="table-tabs">
                            <div className="table-tab">ODI</div>
                            <div className="table-tab-active">T20</div>
                            <div className="table-tab">TEST</div>
                        </div>
                        <div className="tablee">
                            <div className="table-head">
                                <div className="col-3-1">Position</div>
                                <div className="col-3-2">Player</div>
                                <div className="col-3-3">Rating</div>
                            </div>
                            <div className="table-row">
                                <div className="col-3-1">1</div>
                                <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                <div className="col-3-3">932</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="col-3-1">1</div>
                                <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                <div className="col-3-3">932</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="col-3-1">1</div>
                                <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                <div className="col-3-3">932</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="col-3-1">1</div>
                                <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                <div className="col-3-3">932</div>
                                
                            </div>
                            
                        </div>
>>>>>>> 869febfdb76cc27ff5e3d0312dac99de9f55f650

                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

<<<<<<< HEAD
                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                    </TabPane>
                                                    <TabPane tab="Bowling" key="2">
                                                        <div className="table-box-11">
                                                            <div className="table-tabs">
                                                                <div className="table-tab">ODI</div>
                                                                <div className="table-tab-active">T20</div>
                                                                <div className="table-tab">TEST</div>
                                                            </div>
                                                            <div className="tablee">
                                                                <div className="table-head">
                                                                    <div className="col-3-1">Position</div>
                                                                    <div className="col-3-2">Player</div>
                                                                    <div className="col-3-3">Rating</div>
                                                                </div>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>

                                                            </div>

                                                        </div>
                                                    </TabPane>
                                                    <TabPane tab="All-rounders" key="3">
                                                        <div className="table-box-11">
                                                            <div className="table-tabs">
                                                                <div className="table-tab">ODI</div>
                                                                <div className="table-tab-active">T20</div>
                                                                <div className="table-tab">TEST</div>
                                                            </div>
                                                            <div className="tablee">
                                                                <div className="table-head">
                                                                    <div className="col-3-1">Position</div>
                                                                    <div className="col-3-2">Player</div>
                                                                    <div className="col-3-3">Rating</div>
                                                                </div>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>
                                                                <hr></hr>
                                                                <div className="table-row">
                                                                    <div className="col-3-1">1</div>
                                                                    <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                                    <div className="col-3-3">932</div>

                                                                </div>

                                                            </div>


                                                        </div>
                                                        <hr></hr>
                                                        <div className="table-row">
                                                            <div className="col-3-1">1</div>
                                                            <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                            <div className="col-3-3">932</div>

                                                        </div>

                                                    </div>

                                            </div>
                                        </TabPane>

                                        <TabPane tab="Tab 2" key="2">
                                            <div className="table-box-11">
                                                <div className="table-tabs">
                                                    <div className="table-tab">ODI</div>
                                                    <div className="table-tab-active">T20</div>
                                                    <div className="table-tab">TEST</div>
                                                </div>
                                                <div className="tablee">
                                                    <div className="table-head">
                                                        <div className="col-3-1">Position</div>
                                                        <div className="col-3-2">Player</div>
                                                        <div className="col-3-3">Rating</div>
                                                    </div>
                                                    <div className="table-row">
                                                        <div className="col-3-1">1</div>
                                                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                        <div className="col-3-3">932</div>

                                                    </div>
                                                    <hr></hr>
                                                    <div className="table-row">
                                                        <div className="col-3-1">1</div>
                                                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                        <div className="col-3-3">932</div>

                                                    </div>
                                                    <hr></hr>
                                                    <div className="table-row">
                                                        <div className="col-3-1">1</div>
                                                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                        <div className="col-3-3">932</div>

                                                    </div>
                                                    <hr></hr>
                                                    <div className="table-row">
                                                        <div className="col-3-1">1</div>
                                                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                        <div className="col-3-3">932</div>

                                                    </div>

                                                </div>

                                            </div>
                                        </TabPane>

                                        <TabPane tab="Tab 3" key="3">
                                            <div className="table-box-11">
                                                <div className="table-tabs">
                                                    <div className="table-tab">ODI</div>
                                                    <div className="table-tab-active">T20</div>
                                                    <div className="table-tab">TEST</div>
                                                </div>
                                                <div className="tablee">
                                                    <div className="table-head">
                                                        <div className="col-3-1">Position</div>
                                                        <div className="col-3-2">Player</div>
                                                        <div className="col-3-3">Rating</div>
                                                    </div>
                                                    <div className="table-row">
                                                        <div className="col-3-1">1</div>
                                                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                        <div className="col-3-3">932</div>

                                                    </div>
                                                    <hr></hr>
                                                    <div className="table-row">
                                                        <div className="col-3-1">1</div>
                                                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                        <div className="col-3-3">932</div>

                                                    </div>
                                                    <hr></hr>
                                                    <div className="table-row">
                                                        <div className="col-3-1">1</div>
                                                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                        <div className="col-3-3">932</div>

                                                    </div>
                                                    <hr></hr>
                                                    <div className="table-row">
                                                        <div className="col-3-1">1</div>
                                                        <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                                        <div className="col-3-3">932</div>

                                                    </div>

                                                </div>

                                            </div>
                                        </TabPane>

                        </Tabs>

                    </div>

                </div> */}
                </div>

            </div>

        </div>

    );

}

export default PlayerRankingList;
=======
                    </div>
                    </TabPane>
                    <TabPane tab="All-rounders" key="3">
                    <div className="table-box-11">
                        <div className="table-tabs">
                            <div className="table-tab">ODI</div>
                            <div className="table-tab-active">T20</div>
                            <div className="table-tab">TEST</div>
                        </div>
                        <div className="tablee">
                            <div className="table-head">
                                <div className="col-3-1">Position</div>
                                <div className="col-3-2">Player</div>
                                <div className="col-3-3">Rating</div>
                            </div>
                            <div className="table-row">
                                <div className="col-3-1">1</div>
                                <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                <div className="col-3-3">932</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="col-3-1">1</div>
                                <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                <div className="col-3-3">932</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="col-3-1">1</div>
                                <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                <div className="col-3-3">932</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="col-3-1">1</div>
                                <div className="col-3-2"><img className="row-image" src={profpic} alt=""></img><a href="/player/playerRanking">Sameera Madushan</a></div>
                                <div className="col-3-3">932</div>
                                
                            </div>
                            
                        </div>

                    </div>
                    </TabPane>
                </Tabs>
                </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default PlayerRankingList;
>>>>>>> 869febfdb76cc27ff5e3d0312dac99de9f55f650
