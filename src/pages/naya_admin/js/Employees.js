import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";
const Axios = require("axios").default;

const dataArray = [
  
];

// console.log(data[0]);
const columns = [
  {
    title: "Employee ID",
    field: "id",
  },
  {
    title: "Employee",
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

function Employees() {


  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/user/employees").then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log("post data function ", post);
  
  if (!post) return null;

  let role ;
  let id_prefix;
  {post.data.map((item, i) => {
    role = (item.role).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    
    if(role == "Coach"){
      id_prefix = "BC-"
    }else if(role == "Manager"){
      id_prefix = "BM-"
    }
     dataArray[i] = 
        {
          id: id_prefix + item.user_id ,
          name: (item.name).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
          img: <img className="row-image" src={profpic} alt=""></img>,
          contact: item.contact,
          email: item.email,
          role:(item.role).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()),
          btn: (
            <Link to={"/admin/EditEmployee/"+ item.user_id}>
              <Button variant="secondary">View</Button>
            </Link>
          ),
        }
        
   
  })}
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
              <h1>BLOOMFIELD Employees</h1>
            </div>

            <div className="tabs">
              <div className="tabs-left"></div>

              <div className="tabs-right">
                <Link to={"/admin/AddEmployee"}>
                  <Button
                   
                    variant="outline-success"
                  >
                    + Add
                  </Button>
                </Link>
              </div>
            </div>
            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <SearchTable
                  t_title={""}
                  data={dataArray}
                  columns={columns}
                  searching={true}
                  sort={false}
                  filter={false}
                  paging={true}
                  headerC={"#4a4a4a"}
                  headerH={"40px"}
                  headerFC={"white"}
                  headerFS={"1.2rem"}
                  headerFW={"500"}
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

export default Employees;
