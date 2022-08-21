import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";

const data = [
  {
    id: "1101",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: ( <Link to={"/admin/PlayerDetail"}>Nimesh dilshan</Link> ) ,
    
    progress: (
      <Link to={"/player/Progress"} style={{color:"green"}}>
        Progress
      </Link>
    ),
  },

  {
    id: "1102",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: ( <Link to={"/admin/PlayerDetail"}>Nimesh dilshan</Link> ) ,
    
    progress: (
      <Link to={"/player/Progress"} style={{color:"green"}}>
        Progress
      </Link>
    ),
  },
  {
    id: "1104",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name:( <Link to={"/admin/PlayerDetail"}>Nimesh dilshan</Link> ) ,
    
    progress: (
      <Link to={"/player/Progress"} style={{color:"green"}}>
        Progress
      </Link>
    ),
  },
  {
    id: "1103",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: ( <Link to={"/admin/PlayerDetail"}>Nimesh dilshan</Link> ) ,
    
    progress: (
      <Link to={"/player/Progress"} style={{color:"green"}}>
        Progress
      </Link>
    ),
  },
  {
    id: "1105",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: ( <Link to={"/admin/PlayerDetail"}>Nimesh dilshan</Link> ) ,
   
    progress: (
      <Link to={"/player/Progress"} style={{color:"green"}}>
        Progress
      </Link>
    ),
  },
];

// console.log(data[0]);
const columns = [
  {
    title: "ID",
    field: "id",
  },
  {
    title: "Player",
    field: "img",
  },
  {
    title: "",
    field: "name",
  },
  {
    title:"",
    field : "progress",
    cellStyle: {
      color: 'rgba(149, 41, 41, 1)'
    },
  }
];

function Accounts() {
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
              <h1>BLOOMFIELD Players</h1>
            </div>

            <div className="tabs">
              <div className="tabs-left"></div>

              <div className="tabs-right">
                <Link to={"/manager/PlayerRegistration"}>
                  <Button
                    to={"/manager/PlayerRegistration"}
                    variant="outline-success"
                  >
                    + Add
                  </Button>
                </Link>
              </div>
            </div>
            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <SearchTable
                  title={""}
                  data={data}
                  columns={columns}
                  searching={true}
                  sort={false}
                  filter={false}
                  paging={true}
                  headerC={"#4a4a4a"}
                  headerH={"40px"}
                  headerFC={"white"}
                  headerFS={"1.2rem"}
                  headerFW={"500"}
                />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <Container className="page-container-1">
        <Row className="header-container">
          <Col >
            <Header />
          </Col>
        </Row>
        <Row className="body-container-1">
          <Col md="auto">
            <Navbar/>
          </Col>
          <Col md="auto">
            <Tables list={List} colNames={colNames} />
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default Accounts;
