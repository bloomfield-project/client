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

const data_1 = [
  {
    main_title: "Lakmal maduranga",
    title: "Won the hero cup ODI series",
    img: <img className="card-detail-img" src={profpic} alt=""></img>,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also",
    date: "2022-05-11",
    time: "09:00 am",
    // btn: (
    //   <Link to={"#"}>
    //     <Button variant="secondary">View</Button>
    //   </Link>
    // ),
  },

  {
    main_title: "Shehan Lakmal",
    title: "Won the Champion leage Test series",
    img: <img className="card-detail-img" src={profpic} alt=""></img>,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also",
    date: "2022-05-11",
    time: "09:00 am",
    // btn: (
    //   <Link to={"#"}>
    //     <Button variant="secondary">View</Button>
    //   </Link>
    // ),
  },
  {
    main_title: "Shehan Lakmal",
    title: "Won the hero cup ODI series",
    img: <img className="card-detail-img" src={profpic} alt=""></img>,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also",
    date: "2022-05-11",
    time: "09:00 am",
    // btn: (
    //   <Link to={"#"}>
    //     <Button variant="secondary">View</Button>
    //   </Link>
    // ),
  },
  {
    main_title: "Shehan Lakmal",
    title: "Won the hero cup ODI series",
    img: <img className="card-detail-img" src={profpic} alt=""></img>,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,  but also",
    date: "2022-05-11",
    time: "09:00 am",
    // btn: (
    //   <Link to={"#"}>
    //     <Button variant="secondary">View</Button>
    //   </Link>
    // ),
  },
];

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

  console.log(tachi)
if(tachi){
  tachi.map((item, i)=>{
    data[i] =
    {
        title: item.title,
        img: <img className="card-detail-img" src={item.image} alt=""></img>,
        description: item.description,
        date: moment.utc(item.date).format("YYYY-MM-DD"),       
      
    }
    
  })
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
              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"}>
                  {" "}
                  <a onClick={() => selectTab_1(1)}>Team </a>{" "}
                  {tabNumber === 1 ? <hr></hr> : ""}
                </h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"}>
                  <a onClick={() => selectTab_2(2)}> Players</a>{" "}
                  {tabNumber === 2 ? <hr></hr> : ""}
                </h5>
              </div>

              <div className="tabs-right">
                <Link
                  to={
                    tabNumber === 1
                      ? "/manager/AddTeamAchivement"
                      : "/manager/AddPlayerAchivement"
                  }
                >
                  <Button variant="outline-success">+ Add</Button>
                </Link>
              </div>
            </div>

            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                {tabNumber === 1 ? (
                  <SampleCard arr={data} />
                ) : (
                  <SampleCard arr={data_1} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achivement;
