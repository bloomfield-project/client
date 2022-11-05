import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../Player.png";
import { Link } from "react-router-dom";

const Axios = require("axios").default;


const data = [

    {
        playerid: "BF-001",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        player: <Link to="/coach/PlayerD"><a href="#">Gihan Weerasinghe</a></Link>,
        
        btn: <Link to={"/coach/PPr1"}><Button variant="secondary">Progress</Button></Link>,
    },
    {
        playerid: "BF-001",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        player: <Link to="/coach/PlayerD"><a href="#">Asitha Muthumala</a></Link>,
        
        btn: <Link to={"/coach/PPr1"}><Button variant="secondary">Progress</Button></Link>,
    },
    {
        playerid: "BF-001",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        player: <Link to="/coach/PlayerD"><a href="#">Bimsara Dilukshan</a></Link>,
        
        btn: <Link to={"/coach/PPr1"}><Button variant="secondary">Progress</Button></Link>,
    },
    {
        playerid: "BF-001",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        player: <Link to="/coach/PlayerD"><a href="#">Heshan Weerasinghe</a></Link>,
        
        btn: <Link to={"/coach/PPr1"}><Button variant="secondary">Progress</Button></Link>,
    },

];


const columns = [

    {
        title: "Player ID",
        field: 'playerid',
    },
    // {
    //     title: "",
    //     field: 'img',
    // },
    {
        title: "Player",
        field: "player",
    },
    {
        title: "",
        field: "btn",
    }
];

function Players() {

    
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
        
      };
    });
  }

  console.log("data post :", post)
  console.log("data array :", dataArray)

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

             
            </div>
            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">

              <div className="table-head">
                  <div className="col-51">User ID</div>
                  <div className="col-51">Name</div>
                  <div className="col-51">Contact</div>
                  <div className="col-51">Email</div>
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
