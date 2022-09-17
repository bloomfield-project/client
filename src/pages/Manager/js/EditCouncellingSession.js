import React from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import EditDetails from "../../../component/EditDetail/EditDetails";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link, useParams, useLocation } from "react-router-dom";

import moment from 'moment';


const Axios = require("axios").default;

function EditCouncellingSession() {
  const [event, setevent] = React.useState("");

  const { id } = useParams();
  const userData = {
    id:id,
  };

  React.useEffect(() => {
    Axios.post("http://localhost:3001/api/manager/getSession", userData).then((response) => {
      console.log(response)
      setevent(response.data);
    }).catch((err) => console.log(err));
  }, []);

  if(!event) return null;

  const array = [
    {
      lable: "Title",
      data: (event.data[0].title).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
    },
    {
      lable: "Date",
      data: moment.utc(event.data[0].date).format('YYYY-MM-DD'),
    },
    {
      lable: "Time",
      data: (event.data[0].time),
    },
    {
      lable: "Mentor",
      data: (event.data[0].mentor).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
    },
    
    {
      lable: "Place",
      data: (event.data[0].place).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
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
          <div className="body-container-2">
            <div className="page-container-gray" style={{ width: "100%" }}>
              <div className="l-back-r-title">
                <div className="l-back-r-title-icon">
                  <Link to={"/manager/Session"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
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

export default EditCouncellingSession;
