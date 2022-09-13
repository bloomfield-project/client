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
    }).catch(function(error){
      console.log(error);
    })
  }

  useEffect(() => {
    getData()
  }, [])
  
  console.log(responseData);
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
                      <div className="SessionDetails-row-down">Session-01</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Date</div>
                      <div className="SessionDetails-row-down">2022-Oct-21</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Time</div>
                      <div className="SessionDetails-row-down">09.00 AM</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Player category</div>
                      <div className="SessionDetails-row-down">Under 19</div>
                    </div>

                    <span className="gap"></span>

                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Caoches</div>
                      <hr style={{width: "95%" , marginTop: "0px"}}></hr>
                      <div className="SessionDetails-row-down">Kamal Weerasinghe</div>
                      <div className="SessionDetails-row-down">Gihan De silva</div>
                      <div className="SessionDetails-row-down">Udesh Perera</div>
                    </div>

                    <span className="gap"></span>

                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Players</div>
                      <hr style={{width: "95%" , marginTop: "0px"}}></hr>
                      <div className="SessionDetails-row-down"><div className="s-r-d-left">BF-001</div><div className="s-r-d-right">Sahan Rishitha</div></div>
                      <div className="SessionDetails-row-down"><div className="s-r-d-left">BF-002</div><div className="s-r-d-right">Gihan Weerasinghe</div></div>
                      <div className="SessionDetails-row-down"><div className="s-r-d-left">BF-003</div><div className="s-r-d-right">Amal perera</div></div>
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