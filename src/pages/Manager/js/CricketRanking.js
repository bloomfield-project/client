import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../player/player.jpg";

const data = [
  {
    pos: "01",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Gihan Trellow",
    rating: "320",
    // time: "09:00 am",
    // btn: (
    //   <Link to={"/manager/EditEvent"}>
    //     <Button variant="secondary">View</Button>
    //   </Link>
    // ),
  },

  {
    pos: "02",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Asitha Muthumala",
    rating: "900",
  },
  {
    pos: "03",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Dilukshan Bimsara",
    rating: "215",
  },
  {
    pos: "05",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Nuwan Chamara",
    rating: "900",
  },
];

// console.log(data[0]);
const columns = [
  {
    title: "Position",
    field: "pos",
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
    title: "Rating",
    field: "rating",
  },
  
];

const data_1 = [
  {
    pos: "01",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Nimesh Amitha",
    rating: "920",
    // time: "09:00 am",
    // btn: (
    //   <Link to={"/manager/EditEvent"}>
    //     <Button variant="secondary">View</Button>
    //   </Link>
    // ),
  },

  {
    pos: "02",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Muthumala Kavinda",
    rating: "900",
  },
  {
    pos: "03",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Dilukshan Bimsara",
    rating: "215",
  },
  {
    pos: "05",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Nuwan Chamara",
    rating: "900",
  },
];

// console.log(data[0]);
const columns_1 = [
  {
    title: "Position",
    field: "pos",
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
    title: "Rating",
    field: "rating",
  },
];

function CricketRanking() {
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
                
              </div>
            </div>

            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <SearchTable
                  t_title={
                    <>
                      <div className="table-tabs">
                        <div className="table-tab">ODI</div>
                        <div className="table-tab-active">T20</div>
                        <div className="table-tab">TEST</div>
                      </div>
                    </>
                  }
                  data={tabNumber === 2 ? data : data_1}
                  columns={tabNumber === 2 ? columns : columns_1}
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

export default CricketRanking;
