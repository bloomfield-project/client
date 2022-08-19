import React, {useState} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";

const data = [
    {
        id: 0012,
        img: <img className="row-image" src={profpic} alt=""></img>, 
        name: "Thilanka Jayaweera",
        btn: <Button variant="secondary">View</Button>,
    },
    {
        id: 0013,
        img: <img className="row-image" src={profpic} alt=""></img>, 
        name: "Ishan Bawantha",
        btn: <Button variant="secondary">View</Button>,  
    },
    {
        id: 0015,
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Nuwan Prasanna",
        btn: <Button varient="secondary">View</Button>,
    },
    {
        id: 0011,
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Gayan Mahanama",
        btn: <Button varient="secondary">View</Button>,
    },
    {
        id: 0016,
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Akila Perera",
        btn: <Button varient="secondary">View</Button>,
    },
];

const columns = [
    {
        title: "Employee ID",
        field: "id",
    },
    {
        title: "Employee",
        field: "img",
    },
    {
        title: "",
        field: "name",
    },
    {
        title: "",
        field: "btn",
    },
];
function AEmployees()
{
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
                <h1>BLOOMFIELD Employees</h1>
            </div>
            <div className="tabs">
            <div className="tabs-left">
            </div>
            <div className="tabs-right">
                <Button varient="outline-success">+ Add</Button>
            </div>
            </div>
            <hr></hr>
            <div className="table-box-1">
                <div className="tablee">
                    <SearchTable title={""}
                    data={data}
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
        </div>
    </div>
</div>

</>
    );
}
