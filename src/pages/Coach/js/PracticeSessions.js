import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { fetchData } from '../../AuthServer';
import { useSelector } from 'react-redux';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

function Session() {

  const loginData = useSelector(state => state.auth.data)
  const id = loginData.data.user_id

  const [responseData, setResponseData] = useState([]);
  const [responseData2, setResponseData2] = useState([]);
  const [responseData3, setResponseData3] = useState([]);

  const url = "coach/getOldSession";
  const url_up = "coach/upCommingSessions";
  const url_marked_completed = "coach/getOldCompletedMarkedSessions";

  async function getData(url, method) {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today)

    const reqData = {
      date: today,
      user_id: id,
    };

    const authRequest = {
      "method": method,
      "url": url,
      "data": reqData
    }

    fetchData(authRequest).then((response) => {
      if (url === "coach/getOldSession") { setResponseData(response.data) }
      else if (url === "coach/upCommingSessions") { setResponseData2(response.data) }
      else if (url === "coach/getOldCompletedMarkedSessions") { setResponseData3(response.data) }

    }).catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() => {
    getData(url, "post")
    getData(url_up, "post")
    getData(url_marked_completed, "post")
  }, [])

  const pastSessions = responseData.data
  const pastSessions_marked = responseData3.data
  const upcommingSessions = responseData2.data

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

            <div className="tabs" style={{ justifyContent: "right" }}>
              <div className="tabs-right" >
                <Link to="/coach/APS"><Button variant="outline-success">+ Add</Button></Link>
              </div>
            </div>

            <div className="tabs-contain-box">

              <Tabs defaultActiveKey="1" onChange={onChange}>

                <TabPane tab="Unmarked Completed" key="1">

                  <div className="matches-container-outer-box">

                    <div className="tablee" style={{ width: "100%" }}>
                      <div className="table-head">
                        <div className="col-5-1">Session ID</div>
                        <div className="col-5-2">Session</div>
                        <div className="col-5-3">Date</div>
                        <div className="col-5-4">Time</div>
                        <div className="col-5-5">Action</div>
                      </div>
                      {pastSessions ? pastSessions.map((item, i) => <>
                        <div className="table-row">
                          <div className="col-5-1" >PS-{item.session_id}</div>
                          <div className="col-5-2">{item.type}</div>
                          <div className="col-5-1">{item.date}</div>
                          <div className="col-5-1">{item.time}</div>
                          <div className="col-5-1"><Link to={"/coach/VPS/" + item.session_id}><Button variant="secondary">View</Button></Link></div>

                        </div>
                        <hr></hr></>) : ""}

                    </div>

                  </div>
                </TabPane>

                <TabPane tab="Marked Completed" key="2">

                  <div className="matches-container-outer-box">

                    <div className="tablee" style={{ width: "100%" }}>
                      <div className="table-head">
                        <div className="col-5-1">Session ID</div>
                        <div className="col-5-2">Session</div>
                        <div className="col-5-3">Date</div>
                        <div className="col-5-4">Time</div>
                        <div className="col-5-5">Action</div>
                      </div>
                      {pastSessions_marked ? pastSessions_marked.map((item, i) => <>
                        <div className="table-row">
                          <div className="col-5-1" >PS-{item.session_id}</div>
                          <div className="col-5-2">{item.type}</div>
                          <div className="col-5-1">{item.date}</div>
                          <div className="col-5-1">{item.time}</div>
                          <div className="col-5-1"><Link to="#"><Button variant="secondary">View</Button></Link></div>

                        </div>
                        <hr></hr></>) : ""}

                    </div>

                  </div>
                </TabPane>

                <TabPane tab="Upcoming" key="3">
                  <div className="matches-container-outer-box">

                    <div className="tablee" style={{ width: "100%" }}>
                      <div className="table-head">
                        <div className="col-5-1">Session ID</div>
                        <div className="col-5-2">Session</div>
                        <div className="col-5-3">Date</div>
                        <div className="col-5-4">Time</div>
                        <div className="col-5-5">Action</div>
                      </div>
                      {upcommingSessions ? upcommingSessions.map((item, i) => <>
                        <div className="table-row">
                          <div className="col-5-1" >PS-{item.session_id}</div>
                          <div className="col-5-2">{item.type}</div>
                          <div className="col-5-1">{item.date}</div>
                          <div className="col-5-1">{item.time}</div>
                          <div className="col-5-1"><Link to={"/coach/editPracticeSession/" + item.session_id}><Button variant="secondary">View</Button></Link></div>

                        </div>
                        <hr></hr></>) : ""}

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
