import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

import {fetchData} from '../../AuthServer' ;


const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};




const data_1 = [

  {
      sessionname: "vs SCC",
      space: " ",
      session: "Practice Match",
      date: '2022-05-11',
      time: "5.00 PM",
      btn: <Link to={"/coach/VPS"}><Button variant="secondary">View</Button></Link>,
  },

];

const columns = [

  {
    title: "Session Name",
    field: 'sessionname',
  },
  {
    title: "Session",
    field: "session",
  },
  {
    title: "Date",
    field: "date",
  },
  {
    title: "Time",
    field: "time",
  },
  {
    title: "",
    field: "btn",
  }

];




function Session() {

  // const loginData = useSelector(state => state.auth.data);
  // console.log(loginData.data.user_id);
  const [tabNumber, setTabNumber] = useState(1);

  // const [postp, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.post(`${baseURL}`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // function createPost() {
  //   axios
  //     .postp(baseURL, {
  //       id: loginData.data.user_id
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // if (!postp) return "No post!"

  // console.log(postp);

  // const [responseDataToday, setResponseDataToday] = useState([]);
  // const [responseDataAll, setResponseDataAll] = useState([]);

  // let today = new Date();
  // let dd = String(today.getDate()).padStart(2, '0');
  // let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // let yyyy = today.getFullYear();
  // today = yyyy + '-' + mm + '-' + dd;


  // async function getData(url, num) {

  //   const reqData = {
  //     id: loginData.data.user_id,
  //   };


  //   const authRequest = {
  //     "method": "post",
  //     "url": url,
  //     "data": reqData
  //   }

  //   fetchData(authRequest).then((response) => {
  //     if (num === 1) setResponseDataToday(response.data)
  //     else if (num === 2) setResponseDataAll(response.data)
  //   }).catch(function (error) {
  //     console.log(error);
  //   })

  // }

  // useEffect(() => {
  //   getData("coach/practiceSession/Today", 1)
  // }, [])

  // useEffect(() => {
  //   getData("coach/practiceSession/All", 2)
  // }, [])


  // const todayS = responseDataToday.data;
  // const allS = responseDataAll.data;

  // console.log("aa", todayS);
  // console.log("bb", allS);

  // console.log("accc", todayS[0]["session_id"]);
  // console.log("fvmfkvkm", todayS.length);

  // console.log(data_1)


  // {for (let i = 0; i < todayS.length; i++) {
  //   data_1[i] = {
  //     sessionname: todayS[i]["session_id"],
  //     session:todayS[i]["session_id"],
  //     date:todayS[i]["session_id"],
  //     time:todayS[i]["session_id"],
  //   }
  // }}

    const [responseData,setResponseData]=useState([]);
    const url= "manager/getOldSession"
    async function getData(url,method){
        
        const reqData ={
            date:"2022-10-26",
        };
        const authRequest = {
        "method":method,
        "url":url,
        "data":reqData
      }
      fetchData(authRequest).then((response)=>{
            setResponseData(response.data)
        
      }).catch(function(error){
        console.log(error);
      })
    }
    useEffect(() => {
        getData(url,"get")
    }, [])
    const dataupcomming=responseData.data
    console.log(dataupcomming)



  const selectTab_1 = () => {
    setTabNumber(1);
  }

  const selectTab_2 = () => {
    setTabNumber(2);
  }

  // {
  //   setResponseDataToday.data.map((item, i) => (
  //     data_1[i] = {
  //       sessionname: item.session_id,
  //     }
  //   ))
  // }

  // console.log(data_1)


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
              <h1>Practice Sessions</h1>
            </div>

            <div className="tabs"  style={{justifyContent:"right"}}>
                
              



              <div className="tabs-right" >
                <Link to="/coach/APS"><Button variant="outline-success">+ Add</Button></Link>
              </div>

                                
            </div>
            <div className="tabs-contain-box">
            <Tabs defaultActiveKey="1" onChange={onChange}>
                        
                  <TabPane tab="Completed" key="1">

                  <div className="matches-container-outer-box">
                 
                  
                      <div className="tablee" style={{width:"100%"}}> 
                        <div className="table-head">
                            <div className="col-5-1">Session ID</div>
                            <div className="col-5-2">Session</div>
                            <div className="col-5-3">Date</div>
                            <div className="col-5-4">Time</div>
                            <div className="col-5-5"></div>
                        </div>
                        {dataupcomming?dataupcomming.map((item,i)=><>
                        <div  className="table-row">
                            <div className="col-5-1" >PS-{item.c_session_id}</div>
                            <div className="col-5-2" style={{textAlign:"left", justifyContent:"left", paddingLeft:"40px"}}>{item.title}</div>
                            <div className="col-5-1">{item.date}</div>
                            <div className="col-5-1">{item.time}</div>
                            <div className="col-5-1"><Link to={"/coach/VPS/"+item.c_session_id}><Button variant="secondary">View</Button></Link></div>

                        
                        
                      </div>
                      <hr></hr></> ):""}
                    
                  </div>

                  </div>
                      
                  </TabPane>
                  <TabPane tab="UPcomming" key="2">
                  <div className="matches-container-outer-box">
                  
                  
                      <div className="tablee" style={{width:"100%"}}> 
                        <div className="table-head">
                            <div className="col-5-1">Session ID</div>
                            <div className="col-5-2">Session</div>
                            <div className="col-5-3">Date</div>
                            <div className="col-5-4">Time</div>
                            <div className="col-5-5"></div>
                        </div>
                        <div  className="table-row">
                            <div className="col-5-1">PS-001</div>
                            <div className="col-5-2">Batting</div>
                            <div className="col-5-1">2022-01-01</div>
                            <div className="col-5-1">09.00</div>
                            <div className="col-5-1"><a href="/coach/editPracticeSession"><button>View</button></a></div>

                        
                        <hr></hr>
                      </div>
                    
                  </div>

                  </div>
                      
                  </TabPane>
              
          </Tabs>
          </div>
            



          </div>

        </div>

      </div>

    </>

  );

}


export default Session;
