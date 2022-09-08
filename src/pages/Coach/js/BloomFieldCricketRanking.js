import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import player from "../player.jpg";


const data = [

  {
    position: "1",
    img: <img className="row-image" src={player} alt=""></img>,
    player: "Dr.chaminda wimukthi",
    rating: "904",
    btn: (
        <Link to={"/coach/PD1"}>
          <Button variant="secondary">Details</Button>
        </Link>
      ),
  },

  {
    position: "1",
    img: <img className="row-image" src={player} alt=""></img>,
    player: "Dr.chaminda wimukthi",
    rating: "904",
    btn: (
        <Link to={"/coach/PD1"}>
          <Button variant="secondary">Details</Button>
        </Link>
      ),
  },

  {
    position: "1",
    img: <img className="row-image" src={player} alt=""></img>,
    player: "Dr.chaminda wimukthi",
    rating: "904",
    btn: (
        <Link to={"/coach/PD1"}>
          <Button variant="secondary">Details</Button>
        </Link>
      ),
  },

  {
    position: "1",
    img: <img className="row-image" src={player} alt=""></img>,
    player: "Dr.chaminda wimukthi",
    rating: "904",
    btn: (
        <Link to={"/coach/PD1"}>
          <Button variant="secondary">Details</Button>
        </Link>
      ),
  },
 
];

const columns = [
  {
    title: "Position",
    field: "position",
  },
  {
    title: "",
    field: "img",
  },
  {
    title: "Player",
    field: "player",
  },
  {
    title: "Rating",
    field: "rating",
  },
  {
    title: "",
    field: "btn",
  },
];

function BloomFieldCricketRanking() {
  const [tabNumber, setTabNumber] = useState(1);

  const selectTab_1 = () => {
    setTabNumber(1);
    // console.log(tabNumber + "selectTab 1");
  };
  const selectTab_2 = () => {
    setTabNumber(2);
    // console.log(tabNumber + "selectTab 2");
  };
  const selectTab_3 = () => {
    setTabNumber(3);
    // console.log(tabNumber + "selectTab 2");
  };

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
              <h1>BLOOMFIELD Cricket Rankings</h1>
            </div>
            <div className="tabs">
              {/* <h5 className="tab-active">Couceling<hr></hr></h5>
                <h5 className="tab">Events</h5> */}
              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"}>
                  {" "}
                  <a onClick={() => selectTab_1(1)}>Bowlling</a>{" "}
                  {tabNumber === 1 ? <hr></hr> : ""}
                </h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"}>
                  <a onClick={() => selectTab_2(2)}>Batting</a>{" "}
                  {tabNumber === 2 ? <hr></hr> : ""}
                </h5>
                <h5 className={tabNumber === 3 ? "tab-active" : "tab"}>
                  <a onClick={() => selectTab_3(3)}> All-rounders</a>{" "}
                  {tabNumber === 3 ? <hr></hr> : ""}
                </h5>
              </div>

              <div className="tabs-right">
                {/* <Link
                  to={
                    tabNumber === 1
                      ? "/manager/AddCouncellingSession"
                      : "/manager/AddEvent"
                  }
                >
                  <Button variant="outline-success">+ Add</Button>
                </Link> */}
              </div>
            </div>

            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <SearchTable
                  title={
                    <>
                      <div className="table-tabs">
                        <div className="table-tab">ODI</div>
                        <div className="table-tab-active">T20</div>
                        <div className="table-tab">TEST</div>
                      </div>
                    </>
                  }
                  data={tabNumber === 2 ? data : data}
                  columns={tabNumber === 2 ? columns : columns}
                  searching={false}
                  sort={false}
                  filter={false}
                  paging={true}
                  headerC={"#4a4a4a"}
                  headerH={"40px"}
                  headerFC={"white"}
                  headerFS={"1.2rem"}
                  headerFW={"500"}
                  // height: 40px
                  //             font-size: 1.2rem;
                  // font-weight: 500;
                />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default BloomFieldCricketRanking;
