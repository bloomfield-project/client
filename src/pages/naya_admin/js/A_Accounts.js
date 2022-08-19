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
function A_Accounts() {
    const[tabNumber, setTabNumber]  = useState(1);
    const selectTab_1 = ()=>{
        setTabNumber(1);
    }
    const selectTab_2 = ()=>{
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
                        <h1>{tabNumber === 1 ?"Employees" : "Players"}</h1>
                    </div>
                    <div className="tabs">
                        <div className="tabs-left">
                            <h5 className= {tabNumber === 1 ? "tab-active" : "tab"}><a onClick={()=>selectTab_1(1)}>Employees</a> {tabNumber === 1 ? <hr></hr> : ""}</h5>
                            <h5 className= {tabNumber === 2 ? "tab-active" : "tab"}><a onClick={()=>selectTab_2(2)}>Players</a> {tabNumber === 2 ? <hr></hr> : ""}</h5>
                            </div>

                            <div className="tabs-right">
                                <Button variant="outline-success">+ Add</Button>
                            </div>
                            </div>
                            
                            <hr></hr>
                            <div className="table-box-1">
                                <div className="tablee">
                                    <SearchTable
                                    title={false}
                                    data={tabNumber === 2 ? data : data_1}
                                    columns={tabNumber === 2 ? columns : columns_1}
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

export default A_Accounts;