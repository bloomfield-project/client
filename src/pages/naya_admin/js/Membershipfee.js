import React,{useState} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";



function Membershipfee() 
{
    const data = [
        {
            id: "1101",
            img: <img className="row-image" src={profpic} alt=""></img>,
            name: "Lamesh Iroshan",
            amount: "3000",
            btn: <Button varient="secondary">View</Button>,
        },
    
        {
            id: "1102",
            img: <img className="row-image" src={profpic} alt=""></img>,
            name: "Ramesh Nimantha",
            amount: "3000",
            btn: <Button varient="secondary">View</Button>,
        },
    
        {
            id: "1104",
            img: <img className="row-image" src={profpic} alt=""></img>,
            name: "Nimesh Dilshan",
            amount: "3000",
            btn: <Button varient="secondary">View</Button>,
        },
    
        {
            id: "1103",
            img: <img className="row-image" src={profpic} alt=""></img>,
            name: "Saaru Wijesinghe",
            amount: "3000",
            btn: <Button varient="secondary">View</Button>,
        },
    
        {
            id: "1105",
            img: <img className="row-image" src={profpic} alt=""></img>,
            name: "Ashan grove",
            amount: "3000",
            btn: <Button varient="secondary">View</Button>,
        },
    
    ];
    
    const columns = [
        {
            title: "payment ID",
            field: "id",
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
            title: "Amount",
            field: "amount",
        },
        {
            title: "",
            field: "btn",
        },
    ];
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
                <h1>Annual Membership Fee</h1>
            </div>  
        <div className="tabs">
           <div className="tabs-left"> 
           </div>

          {/*  <div className="tabs-right">
            <Button variant="outline-success">+ Add</Button> 
    </div>*/}
        </div>
        <hr></hr>
        <div className="table-box-1">
            <div className="tablee">
                <SearchTable
                title={""}
                data={data}
                columns={"columns"}
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
               // font-size: 1.2rem;
               // font-weight: 500;
               />

            </div>
        </div>
        {/* </div> */}
        </div>
    </div>
</div>
{/* <Container className="page-container-1">
        <Row className="header-container">
          <Col >
            <Header />
          </Col>
        </Row>
        <Row className="body-container-1">
          <Col md="auto">
            <Navbar/>
          </Col>
          <Col md="auto">
            <Tables list={List} colNames={colNames} />
          </Col>
        </Row>
      </Container> */}
</>
    );
}

export default Membershipfee;
