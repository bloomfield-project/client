import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../Home.css";

import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

const Axios = require("axios").default;

function Players() {
  const [post, setPost] = useState("");
  const [tournment_data, setTournament] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const loginData = useSelector((state) => state.auth.data);
  const [change, setChange] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let current_user_role;
  let compRes;
  useEffect(() => {
    Axios.post("http://localhost:3001/api/user/players").then((response) => {
      // setPost(response.data);
      var tournment = [];

      if (response.data) {
        response.data.data.forEach((element) => {
          var obj = {
            id: element.user_id,
            name: element.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            ),
            contact: element.contact,
            email: element.email,
            edit: (
              <Link to={"/manager/EditPlayerDetails/" + element.user_id}>
                <Button variant="secondary">Edit</Button>{" "}
              </Link>
            ),
            delete: (
              <Button
                variant="secondary"
                className="btn btn-danger"
                value={element.user_id}
                onClick={deleteEmployee}
              >
                Delete
              </Button>
            ),
          };

          tournment.push(obj);
        });
        setTournament(tournment);
        console.log(tournment);
        console.log(tournment_data);
      }
    });
  }, [change]);

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
    Axios.post("http://localhost:3001/api/manager/getPassword", mdata)
      .then((res) => {
        compRes = res.data.comp;
        console.log(res.data.comp);
        if (compRes) {
          doDelete(user);

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
      user_id: user,
    };

    Axios.post("http://localhost:3001/api/user/deletePlayer", data)
      .then((res) => {
        if (res.data.result.status === "Delete Fails!") {
          alert("Player Delete Unsuccessfull!");
        } else if (res.data.result.status === "Successfuly Deleted!") {
          alert("Player Delete Successfull!");
        }

        handleClose();
        setChange(!change);
      })
      .catch((err) => console.log("error is arized", err));
  }
  const deleteEmployee = (event) => {
    event.preventDefault();
    console.log("event delete : " + event.target.attributes[1].nodeValue);

    setUser(event.target.attributes[1].nodeValue);

    handleShow();
  };
  const dataa = post.data;
  console.log("post data function ", dataa);
  const dataArray = [];

  console.log("data post :", post);
  console.log("data array :", dataArray);

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
              <h1>BLOOMFIELD Players</h1>
            </div>

            <div className="tabs">
              <div className="tabs-left"></div>

              <div className="tabs-right">
                <Link to={"/manager/PlayerRegistration"}>
                  <Button
                    to={"/manager/PlayerRegistration"}
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
                <input
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  style={{
                    width: "100%",
                    marginBottom: "10px",
                    border: "none",
                    borderBottom: "1px solid black",
                  }}
                />
                <div className="table-head">
                  <div className="coll-4-11"> Name</div>
                  <div className="coll-4-11">Contact</div>

                  <div className="coll-4-1">Email</div>
                  <div className="coll-4-1"></div>
                  <div className="coll-4-1"></div>
                </div>

                {tournment_data !== []
                  ? tournment_data
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
                              {item.contact}
                            </div>

                            <div className="coll-4-1">{item.email}</div>
                            <div className="coll-4-1">{item.edit}</div>
                            <div className="coll-4-1">{item.delete}</div>
                          </div>
                          <hr></hr>
                        </>
                      ))
                  : "No data to show"}
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default Players;
