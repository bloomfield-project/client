import React, {useState,useEffect} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link } from "react-router-dom";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import "../css/Table.css"
import SearchTable from "../../../component/Search/SearchTable";
import player from "../player.jpg"
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import {useSelector} from 'react-redux'
import {fetchData} from '../../AuthServer'











const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

const data = [
 
  {
    sessionname: "PS-001",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Batting",
    date: '2022-05-11',
    time: '09:00 am',
    btn: (
        <Link to={"/player/PSessionDetails"}>
          <Button variant="secondary">View</Button>
        </Link>
      ),
  },

  {
    sessionname: "PS-001",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Batting",
    date: '2022-05-11',
    time: '09:00 am',
    btn: (
        <Link to={"/player/PSessionDetails"}>
          <Button variant="secondary">View</Button>
        </Link>
      ),
  },

  {
    sessionname: "PS-001",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Batting",
    date: '2022-05-11',
    time: '09:00 am',
    btn: (
        <Link to={"/player/PSessionDetails"}>
          <Button variant="secondary">View</Button>
        </Link>
      ),
  },

  {
    sessionname: "PS-001",
    // img: <img className="row-image" src={profpic} alt=""></img>,
    session: "Batting",
    date: '2022-05-11',
    time: '09:00 am',
    btn: (
        <Link to={"/player/PSessionDetails"}>
          <Button variant="secondary">View</Button>
        </Link>
      ),
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



// const data_1 = [
//   {
//     // id: "1101",
//     // img: <img className="row-image" src={profpic} alt=""></img>,
//     mentor: "Dr.chaminda wimukthi",
//     date: '2022-05-11',
//     time: '09:00 am',
//     btn: <Button variant="secondary">View</Button>,
//   },

//   {
//     // id: "1101",
//     // img: <img className="row-image" src={profpic} alt=""></img>,
//     mentor: "Dr.chaminda wimukthi",
//     date: '2022-05-11',
//     time: '09:00 am',
//     btn: <Button variant="secondary">View</Button>,
//   },
//   {
//     // id: "1101",
//     // img: <img className="row-image" src={profpic} alt=""></img>,
//     mentor: "Dr.chaminda wimukthi",
//     date: '2022-05-11',
//     time: '09:00 am',
//     btn: <Button variant="secondary">View</Button>,
//   },
//   {
//     // id: "1101",
//     // img: <img className="row-image" src={profpic} alt=""></img>,
//     mentor: "Dr.chaminda wimukthi",
//     date: '2022-05-11',
//     time: '09:00 am',
//     btn: <Button variant="secondary">View</Button>,
//   },

// ];

// // console.log(data[0]);
// const columns_1 = [
//   {
//     title: "Mentor",
//     field: "mentor",
//   },
//   {
//     title: "Date",
//     field: "date",
//   },
//   {
//     title: "Time",
//     field: "time",
//   },
//   {
//     title: "",
//     field: "btn",
//   }
// ];

function Session() {

  const[tabNumber, setTabNumber]  = useState(1);
  const loginData= useSelector(state => state.auth.data)
  // const userID=loginData.data.user_id;
  console.log(loginData.data.nic);
  console.log(loginData.data.user_id);


  const selectTab_1 = ()=>{
    setTabNumber(1);
    // console.log(tabNumber + "selectTab 1");
  }
  const selectTab_2 = ()=>{
    setTabNumber(2);
    // console.log(tabNumber + "selectTab 2");

  }


  const [responseData,setResponseData]=useState([]);
  async function getData(){
    

    const reqData ={
      user_id:5,
      
    };
    const authRequest = {
    "method":"post",
    "url":"player/session",
    "data":reqData
  }
  fetchData(authRequest).then((response)=>{
    setResponseData(response.data)
  }).catch(function(error){
    console.log(error);
  })
  }

  useEffect(() => {
    getData()
  }, [])
  
console.log(responseData);
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
            {/* <div > */}
            <div className="title">
              <h1>Practice Sessions</h1>
            </div>
            {/* <div className="tabs"> */}
                {/* <h5 className="tab-active">Couceling<hr></hr></h5>
                <h5 className="tab">Events</h5> */}
              {/* <div className="tabs-left">
                <h5 className= {tabNumber === 1 ? "tab-active" : "tab" } > <a  onClick={()=>selectTab_1(1)}>All</a> {tabNumber === 1 ? <hr></hr> : ""}</h5>
                <h5 className= {tabNumber === 2 ? "tab-active" : "tab" } ><a  onClick={()=>selectTab_2(1)} >Today</a>  {tabNumber === 2 ? <hr></hr> : ""}</h5>
              </div>

              
                                
            </div>
            
            <hr></hr> */}
            <div className="playerPreformanceBody">
                
                <Tabs defaultActiveKey="1" onChange={onChange}>
                    
                    <TabPane tab="Upcomming" key="1">
                      <div className="filter-by-date-G">
                        <label>Select month:</label>
                        <input type="month" className="filter-by-date-month"></input>
                      </div>
                      <div className="table-box-11">
                        <div className="tablee"> 
                          
                            <div className="table-head">
                                <div className="col-51">Session ID</div>
                                <div className="col-51">Session</div>
                                <div className="col-51">Date</div>
                                <div className="col-51">Time</div>
                                <div className="col-51"></div>
                            </div>

                            {/* <div className="table-row">
                                <div className="col-51">PS-1</div>
                                <div className="col-51">Batting</div>
                                <div className="col-51">2022-10-13</div>
                                <div className="col-51">09.00am</div>
                                <div className="col-51"><Link to={"/player/PSessionDetails"}><Button variant="secondary">View</Button></Link></div>
                                
                            </div> */}
                            <hr></hr>
                            {dataupcomming.map((item,i)  => 
                              <><div key={i} className="table-row">
                                <div className="col-51">PS-{item.session_id}</div>
                                <div className="col-51">{item.type}</div>
                                <div className="col-51">{item.date}</div>
                                <div className="col-51">{item.time}</div>
                                <div className="col-51"><Link to={"/player/PSessionDetails"}><Button variant="secondary">View</Button></Link></div>

                              </div><hr></hr></>
                            )}
                            {/*  <li key={i}>Test</li>) */}
                        </div>
                      
                      </div>
                        
                    </TabPane>
                    <TabPane tab="Past" key="2">
                      <div className="table-box-11">
                        <div className="tablee"> 
                          <SearchTable
                          t_title={false}
                          data={tabNumber === 2 ? data : data}
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