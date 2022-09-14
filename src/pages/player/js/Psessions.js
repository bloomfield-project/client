import React, {useState,useEffect} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import "../css/Table.css"
import SearchTable from "../../../component/Search/SearchTable";
import player from "../player.jpg"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import {fetchData} from '../../AuthServer'
import {useDispatch,useSelector} from 'react-redux'
import {getASession} from "../../../redux/actions/viewSessionAction"
import {useNavigate} from "react-router-dom"



function Session() {

  const dispatch = useDispatch()
  const history = useNavigate()


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  var thisMonth =yyyy+"-"+mm
  const[Month, setMonth]  = useState(thisMonth);
  const loginData= useSelector(state => state.auth.data)
  console.log(loginData.data.nic);
  console.log(loginData.data.user_id);
  const [responseData,setResponseData]=useState([]);
  async function getData(){
    

    const reqData ={
      user_id:loginData.data.user_id,
      month:Month,
      
    };
    const authRequest = {
    "method":"post",
    "url":"player/session",
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
  const dataupcomming=responseData.data
  const msgupcomming=responseData.success
  console.log(dataupcomming)
  console.log(msgupcomming)



  function setThisMonth(e){
    console.log(3);
    setMonth(e)
  }

  function getSessionForMonth(){
    getData()
  }



  function viewSession(num){
  alert(num)
    dispatch(getASession(num))
    history('/player/PSessionDetails')
  }
  


  
 
  console.log(Month);

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
            <div className="playerPreformanceBody" style={{marginTop : "0px"}}>
                
                
                      <div className="filter-by-date-G">
                        <label>Select month:</label>
                        <input type="month" id="start" name="start" min={thisMonth}  value={Month} className="filter-by-date-month"  onChange={e => setThisMonth(e.target.value)}></input>
                        <button className="Select-Button-G-G" onClick={getSessionForMonth}>Select</button>
                      </div>
                      <div className="table-box-11">
                        <div className="tablee"> 
                          
                            <div className="table-head">
                                <div className="col-51">Session ID</div>
                                <div className="col-51">Session</div>
                                <div className="col-51">Date</div>
                                <div className="col-51">Time</div>
                                <div className="col-51"></div>
                            </div>

                          
                            {msgupcomming!=0?dataupcomming?.map((item,i)  => 
                              <><div key={i} className="table-row">
                                <div className="col-51">PS-{item.session_id}</div>
                                <div className="col-51">{item.type}</div>
                                <div className="col-51">{item.date}</div>
                                <div className="col-51">{item.time}</div>
                                <div className="col-51"><button value={item.session_id} onClick={e => viewSession(e.target.value)}>View</button></div>
                          

                              </div><hr></hr></>
                            ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
          
                        </div>
                      
                      </div>
           </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Session;