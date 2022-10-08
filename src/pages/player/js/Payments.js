import React, {useState,useEffect} from "react";
import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../../Manager/css/CricketRanking.css"
import "../../Manager/css/table.css"
import profpic from "../../../component/header/profpic.jfif"
import { Tabs } from 'antd';
import {fetchData} from '../../AuthServer'  
import {useDispatch,useSelector} from 'react-redux'





const { TabPane } = Tabs;




const onChange = (key) => {
    console.log(key);
  };

function Payments() {
  const loginData= useSelector(state => state.auth.data)
  console.log(loginData.data.user_id)

  const [responseData,setResponseData]=useState([]);
  async function getData(){
    

    const reqData ={
      user_id:loginData.data.user_id,
      
    };
    const authRequest = {
    "method":"post",
    "url":"player/payments",
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
  const payment=responseData.data
  const paymentMsg=responseData.success
  console.log(payment)
  console.log(paymentMsg)


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
                <h1>Payments</h1>
              </div>
              {/* <div className="tabs">
                <h5 className="tab-active">Batting<hr></hr></h5>
                <h5 className="tab">Balling</h5>
                <h5 className="tab">All-rounders</h5>
              </div> */}
                
                    <div className="Payments-table-box-1">
                        
                        <div className="tablee">
                            <div className="table-head">
                                <div className="coll-4-11">Year</div>
                                <div className="coll-4-11">Payment Date</div>
                                <div className="coll-4-1">Time</div>
                                <div className="coll-4-1">Amount</div>
                            </div>
                            
                            {paymentMsg!=0?payment?.map((item,i)  => 
                              <><div className="table-row">
                              <div className="coll-4-11">{item.year}</div>
                              <div className="coll-4-11">{item.date}</div>
                              <div className="coll-4-1">{item.time}</div>
                              <div className="coll-4-1">{item.total_amount} (LKR)</div>
                              
                              </div>
                              <hr></hr></>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
                            
                        </div>

                    </div>
                    
                
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default Payments;