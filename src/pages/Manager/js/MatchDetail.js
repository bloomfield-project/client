// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import Header from "../../../component/header/Header";
// import Navbar from "../../../component/NavigationBar/Navbar";

// import Button from "react-bootstrap/Button";
// import "antd/dist/antd.css";
// import Team from "../../player/Team.png";
// import opTeam from "../../player/player.jpg";

// const Axios = require("axios").default;

// function MatchDetail() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     Axios.get("http://localhost:3001/api/manager/AddTournamentMatch").then(
//       (response) => {
//         setPost(response.data);
//       }
//     );
//   }, []);
//   console.log("post data function ", post);

    

//   return (
//     <>
//       <div className="page-container-1">
//         <div className="header-container">
//           <Header></Header>
//         </div>
//         <div className="body-container-1">
//           <div className="navbar-container">
//             <Navbar></Navbar>
//           </div>
//           <div className="body-container-2">
//             {/* <div > */}
//             <div className="title">
//               <h1>Matches</h1>
//             </div>

//             <div className="tabs">
//               <div className="tabs-left"></div>

//               <div className="tabs-right">
//                 <Link to={"/manager/AddMatch"}>
//                   <Button to={"/manager/AddMatch"} variant="outline-success">
//                     + Add
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <hr></hr>
//             <div className="table-box-1">
//               <div className="tablee">
//                 <div className="gap-3"></div>

//                 {post ? (
//                   post.data.map((item, i) => {
//                     return (
//                       <>
//                         <div className="matche-container-outer-box" key={i}>
//                           <div className="match-box-up">
//                             <div className="go-out">
//                               <h4
//                                 style={{
//                                   color: "#009270",
//                                   fontSize: "2rem",
//                                   fontWeight: "bolder",
//                                 }}
//                               >
//                                 {item.title}
//                               </h4>
//                             </div>
//                           </div>
//                           <div className="match-box-mid">
//                             <div className="match-box-mid-left">
//                               <div className="box-mid-left-up">
//                                 <h4 style={{ color: "#a5a5a5" }}>BLOOMFIELD</h4>
//                               </div>
//                               <div className="box-mid-left-mid">
//                                 <img src={Team}></img>
//                               </div>
//                               <div className="box-mid-left-down"></div>
//                             </div>
//                             <div className="match-box-mid-mid">
//                               <div className="box-mid-mid-up">
//                                 <h5 style={{ color: "#a5a5a5" }}>
//                                   {item.match_format}
//                                 </h5>
//                               </div>
//                               <div className="box-mid-mid-mid">VS</div>
//                               <div className="box-mid-mid-down">
//                                 <h5 style={{ color: "#a5a5a5" }}>
//                                   {item.ground}
//                                 </h5>
//                               </div>
//                             </div>
//                             <div className="match-box-mid-right">
//                               <div className="box-mid-right-up">
//                                 <h4 style={{ color: "#a5a5a5" }}>
//                                   {item.op_team_name}
//                                 </h4>
//                               </div>
//                               <div className="box-mid-right-mid">
//                                 <img src={opTeam}></img>
//                               </div>
//                               <div className="box-mid-right-down"></div>
//                             </div>
//                           </div>
//                           <div className="match-box-down-1">
//                             <div className="match-box-down-1-left">
//                               <h5 style={{ color: "#009270" }}>
//                                 {/* BLOOMFIELD won by 4 wkts */}
//                               </h5>
//                             </div>
//                             <div className="match-box-down-1-right">
//                               <h5 style={{ color: "#a5a5a5" }}>{item.date}</h5>
//                             </div>
//                           </div>
//                           <div className="match-box-down">
//                             <Button variant="secondary">View</Button>
//                           </div>
//                         </div>
//                         <div className="gap-3"></div>
//                       </>
//                     );
//                   })
//                 ) : (
//                   <div className="spinner-border m-5" role="status">
//                     <span className="sr-only"></span>
//                   </div>
//                 )}

//                 {/* match card */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MatchDetail;

import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import "../../player/css/Matches.css"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Team from "../../player/Team.png"
import opTeam from "../../player/opTeam.jpg"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {fetchData} from '../../AuthServer'
import React, {useState,useEffect} from "react";
// import userController from "../../../../../server-1/api/user/user.controller";


const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

function MatchDetail() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    var thisMonth =yyyy+"-"+mm+"-"+dd
    const[Month, setMonth]  = useState(thisMonth);


    const [responseData,setResponseData]=useState([]);
    const [responseDataPast,setPastResponseData]=useState([]);
    async function getData(url,num){
    

    const reqData ={
      month:Month,
      
    };
    const authRequest = {
    "method":"post",
    "url":url,
    "data":reqData
    }
    fetchData(authRequest).then((response)=>{
        if(num==1)setResponseData(response.data)
        else if(num==2)setPastResponseData(response.data)
    }).catch(function(error){
        console.log(error);
    })
    }

    useEffect(() => {
        getData("match/matches",1)
    }, [])
    useEffect(() => {
        getData("match/pastMatches",2)
    }, [])
    

    function setThisMonth(e){
        console.log(3);
        setMonth(e)
      }

    function getSessionForMonth(){
        getData("match/matches",1)
      }

    console.log(responseData)
    const msg = responseData.success
    const dataM=responseData.data
    const msgP = responseDataPast.success
    const dataMP=responseDataPast.data
    console.log(msgP+"KJNKnnkjnknjkjjjjjjknnjjjjjjjjj")
    console.log(Month)
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
                <h1>Matches</h1>
            </div>
            <div className="tabs">
               <div className="tabs-left"></div>

               <div className="tabs-right">
                 <Link to={"/manager/AddMatch"}>
                   <Button to={"/manager/AddMatch"} variant="outline-success">
                     + Add
                   </Button>
                 </Link>
               </div>
             </div>
             <hr></hr>
            <div className="tabs-contain-box">
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    
                    <TabPane tab="Pending" key="1">


                     {/* <div className="filter-by-date-G">
                        <label>Select month:</label>
                        <input type="month" id="start" name="start" min={thisMonth}  value={Month} className="filter-by-date-month"  onChange={e => setThisMonth(e.target.value)}></input>
                        <button className="Select-Button-G-G" onClick={getSessionForMonth}>Select</button>
                      </div> */}
                        
                    <div className="matches-container-outer-box">
                        {/* match card */}
                        {msg!=0?dataM?.map((item,i)  =>
                        <>
                        
                        <div className="matche-container-outer-box">
                            <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>{item.title}</h4></div></div>
                            <div className="match-box-mid">
                                <div className="match-box-mid-left">
                                    <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                                    <div className="box-mid-left-mid"><img src={Team}></img></div>
                                    <div className="box-mid-left-down"><h5 style={{color:"#a5a5a5"}}>Starts at {item.time}</h5></div>
                                </div>
                                <div className="match-box-mid-mid">
                                    <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>{item.match_format}</h5></div>
                                    <div className="box-mid-mid-mid">VS</div>
                                    <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>{item.ground}</h5></div>
                                </div>
                                <div className="match-box-mid-right">
                                    <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>{item.op_team_name}</h4></div>
                                    <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                                    <div className="box-mid-right-down"><h5 style={{color:"#a5a5a5"}}>{item.date}</h5></div>
                                </div>
                            </div>
                            <div className="match-box-down">
                                <Link to={"/Manager/Matches/PendingMatches/"+item.match_id}>
                                    <Button variant="secondary">View</Button>
                                </Link></div>
                            </div>
                        {/* match card */}
                        <div className="gap-3"></div>
                       
                        
                        </>
                         ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
                        

                    </div>           

                        
                        
                    </TabPane>
                    <TabPane tab="Past" key="2">

                        <div className="matches-container-outer-box">
                            {/* match card */}
                            {msgP!=0?dataMP?.map((item,i)  =><>
                            <div className="matche-container-outer-box">
                                <div className="match-box-up"><div className="go-out"><h4 style={{color:"#009270", fontSize:"2rem", fontWeight:"bolder"}}>Hero Cup</h4></div></div>
                                <div className="match-box-mid">
                                    <div className="match-box-mid-left">
                                        <div className="box-mid-left-up"><h4 style={{color:"#a5a5a5"}}>BLOOMFIELD</h4></div>
                                        <div className="box-mid-left-mid"><img src={Team}></img></div>
                                        <div className="box-mid-left-down"><h5 >{item.our_score+"-"+item.our_wickets+" ("+item.our_overs+")"}</h5></div>
                                    </div>
                                    <div className="match-box-mid-mid">
                                        <div className="box-mid-mid-up"><h5 style={{color:"#a5a5a5"}}>{item.format}</h5></div>
                                        <div className="box-mid-mid-mid">VS</div>
                                        <div className="box-mid-mid-down"><h5 style={{color:"#a5a5a5"}}>{item.ground}</h5></div>
                                    </div>
                                    <div className="match-box-mid-right">
                                        <div className="box-mid-right-up"><h4 style={{color:"#a5a5a5"}}>{item.op_team_name}</h4></div>
                                        <div className="box-mid-right-mid"><img src={opTeam}></img></div>
                                        <div className="box-mid-right-down"><h5 >{item.op_score+"-"+item.op_wickets+" ("+item.op_overs+")"}</h5></div>
                                    </div>
                                </div>
                                <div className="match-box-down-1">
                                    <div className="match-box-down-1-left"><h5 style={{color:"#009270"}}>{item.our_score>item.op_score?"BLOOMFIELD won":item.op_team+" won"}</h5></div>
                                    <div className="match-box-down-1-right"><h5 style={{color:"#a5a5a5"}}>{item.date}</h5></div>
                                </div>
                                <div className="match-box-down">
                                    <Link to={"/Manager/MMatchDetails/"+item.match_id}>
                                        <Button variant="secondary">View</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* match card */}
                            <div className="gap-3"></div>
                            </>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}

                        </div>  
                        
                    </TabPane>
                
                </Tabs>
            </div>
          </div>
        </div>
      </div>
  );
  }
  
  export default MatchDetail;