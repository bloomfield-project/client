import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import { Link } from "react-router-dom";
import { fetchData } from '../../AuthServer';
import { useSelector } from 'react-redux';
import axios from "axios";

let data_2 = [

  {
    sessionname: "vs SCC",
    space: " ",
    session: "Practice Match",
    date: '2022-05-11',
    time: "5.00 PM",
    btn: <Link to={"/coach/editPracticeSession"}><Button variant="secondary">View</Button></Link>,
  },

];

const data_1 = [

  {
      sessionname: "vs SCC",
      space: " ",
      session: "Practice Match",
      date: '2022-05-11',
      time: "5.00 PM",
      btn: <Link to={"/coach/VPS"}><Button variant="secondary">View</Button></Link>,
  },

];

const columns = [

  {
    title: "Session Name",
    field: 'sessionname',
  },
  {
    title: "Session",
    field: "session",
  },
  {
    title: "Date",
    field: "date",
  },
  {
    title: "Time",
    field: "time",
  },
  {
    title: "",
    field: "btn",
  }

];

// const baseURL = "http://localhost:3001/api/coach/practiceSession/All";


function Session() {

  // const loginData = useSelector(state => state.auth.data);
  // console.log(loginData.data.user_id);
  const [tabNumber, setTabNumber] = useState(1);

  // const [postp, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.post(`${baseURL}`).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // function createPost() {
  //   axios
  //     .postp(baseURL, {
  //       id: loginData.data.user_id
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // if (!postp) return "No post!"

  // console.log(postp);

  // const [responseDataToday, setResponseDataToday] = useState([]);
  // const [responseDataAll, setResponseDataAll] = useState([]);

  // let today = new Date();
  // let dd = String(today.getDate()).padStart(2, '0');
  // let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // let yyyy = today.getFullYear();
  // today = yyyy + '-' + mm + '-' + dd;


  // async function getData(url, num) {

  //   const reqData = {
  //     id: loginData.data.user_id,
  //   };


  //   const authRequest = {
  //     "method": "post",
  //     "url": url,
  //     "data": reqData
  //   }

  //   fetchData(authRequest).then((response) => {
  //     if (num === 1) setResponseDataToday(response.data)
  //     else if (num === 2) setResponseDataAll(response.data)
  //   }).catch(function (error) {
  //     console.log(error);
  //   })

  // }

  // useEffect(() => {
  //   getData("coach/practiceSession/Today", 1)
  // }, [])

  // useEffect(() => {
  //   getData("coach/practiceSession/All", 2)
  // }, [])


  // const todayS = responseDataToday.data;
  // const allS = responseDataAll.data;

  // console.log("aa", todayS);
  // console.log("bb", allS);

  // console.log("accc", todayS[0]["session_id"]);
  // console.log("fvmfkvkm", todayS.length);

  // console.log(data_1)


  // {for (let i = 0; i < todayS.length; i++) {
  //   data_1[i] = {
  //     sessionname: todayS[i]["session_id"],
  //     session:todayS[i]["session_id"],
  //     date:todayS[i]["session_id"],
  //     time:todayS[i]["session_id"],
  //   }
  // }}



  const selectTab_1 = () => {
    setTabNumber(1);
  }

  const selectTab_2 = () => {
    setTabNumber(2);
  }

  // {
  //   setResponseDataToday.data.map((item, i) => (
  //     data_1[i] = {
  //       sessionname: item.session_id,
  //     }
  //   ))
  // }

  // console.log(data_1)


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

            <div className="tabs">

              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"} > <a onClick={() => selectTab_1(1)}>All</a> {tabNumber === 1 ? <hr></hr> : ""}</h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"} ><a onClick={() => selectTab_2(1)} >Today</a>  {tabNumber === 2 ? <hr></hr> : ""}</h5>
              </div>

              <div className="tabs-right">
                <Link to="/coach/APS"><Button variant="outline-success">+ Add</Button></Link>
              </div>

            </div>

            <hr></hr>

            <div className="table-box-1">

              <div className="tablee">

                <SearchTable
                  title={"mmvdmslvmlm"}
                  data={tabNumber === 2 ? data_1 : data_2}
                  columns={columns}
                  searching={true}
                  sort={false}
                  filter={false}
                  paging={true}
                  headerC={"#4a4a4a"}
                  headerH={"40px"}
                  headerFC={'white'}
                  headerFS={'1.2rem'}
                  headerFW={'500'}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}


export default Session;
