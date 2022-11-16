import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import "../css/Matches_2.css"
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import {useState,useEffect} from "react";
import {fetchData} from '../../AuthServer' ;
import {useDispatch,useSelector} from 'react-redux'


const { TabPane } = Tabs;






function Session() {
    const onChange = (key) => {
        console.log(key);
        setTabNumber(key)
      };
    

    const [tabNumber, setTabNumber] = useState(1);

    const selectTab_1 = () => {
        setTabNumber(1);
    }

    const selectTab_2 = () => {
        setTabNumber(2);
    }

    //''''''''''''''''''''''''''''''''''''''''
    const [responseData, setResponseData] = useState([]);
    const [responseDataFuture, setResponseDataFuture] = useState([]);
    const [responseDataUnmarked, setResponseDataUnmarked] = useState([]);
    const [responseDatamarked, setResponseDatamarked] = useState([]);
    
    const url = "player/coach/addTeamMatches";
    const future = "player/coach/future";
    const Unmarked = "player/coach/Unmarked";
    const marked = "player/coach/marked";
    async function getData(url, Team = "") {
      const reqData = {
        team_id: 2,
      };
      const authRequest = {
        method: "post",
        url: url,
        data: reqData,
      };
      fetchData(authRequest)
        .then((response) => {
          if(url==="player/coach/addTeamMatches"){setResponseData(response.data);}
          else if(url==="player/coach/future"){setResponseDataFuture(response.data);}
          else if(url==="player/coach/Unmarked"){setResponseDataUnmarked(response.data);}
          else if(url==="player/coach/marked"){setResponseDatamarked(response.data);}
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    useEffect(() => {
      getData(url);
      getData(future);
      getData(Unmarked);
      getData(marked);
    }, []);
    const dataupcomming = responseData.data;
    console.log(dataupcomming);
    
    
    
    const dataFuture=responseDataFuture.data
    const dataUnmarked=responseDataUnmarked.data
    const datamarked=responseDatamarked.data
    console.log(dataFuture);
    console.log(dataUnmarked);
    console.log(datamarked);
  //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

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
                
                <div className="playerPreformanceBody">
                    <Tabs defaultActiveKey="1" onChange={onChange}>
                        
                        <TabPane tab="Add Team" key="1">
                          <div className="table-box-11">
                            <div className="tablee">
                            <div className="table-head">
                                    <div className="col-51">Match ID</div>
                                    <div className="col-51">Format</div>
                                    <div className="col-51">Date</div>
                                    <div className="col-51">Ground</div>
                                    <div className="col-51">Opposite Team</div>
                                    <div className="col-51"></div>
                                </div>
    
                                {dataupcomming?dataupcomming?.map((item,i)=>
                                <>
                                <div  className="table-row">
                                    <div className="col-51">M-{item.match_id}</div>
                                    <div className="col-51">{item.match_format}</div>
                                    <div className="col-51">{item.date}</div>
                                    <div className="col-51">{item.ground}</div>
                                    <div className="col-51">{item.op_team_name}</div>
                                    <div className="col-51"><a href={"/coach/TeamToMatch/"+item.match_id}><button className="btn btn-secondary">View</button></a></div>
                                    {/* <div className="col-51"><button value={item.session_id} onClick={e => viewSession(e.target.value)}>View</button></div> */}
                              
    
                                  </div><hr></hr></>):""}
    
                            </div>
                          </div>
                            
                        </TabPane>
                        <TabPane tab="Future" key="2">
                          <div className="table-box-11">
                          <div className="tablee">
                            <div className="table-head">
                                    <div className="col-51">Match ID</div>
                                    <div className="col-51">Format</div>
                                    <div className="col-51">Date</div>
                                    <div className="col-51">Ground</div>
                                    <div className="col-51">Our Team</div>
                                    <div className="col-51">Opposite Team</div>
                                    <div className="col-51"></div>
                                </div>
    
                              
                              {dataFuture?dataFuture?.map((item,i) => <>
                                <div  className="table-row">
                                    <div className="col-51">M-{item.match_id}</div>
                                    <div className="col-51">{item.match_format}</div>
                                    <div className="col-51">{item.date}</div>
                                    <div className="col-51">{item.ground}</div>
                                    <div className="col-51">{item.name}</div>
                                    <div className="col-51">{item.op_team_name}</div>
                                    <div className="col-51"><a href={"/coach/FutureTeams/"+item.match_id+"/"+item.name}><button className="btn btn-secondary">View</button></a></div>
                                    {/* <div className="col-51"><button value={item.session_id} onClick={e => viewSession(e.target.value)}>View</button></div> */}
                              
    
                                  </div><hr></hr></>):""}
    
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tab="Unmarked" key="3">
                          <div className="table-box-11">
                          <div className="tablee">
                                <div className="table-head">
                                    <div className="col-51">Match ID</div>
                                    <div className="col-51">Format</div>
                                    <div className="col-51">Date</div>
                                    <div className="col-51">Time</div>
                                    <div className="col-51">Our Team</div>
                                    <div className="col-51">Opposite Team</div>
                                    <div className="col-51"></div>
                                </div>
    
                                {dataUnmarked?dataUnmarked?.map((item,i)=>
                                <>
                                <div key={i} className="table-row">
                                    <div className="col-51">M-{item.match_id}</div>
                                    <div className="col-51">{item.format}</div>
                                    <div className="col-51">{item.date}</div>
                                    <div className="col-51">{item.time}</div>
                                    <div className="col-51">{item.name}</div>
                                    <div className="col-51">{item.op_team_name}</div>
                                    <div className="col-51"><a href={"/coach/matches3/"+item.match_id+"/"+item.team_id}><button className="btn btn-secondary">View</button></a></div>
                                    
                              
    
                                  </div><hr></hr>
                                </>):""}
    
                            </div>
                          </div>
                        </TabPane>
                        <TabPane tab="Marked" key="4">
                          <div className="table-box-11">
                          <div className="tablee">
                                <div className="table-head">
                                    <div className="col-51">Match ID</div>
                                    <div className="col-51">Format</div>
                                    <div className="col-51">Date</div>
                                    <div className="col-51">Time</div>
                                    <div className="col-51">Our Team</div>
                                    <div className="col-51">Opposite Team</div>
                                    <div className="col-51"></div>
                                </div>
    
                                {datamarked?datamarked?.map((item,i)=>
                                <>
                                <div key={i} className="table-row">
                                    <div className="col-51">M-{item.match_id}</div>
                                    <div className="col-51">{item.format}</div>
                                    <div className="col-51">{item.date}</div>
                                    <div className="col-51">{item.time}</div>
                                    <div className="col-51">{item.name}</div>
                                    <div className="col-51">{item.op_team_name}</div>
                                    <div className="col-51"><a href={"/coach/matches4/"+item.match_id}><button className="btn btn-secondary">View</button></a></div>
                                    
                              
    
                                  </div><hr></hr>
                                </>):""}
    
                            </div>
                          </div>
                        </TabPane>
                    
                    </Tabs>
                  </div>
    
                {/* </div> */}
              </div>
            </div>
          </div>
        </>
      );
}

export default Session;
