/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import moment from "moment";
import MaterialTable from "material-table";
import Modal from "react-bootstrap/Modal";

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
    title: "Date",
    field: "date",
  },
  {
    title: "Time",
    field: "time",
  },
];

function Session() {
  const [tabNumber, setTabNumber] = useState(1);
  const [UpSession, setUpSession] = React.useState("");
  const [UpEvent, setUpEvent] = React.useState("");
  const [show, setShow] = useState(false);
  const [event, setEventId] = useState("");
  const [session, setSessionId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteEvent = (id) => {
    setEventId(id);
    setSessionId(null);
    console.log("name from button event : " + id + " " + event);

    // alert(event + " " + id)
    handleShow();
  };

  const deleteSession = (id) => {
    setEventId(null);
    setSessionId(id);
    console.log("name from button event : " + id + " " + event);

    // alert(event + " " + id)
    handleShow();

    // }
  };

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/getUpcommingSession").then(
      (response) => {
        setUpSession(response.data);
      }
    );

    Axios.get("http://localhost:3001/api/manager/getUpcommingEvent").then(
      (response) => {
        setUpEvent(response.data);
      }
    );
  }, []);

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

  const selectTab_1 = () => {
    setTabNumber(1);
    // console.log(tabNumber + "selectTab 1");
  };
  const selectTab_2 = () => {
    setTabNumber(2);
    // console.log(tabNumber + "selectTab 2");
  };

  const DeleteEvent = (event) => {
    event.preventDefault();
    console.log("inside createEvent");
    console.log(event);
    console.log("inside event function");

    let eventData = {
      event_id: event.target[0].value,
    };

    // alert(eventData.event_id);
    handleClose();

    Axios.post("/api/manager/deleteEvent", eventData)
      .then((results) => {
        alert("Delete Successful!");
        window.location.reload();
      })
      .catch((err) => console.log("error : ", err));
  };

  const DeleteSession = (event) => {
    event.preventDefault();
    console.log("inside createEvent");
    console.log(event);
    console.log("inside event function");

    let sessionData = {
      session_id: event.target[0].value,
    };

    handleClose();
    // alert(sessionData.session_id);
    Axios.post("/api/manager/deleteSession", sessionData)
      .then((results) => {
        alert("Delete Successful!");
        window.location.reload();
      })
      .catch((err) => console.log("error : ", err));
  };

  return (
    <>
      <div className="page-container-1">
        <div className="header-container"><Header></Header></div>
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
                <Link
                  to={
                    tabNumber === 1
                      ? "/manager/AddCouncellingSession"
                      : "/manager/AddEvent"
                  }
                >
                  <Button variant="outline-success">+ Add</Button>
                </Link>
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
                        actions={[
                          {
                            icon: "edit",
                            tooltip: "Pay",
                            onClick: (event, rowData) =>
                              deleteEvent(rowData.id),
                          },
                        ]}
                        options={{ actionsColumnIndex: -1 }}
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
                        actions={[
                          {
                            icon: "edit",
                            tooltip: "Pay",
                            onClick: (event, rowData) =>
                              deleteSession(rowData.id),
                          },
                        ]}
                        options={{ actionsColumnIndex: -1 }}
                      />
                    ) : (
                      <p>No Data to show</p>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title>
            {" "}
            {event != null ? "Event Details" : "Session Details"}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          {Upcomming_event.map((item) => {
            return (
              <>
                {item.id === event ? (
                  <div
                    className="d-flex flex-column"
                    style={{ width: "80%", margin: "auto", fontSize: "medium" }}
                  >
                    <div>
                      <label>Event Name :</label>
                      <label>{item.event}</label>
                    </div>
                    <hr></hr>

                    <div>
                      <label>Date :</label>
                      <label>{item.date}</label>
                    </div>
                    <hr></hr>

                    <div>
                      <label>Time :</label>
                      <label>{item.time}</label>
                    </div>
                    <hr></hr>

                    <div>
                      <label>Description :</label>
                      <label>{item.description}</label>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
          {Upcomming_session.map((item) => {
            return (
              <>
                {item.id === session ? (
                  <div
                    className="d-flex flex-column"
                    style={{ width: "80%", margin: "auto", fontSize: "medium" }}
                  >
                    <div>
                      <label>Sessionn Name </label>
                      <label>{item.title}</label>
                    </div>
                    <hr></hr>
                    <div>
                      <label>Date </label>
                      <label>{item.date}</label>
                    </div>
                    <hr></hr>

                    <div>
                      <label>Time </label>
                      <label>{item.time}</label>
                    </div>
                    <hr></hr>

                    <div>
                      <label>Mentor </label>
                      <label>{item.mentor}</label>
                    </div>
                    <hr></hr>

                    <div>
                      <label>Mentor Detais </label>
                      <label>{item.mentor_details}</label>
                    </div>
                  </div>
                ) : null}
              </>
            );
          })}
          <form onSubmit={event != null ? DeleteEvent : DeleteSession}>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
              <input
                type={"hidden"}
                value={event != null ? event : session}
              ></input>
              <button
                type="reset"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-btn btn-danger">
                Delete
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>
    </>
  );
}

export default Session;
