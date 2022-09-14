import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';












const { TabPane } = Tabs;






const data = [
  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/player/EventDetails"}>
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
      <Link to={"/player/EventDetails"}>
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
      <Link to={"/player/EventDetails"}>
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
      <Link to={"/player/EventDetails"}>
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
    // id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    mentor: "Dr.chaminda wimukthi",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/player/CSessionDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },

  {
    // id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    mentor: "Dr.chaminda wimukthi",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/player/CSessionDetails"}>
      <Button variant="secondary">View</Button>
    </Link>
    ),
  },
  {
    // id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    mentor: "Dr.chaminda wimukthi",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/player/CSessionDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },
  {
    // id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    mentor: "Dr.chaminda wimukthi",
    date: "2022-05-11",
    time: "09:00 am",
    btn: (
      <Link to={"/player/CSessionDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  },
];

// console.log(data[0]);
const columns_1 = [
  {
    title: "Mentor",
    field: "mentor",
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

function PEvents() {
  const [tabNumber, setTabNumber] = useState(1);


  const onChange = (key) => {
    console.log(key);
    setTabNumber(key)
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
              <h1>{tabNumber == 1 ? "Counseling Sessions" : "Events"}</h1>
            </div>
            {/* <div className="tabs">
              
              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"}>
                  {" "}
                  <a onClick={() => selectTab_1(1)}>Couceling</a>{" "}
                  {tabNumber === 1 ? <hr></hr> : ""}
                </h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"}>
                  <a onClick={() => selectTab_2(2)}> Events</a>{" "}
                  {tabNumber === 2 ? <hr></hr> : ""}
                </h5>
              </div>

              <div className="tabs-right">
                
              </div>
            </div> */}
            <div className="playerPreformanceBody">
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    
                    <TabPane tab="Counseling Sessions" key="1">
                      <div className="table-box-11">
                        <div className="tablee">
                          <SearchTable
                            t_title={''}
                            data={data_1}
                            columns={columns_1}
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
                        
                    </TabPane>
                    <TabPane tab="Events" key="2">
                      <div className="table-box-11">
                        <div className="tablee">
                          <SearchTable
                            t_title={''}
                            data={data}
                            columns={columns}
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
                    </TabPane>
                
                </Tabs>
              </div>







            
              

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PEvents;