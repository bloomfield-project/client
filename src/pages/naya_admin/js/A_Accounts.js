import React,{useState} from "react";
import Header from "../../../component/header/Header";
import button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";

const data = [
    {
        id: "001",
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Aruna Perera",
        role: "Coach",
        btn: <Button variant="secondary">View</Button>,
    },
    {
        id: "002",
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Nilantha kumara",
        role: "Assistant Manager",
        btn: <Button variant="secondary">View</Button>,
    },
    {
        id: "003",
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Gihan Madushan",
        role: "Manager",
        btn: <Button variant="secondary">View</Button>,
    },
    {
        id: "004",
        img: <img className="row-image" src={profpic} alt=""></img>,
        name: "Ashan Silva",
        role: "Accountant",
        btn: <Button variant="secondary">View</Button>,
    },
    {
    id: "005",
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Samantha Bandara",
    role: "Assistant accountant",
    btn: <Button variant="secondary">View</Button>,
    },
];

const columns = [
    {
      title: "Employee ID",
      field: "id",  
    },

    {
        title: "Employees",
        field: "img",  
      },

      {
        title: "",
        field: "name",  
      },
      {
        title: "Role",
        field: "role",  
      },
      {
        title: "",
        field: "btn",
      },

];
const data_1 = [
{
    id: "1101", 
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Lamesh Iroshan",
    btn: <Button variant="secondary">View</Button>,
},
{
    id: "1103", 
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Ramesh Nimnath",
    btn: <Button variant="secondary">View</Button>,
},
   {
    id: "1104", 
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Nimesh Dilshan",
    btn: <Button variant="secondary">View</Button>,
   },
   {
    id: "1102", 
    img: <img className="row-image" src={profpic} alt=""></img>,
    name: "Saaru wijesinghe",
    btn: <Button variant="secondary">View</Button>,
   },
   {
    id: "1106",
    img: <img className="row-change" src={profpic} alt=""></img>,
    name: "Ashan grove",
    btn: <Button variant="secondary">View</Button>,
   },
];

    

   

    
