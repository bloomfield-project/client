import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../Player.png";
import { Link } from "react-router-dom";



const data_1 = [

    {
        nameAndPhoto: "Asitha Muthumala",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Batting",
        date: '2022-05-11',
        time: '09:00 am',
        btn: <Button variant="secondary">View</Button>,
    },
    {
        nameAndPhoto: "Bimsara Perera",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Bowling",
        date: '2022-05-15',
        time: '10:00 am',
        btn: <Button variant="secondary">View</Button>,
    },
    {
        nameAndPhoto: "Gihan Prasanna",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Batting",
        date: '2022-05-14',
        time: '12:00 am',
        btn: <Button variant="secondary">View</Button>,
    },
    {
        nameAndPhoto: "Dev Peris",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Fielding",
        date: '2022-05-16',
        time: '1:00 am',
        btn: <Button variant="secondary">View</Button>,
    },{
        nameAndPhoto: "Nuwan Kulasekara",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Bowling",
        date: '2022-05-20',
        time: '10:00 am',
        btn: <Button variant="secondary">View</Button>,
    },

];

const data_2 = [

    {
        nameAndPhoto: "Asitha Muthumala",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Batting",
        date: '2022-05-11',
        time: '09:00 am',
        btn: <Button variant="secondary">View</Button>,
    },
    {
        nameAndPhoto: "Bimsara Perera",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Bowling",
        date: '2022-05-15',
        time: '10:00 am',
        btn: <Button variant="secondary">View</Button>,
    },
    {
        nameAndPhoto: "Gihan Prasanna",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Batting",
        date: '2022-05-14',
        time: '12:00 am',
        btn: <Button variant="secondary">View</Button>,
    },
    {
        nameAndPhoto: "Dev Peris",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Fielding",
        date: '2022-05-16',
        time: '1:00 am',
        btn: <Button variant="secondary">View</Button>,
    },{
        nameAndPhoto: "Nuwan Kulasekara",
        img: <img className="row-image" src={profpic} alt=""></img>,
        subject: "Bowling",
        date: '2022-05-20',
        time: '10:00 am',
        btn: <Button variant="secondary">View</Button>,
    },
    
];

const columns = [

    {
        title: "Player",
        field: 'nameAndPhoto',
    },
    {
        title: "",
        field: 'img',
    },
    {
        title: "Subject",
        field: "subject",
    },
    {
        title: "Date",
        field: "date",
    },
    {
        title: "Time",
        field: "time",
    },
    {
        title: "",
        field: "btn",
    }
];

function Appoinments() {

    const [tabNumber, setTabNumber] = useState(1);

    const selectTab_1 = () => {
        setTabNumber(1);
    }

    const selectTab_2 = () => {
        setTabNumber(2);
    }

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
                            <h1>Appoinments</h1>
                        </div>
                        <div className="tabs">

                            <div className="tabs-left">
                                <h5 className={tabNumber === 1 ? "tab-active" : "tab"} > <a onClick={() => selectTab_1(1)}>Accepted</a> {tabNumber === 1 ? <hr></hr> : ""}</h5>
                                <h5 className={tabNumber === 2 ? "tab-active" : "tab"} ><a onClick={() => selectTab_2(1)} >Pending</a>  {tabNumber === 2 ? <hr></hr> : ""}</h5>
                            </div>

                            {/* <div className="tabs-right">
                                <Button variant="outline-success">+ Add</Button>
                            </div> */}

                        </div>

                        <hr></hr>
                        <div className="table-box-1">
                            <div className="tablee">
                                <SearchTable
                                    title={false}
                                    data={tabNumber === 2 ? data_2 : data_1}
                                    columns={tabNumber === 2 ? columns : columns}
                                    searching={true}
                                    sort={false}
                                    filter={false}
                                    paging={true}
                                    headerC={"#4a4a4a"}
                                    headerH={"40px"}
                                    headerFC={'white'}
                                    headerFS={'1.2rem'}
                                    headerFW={'500'}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Appoinments;
