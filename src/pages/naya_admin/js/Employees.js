import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
// import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import Modal from "react-bootstrap/Modal";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";
import { useDispatch, useSelector } from "react-redux";

const Axios = require("axios").default;

const dataArray = [];
let user_id;
let current_user_role;
let compRes;


function Employees() {
  const [employee_data, setEmployeeData] = useState([]);
  const [post, setPost] = React.useState(null);
  const loginData = useSelector((state) => state.auth.data);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  // const [compRes, setRes] = React.useState("");

  const [responseData, setResponseData] = useState([]);
  const [responseDataPast, setPastResponseData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [coachDeleteErrorMessage, setCoachDeleteErrorMessage] = useState(false);
  const [employeeDeleteModelShow, setemployeeDeleteModelShow] = useState(false);
  const [modelErrorMessage, setModelErrorMessage] = useState("");
  let role;
  let id_prefix;

  React.useEffect(() => {
    getDataFromDatabase();
  }, []);

  function getDataFromDatabase() {
    Axios.get("http://localhost:3001/api/user/employees").then((response) => {
      setPost(response.data);
      var tournment = [];
      if (response.data) {
        response.data.data.forEach((element) => {
          role = element.role.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
          );

          if (role === "Coach") {
            id_prefix = "BC-";
          } else if (role === "Manager") {
            id_prefix = "BM-";
          }
          var obj = {
            id: id_prefix + role.user_id,
            name: element.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            ),
            img: <img className="row-image" src={profpic} alt=""></img>,
            contact: element.contact,
            email: element.email,
            role: element.role.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            ),
            edit: (
              <Link to={"/admin/EditEmployee/" + element.user_id}>
                <Button variant="secondary">Edit</Button>{" "}
              </Link>
            ),
            delete: (
              <Button
                variant="secondary"
                className="btn btn-danger"
                value={element.user_id + "/" + element.role}
                onClick={deleteEmployee}
              >
                Delete
              </Button>
            ),
          };

          tournment.push(obj);
        });
        setEmployeeData(tournment);
        console.log(tournment);
        console.log(employee_data);
      }
    });
  }
  const deleteEmployee = (event) => {
    event.preventDefault();
    console.log(event);
    let temp = event.target.attributes[1].nodeValue;
    user_id = temp.split("/")[0];
    current_user_role = temp.split("/")[1];
    // if (name) {
    console.log(
      "name from button : " +
        event.target.attributes[1].nodeValue +
        " " +
        user_id
    );
    handleShow();
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    //alert("hahvjvjkbbnnn,nkjlk;kl;mlnkbhcfdxdzezezez")
    console.log("Form was submitted! : ", event.target[0].value);
    let mdata = {
      nic: loginData.data.nic,
      password: event.target[0].value,
    };

    passCompare(mdata);
    console.log("succes ", compRes);
  };

  function passCompare(mdata) {
    console.log("data : " + current_user_role + " -- " + user_id);
    Axios.post("http://localhost:3001/api/manager/getPassword", mdata)
      .then((res) => {
        compRes = res.data.comp;
        console.log(res.data.comp);
        if (compRes) {
          doDelete();

          console.log("data : ", data);
          console.log("data : ", current_user_role);
          console.log("Passwords are mathched");
        } else {
          alert("Enter Correct Password !");
        }
      })
      .catch((err) => console.log("error is arized", err));
  }

  function doDelete() {
    let data = {
      user_id: user_id,
      user_role: current_user_role,
    };
    Axios.post("http://localhost:3001/api/user/deleteEmployee", data)
      .then((res) => {
        if (res.data.result.status == "Delete Fails!") {
          setCoachDeleteErrorMessage(true);
          setModelErrorMessage(res.data.result.message);
        } else if (res.data.result.status == "Successfuly Deleted!") {
          setemployeeDeleteModelShow(true);
          getDataFromDatabase();
        }
        console.log(res.data.result);
        console.log(res.data.result.status);
        console.log(res.data.result.status == "Coach Delete Fails!");
        console.log("res.data.status");
        // console.log(res.data.result.status);
        // alert("password match")
        handleClose();
        // window.location.reload();
      })
      .catch((err) => console.log("error is arized", err));
  }

  console.log("post data function ", post);
  const data = post ? post.data : "";
  if (!post) return null;


  function closeModel2(e) {
    e.preventDefault();
    setCoachDeleteErrorMessage(false);
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
              <h1>BLOOMFIELD Employees</h1>
            </div>

            <div className="tabs">
              <div className="tabs-left"></div>

              <div className="tabs-right">
                <Link to={"/admin/AddEmployee"}>
                  <Button variant="outline-success">+ Add</Button>
                </Link>
              </div>
            </div>
            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <input
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  style={{width:'100%',marginBottom:"10px",border:'none', borderBottom:'1px solid black'}}
                />
                <div className="table-head">
                  <div className="coll-4-11">Employee Name</div>
                  <div className="coll-4-11">Emil</div>

                  <div className="coll-4-1">Job Role</div>
                  <div className="coll-4-1"></div>
                  <div className="coll-4-1"></div>
                </div>

                {employee_data !== []
                  ? employee_data
                      ?.filter((item) => {
                        return search.toLowerCase() === ""
                          ? item
                          : item.name?.toLowerCase().includes(search) ||
                              item.email?.includes(search) ||
                              item.role?.toLowerCase().includes(search);
                      })
                      .map((item, i) => (
                        <>
                          <div className="table-row">
                            <div
                              className="coll-4-11"
                              style={{ oveflow: "hidden" }}
                            >
                              {item.name}
                            </div>
                            <div
                              className="coll-4-11"
                              style={{ oveflow: "hidden" }}
                            >
                              {item.email}
                            </div>

                            <div className="coll-4-1">{item.role}</div>
                            <div className="coll-4-1">{item.edit}</div>
                            <div className="coll-4-1">{item.delete}</div>
                          </div>
                          <hr></hr>
                        </>
                      ))
                  : "No data to show"}
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
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title> Enter Password For Confirm </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          {/* <h1>Render Count: {count.current}</h1> */}
          <form className="form-group mb-3" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control w-76 bg-white text-dark mx-auto"
              style={{ marginLeft: "5px", width: "90%" }}
              // value="960210324v"
            />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
              <button type="submit" className="btn btn-danger">
                Confirm
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>
      <Modal
        show={coachDeleteErrorMessage}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title> Error </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          <h5 style={{ paddingLeft: "20px" }}> {modelErrorMessage}</h5>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
            <button
              type="reset"
              className="btn btn-danger"
              onClick={closeModel2}
            >
              cancel
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>
      <Modal
        show={employeeDeleteModelShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title> Success </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          <h5 style={{ paddingLeft: "20px" }}>
            {" "}
            Employee Successfully Deleted!{" "}
          </h5>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
            <button
              type="reset"
              className="btn btn-danger"
              onClick={() => setemployeeDeleteModelShow(false)}
            >
              Go Back
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>
      ;
    </>
  );
}

export default Employees;
