import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";
import {fetchData} from '../../AuthServer'

<<<<<<< HEAD
// console.log(resoposeData);
const data = [
=======
const Axios = require("axios").default;

async function getData() {
  const axios = require("axios").default;
  let res = await axios.get("/api/user/players");
  let result = res.data.data;
  console.log(result[1].email);
}

let dataArray = [
>>>>>>> 3dd0008e81d6068cdce29a4778b37f46be4ed133
  {
    id: "P-51",
    name: "lamesh iroshan",
    contact: "0712564236",
    email: "lamesh@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
   
  },

  {
    id: "P-55",
    name: "lamesh iroshan",
    contact: "0712876512",
    email: "lamesh@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
  
  },
  {
    id: "P-102",
    name: "lamesh iroshan",
    contact: "072564236",
    email: "lamesh@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
    
  },
  {
    id: "P-62",
    name: "Asitha Muthumala",
    contact: "0765264236",
    email: "asikavinda@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
   
  },
  {
    id: "P-70",
    name: "Gihan Trellow",
    contact: "0712564236",
    email: "lamesh@gmail.com",
    btn: (
      <Link to={"/manager/EditPlayerDetails"}>
        <Button variant="secondary">View</Button>
      </Link>
    ),
   
  },
];

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
<<<<<<< HEAD
=======
 
>>>>>>> 3dd0008e81d6068cdce29a4778b37f46be4ed133
];
function Players() {
<<<<<<< HEAD
  const [responseData,setResponseData]=useState([]);
  // let resoposeData=[];

async function getData(){
  // event.preventDefault();
  // const axios = require('axios').default;
  // let res = await axios.get('/api/user/players');
  // let result = res.data.data;
  // console.log(result[1].email)
  const reqData ={
    // "userid":'1'
  };
  const authRequest = {
  "method":"get",
  "url":"user/players",
  "data":reqData
}
fetchData(authRequest).then((response)=>{
  // resoposeData=response.data.data;
  // console.log(resoposeData);
  setResponseData(response.data.data)
}).catch(function(error){
  console.log(error);
})
}

  useEffect(() => {
    getData()
  }, [])
  
  console.log(responseData);
=======
  let result;

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/user/players").then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log("post data function ", post);

  if (!post) return null;

  {post.data.map((item, i) => {
     dataArray[i] = 
      
        {
          id: item.user_id,
          name: item.name,
          contact: item.contact,
          email: item.email,
          btn: (
            <Link to={"/manager/EditPlayerDetails"}>
              <Button variant="secondary">View</Button>
            </Link>
          ),
        }
        
   
  })}
>>>>>>> 3dd0008e81d6068cdce29a4778b37f46be4ed133
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
                <SearchTable
                  t_title={""}
<<<<<<< HEAD
                  data={responseData}
=======
                  data={dataArray}
>>>>>>> 3dd0008e81d6068cdce29a4778b37f46be4ed133
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
