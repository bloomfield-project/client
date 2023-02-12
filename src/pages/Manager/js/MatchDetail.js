import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import "../../Home.css";
import "../../player/css/Matches.css";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import Team from "../../player/Team.png";
import opTeam from "../../player/opTeam.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { fetchData } from "../../AuthServer";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/lib/transfer/search";
// import userController from "../../../../../server-1/api/user/user.controller";
const Axios = require("axios").default;

let match_id;
let compRes;
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

function MatchDetail() {
  const loginData = useSelector((state) => state.auth.data);

  const [show, setShow] = useState(false);

  // const [compRes, setRes] = React.useState("");

  const [responseData, setResponseData] = useState([]);
  const [responseDataPast, setPastResponseData] = useState([]);

  const [search, setSearch] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteMatch = (event) => {
    event.preventDefault();
    console.log(event);
    match_id = event.target.attributes[1].nodeValue;
    // if (name) {
    console.log(
      "name from button : " +
        event.target.attributes[1].nodeValue +
        " " +
        match_id
    );
    handleShow();
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Form was submitted! : ", event.target[0].value);
    let mdata = {
      nic: loginData.data.nic,
      password: event.target[0].value,
    };

    passCompare(mdata);
    console.log("succes ", compRes);
  };

  function passCompare(mdata) {
    Axios.post("http://localhost:3001/api/manager/getPassword", mdata)
      .then((res) => {
        compRes = res.data.comp;
        console.log(res.data.comp);
        if (compRes) {
          let data = {
            match_id: match_id,
          };

          console.log("data : ", data);
          console.log("Passwords are mathched");
          Axios.post("http://localhost:3001/api/manager/deleteMatch", data)
            .then((res) => {
              handleClose();
              window.location.reload();

            })
            .catch((err) => console.log("error is arized", err));
        } else {
          alert("Enter Correct Password !");
        }
      })
      .catch((err) => console.log("error is arized", err));
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  var thisMonth = yyyy + "-" + mm + "-" + dd;
  const [Month, setMonth] = useState(thisMonth);

  async function getData(url, num) {
    const reqData = {
      month: Month,
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if (num === 1) setResponseData(response.data);
        else if (num === 2) setPastResponseData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData("match/matches", 1);
  }, []);
  useEffect(() => {
    getData("match/pastMatches", 2);
  }, []);

  const msg = responseData.success;
  const dataM = responseData.data;
  const msgP = responseDataPast.success;
  const dataMP = responseDataPast.data;
  console.dir(dataMP );

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
              <h1>Matches</h1>
            </div>
            <div className="tabs">
              <div className="tabs-left"></div>

              <div className="tabs-right">
                <Link to={"/manager/AddMatch"}>
                  <Button to={"/manager/AddMatch"} variant="outline-success">
                    + Add
                  </Button>
                </Link>
              </div>
            </div>
            <hr></hr>
            <div className="tabs-contain-box">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                  console.log(typeof search + search);
                }}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  padding:'5px',
                  border: "none",
                  borderBottom: "1px solid black",
                  borderRadius:'5px',
                }}
              />
              <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="Pending" key="1">
                  <div className="matches-container-outer-box">
                    {/* match card */}
                    {msg != 0 ? (
                      dataM?.filter((item) => {
                        return search.toLowerCase() === ""
                          ? item
                          : item.title?.toLowerCase().includes(search) ||
                          item.match_format?.toLowerCase().includes(search) ||
                          item.ground?.toLowerCase().includes(search) ||
                          item.op_team_name?.toLowerCase().includes(search) ||
                          item.date?.includes(search);
                      }).map((item, i) => (
                        <>
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
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                            <div className="match-box-mid">
                              <div className="match-box-mid-left">
                                <div className="box-mid-left-up">
                                  <h4 style={{ color: "#a5a5a5" }}>
                                    BLOOMFIELD
                                  </h4>
                                </div>
                                <div className="box-mid-left-mid">
                                  <img src={Team}></img>
                                </div>
                                <div className="box-mid-left-down">
                                  <h5 style={{ color: "#a5a5a5" }}>
                                    Starts at {item.time}
                                  </h5>
                                </div>
                              </div>
                              <div className="match-box-mid-mid">
                                <div className="box-mid-mid-up">
                                  <h5 style={{ color: "#a5a5a5" }}>
                                    {item.match_format}
                                  </h5>
                                </div>
                                <div className="box-mid-mid-mid">VS</div>
                                <div className="box-mid-mid-down">
                                  <h5 style={{ color: "#a5a5a5" }}>
                                    {item.ground}
                                  </h5>
                                </div>
                              </div>
                              <div className="match-box-mid-right">
                                <div className="box-mid-right-up">
                                  <h4 style={{ color: "#a5a5a5" }}>
                                    {item.op_team_name.toUpperCase() }
                                  </h4>
                                </div>
                                <div className="box-mid-right-mid">
                                  <img
                                    src={
                                      item.team_icon ? item.team_icon : opTeam
                                    }
                                  ></img>
                                </div>
                                <div className="box-mid-right-down">
                                  <h5 style={{ color: "#a5a5a5" }}>
                                    {item.date}
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div className="match-box-down  d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
                              <Button
                                variant="secondary"
                                className="btn btn-danger"
                                value={item.match_id}
                                onClick={deleteMatch}
                              >
                                Delete
                              </Button>

                              <Link
                                to={
                                  "/manager/Matches/PendingMatches/" +
                                  item.match_id
                                }
                              >
                                <Button variant="secondary">View</Button>
                              </Link>
                            </div>
                          </div>
                          {/* match card */}
                          <div className="gap-3"></div>
                        </>
                      ))
                    ) : (
                      <h6 style={{ height: "200px" }}>No data to display</h6>
                    )}
                  </div>
                </TabPane>
                <TabPane tab="Past" key="2">
                  <div className="matches-container-outer-box">
                    {/* match card */}
                    {msgP !== 0 ? (
                      dataMP
                        ?.filter((item) => {
                          return search.toLowerCase() === ""
                            ? item
                            : item.title?.toLowerCase().includes(search) ||
                            item.format?.toLowerCase().includes(search) ||
                            item.ground?.toLowerCase().includes(search) ||
                            item.op_team_name?.toLowerCase().includes(search) ||
                            item.date?.includes(search);
                        })
                        .map((item, i) => (
                          <>
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
                                    {item.title}
                                  </h4>
                                </div>
                              </div>
                              <div className="match-box-mid">
                                <div className="match-box-mid-left">
                                  <div className="box-mid-left-up">
                                    <h4 style={{ color: "#a5a5a5" }}>
                                      BLOOMFIELD
                                    </h4>
                                  </div>
                                  <div className="box-mid-left-mid">
                                    <img src={Team}></img>
                                  </div>
                                  <div className="box-mid-left-down">
                                    <h5>
                                      {item.our_score +
                                        "-" +
                                        item.our_wickets +
                                        " (" +
                                        item.our_overs +
                                        ")"}
                                    </h5>
                                  </div>
                                </div>
                                <div className="match-box-mid-mid">
                                  <div className="box-mid-mid-up">
                                    <h5 style={{ color: "#a5a5a5" }}>
                                      {item.format}
                                    </h5>
                                  </div>
                                  <div className="box-mid-mid-mid">VS</div>
                                  <div className="box-mid-mid-down">
                                    <h5 style={{ color: "#a5a5a5" }}>
                                      {item.ground}
                                    </h5>
                                  </div>
                                </div>
                                <div className="match-box-mid-right">
                                  <div className="box-mid-right-up">
                                    <h4 style={{ color: "#a5a5a5" }}>
                                      {item.op_team_name}
                                    </h4>
                                  </div>
                                  <div className="box-mid-right-mid">
                                    <img src={opTeam}></img>
                                  </div>
                                  <div className="box-mid-right-down">
                                    <h5>
                                      {item.op_score +
                                        "-" +
                                        item.op_wickets +
                                        " (" +
                                        item.op_overs +
                                        ")"}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                              <div className="match-box-down-1">
                                <div className="match-box-down-1-left">
                                  <h5 style={{ color: "#009270" }}>
                                    {item.our_score > item.op_score
                                      ? "BLOOMFIELD won"
                                      : item.op_team + " won"}
                                  </h5>
                                </div>
                                <div className="match-box-down-1-right">
                                  <h5 style={{ color: "#a5a5a5" }}>
                                    {item.date}
                                  </h5>
                                </div>
                              </div>
                              <div className="match-box-down">
                                <Link
                                  to={"/manager/MMatchDetails/" + item.match_id}
                                >
                                  <Button variant="secondary">View</Button>
                                </Link>
                              </div>
                            </div>
                            {/* match card */}
                            <div className="gap-3"></div>
                          </>
                        ))
                    ) : (
                      <h6 style={{ height: "200px" }}>No data to display</h6>
                    )}
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Pop up modal for enter manager password for confirm payment */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title> Enter Password For Confirm </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          {/* <h1>Render Count: {count.current}</h1> */}
          <form className="form-group mb-3" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control w-76 bg-white text-dark mx-auto"
              style={{ marginLeft: "5px", width: "90%" }}
            />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
              <button type="submit" className="btn btn-danger">
                Confirm
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>
      {/* Pop up modal for enter manager password for confirm payment */}
    </>
  );
}

export default MatchDetail;
