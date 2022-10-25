import React from "react";
import Header from "../../../component/header/Header";
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
function Macthes_3() {
    const {id}=useParams();
    console.log(id)
    const [responseData,setResponseData]=useState([]);
    const [responseData_p,setResponseData_p]=useState([]);
    const url= "player/coach/unmarked_data"
    const url_p= "player/coach/unmarked_players"
    async function getData(url,Team=""){
        
        const reqData ={
            match_id:id,
        };
        const authRequest = {
        "method":"post",
        "url":url,
        "data":reqData
      }
      fetchData(authRequest).then((response)=>{
            if(url==="player/coach/unmarked_data"){setResponseData(response.data)}
            if(url==="player/coach/unmarked_players"){setResponseData_p(response.data)}
        
      }).catch(function(error){
        console.log(error);
      })
    }
    useEffect(() => {
        getData(url)
        getData(url_p)
    }, [])
    const dataupcomming=responseData.data
    const dataupcomming_p = responseData_p.data
    console.log(dataupcomming)
    console.log(dataupcomming_p)

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
                <Link to={"/coach/matches"}>
                  <IoChevronBackCircleOutline
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                  />
                </Link>
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
                <div className="gap-3"></div>

                <div className="M3-main-container-2">
                  <h4>Players</h4>
                </div>

                <div className="M3-main-container-3">
                  <hr></hr>
                    
                  <Container>
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
                          <a href={"/coach/playerPerformance/"+id+"/"+item.user_id}>
                            {item.player_name}
                          </a>{" "}
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
    </>
  );
}

export default Macthes_3;
