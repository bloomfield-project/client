import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import "../css/Teams.css";
import SearchTable from "../../../component/Search/SearchTable";
import { Link } from "react-router-dom";


const data = [

    {
        teamname: "Kandy Vorries",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        CD: "2020-05-06",
        CT: "5.00 PM",
        btn: <Link to=""><Button variant="secondary">View</Button></Link>,
    },
    {
        teamname: "Col SS",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        CD: "2020-05-10",
        CT: "3.00 PM",
        btn: <Link to=""><Button variant="secondary">View</Button></Link>,
    },
    {
        teamname: "Down South Boys",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        CD: "2020-04-06",
        CT: "5.00 PM",
        btn: <Link to=""><Button variant="secondary">View</Button></Link>,
    },
    {
        teamname: "Galle Vorries",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        CD: "2020-05-20",
        CT: "10.00 AM",
        btn: <Link to=""><Button variant="secondary">View</Button></Link>,
    },

];


const columns = [
    
    {
        title: "Team Name",
        field: 'teamname',
    },
    {
        title: "",
        field: '',
    },
    {
        title: "Created Date",
        field: 'CD',
    },
    {
        title: "",
        field: '',
    },
    {
        title: "Created Time",
        field: 'CT',
    },
    {
        title: "",
        field: '',
    },
    {
        title: "",
        field: "btn",
    }

];


function Teams() {

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

                        <div className="tabs">

                            <div>
                                <h1>Teams</h1>
                            </div>

                            <div className="tabs-right">
                                <Link to=""><Button variant="outline-success">+ Add</Button></Link>
                            </div>

                        </div>

                        <hr></hr>
                        <div className="team-box">
                        <div className="tablee">
                                <SearchTable
                                    title={false}
                                    data={data}
                                    columns={columns}
                                    searching={true}
                                    sort={false}
                                    filter={false}
                                    paging={true}
                                    headerC={"#4a4a4a"}
                                    headerH={"40px"}
                                    headerFC={'white'}
                                    headerFS={'1.2rem'}
                                    headerFW={'500'}
                                    // height: 40px
                                    // font-size: 1.2rem;
                                    // font-weight: 500;
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Teams;
