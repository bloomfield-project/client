import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import IntroTable from "../../../component/IntroTable/IntroTable"
import React from "react";
import player from "../player.jpg"
import "../../Home.css"
import "../css/Progress.css" 
import { PieChart } from 'react-minimal-pie-chart';
import {useState,useEffect} from "react";
import {fetchData} from '../../AuthServer' 
import { useLocation } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'

function Progress() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    var thisMonth =yyyy+"-"+mm
    const[Month, setMonth]  = useState(thisMonth);

    function setThisMonth(e){
        console.log(3);
        setMonth(e)
      }
    
      function getSessionForMonth(){
        getData("player/Attendance")
      }


    const loginData= useSelector(state => state.auth.data)
    const [responseData,setResponseData]=useState([]);
    const [responseDataI,setResponseDataI]=useState([]);
    // const location = useLocation();
    // console.log(location.state)
    const urlIntro= "player/intro"
    const urlA= "player/Attendance"

    async function getData(url){
        
        const reqData ={
            user_id:loginData.data.user_id,
            month:Month
        };
        const authRequest = {
        "method":"post",
        "url":url,
        "data":reqData
      }
      fetchData(authRequest).then((response)=>{
        if(url==="player/Attendance"){
            setResponseData(response.data)
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
        getData(urlA)
    }, [])
    const dataupcomming=responseData.data
    const dataupcommingI=responseDataI.data
    
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
                <h1>Player Progress</h1>
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
              
              <div className="player-content" style={{width:"95%" ,marginTop:"50px"}}>
                <div className="tableTopic"><h4>Attendance for sessions</h4></div>
                    <div className="filter-by-date-G">
                        <label>Select month:</label>
                        <input type="month" id="start" name="start"  value={Month} className="filter-by-date-month"  onChange={e => setThisMonth(e.target.value)}></input>
                        <button className="Select-Button-G-G" onClick={getSessionForMonth}>Select</button>
                    </div>
                <hr></hr>
                <div className="pie-chart-box" style={{width:"97%"}}>
                    <div className="pie-chart" style={{width:"150px"}}>
                        <PieChart
                            data={[
                                { title: 'One', value: dataupcomming?dataupcomming[0].presentCount:10 , color: '#009270' },
                                { title: 'Two', value: dataupcomming?dataupcomming[0].absentCount:0, color: '#A1A1A1' },
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
                            <div className="mapPie-col-3"><h5>{dataupcomming?dataupcomming[0].presentCount+dataupcomming[0].absentCount:""}</h5></div>
                        </div>

                        <div className="mapPie-row">
                            <div className="mapPie-col-1">
                                <div className="color-box-2"></div>
                                <h5>Present</h5>
                            </div>
                            <div className="mapPie-col-2"><h5>-</h5></div>
                            <div className="mapPie-col-3"><h5>{dataupcomming?dataupcomming[0].presentCount:""} ({dataupcomming?dataupcomming[0].presentpercent:""} %)</h5></div>
                        </div>

                        <div className="mapPie-row">
                            <div className="mapPie-col-1">
                                <div className="color-box-3"></div>
                                <h5>Absent</h5>
                            </div>
                            <div className="mapPie-col-2"><h5>-</h5></div>
                            <div className="mapPie-col-3"><h5>{dataupcomming?dataupcomming[0].absentCount:""} ({dataupcomming?dataupcomming[0].absentpercent:""} %)</h5></div>
                        </div>
                    </div>


                    
                </div> 

                <span className="gp-21"></span> 

                {/*begin*/}
                <div className="tablee-14">
                    <div className="table-head-14">
                        <div className="col-4-1"><h5>Session ID</h5></div>
                        <div className="col-4-2"><h5>Session</h5></div>
                        <div className="col-4-3"><h5>Attendance</h5></div>
                        <div className="col-4-4"><h5></h5></div>
                        
                    </div>
                    {dataupcomming!=[]?dataupcomming?.map((item,i)  => 
                              <><div key={i} className="table-row-14">
                                <div className="col-4-1">{"PS-"+(item.session_id+i)}</div>
                                <div className="col-4-2">{item.type}</div>
                                <div className="col-4-3">{item.attendance}</div>
                                <div className="col-4-4"><a href={"/player/PrivateProgress/"+item.session_id}>Details</a></div>

                              </div><hr></hr></>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
                </div>
                {/*end*/}  
                
              </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default Progress;