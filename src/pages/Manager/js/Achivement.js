import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SampleCard from "../../../component/Card/SampleCard";
// import profpic from "../header/profpic.jfif";
import moment from "moment";
import profpic from "../../../component/header/profpic.jfif";
const Axios = require("axios").default;

let data = [];


function Achivement() {
  const [tabNumber, setTabNumber] = useState(1);
  const [tachi, settach] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      const reqtachi = await Axios.get(
        "http://localhost:3001/api/manager/getteamAchi"
      );

      settach(reqtachi.data.data);
      return reqtachi;
    }
    fetchData();
  }, []);

  console.log(tachi);
  if (tachi) {
    tachi.map((item, i) => {
      data[i] = {
        title: item.title,
        img: <img className="card-detail-img" src={item.image} alt=""></img>,
        description: item.description,
        date: moment.utc(item.date).format("YYYY-MM-DD"),
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
            <div className="title">
              <h1>{"Achivements"}</h1>
            </div>
            <div className="tabs">
              <div className="tabs-left"></div>
              <div className="tabs-right">
                <Link to={"/manager/AddTeamAchivement"}>
                  <Button variant="outline-success">+ Add</Button>
                </Link>
              </div>
            </div>

            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <SampleCard arr={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achivement;
