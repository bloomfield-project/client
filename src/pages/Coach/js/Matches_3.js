import React from "react";
import Header from "../../../component/header/Header";
import Button from "react-bootstrap/Button";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MatchesTeams from "../../../component/MatchesTeams/MatchesTeams";
import "../css/Matches_3.css";
import "../../Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../../../component/NavigationBar/Navbar";
import Team from "../../../component/MatchesTeams/Team.png";
import opTeam from "../../../component/MatchesTeams/opTeam.jpg";
import {useEffect , useState} from "react";
import {fetchData} from '../../AuthServer' ;
import {useParams} from "react-router-dom"
import E from "react-script";
function Macthes_3() {
    const {id,Tid}=useParams();
    console.log(id)
    const [responseData,setResponseData]=useState([]);
    const [responseData_p,setResponseData_p]=useState([]);
    const [responseData_p_marked,setResponseData_p_marked]=useState([]);
    const [check_op,setcheck_op]=useState("block");
    const [playerset,setplayerset]=useState("none");
    const [Errmsg,setErrmsg]=useState("none");


    const url= "player/coach/unmarked_data"
    const url_p= "player/coach/unmarked_players"
    const url_p_marked= "player/coach/unmarked_players_marked"
    const check_op_score = "player/coach/check_op_score"
    const score_update = "player/coach/score_update"


  async function getData2(url,total_score,wickets,overs){
      console.log(total_score)
      console.log(wickets)
      console.log(overs)
        
      const reqData ={
          match_id:id,
          team_id:Tid,
          total:total_score,
          wiclets:wickets,
          overs:overs,
      };
      const authRequest = {
      "method":"post",
      "url":url,
      "data":reqData
    }
    fetchData(authRequest).then((response)=>{
        console.log(response.data)
        window.location.reload()
    }).catch(function(error){
      console.log(error);
    })
  }




    async function getData(url,Team=""){
        
        const reqData ={
            match_id:id,
            team_id:Tid,
        };
        const authRequest = {
        "method":"post",
        "url":url,
        "data":reqData
      }
      fetchData(authRequest).then((response)=>{
            if(url==="player/coach/unmarked_data"){setResponseData(response.data)}
            if(url==="player/coach/unmarked_players"){setResponseData_p(response.data)}
            if(url==="player/coach/unmarked_players_marked"){setResponseData_p_marked(response.data)}
            if(url==="player/coach/check_op_score"){
              console.log(response.data[0].op_score)
              if(response.data[0].op_score==0||response.data[0].op_overs==0){
                  setcheck_op("block")
                  setplayerset("none")
              }
              else{
                setcheck_op("none")
                setplayerset("block")
              }
            }
        
      }).catch(function(error){
        console.log(error);
      })
    }

    useEffect(() => {
        getData(url)
        getData(url_p)
        getData(url_p_marked)
        getData(check_op_score)
    }, [])


    const dataupcomming=responseData.data
    const dataupcomming_p = responseData_p.data
    const dataupcomming_p_marked = responseData_p_marked.data
    // const datacheck_op=check_op.data
    console.log(dataupcomming)
    console.log(dataupcomming_p)
    console.log(dataupcomming_p_marked)
    // console.log(datacheck_op)
  
    function backk(){
      window.history.back()
    }

    function update_op_marks(e){
      e.preventDefault();
      const total_score=e.target[0].value
      const wickets=e.target[1].value
      const overs=e.target[2].value
      if(total_score==""&&wickets==""&&overs==""){
        setErrmsg("block")
      }
      else{
        getData2(score_update,total_score,wickets,overs)
        getData(check_op_score)
      }
    }

    // var format_overs=200
    // if(dataupcomming[0].format=="T20"){
    //   format_overs=20
    // }
    // else if(dataupcomming[0].format=="ODI"){
    //   format_overs=50
    // }

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
            <div className="l-back-r-title">
              <div className="l-back-r-title-icon">
                <button onClick={backk} style={{backgroundColor:"transparent",border:"none"}} to={"/coach/matches"}>
                  <IoChevronBackCircleOutline
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                  />
                </button>
              </div>

              <h1>Matches</h1>
            </div>
            <div className="matchesD-container-outer-box">
              <div className="M3-main-container">
                <div className="M3-main-container-1">
                  {/* <MatchesTeams
                    btns=""
                    wonornot="BLOOMFIELD won by 7 wkts"
                    left="Starts at 09.30"
                    middle="R.Premadasa Stadium"
                    right="2022 Oct 16"
                  /> */}
                  {/* llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll */}
                  <div className="matche-container-outer-box">
                    <div className="match-box-up">
                      <div className="go-out">
                        <h4
                          style={{
                            color: "#009270",
                            fontSize: "2rem",
                            fontWeight: "bolder",
                          }}
                        >
                          Hero Cup
                        </h4>
                      </div>
                    </div>
                    <div className="match-box-mid">
                      <div className="match-box-mid-left">
                        <div className="box-mid-left-up">
                          <h4 style={{ color: "#a5a5a5" }}>BLOOMFIELD</h4>
                        </div>
                        <div className="box-mid-left-mid">
                          <img src={Team}></img>
                        </div>
                        <div className="box-mid-left-down">
                          <h5 style={{ color: "#a5a5a5" }}>Starts at {dataupcomming?dataupcomming[0].time:""}</h5>
                        </div>
                      </div>
                      <div className="match-box-mid-mid">
                        <div className="box-mid-mid-up">
                          <h5 style={{ color: "#a5a5a5" }}>{dataupcomming?dataupcomming[0].format:""}</h5>
                        </div>
                        <div className="box-mid-mid-mid">VS</div>
                        <div className="box-mid-mid-down">
                          <h5 style={{ color: "#a5a5a5" }}>{dataupcomming?dataupcomming[0].ground:""}</h5>
                        </div>
                      </div>
                      <div className="match-box-mid-right">
                        <div className="box-mid-right-up">
                          <h4 style={{ color: "#a5a5a5" }}>{dataupcomming?dataupcomming[0].op_team_name:""}</h4>
                        </div>
                        <div className="box-mid-right-mid">
                          <img src={opTeam}></img>
                        </div>
                        <div className="box-mid-right-down">
                          <h5 style={{ color: "#a5a5a5" }}>{dataupcomming?dataupcomming[0].date:""}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="match-box-down">
                      <Container>
                        <Row>
                          <Col className="match-box-down-1">
                            
                          </Col>
                          {/* <Col className="match-box-down-2">
                            {condition ? (
                              <h4>{props.btns}</h4>
                            ) : (
                              <Button bsStyle="success">VIEW</Button>
                            )}
                          </Col> */}
                        </Row>
                      </Container>
                    </div>
                  </div>
                </div>
                {/* llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll */}
                {/* <div className="gap-3"></div> */}
                <form onSubmit={update_op_marks} className="M3-main-container-2" style={{display:check_op}}>
                  <h4>Scores of opposite team</h4>
                  <Col className="APS-Form-2-2">
                    <label style={{ width: "100px" }}>Total score:</label>
                    <input
                      type="number"
                      name="name"
                      style={{
                        width: "300px",
                        border: "1px solid #ced4da",
                        height: "38px",
                        borderRadius: "5px",
                      }}
                    />
                  </Col>
                  <div className="gap-3"></div>
                  <Col className="APS-Form-2-2">
                    <label style={{ width: "100px" }}>Wickets:</label>
                    <input
                      type="number"
                      name="name"
                      max="10"
                      style={{
                        width: "300px",
                        border: "1px solid #ced4da",
                        height: "38px",
                        borderRadius: "5px",
                      }}
                    />
                  </Col>
                  <div className="gap-3"></div>
                  <Col className="APS-Form-2-2">
                    <label style={{ width: "100px" }}>Overs:</label>
                    <input
                      type="number"
                      name="name"
                      max={dataupcomming?dataupcomming[0].format=="T20"?20:dataupcomming[0].format=="50"?50:200:""}
                      style={{
                        width: "300px",
                        border: "1px solid #ced4da",
                        height: "38px",
                        borderRadius: "5px",
                      }}
                    />
                  </Col>
                  <div className="gap-3" style={{marginTop:"10px"}}><p style={{display:Errmsg, color:"red"}}>Input fields must not be empty</p></div>
                  <div className="btn-2-2">
                    <button  type="reset" className="btn btn-secondary" style={{visibility:"hidden"}}>Cancel</button>
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                  </div>
                </form>

                <div style={{display:playerset}}>
                    <div className="M3-main-container-2">
                      <h4>Players</h4>
                    </div>

                    <div>
                    <div className="M3-main-container-3">
                      <hr></hr>
                        
                      <Container>
                      <h4>Unmarked</h4>
                              <hr></hr>
                      {dataupcomming_p?dataupcomming_p?.map((item,i) =>
                      <>
                        <Row className="M3-main-container-3-1-G">
                          <Col className="M3-G-1" sm={4}>
                            {" "}
                            <h6>BF-{item.user_id}</h6>{" "}
                          </Col>
                          <Col className="M3-G" sm={4}>
                            {" "}
                            <h6>
                              {" "}
                              <a href={"/coach/playerPerformance/"+id+"/"+item.user_id+"/"+Tid}>
                                {item.name}
                              </a>{" "}
                            </h6>{" "}
                          </Col>
                        </Row>
                        <br></br></> ):""}
                        {/* <hr></hr> */}
                        <h4>Marked</h4>
                              <hr></hr>
                              {responseData_p_marked?responseData_p_marked?.map((item,i) =>
                      <>
                        <Row className="M3-main-container-3-1-G">
                          <Col className="M3-G-1" sm={4}>
                            {" "}
                            <h6>BF-{item.user_id}</h6>{" "}
                          </Col>
                          <Col className="M3-G" sm={4}>
                            {" "}
                            <h6>
                              {" "}
                              <div>
                                {item.name}
                              </div>{" "}
                            </h6>{" "}
                          </Col>
                        </Row>
                        <br></br></> ):""}
                      </Container>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Macthes_3;
