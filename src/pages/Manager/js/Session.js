import React, {useState} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";


const data = [
  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Button variant="secondary">View</Button>,
  },

  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Button variant="secondary">View</Button>,
  },
  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Button variant="secondary">View</Button>,
  },
  {
    id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    event: "Crismas party",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Button variant="secondary">View</Button>,
  },

];

// console.log(data[0]);
const columns = [
  {
    title: "ID",
    field:'id',
  },
  {
    title: "Event",
    field: "event",
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

const data_1 = [
  {
    // id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    mentor: "Dr.chaminda wimukthi",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Button variant="secondary">View</Button>,
  },

  {
    // id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    mentor: "Dr.chaminda wimukthi",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Button variant="secondary">View</Button>,
  },
  {
    // id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    mentor: "Dr.chaminda wimukthi",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Button variant="secondary">View</Button>,
  },
  {
    // id: "1101",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    mentor: "Dr.chaminda wimukthi",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Button variant="secondary">View</Button>,
  },

];

// console.log(data[0]);
const columns_1 = [
  {
    title: "Mentor",
    field: "mentor",
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

function Session() {

  const[tabNumber, setTabNumber]  = useState(1);

  const selectTab_1 = ()=>{
    setTabNumber(1);
    // console.log(tabNumber + "selectTab 1");
  }
  const selectTab_2 = ()=>{
    setTabNumber(2);
    // console.log(tabNumber + "selectTab 2");

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
            {/* <div > */}
            <div className="title">
              <h1>{tabNumber === 1 ? "Counseling Sessions" : "Events"}</h1>
            </div>
            <div className="tabs">
                {/* <h5 className="tab-active">Couceling<hr></hr></h5>
                <h5 className="tab">Events</h5> */}
              <div className="tabs-left">
                <h5 className= {tabNumber === 1 ? "tab-active" : "tab" } > <a  onClick={()=>selectTab_1(1)}>Couceling</a> {tabNumber === 1 ? <hr></hr> : ""}</h5>
                <h5 className= {tabNumber === 2 ? "tab-active" : "tab" } ><a  onClick={()=>selectTab_2(2)} > Events</a>  {tabNumber === 2 ? <hr></hr> : ""}</h5>
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
                // height: 40px
    //             font-size: 1.2rem;
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

export default Session;
