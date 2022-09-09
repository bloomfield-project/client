import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import "../css/Matches_2.css"
import { Link } from "react-router-dom";



const data = [

    {
        match: "vs SCC",
        space: " ",
        title: "Hero Cup",
        date: '2022-05-11',
        btn: <Link to={"/coach/matches3"}><Button variant="secondary">View</Button></Link>,
    },
    {
        match: "vs SCC",
        space: " ",
        title: "Hero Cup",
        date: '2022-05-11',
        btn: <Link to={"/coach/matches3"}><Button variant="secondary">View</Button></Link>,
    },
    {
        match: "vs SCC",
        space: " ",
        title: "Hero Cup",
        date: '2022-05-11',
        btn: <Link to={"coach/matches3"}><Button variant="secondary">View</Button></Link>,
    },
    {
        match: "vs SCC",
        space: " ",
        title: "Hero Cup",
        date: '2022-05-11',
        btn: <Link to={"coach/matches3"}><Button variant="secondary">View</Button></Link>,
    },

];

const data_1 = [

    {
        match: "vs SCC",
        space: " ",
        title: "Hero Cup",
        date: '2022-05-11',
        btn: <Link to={"/coach/matches4"}><Button variant="secondary">View</Button></Link>,
    },
    {
        match: "vs SCC",
        space: " ",
        title: "Hero Cup",
        date: '2022-05-11',
        btn: <Link to={"/coach/matches4"}><Button variant="secondary">View</Button></Link>,
    },
    {
        match: "vs SCC",
        space: " ",
        title: "Hero Cup",
        date: '2022-05-11',
        btn: <Link to={"/coach/matches4"}><Button variant="secondary">View</Button></Link>,
    },
    {
        match: "vs SCC",
        space: " ",
        title: "Hero Cup",
        date: '2022-05-11',
        btn: <Link to={"/coach/matches4"}><Button variant="secondary">View</Button></Link>,
    },

];

const columns = [

    {
        title: "Match",
        field: 'match',
    },
    {
        title: "",
        field: "space",
    },
    {
        title: "Title",
        field: "title",
    },
    {
        title: "Date",
        field: "date",
    },
    {
        title: "",
        field: "btn",
    },
    
];

function Session() {

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
                            <h1>Matches</h1>
                        </div>
                        <div className="tabs">

                            <div className="tabs-left">
                                <h5 className={tabNumber === 1 ? "tab-active" : "tab"} > <a onClick={() => selectTab_1(1)}>Pending</a> {tabNumber === 1 ? <hr></hr> : ""}</h5>
                                <h5 className={tabNumber === 2 ? "tab-active" : "tab"} ><a onClick={() => selectTab_2(1)} >Past</a>  {tabNumber === 2 ? <hr></hr> : ""}</h5>
                            </div>

                            <div className="tabs-right">
                                
                            </div>

                        </div>

                        <hr></hr>
                        <div className="table-box-1" >

                            <div className="tablee">
                                <SearchTable
                                    title={false}
                                    data={tabNumber === 2 ? data_1 : data}
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

export default Session;
