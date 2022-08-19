import Header from "../../../component/header/Header"
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../../Manager/css/CricketRanking.css"
import "../../Manager/css/table.css"
import profpic from "../../../component/header/profpic.jfif"
import { Tabs } from 'antd';
import React from 'react';



const { TabPane } = Tabs;




const onChange = (key) => {
    console.log(key);
  };

function Payments() {
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
                                <div className="coll-4-1">Amount</div>
                                <div className="coll-4-1">Status</div>
                            </div>
                            <div className="table-row">
                                <div className="coll-4-11">2022</div>
                                <div className="coll-4-11">2022-Jul-25</div>
                                <div className="coll-4-1">8000.00 (LKR)</div>
                                <div className="coll-4-1">Paid</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="coll-4-11">2021</div>
                                <div className="coll-4-11">2021-Aug-25</div>
                                <div className="coll-4-1">5000.00 (LKR)</div>
                                <div className="coll-4-1">Paid</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="coll-4-11">2020</div>
                                <div className="coll-4-11">2020-Jan-25</div>
                                <div className="coll-4-1">3000.00 (LKR)</div>
                                <div className="coll-4-1">Paid</div>
                                
                            </div>
                            <hr></hr>
                            <div className="table-row">
                                <div className="coll-4-11">2019</div>
                                <div className="coll-4-11">2019-Feb-01</div>
                                <div className="coll-4-1">3000.00 (LKR)</div>
                                <div className="coll-4-1">Paid</div>
                                
                            </div>
                            
                        </div>

                    </div>
                    
                
          </div>
        </div>
        
        
      </div>
  );
  }
  
  export default Payments;