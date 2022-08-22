import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";

const List = [
  { id: 1, name: "John Doe", Age: 27 },
  { id: 1, name: "John Doe", Age: 27 },
  { id: 1, name: "John Doe", Age: <Button variant="secondary">View</Button> },
];

// const colNames = ["id", "Name", "Age"];

// const tableStyle = 'striped bordered hover size="sm" ';

const data = [
  {
    id: "1101",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "lamesh iroshan",
    ammount: "5000",
    btn: <Button variant="secondary">View</Button>,
  },

  {
    id: "1102",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Ramesh nimnath",
    ammount: "5000",
    btn: <Button variant="secondary">View</Button>,
  },
  {
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Nimesh dilshan",
    ammount: "5000",
    btn: <Button variant="secondary">View</Button>,
  },
  {
    id: "1103",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Saaru wijesinghe",
    ammount: "5000",
    btn: <Button variant="secondary">View</Button>,
  },
  {
    id: "1105",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Ashan grove",
    ammount: "5000",
    btn: <Button variant="secondary">View</Button>,
  },
];

// console.log(data[0]);
const columns = [
  {
    title: "Payment ID",
    field: "id",

    // headerStyle: {
    //   backgroundColor: '#039be5',
    // }
  },
  {
    title: "Player",
    field: "img",
  },
  {
    title: "",
    field: "name",
  },
  {
    title: "Ammount",
    field: "ammount",
    cellStyle: {
      color: "rgba(41, 149, 65, 1)",
    },
  },
  {
    title: "",
    field: "btn",
  },
];

const data_1 = [
  {
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "lamesh iroshan",
    ammount: "-5000",
    btn: <Button variant="secondary">View</Button>,
  },

  {
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Ramesh nimnath",
    ammount: "-5000",
    btn: <Button variant="secondary">View</Button>,
  },
  {
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Nimesh dilshan",
    ammount: "-5000",
    btn: <Button variant="secondary">View</Button>,
  },
  {
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Saaru wijesinghe",
    ammount: "-5000",
    btn: <Button variant="secondary">View</Button>,
  },
  {
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Ashan grove",
    ammount: "-5000",
    btn: <Button variant="secondary">View</Button>,
  },
];

// console.log(data[0]);
const columns_1 = [
  {
    title: "Player",
    field: "img",
  },
  {
    title: "",
    field: "name",
  },
  {
    title: "Ammount",
    field: "ammount",
    cellStyle: {
      color: "rgba(149, 41, 41, 1)",
    },
  },
  {
    title: "",
    field: "btn",
  },
];

function AnnualMembership() {
  const [tabNumber, setTabNumber] = useState(1);

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
            {/* <div > */}
            <div className="title">
              <h1>Annual Membership</h1>
            </div>
            <div style={{ width: "90%",display:"flex" , margin:"15px 0 15px 0px" }}>
              {" "}
              <label style={{ fontSize:"x-large", width: "50%" }}>
                Membership Fee : 3000 (LKR)
              </label>{" "}
              <button type="submit" class="btn btn-success">
                Edit
              </button>{" "}
            </div>

            <div className="tabs">
              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"}>
                  {" "}
                  <a onClick={() => selectTab_1(1)}> Paid</a>{" "}
                  {tabNumber === 1 ? <hr></hr> : ""}
                </h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"}>
                  <a onClick={() => selectTab_2(2)}> All</a>{" "}
                  {tabNumber === 2 ? <hr></hr> : ""}{" "}
                </h5>
              </div>

              {/* <div className="tabs-right">
                <Button variant="outline-success">+ Add</Button>
              </div>             */}
            </div>

            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <SearchTable
                  title={""}
                  data={tabNumber === 1 ? data : data_1}
                  columns={tabNumber === 1 ? columns : columns_1}
                  searching={true}
                  sort={false}
                  filter={false}
                  paging={true}
                  headerC={"#4a4a4a"}
                  headerH={"40px"}
                  headerFC={"white"}
                  headerFS={"1.2rem"}
                  headerFW={"500"}
                  // height: 40px
                  //             font-size: 1.2rem;
                  // font-weight: 500;
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

export default AnnualMembership;
