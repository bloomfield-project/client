import React, {useState} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import { Link } from "react-router-dom";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

const data_1 = [
 
  {
    sessionname: "PS-001",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Batting",
    date: '2022-05-11',
    time: '09:00 am',
    btn: <Link to="/coach/editPracticeSession"><Button variant="secondary">View</Button></Link>,
  },

  {
    sessionname: "PS-002",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Bowling",
    date: '2022-05-21',
    time: '10:00 am',
    btn: <Link to="/coach/editPracticeSession"><Button variant="secondary">View</Button></Link>,
  },

  {
    sessionname: "PS-003",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Fielding",
    date: '2022-06-11',
    time: '10:00 am',
    btn: <Link to="/coach/editPracticeSession"><Button variant="secondary">View</Button></Link>,
  },

  {
    sessionname: "PS-004",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Bowling",
    date: '2022-05-13',
    time: '11:00 am',
    btn: <Link to="/coach/editPracticeSession"><Button variant="secondary">View</Button></Link>,
  },

];

const data_2 = [
 
  {
    sessionname: "PS-010",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Batting",
    date: '2022-05-05',
    time: '09:00 am',
    btn: <Link to="/coach/VPS"><Button variant="secondary">View</Button></Link>,
  },

  {
    sessionname: "PS-011",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Bowling",
    date: '2022-05-05',
    time: '11:00 am',
    btn: <Link to="/coach/VPS"><Button variant="secondary">View</Button></Link>,
  },

  {
    sessionname: "PS-012",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Fielding",
    date: '2022-05-05',
    time: '1:00 pm',
    btn: <Link to="/coach/VPS"><Button variant="secondary">View</Button></Link>,
  },

  {
    sessionname: "PS-013",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Batting",
    date: '2022-05-05',
    time: '3:00 pm',
    btn: <Link to="/coach/VPS"><Button variant="secondary">View</Button></Link>,
  },

];

// console.log(data[0]);
const columns = [
  {
    title: "Session Name",
    field:'sessionname',
  },
  {
    title: "Session",
    field: "session",
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
              <h1>Practice Sessions</h1>
            </div>
            <div className="tabs"  style={{justifyContent:"right"}}>
                
              

              <div className="tabs-right" >
                <Link to="/coach/APS"><Button variant="outline-success">+ Add</Button></Link>
              </div>
                                
            </div>
            <div className="tabs-contain-box">
            <Tabs defaultActiveKey="1" onChange={onChange}>
                        
                  <TabPane tab="Today" key="1">

                  <div className="matches-container-outer-box">
                  
                  
                      <div className="tablee" style={{width:"100%"}}> 
                        <div className="table-head">
                            <div className="col-5-1">Session ID</div>
                            <div className="col-5-2">Session</div>
                            <div className="col-5-3">Date</div>
                            <div className="col-5-4">Time</div>
                            <div className="col-5-5"></div>
                        </div>
                        <div  className="table-row">
                            <div className="col-5-1" >PS-001</div>
                            <div className="col-5-2">Batting</div>
                            <div className="col-5-1">2022-01-01</div>
                            <div className="col-5-1">09.00</div>
                            <div className="col-5-1"><Link to="/coach/VPS"><Button variant="secondary">View</Button></Link></div>

                        
                        <hr></hr>
                      </div>
                    
                  </div>

                  </div>
                      
                  </TabPane>
                  <TabPane tab="Future" key="2">
                  <div className="matches-container-outer-box">
                  
                  
                      <div className="tablee" style={{width:"100%"}}> 
                        <div className="table-head">
                            <div className="col-5-1">Session ID</div>
                            <div className="col-5-2">Session</div>
                            <div className="col-5-3">Date</div>
                            <div className="col-5-4">Time</div>
                            <div className="col-5-5"></div>
                        </div>
                        <div  className="table-row">
                            <div className="col-5-1">PS-001</div>
                            <div className="col-5-2">Batting</div>
                            <div className="col-5-1">2022-01-01</div>
                            <div className="col-5-1">09.00</div>
                            <div className="col-5-1"><a href="/coach/editPracticeSession"><button>View</button></a></div>

                        
                        <hr></hr>
                      </div>
                    
                  </div>

                  </div>
                      
                  </TabPane>
              
          </Tabs>
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
