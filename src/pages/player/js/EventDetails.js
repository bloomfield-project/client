import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css"
import Button from "react-bootstrap/Button";
import React, { useState,useEffect } from "react";
import {fetchData} from '../../AuthServer'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from "react-router-dom";

function EventDetails() {
  const eventId= useSelector(state => state.getsession.data)
  console.log(eventId)
  const [responseData,setResponseData]=useState([]);
  async function getData(){
    const reqData ={
      eventId:eventId,
    };
    const authRequest = {
    "method":"post",
    "url":"player/eventDetails",
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

  
  const dataE=responseData.data;
  dataE?console.log(dataE):console.log("dataE")
  

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
                <h1>Event Details</h1>
            </div>
            
            <div className="SessionDetails-content">
            
                <div className="SessionDetails-inn-box">
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Title</div>
                      <div className="SessionDetails-row-down">{dataE ? dataE[0].event_name :""}</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Date</div>
                      <div className="SessionDetails-row-down">{dataE ? dataE[0].date :""}</div>
                    </div>
                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Time</div>
                      <div className="SessionDetails-row-down">{dataE ? dataE[0].time :""}</div>
                    </div>

                    {/* <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Place</div>
                      <div className="SessionDetails-row-down">{dataE ? dataE.place :""}</div>
                    </div> */}

                    <div className="SessionDetails-row">
                      <div className="SessionDetails-row-up">Description</div>
                      <div className="fdbck-container" style={{width:"90%"}}>
                        <p style={{textAlign:"left" , width:"95%"}}>{dataE ? dataE[0].description :""}</p>
                      </div>
                    </div>
                    <div className="match-box-down"><Link to={'/player/PEvents'}><Button  variant="secondary"> Back </Button></Link></div>
                </div>

            </div>
         </div>
      </div>
      
      
    </div>
);
}

export default EventDetails;