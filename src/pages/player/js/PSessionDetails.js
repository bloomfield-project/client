import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import "../../player/css/PSessionDetails.css"
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import {fetchData} from '../../AuthServer'
import React, {useState,useEffect} from "react";


function PSessionDetails() {
  const sessionId= useSelector(state => state.getsession.data)
  const [responseData,setResponseData]=useState([]);
  const [responseC,setResponseC]=useState([]);
  console.log(sessionId)
  
  async function getData(){
    const reqData ={
      session_id:sessionId,
    };
    const authRequest = {
    "method":"post",
    "url":"player/sessionDetails",
    "data":reqData
    }
    fetchData(authRequest).then((response)=>{
      setResponseData(response.data)
      console.log(response.data);
    }).catch(function(error){
      console.log(error);
    })
  }
  async function getData2(){
    const reqData ={
      session_id:sessionId,
    };
    const authRequest = {
    "method":"post",
    "url":"player/sessionCoaches",
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
  
  console.log(responseData);
  console.log(responseC);
  const successP=responseData.success
  const successC=responseC.success
  const players=responseData.data
  const coaches=responseC.data
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
                <h1>Practice Session Details</h1>
            </div>
            
            <div className="SessionDetails-content">
            
                <div className="SessionDetails-inn-box">
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Title</div>
                      <div className="SessionDetails-row-down">{players ? players[0].type :""}</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Date</div>
                      <div className="SessionDetails-row-down">{players ? players[0].date :""}</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Time</div>
                      <div className="SessionDetails-row-down">{players ? players[0].time :""}</div>
                    </div>
                    

                    <span className="gap"></span>
                    

                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Caoches</div>
                      <hr style={{width: "95%" , marginTop: "0px"}}></hr>

                      {successC==1?coaches?.map((item,i)  => 
                        <>
                          <div className="SessionDetails-row-down">{item.name}</div>
                        </>
                      ):<h6 style={{ height : "200px"}}>NO Caoches to display</h6>}
                      
                    </div>

                    <span className="gap"></span>

                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Players</div>
                      <hr style={{width: "95%" , marginTop: "0px"}}></hr>
                      
                       
                          <div className="SessionDetails-row-down">
                            <div className="s-r-d-left">{"BC-5"}</div><div className="s-r-d-right">{"Kasun Sandakelum"}</div></div>
                            <div className="SessionDetails-row-down">
                            <div className="s-r-d-left">{"BC-8"}</div><div className="s-r-d-right">{"Thushara Sampath"}</div></div>
                            <div className="SessionDetails-row-down">
                            <div className="s-r-d-left">{"BC-9"}</div><div className="s-r-d-right">{"Kasun Perera"}</div></div>
                            <div className="SessionDetails-row-down">
                            <div className="s-r-d-left">{"BC-10"}</div><div className="s-r-d-right">{"Nalaka Kelum"}</div></div>
                            <div className="SessionDetails-row-down">
                            <div className="s-r-d-left">{"BC-11"}</div><div className="s-r-d-right">{"Sasindu Sandeepa"}</div></div>
                            <div className="SessionDetails-row-down">
                            <div className="s-r-d-left">{"BC-12"}</div><div className="s-r-d-right">{"Prasad Thushara"}</div></div>
                            <div className="SessionDetails-row-down">
                            <div className="s-r-d-left">{"BC-13"}</div><div className="s-r-d-right">{"Bhashitha Thathsara"}</div></div>
                    </div>
                    <div className="match-box-down">
                      <Link to={"/player/PSession"}>
                        <Button variant="secondary"> Back </Button>
                      </Link>
                
                  </div>
                </div>

            </div>


        </div>
      </div>
      
      
    </div>
);
}

export default PSessionDetails;