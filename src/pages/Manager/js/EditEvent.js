import React from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import EditDetails from "../../../component/EditDetail/EditDetails";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link, useParams, useLocation } from "react-router-dom";
import moment from 'moment';

const Axios = require("axios").default;

function EditEvent() {
  const [event, setevent] = React.useState("");

  const { id } = useParams();
  const userData = {
    id:id,
  };
  console.log(id)

  React.useEffect(() => {
    Axios.post("http://localhost:3001/api/manager/getEvent", userData).then((response) => {
      console.log(response)
      setevent(response.data);
    }).catch((err) => console.log(err));
  }, []);

  // console.log("event : ",event)
  // console.log("event.data.event_name : ",event.data)

  if(!event) return null;

  
  const array = [
    {
      lable: "Event Name",
      data: (event.data[0].event_name).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
    },
    {
      lable: "Start Time",
      data: (event.data[0].time),
    },
    {
      lable: "Date",
      data: moment.utc(event.data[0].date).format('YYYY-MM-DD'),
    },
    {
      lable: "Description",
      data: (event.data[0].description),
    },
    
  ];
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
        <div className="body-container-2" >
          <div className="page-container-gray" style={{width:"100%"}}>
            <div className="l-back-r-title">
              <div className="l-back-r-title-icon">
                <Link to={"/manager/Session"}>
                  <IoChevronBackCircleOutline
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                  />
                </Link>
              </div>

              <h1>Event Details</h1>
            </div>

            <div className="form-container">
              <EditDetails arr={array} backLink={"/manager/Session"} />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default EditEvent;
