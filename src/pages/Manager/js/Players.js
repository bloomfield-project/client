import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";

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

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/user/players").then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log("post data function ", post);

  if (post) {
    {post.data.map((item, i) => {
      dataC[i] = 
       
         {
           id: "BP-" + item.user_id ,
           name: (item.name).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
           contact: item.contact,
           email: item.email,
           btn: (
             <Link to={"/manager/EditPlayerDetails/"+ item.user_id}>
               <Button variant="secondary">View</Button>
             </Link>
           ),
         }
         
    
   })}
  }



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
                  <div className="col-51">Session Name</div>
                  <div className="col-51">Mentor</div>
                  <div className="col-51">Date</div>
                  <div className="col-51">Time</div>
                  <div className="col-51">Place</div>
              </div>

            
              {dataC?dataC?.map((item,i)  => 
                <><div key={i} className="table-row">
                  <div className="col-51">{item.id}</div>
                  <div className="col-51">{item.name}</div>
                  <div className="col-51">{item.contact}</div>
                  <div className="col-51">{item.email}</div>
                  <div className="col-51">{item.btn}</div>
                  {/* <div className="col-51"><button value={item.session_id} onClick={e => viewSession(e.target.value)}>View</button></div> */}
            

                </div><hr></hr></>
              ):<h6 style={{ height : "200px"}}>NO sessions to display</h6>}
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




