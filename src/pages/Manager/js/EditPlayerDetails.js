import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";

import EditDetails from "../../../component/EditDetail/EditDetails";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link, useParams, useLocation } from "react-router-dom";

const axios = require("axios").default;

let userData = [];

function EditPlayerDetails() {
  const [post, setPost] = useState(null);
  const [post1, setPost1] = useState(null);

  const GetPostData = () => {
    axios
      .post("/api/user/playerSelect", userData)
      .then((results) => {
        setPost(results.data.res_data);
      })
      .catch((err) => console.log(err));
    console.log("Data set eka ", post);
    axios
    .post("/api/manager/playerRole", userData)
    .then((results) => {
      console.log("post 1:: ", results.data.data[0])
      setPost1(results.data.data[0]);
    })
    .catch((err)=>console.log("errorrrr : ",err))
    
  };
  


  const { id } = useParams();
  let user = [];

  console.log("type is : " + id);
  userData = {
    user_id: id,
  };

  useEffect(() => {
    GetPostData();
    console.log("inside use effect");
  }, []);

  if (!post) return null;
  // alert(post[0].name)

  console.log(post[0].name);
  console.log(post1);
  // const name = post[0].name;

  const array = [
    {
      lable: "Name",
      data: post[0].name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
    },
    {
      lable: "E-mail",
      data: post[0].email,
      btn: "true",
      type: "email",
    },
    {
      lable: "Contact",
      data: post[0].contact,
      btn: "true",
    },
    {
      lable: "Address",
      data: post[0].address,
      btn: "true",
      type: "text",
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
