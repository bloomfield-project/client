import React, { useState,useEffect } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import {fetchData} from '../../AuthServer'
import {useDispatch,useSelector} from 'react-redux'
import {getAEvent} from "../../../redux/actions/viewSessionAction"
import {useNavigate} from "react-router-dom"





const { TabPane } = Tabs;


function PEvents() {
  const dispatch = useDispatch()
  const history = useNavigate()


  const [tabNumber, setTabNumber] = useState(1);

  function viewSession(num){
    alert(num)
      dispatch(getAEvent(num))
      history('/player/EventDetails')
    }


  const onChange = (key) => {
    console.log(key);
    setTabNumber(key)
  };




  const [responseDataE,setResponseDataE]=useState([]);
  const [responseDataC,setResponseDataC]=useState([]);
  async function getData(url,num){
    

    const reqData ={
      
      
    };
    const authRequest = {
    "method":"post",
    "url":url,
    "data":reqData
  }
  fetchData(authRequest).then((response)=>{
    if(num===1)setResponseDataC(response.data)
    else if(num===2)setResponseDataE(response.data)
    
  }).catch(function(error){
    console.log(error);
  })
  }

  useEffect(() => {
    getData("player/counceling",1)
}, [])
useEffect(() => {
    getData("player/events",2)
}, [])


console.log(responseDataE.success)
console.log(responseDataC.success)

const msgE=responseDataE.success
const msgC=responseDataC.success

const dataE=responseDataE.data
const dataC=responseDataC.data



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
              <h1>{tabNumber == 1 ? "Counseling Sessions" : "Events"}</h1>
            </div>
            {/* <div className="tabs">
              
              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"}>
                  {" "}
                  <a onClick={() => selectTab_1(1)}>Couceling</a>{" "}
                  {tabNumber === 1 ? <hr></hr> : ""}
                </h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"}>
                  <a onClick={() => selectTab_2(2)}> Events</a>{" "}
                  {tabNumber === 2 ? <hr></hr> : ""}
                </h5>
              </div>

              <div className="tabs-right">
                
              </div>
            </div> */}
            <div className="playerPreformanceBody">
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    
                    <TabPane tab="Counseling Sessions" key="1">
                      <div className="table-box-11">
                        <div className="tablee">
                        <div className="table-head">
                                <div className="col-51">Session Name</div>
                                <div className="col-51">Mentor</div>
                                <div className="col-51">Date</div>
                                <div className="col-51">Time</div>
                                <div className="col-51">Place</div>
                            </div>

                          
                            {msgC!=0?dataC?.map((item,i)  => 
                              <><div key={i} className="table-row">
                                <div className="col-51">{item.title}</div>
                                <div className="col-51">{item.mentor_details+". "+item.mentor}</div>
                                <div className="col-51">{item.date}</div>
                                <div className="col-51">{item.time}</div>
                                <div className="col-51">{item.place}</div>
                                {/* <div className="col-51"><button value={item.session_id} onClick={e => viewSession(e.target.value)}>View</button></div> */}
                          

                              </div><hr></hr></>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}

                        </div>
                      </div>
                        
                    </TabPane>
                    <TabPane tab="Events" key="2">
                      <div className="table-box-11">
                        <div className="tablee">
                          <div className="table-head">
                                <div className="col-51" style={{width: "25%"}}>Title</div>
                                <div className="col-51" style={{width: "25%"}}>Date</div>
                                <div className="col-51" style={{width: "25%"}}>Time</div>
                                <div className="col-51" style={{width: "25%"}}></div>
                                
                            </div>

                          
                            {msgE!=0?dataE?.map((item,i)  => 
                              <><div key={i} className="table-row">
                                <div className="col-51">{item.event_name}</div>
                                <div className="col-51">{item.date}</div>
                                <div className="col-51">{item.time}</div>
                                <div className="col-51"><button value={item.event_id} onClick={e => viewSession(e.target.value)}>View</button></div>
                          

                              </div><hr></hr></>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
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

export default PEvents;