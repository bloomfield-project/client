import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import IntroTable from "../../../component/IntroTable/IntroTable"
import React from "react";
import player from "../player.jpg"
import "../../Home.css"
import "../css/PrivateProgress.css"
import {useState,useEffect} from "react";
import {fetchData} from '../../AuthServer' 
import { useParams,useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'





function PrivateProgress() {
  const { id } = useParams();
  console.log(id)
  const loginData= useSelector(state => state.auth.data)
  const [responseData,setResponseData]=useState([]);
  const [responseDataI,setResponseDataI]=useState([]);
  // const location = useLocation();
  // console.log(location.state)
  const urlIntro= "player/intro"
  const url= "player/feedback"

  async function getData(url){
      
      const reqData ={
          session_id:id,
          user_id:loginData.data.user_id,
      };
      const authRequest = {
      "method":"post",
      "url":url,
      "data":reqData
    }
    fetchData(authRequest).then((response)=>{
      if(url==="player/intro"){
          setResponseDataI(response.data)
      }
      if(url==="player/feedback"){
        setResponseData(response.data)
      }
      
    }).catch(function(error){
      console.log(error);
    })
  }
  useEffect(() => {
      getData(urlIntro)
      getData(url)
  }, [])
  const dataupcommingI=responseDataI.data
  const dataupcomming=responseData.data
  console.log(dataupcommingI)
  console.log(dataupcomming)



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
                    
                        
                        
                <div className="player-content">
                    <div className="tableTopic"><h4>Objectives</h4></div>
                    <hr></hr>
                    <div className="sesNameNo" style={{marginLeft:"50px"}}><h4>backend eken aran thyenne split karala ganna</h4></div>
                    <div className="sesNameNo" style={{marginLeft:"50px"}}><h4>Drive</h4></div>
                    <div className="sesNameNo" style={{marginLeft:"50px"}}><h4>Flick</h4></div> 

                    <span className="gap"></span>
                    <div className="tableTopic"><h4>Feedback</h4></div>
                    <hr></hr>
                    <div className="fdbck-container">
                      <p style={{textAlign:"left" , width:"95%"}}>{dataupcomming?dataupcomming[0].feedback:""}</p>
                      <div style={{width:"95%" , display:"flex" , justifyContent:"space-between"}}><h5></h5><h5>{dataupcomming?dataupcomming[0].couch_name:""}</h5></div>
                    </div>
                </div>
                        
              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default PrivateProgress;