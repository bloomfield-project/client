import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};
=======
import { fetchData } from '../../AuthServer';
import { useSelector } from 'react-redux';
import axios from "axios";

let data_2 = [

  {
    sessionname: "vs SCC",
    space: " ",
    session: "Practice Match",
    date: '2022-05-11',
    time: "5.00 PM",
    btn: <Link to={"/coach/editPracticeSession"}><Button variant="secondary">View</Button></Link>,
  },

];
>>>>>>> 517665f382782abfe1dae4dda80a2c813025e8c5

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

<<<<<<< HEAD
=======
// const baseURL = "http://localhost:3001/api/coach/practiceSession/All";
>>>>>>> 517665f382782abfe1dae4dda80a2c813025e8c5


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
<<<<<<< HEAD
            <div className="tabs"  style={{justifyContent:"right"}}>
                
              
=======

            <div className="tabs">

              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"} > <a onClick={() => selectTab_1(1)}>All</a> {tabNumber === 1 ? <hr></hr> : ""}</h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"} ><a onClick={() => selectTab_2(1)} >Today</a>  {tabNumber === 2 ? <hr></hr> : ""}</h5>
              </div>
>>>>>>> 517665f382782abfe1dae4dda80a2c813025e8c5

              <div className="tabs-right" >
                <Link to="/coach/APS"><Button variant="outline-success">+ Add</Button></Link>
              </div>
<<<<<<< HEAD
                                
            </div>
            <div className="tabs-contain-box">
            <Tabs defaultActiveKey="1" onChange={onChange}>
                        
                  <TabPane tab="Today" key="1">

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
                            <div className="col-5-1" >PS-001</div>
                            <div className="col-5-2">Batting</div>
                            <div className="col-5-1">2022-01-01</div>
                            <div className="col-5-1">09.00</div>
                            <div className="col-5-1"><Link to="/coach/VPS"><Button variant="secondary">View</Button></Link></div>

                        
                        <hr></hr>
                      </div>
                    
                  </div>

                  </div>
                      
                  </TabPane>
                  <TabPane tab="Future" key="2">
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
            
=======

            </div>

            <hr></hr>

            <div className="table-box-1">

              <div className="tablee">

                <SearchTable
                  title={"mmvdmslvmlm"}
                  data={tabNumber === 2 ? data_1 : data_2}
                  columns={columns}
                  searching={true}
                  sort={false}
                  filter={false}
                  paging={true}
                  headerC={"#4a4a4a"}
                  headerH={"40px"}
                  headerFC={'white'}
                  headerFS={'1.2rem'}
                  headerFW={'500'}
                />

              </div>

            </div>
>>>>>>> 517665f382782abfe1dae4dda80a2c813025e8c5

          </div>

        </div>

      </div>

    </>

  );

}


export default Session;
