import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";

async function getData(){
  const axios = require('axios').default;
  let res = await axios.get('/api/user/players');
  let result = res.data.data;
  console.log(result[1].email)
}

getData()

const data = [
  {
    id: "P-51",
    name: "lamesh iroshan",
    contact:"0712564236",
    email:"lamesh@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
    // progress: (
    //   <Link to={"/player/Progress"} style={{color:"green"}}>
    //     Progress
    //   </Link>
    // ),
  },

  {
    id: "P-55",
    name: "lamesh iroshan",
    contact:"0712876512",
    email:"lamesh@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
    // progress: (
    //   <Link to={"/player/Progress"} style={{color:"green"}}>
    //     Progress
    //   </Link>
    // ),
  },
  {
    id: "P-102",
    name: "lamesh iroshan",
    contact:"072564236",
    email:"lamesh@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
    // progress: (
    //   <Link to={"/player/Progress"} style={{color:"green"}}>
    //     Progress
    //   </Link>
    // ),
  },
  {
    id: "P-62",
    name: "Asitha Muthumala",
    contact:"0765264236",
    email:"asikavinda@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
    // progress: (
    //   <Link to={"/player/Progress"} style={{color:"green"}}>
    //     Progress
    //   </Link>
    // ),
  },
  {
    id: "P-70",
    name: "Gihan Trellow",
    contact:"0712564236",
    email:"lamesh@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
    // progress: (
    //   <Link to={"/player/Progress"} style={{color:"green"}}>
    //     Progress
    //   </Link>
    // ),
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
    field: "name",
  },
  {
    title: "Contact",
    field: "contact",
  },
  {
    title: "Email",
    field: "email",
  },
  {
    title: "",
    field: "btn",
  },
  // {
  //   title:"",
  //   field : "progress",
  //   cellStyle: {
  //     color: 'rgba(149, 41, 41, 1)'
  //   },
  // }
];

function Players() {
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

export default Players;
