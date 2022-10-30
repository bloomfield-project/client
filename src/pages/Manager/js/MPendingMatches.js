import React, {useState,useEffect} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Team from "../../player/Team.png"
import opTeam from "../../player/opTeam.jpg"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import {fetchData} from '../../AuthServer';



function MPendingMatches() {

  const { id } = useParams();

  console.log("type is : " + id);
  const [responseP,setResponseP]=useState([]);
  const [responseC,setResponseC]=useState([]);
  
  async function getData(){
    const reqData ={
      match_id:id,
      statuss:"pending"
    };
    const authRequest = {
    "method":"post",
    "url":"player/matchPlayer",
    "data":reqData
    }
    fetchData(authRequest).then((response)=>{
      setResponseP(response.data)
      console.log(response.data);
    }).catch(function(error){
      console.log(error);
    })
  }
  async function getData2(){
    const reqData ={
      session_id:id,
    };
    const authRequest = {
    "method":"post",
    "url":"player/matchCoach",
    "data":reqData
    }
    fetchData(authRequest).then((response)=>{
      setResponseC(response.data)
      console.log(response.data);
    }).catch(function(error){
      console.log(error);
    })
  }

   

  useEffect(() => {
    getData2()
  }, [])
  useEffect(() => {
    getData()
  }, [])
  
  console.log(responseP);
  console.log(responseC);
  const successP=responseP.success
  const successC=responseC.success
  const players=responseP.data
  const coaches=responseC.data
  console.log("players",players)
  
  
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
                <h1>Match</h1>
              </div>
            <div className="matches-container-outer-box" style={{width:"95%"}}>
            
                {/* <div className="matche-container-outer-box"> */}
                
                        {players===undefined?<h1>Hi</h1>:
                        <div className="matche-container-outer-box">
                            <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>{players.length>0?players[0].time:" "}</h4></div></div>
                            <div className="match-box-mid">
                                <div className="match-box-mid-left">
                                    <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                                    <div className="box-mid-left-mid"><img src={Team}></img></div>
                                    <div className="box-mid-left-down"><h5 style={{color:"#a5a5a5"}}>Starts at {players.length>0?players[0].time:" "}</h5></div>
                                </div>
                                <div className="match-box-mid-mid">
                                    <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>{players.length>0?players[0].match_format:""}</h5></div>
                                    <div className="box-mid-mid-mid">VS</div>
                                    <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>{players.length>0?players[0].ground:""}</h5></div>
                                </div>
                                <div className="match-box-mid-right">
                                    <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>{players.length>0?players[0].op_team:""}</h4></div>
                                    <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                                    <div className="box-mid-right-down"><h5 style={{color:"#a5a5a5"}}>{players.length>0?players[0].date:""}</h5></div>
                                </div>
                            </div>
                            
                            </div>}
                        {/* match card */}
                        {/* <div className="gap-3"></div> */}
                       
                        
                        
                        
                    
                {/* </div> */}


                <div className="Pending-matches-coaches-list">
                    <h1 style={{width:"100%"  , display:"flex" , marginTop:"20px"}}>Coaches</h1>
                    <hr style={{marginTop:"-10px"}}></hr>
                    {successC!=0?coaches?.map((item,i)  =>
                    <p style={{width: "40%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>{item.name}</p>
                    ):<h6 style={{ height : "200px"}}>NO Players to display</h6>}
                    
                </div>

                <div className="Pending-matches-coaches-list">
                    <h1 style={{width:"100%"  , display:"flex" , marginTop:"20px"}}>Players</h1>
                    <hr style={{marginTop:"-10px"}}></hr>
                    {successP!=0?players?.map((item,i)  =>
                    <div style={{display: "flex"}}><p style={{width: "40%", display:"flex", marginLeft:"20px", fontSize:"1rem"}}>{item.name}</p><p>BF-{item.user_id}</p></div>
                    ):<h6 style={{ height : "200px"}}>NO Players to display</h6>}
                    
                    
                </div>
            
            
                <div className="match-box-down">
                    <Link to={"/manager/MatchDetail"}>
                        <Button variant="secondary">Back</Button>
                    </Link>
                </div>

            
            </div>
        </div>
      </div>
    </div>
  );
}

export default MPendingMatches;