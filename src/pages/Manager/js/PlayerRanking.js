import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import React from "react";
import "../../Home.css"
import "../../player/css/playerRanking.css"
import player from "../../player/player.jpg"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Tablee from "../../../component/ScoreTable/ScoreTable";
import IntroTable from "../../../component/IntroTable/IntroTable"
import {useState,useEffect} from "react";
import {fetchData} from '../../AuthServer' 
import { useLocation,useParams } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'




 





function PlayerRanking() {
    const loginData= useSelector(state => state.auth.data)
    console.log(loginData)
    const {id}=useParams();
    const [responseData,setResponseData]=useState([]);
    const [responseDataB,setResponseDataB]=useState([]);
    const [responseDataF,setResponseDataF]=useState([]);
    const [responseDataI,setResponseDataI]=useState([]);
    // const location = useLocation();
    // console.log(location.state)
    const urlBat= "player/performance"
    const urlBowl= "player/performanceBowl"
    const urlFld= "player/performanceFld"
    const urlIntro= "player/intro"

    async function getData(url){
        
        const reqData ={
            user_id:id,
        };
        const authRequest = {
        "method":"post",
        "url":url,
        "data":reqData
      }
      fetchData(authRequest).then((response)=>{
        if(url==="player/performance"){
            setResponseData(response.data)
        }
        else if(url==="player/performanceBowl"){
            setResponseDataB(response.data)
        }
        else if(url==="player/performanceFld"){
            setResponseDataF(response.data)
        }
        else if(url==="player/intro"){
            setResponseDataI(response.data)
        }
        
      }).catch(function(error){
        console.log(error);
      })
    }
    useEffect(() => {
        getData(urlIntro)
        getData(urlBat)
        getData(urlBowl)
        getData(urlFld)
    }, [])
    const dataupcomming=responseData.data
    const dataupcommingB=responseDataB.data
    const dataupcommingF=responseDataF.data
    const dataupcommingI=responseDataI.data
    console.log(dataupcomming)
    console.log(dataupcommingB)
    console.log(dataupcommingF)
    console.log(dataupcommingI)

    const COL_NAMES = [" ","M", "Inn", "Balls", "Runs" , "HS", "Avg", "Ducks", "SR","50","100","200" ,"4s", "6s"];
    const LIST = dataupcomming;

    const COL_NAMES_M = ["","M", "Inn", "Overs", "Runs" , "Wkts", "Econ","3W","5W","Hatricks" ,"maiden" ,"WB" ,"NB"];
    const LIST_M = dataupcommingB;

    return (
      <div className="page-container-1">
        <div className="header-container">
          <Header></Header>
        </div>
        <div className="body-container-1">
          <div className="navbar-container">
            <Navbar ></Navbar>
          </div>
          <div className="body-container-2">
              <div className="title">
                <h1>Player Perfomance</h1>
              </div>
              <div className="player-details-box">
                <img className="playerImage" src={dataupcommingI?dataupcommingI[0].image:player} alt="Italian Trulli" />
                <div style={{display:"flex", flexDirection:"column",justifyContent:"space-between", height:"200px", width:"fit-content", borderRadius:"10px" , marginLeft:"50px"}}>
                    <div style={{width: "351px", height: "52px" , backgroundColor: "#006950" , display: "flex", justifyContent:"center", alignItems:"center" , paddingTop: "5px", borderTopRightRadius: "10px" ,borderTopLeftRadius: "10px"}}>
                        <h3 style={{color:"white"}}>{dataupcommingI?dataupcommingI[0].name:""}</h3>
                    </div>
                    <div style={{width: "351px", height:"fit-content" ,display:"flex", justifyContent: "space-between"}}>
                        <div style={{width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
                        <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Age</h5>
                        </div>
                        <div style={{ width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
                        <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>{dataupcommingI?dataupcommingI[0].Age:""}</h5>
                        </div>
                    </div>
                    <div style={{width: "351px", height:"fit-content" ,display:"flex", justifyContent: "space-between"}}>
                        <div style={{width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
                        <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Role</h5>
                        </div>
                        <div style={{ width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
                        <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>{dataupcommingI?dataupcommingI[0].player_role:""}</h5>
                        </div>
                    </div>
                    <div style={{width: "351px", height:"fit-content" ,display:"flex", justifyContent: "space-between"}}>
                        <div style={{width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
                        <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Batting Style</h5>
                        </div>
                        <div style={{ width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px"}}>
                        <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>{dataupcommingI?dataupcommingI[0].batting_style:""}</h5>
                        </div>
                    </div>
                    <div style={{width: "351px", height:"fit-content" ,display:"flex", justifyContent: "space-between"}}>
                        <div style={{width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px" , borderBottomLeftRadius:"10px"}}>
                        <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>Bowling Style</h5>
                        </div>
                        <div style={{ width:"175px", height:"36px", backgroundColor:"#009270", paddingTop:"5px",textAlign:"left", paddingLeft:"10px" , borderBottomRightRadius:"10px"}}>
                        <h5 style={{color:"white",fontWeight:"normal", fontSize: "1rem"}}>{dataupcommingI?dataupcommingI[0].bowling_style:""}</h5>
                        </div>
                    </div>
                </div>
              </div>
              <div className="playerPreformanceBody">
                {/* <Tabs defaultActiveKey="1" onChange={onChange}> */}
                    
                        {/* <TabPane tab="Career" key="1"> */}
                            <div className="player-content">
                                <div className="tableTopic"><h4>Bating Career Summary</h4></div>
                                <hr></hr>
                                {/* <Tablee
                                    list={LIST?LIST:""}
                                    colNames={COL_NAMES}
                                    width="100%"
                                /> */}
                                {LIST?.length===0?<p>No data to display</p>:<Tablee
                                    list={LIST?LIST:""}
                                    colNames={COL_NAMES}
                                    width="100%"
                                />}
                                 <span className="gap"></span>   

                                <div className="tableTopic"><h4>Bowling Career Summary</h4></div>
                                <hr></hr>
                                {/* <Tablee
                                    list={LIST_M?LIST_M:""}
                                    colNames={COL_NAMES_M}
                                    width="100%"
                                /> */}
                                {LIST_M?.length===0?<p>No data to display</p>:<Tablee
                                    list={LIST_M?LIST_M:""}
                                    colNames={COL_NAMES_M}
                                    width="100%"
                                />}
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
                                            {/* <h5>{dataupcommingF?dataupcommingF[0].catches:""}</h5> */}
                                            {dataupcommingF?dataupcommingF[0].catches?<h5>{dataupcommingF[0].catches}</h5>:<h5>0</h5>:""}
                                        </div>
                                    </div>
                                    <div className="fielding-row">
                                        <div className="coll-1">
                                            <h5>Run-Outs</h5>
                                        </div><div className="coll-2">
                                            <h5>:</h5>
                                        </div>
                                        <div className="coll-3">
                                            {/* <h5>{dataupcommingF?dataupcommingF[0].runout?dataupcommingF[0].runout:"No data to display":""}</h5> */}
                                            {dataupcommingF?dataupcommingF[0].runout?<h5>{dataupcommingF[0].runout}</h5>:<h5>0</h5>:""}
                                        </div>
                                    </div>
                                </div>
                                <span className="gap"></span>  
                                
                            </div>

                            
                            
                        {/* </TabPane> */}
                        {/* <TabPane tab="Practice" key="2">
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
                        </TabPane> */}
                    
                {/* </Tabs> */}
              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default PlayerRanking;