/* eslint-disable no-const-assign */
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import SampleForm from "../../../component/Form/SampleForm";
import { MdOutlineDelete } from 'react-icons/md';
import Header from "../../../component/header/Header";
import moment from "moment";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { BiChevronRightCircle } from "react-icons/bi";
import Navbar from "../../../component/NavigationBar/Navbar";
import ResetSubmit from "../../../component/Form/ResetSubmit";

const Axios = require("axios").default;

var CurrentDate = new Date();


// const tournment_data = [];

// console.log(data[0]);
const columns = [
  {
    title: "Title",
    field: "title",
  },
  {
    title: "",
  },
  {
    title: "",
    field: "btn",
  },
  {
    title: "",
    field: "del",
  },
];



function AddMatch() {
  const [tabNumber, setTabNumber] = useState(1);
  const [change, setChange] = useState(true);
  const [tournment_data, setTournament] = useState([]);

  const AddMatchTitle = (event) => {
    event.preventDefault();
  
    // console.log(event);
  
    let formData = {
      title: event.target[0].value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      date: moment.utc(CurrentDate).format("YYYY-MM-DD"),
    };
  
    // alert("title is : " + event.target[0].value);
  
    Axios.post("/api/manager/addMatchTitle", formData)
      .then((results) => {
        console.log("results.data.message :", results.data.message);
        alert("Title Add Success : " + event.target[0].value);
        setChange(!change)
        // window.location.reload();
      })
      .catch((err) => console.log("error : ", err));
  };

  const handleDelete = (title)=>{
    // alert(title)
    const data = {
      match_title:title
    }
    Axios.post("/api/manager/deleteMatchTitle", data)
      .then((results) => {
        alert("Delete Successfull")
        console.log("results.data.message :", results.data.message);
        setChange(!change)
        // window.location.reload();
      })
      .catch((err) => console.log("error : ", err));
  };

  
  React.useEffect(() => {
    // console.log("inside useEffect")
    Axios.get("http://localhost:3001/api/manager/getMatchTitle")
      .then((response) => {
        console.log(response);
        // setTitle(response.data);
        var tournment = [];
        if (response.data) {
          response.data.data.forEach((element) => {
            var obj = {
              title: element.title,
              btn: (
                <Link
                  to={{
                    pathname: "/manager/AddTournamentMatch/" + element.title,
                    state: { stateParam: true },
                  }}
                >
                  <BiChevronRightCircle
                    style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 35px" }}
                  />
                </Link>
              ),
              del: (
                // <BiChevronRightCircle
                //   style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 35px" }}
                // />
                <MdOutlineDelete style={{fontSize:"30px" , cursor:"pointer"}} onClick={()=>handleDelete(element.title)} />
              ),
            };

            tournment.push(obj);
          });
          setTournament(tournment);
          console.log(tournment);
          console.log(tournment_data);
        }
      })
      .catch((err) => console.log(err));
  }, [change]);

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
            <div className="page-container-gray" style={{ width: "100%" }}>
              <div className="l-back-r-title">
                <div className="l-back-r-title-icon">
                  <Link to={"/manager/MatchDetail"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Add Match</h1>
              </div>

              <div className="form-container">
                <div className="table-box-1">
                  <form style={{ width: "100%" }} onSubmit={AddMatchTitle}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "10px",
                      }}
                    >
                      <lable
                        style={{
                          margin: "auto",
                          width: "90%",
                          textAlign: "left",
                          fontSize: "20px",
                        }}
                      >
                        Match Title
                      </lable>
                      <input
                        type={"text"}
                        placeholder={"Title"}
                        required
                        style={{ width: "90%", margin: "auto" }}
                      ></input>
                    </div>

                    <div className="tabs">
                      <div className="tabs-left"></div>

                      <ResetSubmit />
                    </div>
                  </form>

                  <div
                    className="tabs"
                    style={{ height: "40px", width: "95%" }}
                  >
                    <div className="tabs-left">
                      <h5 className={tabNumber === 1 ? "tab-active" : "tab"}>
                        {" "}
                        <a onClick={() => selectTab_1(1)}>Tournments</a>{" "}
                        {tabNumber === 1 ? <hr></hr> : ""}
                      </h5>
                      <h5 className={tabNumber === 2 ? "tab-active" : "tab"}>
                        {/* <a onClick={() => selectTab_2(2)}> */}
                        <Link
                          to={{
                            pathname: "/manager/AddPracticeMatch/",
                            state: { stateParam: true },
                          }}
                        >
                          <p
                            style={{
                              color: "rgba(0, 146, 112, 1)",
                              fontSize: " ",
                            }}
                          >
                            <a>Practice</a>
                          </p>
                        </Link>

                        {tabNumber === 2 ? <hr></hr> : ""}
                      </h5>
                    </div>

                    <div className="tabs-right"></div>
                  </div>
                  <div className="tablee">
                    {tournment_data ? (
                      <SearchTable
                        t_title={""}
                        data={tournment_data ? tournment_data : "no data"}
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
                    ) : (
                      "No Before added tiles"
                    )}
                  </div>
                </div>
                {/* <SampleForm arr={array1} upload = {true} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMatch;
