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
    <div className="header-container"></div>
</div>

</>
    );
}
