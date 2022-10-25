import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/ViewTeam.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "../../AuthServer";

function ViewTeam() {
  const { id } = useParams();
  console.log(id);
  const [responseData, setResponseData] = useState([]);
  const [responseDatap, setResponseDatap] = useState([]);
  const url = "player/coach/getTeamDetails";
  const Deleteurl = "player/coach/deleteTeam";
  async function getData(url, Team = "") {
    const reqData = {
      team_id: id,
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if(url==="player/coach/getTeamDetails"){setResponseData(response.data);}
        else if(url==="player/coach/deleteTeam"){setResponseDatap(response.data);}
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData(url);
  }, []);
  const dataupcomming = responseData.data;
  const dataupcommingp = responseDatap.data;
  console.log(dataupcomming);
  console.log(dataupcommingp);

  function deleteTeam(e){
    e.preventDefault();
    getData(Deleteurl)
    window.history.back()
  }

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
              <h1>Team</h1>
            </div>
            <div className="Payments-table-box-1">
              <div className="tablee">
                <div className="table-head">
                  <div className="coll-4-113">Team ID</div>
                  <div className="coll-4-113">Team</div>
                  <div className="coll-4-113">Date</div>
                </div>

                <div className="table-row">
                  <div className="coll-4-113">T-{id}</div>
                  <div className="coll-4-113">
                    {dataupcomming ? dataupcomming[0].name : ""}
                  </div>
                  <div className="coll-4-113">
                    {dataupcomming ? dataupcomming[0].date : ""}
                  </div>
                </div>
                <hr></hr>
              </div>

              <div className="tablee">
                <h3
                  style={{
                    width: "100%",
                    textAlign: "left",
                    paddingLeft: "40px",
                  }}
                >
                  Players
                </h3>
                <hr></hr>
              </div>
              <Container>
                {dataupcomming
                  ? dataupcomming.map((item, i) => (
                      <Row>
                        <Col className="EPS-main-3-1">{item.username}</Col>
                        <Col className="EPS-main-3-1">BF-{item.user_id}</Col>
                        <Col className="Attendance-head-1"></Col>
                        <Col> {/* <a href="#">Remove</a>{" "} */}</Col>
                      </Row>
                    ))
                  : ""}
              </Container>
              <button onClick={deleteTeam}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewTeam;
