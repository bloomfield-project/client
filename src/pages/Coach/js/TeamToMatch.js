import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
// import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import {fetchData} from '../../AuthServer' ;
import {useDispatch,useSelector} from 'react-redux'

import {useParams} from "react-router-dom"


function TeamToMatch() {
  const {id}=useParams();
  console.log(id)
  
  const [responseData, setResponseData] = useState([]);
  const [teamChanged, setTeamChanged] = useState([]);
  const [responseDatap, setResponseDatap] = useState([]);
  const [responseDataFuture, setResponseDataFuture] = useState([]);
  const [responseDataUnmarked, setResponseDataUnmarked] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url = "player/coach/getTeam";
  const Deleteurl = "player/coach/addTeamMatchesDet";
  const urlADD = "player/coach/addTeamToMatch";
  const future = "player/coach/future";
  const Unmarked = "player/coach/Unmarked";
  async function getData(url, Team = "") {
    const reqData = {
      match_id: id,
      team:Team
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if(url==="player/coach/getTeam"){setResponseData(response.data);}
        else if(url==="player/coach/addTeamMatchesDet"){setResponseDatap(response.data);}
        else if(url==="player/coach/future"){setResponseDataFuture(response.data);}
        else if(url==="player/coach/Unmarked"){setResponseDataUnmarked(response.data);}
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData(url);
    getData(Deleteurl);
    
  }, []);
  const dataupcomming = responseData.data;
  const dataupcommingp = responseDatap.data;
  const dataFuture=responseDataFuture.data
  const dataUnmarked=responseDataUnmarked.data
  console.log(dataupcomming);
  console.log(dataupcommingp);
  console.log(dataFuture);
  console.log(dataUnmarked);

  function selectedTeam(){
    console.log(teamChanged)
    getData(urlADD,teamChanged);
    // alert("Successfully added team to match")
    handleShow()
    // window.history.back() 
  }
  function changeTeam(e){
    e.preventDefault() 
    console.log(e.target.value)
    setTeamChanged(e.target.value)
  }
  console.log(teamChanged)
  
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
        <div className="body-container-2" >
          <div className="page-container-gray" style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className="l-back-r-title">
              <h1>Add a team to match</h1>
            </div>

            <div className="SessionDetails-content">
              <div style={{width:"100%" , display:"flex" , flexDirection:"column" , alignItems:"center"}}>
                <div className="o-u-t">
                  <div className="top-ic">Match ID :</div>
                  <div className="an-s-wer">M-{dataupcommingp?dataupcommingp[0].match_id:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Format :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].match_format:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Opposite Team :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].op_team_name:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Date :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].date:""}</div>
                </div>
                <div className="o-u-t">
                  <div className="top-ic">Ground :</div>
                  <div className="an-s-wer">{dataupcommingp?dataupcommingp[0].ground:""}</div>
                </div>
                <div className="o-u">
                  <div className="top-i">Team :</div>
                  <select onChange={changeTeam}  className="an-s-w" ons>
                    <option>--Select--</option>
                    {dataupcomming?dataupcomming?.map((item,i)=> <>
                      <option  value={item.team_id}>{item.name}</option>
                    </>):""}
                    
                  </select>
                  <Button onClick={selectedTeam} className="APS-Form-5-2" style={{marginLeft:"20px"}}>Save</Button>
                </div>

              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          // closeButton
          // style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title>  </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          
            <p
              style={{
                color: "#626d80",
                textAlign: "center",
                fontSize: "large",
                backgroundColor: "white",
                margin: "0",
              }}
            >
              {"Successfully added team to match"}
              {/* {edate} */}
            </p>
        
            
              

          {/* <h1>Render Count: {count.current}</h1> */}
        </Modal.Body>
        <Modal.Footer style={{ border: "none" }}>
          <Link to={ "/coach/matches" }>
            <button type="button" class="btn btn-success" onClick={()=>handleClose()}>
              OK
            </button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default TeamToMatch;