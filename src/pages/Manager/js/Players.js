import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";
import React, { useState, useEffect } from "react";
import { fetchData } from "../../AuthServer";
import { useDispatch, useSelector } from "react-redux";

// const Axios = require("axios").default;

// async function getData() {
//   const axios = require("axios").default;
//   let res = await axios.get("/api/user/players");
//   let result = res.data.data;
//   console.log(result[1].email);
// }

let dataArray = [];

// console.log(data[0]);
const columns = [
  {
    title: "ID",
    field: "id",
  },
  {
    title: "Player",
    field: "name",
  },
  {
    title: "Contact",
    field: "contact",
  },
  {
    title: "Email",
    field: "email",
  },
  {
    title: "",
    field: "btn",
  },
];

function Players() {
  let result;

  const [post, setPost] = useState("");
  async function getData() {
    // const reqData ={
    //   // eventId:"eventId",
    // };
    const authRequest = {
      method: "post",
      url: "user/players",
      data: "null",
    };
    fetchData(authRequest)
      .then((response) => {
        setPost(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  // React.useEffect(() => {
  //   Axios.get("http://localhost:3001/api/user/players").then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);
  const dataa = post.data;
  console.log("post data function ", dataa);

  {
    dataa?.map((item, i) => {
      dataArray[i] = {
        id: "BP-" + item.user_id,
        name: item.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        ),
        contact: item.contact,
        email: item.email,
        btn: (
          <Link to={"/manager/EditPlayerDetails/" + item.user_id}>
            <Button variant="secondary">Edit</Button>
          </Link>
        ),
      };
    });
  }

  console.log(dataArray)

  // getData(result)
  // console.log("eliyen")

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
            {/* <div > */}
            <div className="title">
              <h1>BLOOMFIELD Players</h1>
            </div>

            <div className="tabs">
              <div className="tabs-left"></div>

              <div className="tabs-right">
                <Link to={"/manager/PlayerRegistration"}>
                  <Button
                    to={"/manager/PlayerRegistration"}
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
                
                {dataArray?
                <>
                  <SearchTable
                  t_title={""}
                  data={dataArray}
                  columns={columns}
                  searching={true}
                  sort={false}
                  filter={false}
                  paging={true}
                  headerC={"#4a4a4a"}
                  headerH={"40px"}
                  headerFC={"white"}
                  headerFS={"1.2rem"}
                  headerFW={"500"}
                  
                />
                </>
                :""}
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Players;
