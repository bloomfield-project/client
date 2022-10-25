import React, { useState, useEffect, ChangeEvent, FormEvent,useRef } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";
import Modal from "react-bootstrap/Modal";
import SampleForm from "../../../component/Form/SampleForm";
import ResetSubmit from "../../../component/Form/ResetSubmit";
// const { genSaltSync, hashSync } = require("bcrypt");
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const Axios = require("axios").default;
// const colNames = ["id", "Name", "Age"];

// const tableStyle = 'striped bordered hover size="sm" ';

let paid = [];
let unpaid = [];
let amount;
var user_role;
let obj;
let u_id;
let compRes;
// console.log(data[0]);

var date = new Date();


var currentDate=moment.utc(date).format("YYYY-MM-DD");



let validation;

const columns = [
  {
    title: "Player",
    field: "img",
  },
  {
    title: "",
    field: "name",
  },
  {
    title: "Ammount",
    field: "ammount",
    cellStyle: {
      color: "rgba(41, 149, 65, 1)",
    },
  },
  {
    title: "Date",
    field: "date",
  },
];

// console.log(data[0]);
let array1 = [
  {
    title: "",
    for: "password",
    type: "text",
    name: "password",
    placeholder: "Password",
    id: "password",
    required: true,
  },
];

const columns_1 = [
  {
    title: "Player",
    field: "img",
  },
  {
    title: "",
    field: "name",
  },
  {
    title: "Ammount",
    field: "ammount",
    cellStyle: {
      color: "rgba(149, 41, 41, 1)",
    },
  },
  {
    title: "",
    field: "btn",
  },
];

function Membership() {
  const [tabNumber, setTabNumber] = useState(1);
  const [GetPaid, setPost] = useState(null);
  const [GetUnpaid, setUnpaid] = useState(null);

  const [show, setShow] = useState(false);
  

  // const [compRes, setRes] = React.useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const dispatch = useDispatch()
  const loginData = useSelector((state) => state.auth.data);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    //alert("hahvjvjkbbnnn,nkjlk;kl;mlnkbhcfdxdzezezez")
    console.log("Form was submitted! : " ,event.target[0].value);
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
        console.log(res.data.comp)
        if (compRes) {

          let data = {
            date: currentDate,
            total_amount: amount,
            user_id:u_id,
          }
    
          console.log("data : ",data)
          console.log("Passwords are mathched");
          Axios.post("http://localhost:3001/api/manager/addMembership", data)
          .then((res) => {
            // console.log(setRes(res.data));
            handleClose()
            window.history.back()
    
          })
          .catch((err) => console.log("error is arized", err));
      
        }
        else{
          alert("Enter Correct Password !")
        }
      })
      .catch((err) => console.log("error is arized", err));
  }


  const doPayment = (event) => {
    event.preventDefault();
    console.log(event)
    u_id = event.target.attributes[1].nodeValue;
    // if (name) {
    console.log("name from button : " + event.target.attributes[1].nodeValue +" "+ u_id);
    handleShow();
    // }
  };

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/payment/paid").then((res) => {
      setPost(res.data.data);
      console.log(res.data.data);
    });
    Axios.get("http://localhost:3001/api/manager/payment/unpaid").then(
      (res) => {
        setUnpaid(res.data.data);
        console.log(res.data.data);
      }
    );
  }, []);

if(GetPaid){
  GetPaid.map((item, i) => {
    amount = item.total_amount;
    paid[i] = {
      img: <img className="row-image" src={item.image} alt=""></img>,
      name: item.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      ),
      ammount: item.total_amount,
      date: item.date,
    };
  });
}
 

  // console.log("Get unpaid : ", GetUnpaid);

  unpaid.length = 0;

  if(GetUnpaid){
    GetUnpaid.map((items, i) => {
      user_role = items.role.toUpperCase();
      console.log("img url :",items.image);
      if (user_role === "PLAYER") {
        obj = {
          id: items.user_id,
          img: <img className="row-image" src={items.image} alt=""></img>,
          name: items.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
          ),
          ammount: amount,
          btn: (
            <Button
              key={i}
              type= "submit"
              variant="secondary"
              value={items.user_id}
              onClick={doPayment}
            >
              Pay
              {/* <input type="hidden" id="custId" name="custId" value="3487"></input> */}
            </Button>
          ),
        };
        unpaid.push(obj);
        // obj=null;
      }
    });
  }
 

  console.log("unpaid : ", unpaid);
  const uniqueIds = [];

  const unique = unpaid.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.id);

    if (!isDuplicate) {
      uniqueIds.push(element.id);

      return true;
    }

    return false;
  });

  // console.log("uniq : ", unique);

  const selectTab_1 = () => {
    setTabNumber(1);
  };
  const selectTab_2 = () => {
    setTabNumber(2);
  };

  return (
    <>
      {/* Pop up modal for enter manager password for confirm payment */}
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
          <form className="form-group mb-3"  onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control w-76 bg-white text-dark mx-auto"
              style={{ marginLeft: "5px", width: "90%" }}
              />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
              <button type="submit" className="btn btn-success" >
                Add
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "white", border: "none" }}>

        </Modal.Footer>
      </Modal>
      {/* Pop up modal for enter manager password for confirm payment */}

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
              <h1>Annual Membership</h1>
              {/* <h1>Render Count: {count.current}</h1> */}
            </div>
            <div className="tabs">
              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"}>
                  {" "}
                  <a onClick={() => selectTab_1(1)}> Paid</a>{" "}
                  {tabNumber === 1 ? <hr></hr> : ""}
                </h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"}>
                  <a onClick={() => selectTab_2(2)}> Unpaied</a>{" "}
                  {tabNumber === 2 ? <hr></hr> : ""}{" "}
                </h5>
              </div>

              {/* <div className="tabs-right">
                <Button variant="outline-success">+ Add</Button>
              </div>             */}
            </div>

            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <SearchTable
                  t_title={""}
                  data={tabNumber === 1 ? paid : unique}
                  columns={tabNumber === 1 ? columns : columns_1}
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
                  //             font-size: 1.2rem;
                  // font-weight: 500;
                />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Membership;
