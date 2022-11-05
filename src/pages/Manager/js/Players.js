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

const Axios = require("axios").default;

// async function getData() {
//   const axios = require("axios").default;
//   let res = await axios.get("/api/user/players");
//   let result = res.data.data;
//   console.log(result[1].email);
// }

let dataC = [];

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
 

  React.useEffect(() => {
    Axios.post("http://localhost:3001/api/user/players").then((response) => {
      setPost(response.data);
    });
  }, []);
  const dataa = post.data;
  console.log("post data function ", dataa);
  const dataArray =[]


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

  console.log("data post :", post)
  console.log("data array :", dataArray)

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

              <div className="table-head">
                  <div className="col-51">User ID</div>
                  <div className="col-51">Name</div>
                  <div className="col-51">Contact</div>
                  <div className="col-51">Email</div>
                  <div className="col-51"></div>
              </div>

            
              { console.log(" aaaaaaaaaaaaaa : ", post) }

              {dataArray != []
                  ? dataArray?.map((item, i) => (
                      <>
                        <div className="table-row">
                          <div className="coll-4-11">{item.id}</div>
                          <div className="coll-4-11">{item.name}</div>
                          <div className="coll-4-1">{item.contact}</div>
                          <div className="coll-4-1">{item.email}</div>
                          <div className="coll-4-1">{item.btn}</div>
                        </div>
                        <hr></hr>
                      </>
                    ))
                  : <h6 style={{ height : "200px"}}>NO sessions to display</h6>}

              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Players;
