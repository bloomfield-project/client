/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../Home.css";
import moment from "moment";
import MaterialTable from "material-table";

const Axios = require("axios").default;

const Upcomming_event = [];
const Upcomming_session = [];

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
    title: "Description",
    field: "description",
  },
  {
    title: "Time",
    field: "time",
  },
];

// console.log(data[0]);
const columns_1 = [
  {
    title: "Title",
    field: "title",
  },
  {
    title: "Mentor",
    field: "mentor",
  },
  {
    title: "Mentor Details",
    field: "mentor_details",
  },
  {
    title: "Date",
    field: "date",
  },
  {
    title: "Time",
    field: "time",
  },
];

function EventHistory() {
  const [tabNumber, setTabNumber] = useState(1);
  const [UpSession, setUpSession] = React.useState("");
  const [UpEvent, setUpEvent] = React.useState("");
  const [change, setChange] = useState(true)

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/getOldSession").then(
      (response) => {
        setUpSession(response.data);
        setChange(false)
      }
    );

    Axios.get("http://localhost:3001/api/manager/getOldevent").then(
      (response) => {
        setUpEvent(response.data);
        setChange(false)
      }
    );
    if (UpEvent) {
        // eslint-disable-next-line array-callback-return
        UpEvent.data.map((item, i) => {
          Upcomming_event[i] = {
            id: item.event_id,
            event: item.event_name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            ),
            date: moment.utc(item.date).format("YYYY-MM-DD"),
            time: item.time,
            description: item.description,
          };
        });
      }
      if (UpSession) {
        // eslint-disable-next-line array-callback-return
        UpSession.data.map((item, i) => {
          Upcomming_session[i] = {
            id: item.c_session_id,
            title: item.title.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            ),
            mentor: item.mentor.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            ),
            date: moment.utc(item.date).format("YYYY-MM-DD"),
            time: item.time,
            mentor_details: item.mentor_details.replace(
              /(^\w{1})|(\s+\w{1})/g,
              (letter) => letter.toUpperCase()
            ),
            place: item.place.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            ),
          };
        });
      }
  }, [change,tabNumber]);

  

  

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
      {/* <div className="page-container-1"> */}
      {/* <div className="header-container">
          <Header></Header>
        </div> */}
      {/* <div className="body-container-1"> */}
      {/* <div className="navbar-container">
            <Navbar></Navbar>
          </div> */}
      {/* <div className="body-container-2"> */}
      {/* <div className="title">
          <h1>{tabNumber === 1 ? "Counseling Sessions" : "Events"}</h1>
        </div> */}
      <div className="tabs">
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
      </div>

      <hr></hr>
      <div className="table-box-1">
        <div className="tablee">
          {tabNumber === 2 ? (
            <>
              {Upcomming_event?.length > 0 ? (
                <MaterialTable
                  title={""}
                  columns={columns}
                  data={Upcomming_event}
                />
              ) : (
                <p>No Data to Show</p>
              )}
            </>
          ) : (
            <>
              {Upcomming_session?.length > 0 ? (
                <MaterialTable
                  title={""}
                  columns={columns_1}
                  data={Upcomming_session}
                />
              ) : (
                <p>No Data to show</p>
              )}
            </>
          )}
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default EventHistory;
