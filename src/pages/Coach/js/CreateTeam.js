import React from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/ViewTeam.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Table } from "antd";
import { useState, useEffect } from "react";
import { fetchData } from "../../AuthServer";
import { useDispatch, useSelector } from "react-redux";
import { margin } from "@mui/system";

function CreateTeam() {
  const loginData = useSelector((state) => state.auth.data);
  const [responseData, setResponseData] = useState([]);
  const [responseDataP, setResponseDataP] = useState([]);
  // const [responseDataF,setResponseDataF]=useState([]);
  // const [responseDataI,setResponseDataI]=useState([]);
  // const location = useLocation();
  // console.log(location.state)
  const urlBat = "player/coach/CreateTeam";
  const urlBowl = "player/coach/getPlayers";
  // const urlFld= "player/performanceFld"
  // const urlIntro= "player/intro"

  async function getData(url, Team = "") {
    const reqData = {
      date: "2022-10-26",
      team: Team,
      players: selectedRowKeys,
    };
    const authRequest = {
      method: "post",
      url: url,
      data: reqData,
    };
    fetchData(authRequest)
      .then((response) => {
        if (url === "player/coach/CreateTeam") {
          // setResponseData(response.data)
        } else if (url === "player/coach/getPlayers") {
          setResponseDataP(response.data);
        }
        // else if(url==="player/performanceFld"){
        //     setResponseDataF(response.data)
        // }
        // else if(url==="player/intro"){
        //     setResponseDataI(response.data)
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    // getData(urlIntro)
    // getData(urlBat)
    getData(urlBowl);
    getData(urlBowl);
  }, []);
  // const dataupcomming=responseData.data
  const dataupcommingP = responseDataP.data;
  // const dataupcommingF=responseDataF.data
  // const dataupcommingI=responseDataI.data
  // console.log(dataupcomming)
  console.log(dataupcommingP);
  // console.log(dataupcommingF)
  // console.log(dataupcommingI)

  // '''''''''''''''''''''''''''''''''''''''''''''''''
  const columns = [
    {
      title: "Player ID",
      dataIndex: "playerid",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];
  const data = [];
  for (let i = 0; i < dataupcommingP?.length; i++) {
    data.push({
      key: dataupcommingP ? dataupcommingP[i].user_id : "",
      playerid: `BF- ${dataupcommingP ? dataupcommingP[i].user_id : ""}`,
      name: dataupcommingP ? dataupcommingP[i].name : "",
      role: dataupcommingP ? dataupcommingP[i].player_role : "",
    });
  }

  // ''''''''''''''''''''''''''''''''''''''''''''''''''
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  // lllllllllllllllllllllllllllllllll

  const player = [
    {
      user_id: "1",
      name: "Gihan Weerasinghe",
      role: "Batting",
    },
    {
      user_id: "2",
      name: "Gihan Weerasinghe",
      role: "Batting",
    },
  ];

  console.log(selectedRowKeys);

  const [checkBoxVal, setcheckBoxVal] = useState("none");
  const [inputVal, setinputVal] = useState("none");

  function postData(e) {
    e.preventDefault();
    console.log(e.target[0].value);
    if(e.target[0].value===""){
      setinputVal("block")
    }
    if(selectedRowKeys?.length<15){
      setcheckBoxVal("block")
    }

   if((e.target[0].value!="")&&(selectedRowKeys?.length>=15))
   {getData(urlBat, e.target[0].value);
    window.location.reload();}
  }
  function goBack(){
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
              <h1>Create Team</h1>
            </div>
            <form
              className="Payments-table-box-1"
              style={{ height: "fit-content" }}
              onSubmit={postData}
            >
              <div className="in-put-con-tainer">
                <label className="l-a-b-e-l">Team Name</label>
                <input />
              </div>
              {/* <div className="double-box-out">
                                <div className="left-box-1-G">
                                    <h3>Players</h3>
                                    <div className="left-box-in-G">
                                        {player.map((item,i)=>
                                        <div className="ROW-P-G">
                                            <div className="ROW-P-G-col-1">
                                                <div className="iddd">PS-{item.user_id}</div>
                                                <div className="name-p">{item.name}</div>
                                            </div>
                                            <div className="ROW-P-G-col-2">{item.role}</div>
                                            <div className="ROW-P-G-col-2"><button value={i} onClick={selected}>select</button></div>
                                        </div>)}
                                        <div className="ROW-P-G">
                                            <div className="ROW-P-G-col-1">
                                                <div className="iddd">PS-01</div>
                                                <div className="name-p">Gihan Weerasinghe</div>
                                            </div>
                                            <div className="ROW-P-G-col-2">Batting</div>
                                            <div className="ROW-P-G-col-2"><button value={1112244} onClick={selected}>select</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-box-1-G">
                                    <h3>Team</h3>
                                    <div className="left-box-in-G">

                                    </div>
                                </div>
                            </div> */}
              <div
                style={{
                  width: "95%",
                }}
              >
                <div
                  style={{
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      marginLeft: 8,
                    }}
                  >
                    {hasSelected
                      ? `Selected ${selectedRowKeys.length} items`
                      : ""}
                  </span>
                </div>
                <Table
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={data}
                />
              </div>
              <div style={{color:"red", margin:"20px",display:inputVal}}>Please Enter a name for team</div>
              <div style={{color:"red", margin:"20px",display:checkBoxVal}}>Please Select at least 15 players</div>
              <div className="btn-2-2">
                <button type="reset" className="btn btn-secondary" onClick={goBack}>Cancel</button>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTeam;
