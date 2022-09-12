import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import EditDetails from "../../../component/EditDetail/EditDetails";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link, useParams, useLocation } from "react-router-dom";

const axios = require("axios").default;

function GetPostData(res) {
  const [post, setPost] = useState(null);
  setPost(res);
  console.log("Data set eka ", post);
}

function EditPlayerDetails(props) {
  const { id } = useParams();

  let user = [];

  console.log("type is : " + id);
  let userData = {
    user_id: id,
  };

  axios
    .post("/api/user/playerSelect", userData)
    .then((results) => {
      // alert(results.res_data);
      return GetPostData(results.data.res_data)
      // console.log(results.data.res_data);
      // user = results.data.res_data;
      // alert(user[0].name);
    })
    .catch((err) => alert(err));

  const array = [
    {
      lable: "Name",
      data: "kasun kalhara",
    },
    {
      lable: "Role",
      data: "Bowler",
    },
    {
      lable: "E-mail",
      data: "kasun@gmail.com",
    },
    {
      lable: "Contact",
      data: "0715486236",
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
                  <Link to={"/manager/Players"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Player Details</h1>
              </div>

              <div className="form-container">
                <EditDetails arr={array} backLink={"/manager/Players"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPlayerDetails;
