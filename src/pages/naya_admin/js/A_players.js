import React,{useState} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/Header";

const data =[
    {
        id: "1101",
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Lamesh Iroshan",
        btn: <Button variant="secondary">View</Button>,
    },
    {
        id: "1102",
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Ramesh Nimnath",
        btn: <Button varient="secondary">View</Button>
    },
    {
        id: "1103",
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Nimesh Dilshan",
        btn: <Button varient="row-image" src={profpic} alt=""></Button>
    },
]