import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../Player.png";



const data = [

    {
        playerid: "BF-001",
        img: <img className="row-image" src={profpic} alt=""></img>,
        player: <a href="#">Asitha Muthumala</a>,
        
        btn: <Button variant="secondary">Progress</Button>,
    },
    {
        playerid: "BF-001",
        img: <img className="row-image" src={profpic} alt=""></img>,
        player: <a href="#">Asitha Muthumala</a>,
        
        btn: <Button variant="secondary">Progress</Button>,
    },
    {
        playerid: "BF-001",
        img: <img className="row-image" src={profpic} alt=""></img>,
        player: <a href="#">Asitha Muthumala</a>,
        
        btn: <Button variant="secondary">Progress</Button>,
    },
    {
        playerid: "BF-001",
        img: <img className="row-image" src={profpic} alt=""></img>,
        player: <a href="#">Asitha Muthumala</a>,
        
        btn: <Button variant="secondary">Progress</Button>,
    },

];

const columns = [

    {
        title: "Player ID",
        field: 'playerid',
    },
    {
        title: "",
        field: 'img',
    },
    {
        title: "Player",
        field: "player",
    },
    {
        title: "",
        field: "btn",
    }
];

function Players() {

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
                            <h1>BLOOMFIELD Players</h1>
                        </div>

                        <hr></hr>
                        <div className="table-box-1">
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
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Players;
