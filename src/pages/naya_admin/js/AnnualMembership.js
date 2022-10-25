import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
const Axios = require("axios").default;

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};





function AnnualMembership() {
  const [tabNumber, setTabNumber] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [bgColour, setbgColour] = useState("transparent");
  const [editbtn, seteditbtn] = useState("block");
  const [savebtn, setsavebtn] = useState("none");

  const [GetPaid, setPaid] = useState(null);
  const [GetUnpaid, setUnpaid] = useState(null);
  const [amount, setAmount] = useState(null);
  
   function clickEdit(e){
    e.preventDefault()
    setIsDisabled(false)
    setbgColour("white")
    seteditbtn("none")
    setsavebtn("block")
   }

   function clickSave(e){
    e.preventDefault()
    setIsDisabled(true)
    setbgColour("transparent")
    seteditbtn("block")
    setsavebtn("none")
    console.log(e)
   }

   function postData(e){
    e.preventDefault()
    console.log(e.target[0].value)
    setIsDisabled(true)
    setbgColour("transparent")
    seteditbtn("block")
    setsavebtn("none")
   }

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/payment/paid").then((res) => {
      setPaid(res.data.data);
      // console.log(res.data.data);
    });
  }, []);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/payment/amount").then((res) => {
      setAmount(res.data.data);
      // console.log(res.data.data);
    });
  }, []);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/payment/unpaid").then(
      (res) => {
        setUnpaid(res.data.data);
        // console.log(res.data.data);
      }
    ); 
  }, []);

  const selectTab_1 = () => {
    setTabNumber(1);
    // console.log(tabNumber + "selectTab 1");
  };
  const selectTab_2 = () => {
    setTabNumber(2);
    // console.log(tabNumber + "selectTab 2");
  };
  if (!GetUnpaid) return null;
  if (!GetPaid) return null;
  if (!amount) return null;
  console.log(GetUnpaid)
  console.log(GetPaid)
  console.log(amount[0].amount)

  const amnt=amount[0].amount

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
            {/* <div > */}
            <div className="title">
              <h1>Annual Membership</h1>
            </div>
            <div style={{ width: "90%",display:"flex" , margin:"15px 0 15px 0px" }}>
              {" "}
              <label style={{ fontSize:"x-large", width: "25%" }}>
                Membership Fee :  Rs. 
              </label>{" "}
              <form style={{margin:"0", display:"flex"}} onSubmit={postData}>
                <input type="number" disabled={isDisabled} defaultValue={amnt?amnt:0} style={{ backgroundColor:{bgColour}, border:"none",fontSize:"x-large", width: "200px" ,marginRight: "50px" }}/>
                <button style={{display:editbtn}} type="submit" class="btn btn-success" onClick={clickEdit}>
                  Edit
                </button>{" "}
                <button style={{display:savebtn}} type="submit" class="btn btn-success" >
                  Save
                </button>{" "}
              </form>
              
            </div>

            
                <div className="tabs-contain-box">
                <Tabs defaultActiveKey="1" onChange={onChange}>
                        
                        <TabPane tab="Paid" key="1">

                        <div className="matches-container-outer-box">
                        
                            <div className="tablee" style={{width: "100%"}}>
                                <div className="table-head" >
                                    <div className="coll-4-1" style={{width: "18%"}}>Year</div>
                                    <div className="coll-4-1" style={{width: "18%"}}>Player ID</div>
                                    <div className="coll-4-11">Player</div>
                                    <div className="coll-4-1">Payment Date</div>
                                    <div className="coll-4-1">Amount</div>
                                </div>
                                <div className="table-row">
                                    <div className="coll-4-1" style={{width: "18%"}}>2022</div>
                                    <div className="coll-4-1" style={{width: "18%"}}>BF-001</div>
                                    <div className="coll-4-11">Gihan Weerasinghe</div>
                                    <div className="coll-4-1">2022-02-11</div>
                                    <div className="coll-4-1">Rs.6000.00</div> 
                                </div>
                                <hr></hr>
                        
                                
                            </div>

                        </div>
                            
                        </TabPane>
                        <TabPane tab="All" key="2">
                        <div className="matches-container-outer-box">
                        
                        <div className="tablee">
                                <div className="table-head" >
                                    <div className="coll-4-1" style={{width: "18%"}}>Year</div>
                                    <div className="coll-4-1" style={{width: "18%"}}>Player ID</div>
                                    <div className="coll-4-11">Player</div>
                                    <div className="coll-4-1">Payment Date</div>
                                    <div className="coll-4-1">Amount</div>
                                </div>
                                <div className="table-row">
                                    <div className="coll-4-1" style={{width: "18%"}}>2022</div>
                                    <div className="coll-4-1" style={{width: "18%"}}>BF-001</div>
                                    <div className="coll-4-11">Gihan Weerasinghe</div>
                                    <div className="coll-4-1">2022-02-11</div>
                                    <div className="coll-4-1">Rs.6000.00</div> 
                                </div>
                                <hr></hr>
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

export default AnnualMembership;
