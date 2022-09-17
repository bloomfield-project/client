import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import moment from 'moment';

const Axios = require("axios").default;

const Upcomming_event = [];

// console.log(data[0]);
const columns = [
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

const Upcomming_session = [];

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

function Session() {
  const [tabNumber, setTabNumber] = useState(1);
  const [UpSession, setUpSession] = React.useState("");
  const [UpEvent, setUpEvent] = React.useState("");

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/getUpcommingSession").then((response) => {
      setUpSession(response.data);
    });
  }, []);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/getUpcommingEvent").then((response) => {
      setUpEvent(response.data);
    });
  }, []);

  if (!UpSession) return null;

  {UpSession.data.map((item, i) => {
     Upcomming_session[i] = 
      
        {
          mentor: (item.mentor).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) ,
          date: moment.utc(item.date).format('YYYY-MM-DD'),
          time: item.time,
          btn: (
            <Link to={"/manager/EditCouncellingSession"}>
              <Button variant="secondary">View</Button>
            </Link>
          ),
        }
        
   
  })}

  if(!UpEvent) return null;
  {UpEvent.data.map((item, i) => {
    Upcomming_event[i] = 
     
       {
         event: (item.event_name).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) ,
         date: moment.utc(item.date).format('YYYY-MM-DD'),
         time: item.time,
         btn: (
           <Link to={"/manager/EditCouncellingSession"}>
             <Button variant="secondary">View</Button>
           </Link>
         ),
       }
       
  
 })}
  const selectTab_1 = () => {
    setTabNumber(1);
    // console.log(tabNumber + "selectTab 1");
  };
  const selectTab_2 = () => {
    setTabNumber(2);
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
              <h1>{tabNumber === 1 ? "Counseling Sessions" : "Events"}</h1>
            </div>
            <div className="tabs">
              {/* <h5 className="tab-active">Couceling<hr></hr></h5>
                <h5 className="tab">Events</h5> */}
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
                <Link to={tabNumber === 1  ? "/manager/AddCouncellingSession" : "/manager/AddEvent"}>
                  <Button
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
                  t_title={tabNumber === 2 ? "Upcomming Events" : "Upcomming Session"}
                  data={tabNumber === 2 ? Upcomming_event : Upcomming_session}
                  columns={tabNumber === 2 ? columns : columns_1}
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

export default Session;
