import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../../Manager/css/CricketRanking.css"
import "../../Manager/css/table.css"
import profpic from "../../../component/header/profpic.jfif"
import player from "../player.jpg"
import { Tabs } from 'antd';
import React from 'react';
import {useState,useEffect} from "react";
import {fetchData} from '../../AuthServer'  
import {useDispatch,useSelector} from 'react-redux'



const { TabPane } = Tabs;

function PlayerRankingList() {
    const loginData= useSelector(state => state.auth.data)
    const [responseData,setResponseData]=useState([]);
    const [ODI,setODI]=useState("table-tab-active")
    const [T20,setT20]=useState("table-tab")
    const [Test,setTest]=useState("table-tab")
    const [catgry,setCatgry]=useState(1)
    const [Format,setFormat]=useState("ODI")
    const onChange = (key) => {
        setODI("table-tab-active")
        setT20("table-tab")
        setTest("table-tab")
        setFormat("ODI")
        setCatgry(key)
        getData("ODI",key)
    };


    function getODI(){
        setODI("table-tab-active")
        setT20("table-tab")
        setTest("table-tab")
        setFormat("ODI")
            getData("ODI")
    }
    function getT20(){
        setT20("table-tab-active")
        setODI("table-tab")
        setTest("table-tab")
        setFormat("T20")
            getData("T20")
    }
    function getTest(){
        setTest("table-tab-active")
        setT20("table-tab")
        setODI("table-tab")
        setFormat("TEST")
            getData("TEST")
    }
    


    async function getData(format=Format,key=catgry){
        var catgry=key
        const reqData ={
          catagory:catgry,
          format:format,
          
        };
        const authRequest = {
        "method":"post",
        "url":"player/Ranking",
        "data":reqData
      }
      fetchData(authRequest).then((response)=>{
        setResponseData(response.data)
      }).catch(function(error){
        console.log(error);
      })
    }
    useEffect(() => {
        getData()
    }, [])
    const dataupcomming=responseData.data
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
                <h1>BLOOMFIELD Cricket Rankings</h1>
              </div>
             
                <div className="PplayerPreformanceBody">
                
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    <TabPane tab="Batting" key="1">
                    <div className="table-box-11">
                        <div className="table-tabs">
                            <button onClick={getODI} className={ODI}>ODI</button>
                            <button onClick={getT20} className={T20}>T20</button>
                            <button onClick={getTest} className={Test}>TEST</button>
                        </div>
                        <div className="tablee">
                                                  
                            <div className="table-head">
                                <div className="col-5-1">Position</div>
                                <div className="col-5-2">Player</div>
                                <div className="col-5-3">Avg</div>
                                <div className="col-5-4">SR</div>
                                <div className="col-5-5">Rating</div>
                            </div>
                            {dataupcomming!=[]?dataupcomming?.sort((a, b) => a.rating > b.rating ? -1 : 1).map((item,i)  => 
                              <><div key={i} className="table-row">
                                <div className="col-5-1">{i+1}</div>
                                {/* <div className="col-5-2"><img className="row-image" src={item.image!=""?item.image:profpic} alt=""></img><div style={{width: "80%", textAlign: "left", paddingTop:"10px"}}>{item.name}</div></div> */}
                                <div className="col-5-2"><img className="row-image" src={item.image!=""?item.image:player} alt=""></img><div style={{width: "80%", textAlign: "left", paddingTop:"10px"}}>{item.name}</div></div>
                                <div className="col-5-1">{item.avg}</div>
                                <div className="col-5-1">{item.sr}</div>
                                <div className="col-5-1">{item.rating}</div>

                              </div><hr></hr></>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
                            
                        </div>

                    </div>
                    </TabPane>
                    <TabPane tab="Bowling" key="2">
                    <div className="table-box-11">
                        <div className="table-tabs">
                            <button onClick={getODI} className={ODI}>ODI</button>
                            <button onClick={getT20} className={T20}>T20</button>
                            <button onClick={getTest} className={Test}>TEST</button>
                        </div>
                        <div className="tablee">
                            

                            <div className="table-head">
                                <div className="col-5-1">Position</div>
                                <div className="col-5-2">Player</div>
                                <div className="col-5-3">Econ</div>
                                <div className="col-5-4">Wkts</div>
                                <div className="col-5-5">Rating</div>
                            </div>
                            {dataupcomming!=[]?dataupcomming?.sort((a, b) => a.B_rating > b.B_rating ? -1 : 1).map((item,i)  => 
                              <><div key={i} className="table-row">
                                <div className="col-5-1">{i+1}</div>
                                {/* <div className="col-5-2"><img className="row-image" src={item.image!=""?item.image:profpic} alt=""></img><div style={{width: "80%", textAlign: "left", paddingTop:"10px"}}>{item.name}</div></div> */}
                                <div className="col-5-2"><img className="row-image" src={item.image!=""?item.image:player} alt=""></img><div style={{width: "80%", textAlign: "left", paddingTop:"10px"}}>{item.name}</div></div>
                                <div className="col-5-1">{item.econ}</div>
                                <div className="col-5-1">{item.b_wkts}</div>
                                <div className="col-5-1">{item.B_rating}</div>

                              </div><hr></hr></>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
                                                       
                        </div>

                    </div>
                    </TabPane>
                    <TabPane tab="All-rounders" key="3">
                    <div className="table-box-11">
                        <div className="table-tabs">
                            <button onClick={getODI} className={ODI}>ODI</button>
                            <button onClick={getT20} className={T20}>T20</button>
                            <button onClick={getTest} className={Test}>TEST</button>
                        </div>
                        <div className="tablee">
                            
                            <div className="table-head">
                                <div className="col-7-1">Position</div>
                                <div className="col-5-2">Player</div>
                                <div className="col-7-3">Avg</div>
                                <div className="col-7-4">SR</div>
                                <div className="col-7-5">Econ</div>
                                <div className="col-7-6">Wkts</div>
                                <div className="col-7-7">Rating</div>
                            </div>
                            {dataupcomming!=[]?dataupcomming?.sort((a, b) => a.A_rating > b.A_rating ? -1 : 1).map((item,i)  => 
                              <><div key={i} className="table-row">
                                <div className="col-7-1">{i+1}</div>
                                {/* <div className="col-5-2"><img className="row-image" src={item.image!=""?item.image:profpic} alt=""></img><div  style={{width: "80%", textAlign: "left", paddingTop:"10px"}}>{item.name}</div></div> */}
                                <div className="col-5-2"><img className="row-image" src={item.image!=""?item.image:player} alt=""></img><div  style={{width: "80%", textAlign: "left", paddingTop:"10px"}}>{item.name}</div></div>
                                <div className="col-7-3">{item.avg}</div>
                                <div className="col-7-4">{item.sr}</div>
                                <div className="col-7-5">{item.econ}</div>
                                <div className="col-7-6">{item.b_wkts}</div>
                                <div className="col-7-7">{item.A_rating}</div>

                              </div><hr></hr></>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
                                                       
                        </div>

                    </div>
                    </TabPane>
                </Tabs>
                </div>
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default PlayerRankingList;
