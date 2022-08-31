import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";

const data = [
  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/manager/EditEvent"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },

  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/manager/EditEvent"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },
  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/manager/EditEvent"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },
  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/manager/EditEvent"}>
        <Button variant="secondary">View</Button>
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
    title: "Event",
    field: "event",
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
  },
];

const data_1 = [
  {
    
    posision: "1",
    img: <img className="row-image" src={profpic} alt=""></img>,
    
    player: <Link to={"/admin/PlayerRankings"}>Chaminda Wimukthi</Link> ,
    rating: "880",
  },

  {
 
    posision: "2",
    img: <img className="row-image" src={profpic} alt=""></img>,

    player: "Sameera Lakshan",
    rating: "920",
  },
  {
   
    posision: "3",
    img: <img className="row-image" src={profpic} alt=""></img>,

    player: "Nuwan Chamara",
    rating: "801",
  },
  {
   
    posision: "4",
    img: <img className="row-image" src={profpic} alt=""></img>,

    player: "Sasindu weerasinghe",
    rating: "924",
  },
  {
   
    posision: "5",
    img: <img className="row-image" src={profpic} alt=""></img>,

    player: "Pasindu weerasinghe",
    rating: "921",
  },
];

// console.log(data[0]);
const columns_1 = [
  {
    title: "Position",
    field: "posision",
  },
  {
    title:"",
    field:"img"
  },
  {
    title: "Player",
    field: "player",
  },
  {
    title: "Rating",
    field: "rating",
  },
 
];

function Ranking() {
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
              <h1> BLOOMFIELD Cricket Ranking</h1>
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
                  //need to edit
                  data={tabNumber === 2 ? data_1 : data_1}
                  columns={tabNumber === 2 ? columns_1 : columns_1}
                  searching={true}
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

export default Ranking;
