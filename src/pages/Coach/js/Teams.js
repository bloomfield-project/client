import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import "../css/Teams.css";
import SearchTable from "../../../component/Search/SearchTable";
import { Link } from "react-router-dom";
import {useEffect} from "react";
import {fetchData} from '../../AuthServer' ;

const data = [

    {
        teamname: "Kandy Vorries",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        CD: "2020-05-06",
        CT: "5.00 PM",
        btn: <Link to="/coach/viewTeams"><Button variant="secondary">View</Button></Link>,
    },
    {
        teamname: "Col SS",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        CD: "2020-05-10",
        CT: "3.00 PM",
        btn: <Link to="/coach/viewTeams"><Button variant="secondary">View</Button></Link>,
    },
    {
        teamname: "Down South Boys",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        CD: "2020-04-06",
        CT: "5.00 PM",
        btn: <Link to="/coach/viewTeams"><Button variant="secondary">View</Button></Link>,
    },
    {
        teamname: "Galle Vorries",
        // img: <img className="row-image" src={profpic} alt=""></img>,
        CD: "2020-05-20",
        CT: "10.00 AM",
        btn: <Link to="/coach/viewTeams"><Button variant="secondary">View</Button></Link>,
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

    const [responseData,setResponseData]=useState([]);
    const url= "player/coach/getTeam"
    async function getData(url,Team=""){


        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        console.log(today)
        
        const reqData ={
            date:today,
        };
        const authRequest = {
        "method":"post",
        "url":url,
        "data":reqData
      }
      fetchData(authRequest).then((response)=>{
            setResponseData(response.data)
        
      }).catch(function(error){
        console.log(error);
      })
    }
    useEffect(() => {
        getData(url)
    }, [])
    const dataupcomming=responseData.data
    console.log(dataupcomming)

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
                                <Link to="/coach/CreateTeam"><Button variant="outline-success">+ Add</Button></Link>
                            </div>

                        </div>

                        <hr></hr>
                        <div className="team-box" style={{height:"fit-content", paddingBottom:"50px"}}>
                        <div className="tablee">
                            <div className="table-head">
                                <div className="col-4-1">Team ID</div>
                                <div className="col-4-1">Team</div>
                                <div className="col-4-1">Date</div>
                                <div className="col-4-1"></div>
                            </div>
                            {dataupcomming?dataupcomming.map((item,i) => <>
                                <div  className="table-row">
                                    <div className="col-4-1" >T-{item.team_id}</div>
                                    <div className="col-4-1">{item.name}</div>
                                    <div className="col-4-1">{item.date}</div>
                                    <div className="col-4-1"><Link to={"/coach/viewTeams/"+item.team_id}><Button variant="secondary">View</Button></Link></div>
                                
                                
                                </div>
                                <hr></hr>
                            </>):""}
                        </div>
                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Teams;
