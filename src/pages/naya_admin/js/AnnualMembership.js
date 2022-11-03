import React, { useState } from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import Tables from "../../../component/Table/Table";
import Button from "react-bootstrap/Button";
import "../../Home.css";
import SearchTable from "../../../component/Search/SearchTable";
import profpic from "../../../component/header/profpic.jfif";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import MaterialTable from "material-table";


const Axios = require("axios").default;

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

let paid = [];
let unpaid = [];
let amount;
var user_role;
let obj;
let u_id;
let compRes;

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

function AnnualMembership() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [bgColour, setbgColour] = useState("transparent");
  const [editbtn, seteditbtn] = useState("block");
  const [savebtn, setsavebtn] = useState("none");
  const [membership, setMembership] = useState("");
  const [show, setShow] = useState(false);
  const [GetPaid, setPost] = useState(null);
  const [GetUnpaid, setUnpaid] = useState(null);
  const [LastRow, setLastRow] =useState(null);
  const [tabNumber, setTabNumber] = useState(1);
  const [new_amount , setAmount]  = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const loginData = useSelector((state) => state.auth.data);

  var findPaid = null;
  var size = null;
  var last_year = null;
  
  const year_data = {
    year: moment().year(),
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    //alert("hahvjvjkbbnnn,nkjlk;kl;mlnkbhcfdxdzezezez")
    console.log("Form was submitted! : ", event.target[0].value);
    let mdata = {
      nic: loginData.data.nic,
      password: event.target[0].value,
      amount : new_amount,
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
          let data = {
            year: moment().year(),
            amount: mdata.amount,
          };

          console.log("data : ", data);
          console.log("Passwords are mathched");
          Axios.post("http://localhost:3001/api/manager/editMembership", data)
            .then((res) => {
              // console.log(setRes(res.data));
              handleClose();
              alert("Edit Successfull!");
              // window.location.reload();
            })
            .catch((err) => console.log("error is arized", err));
        } else {
          alert("Enter Correct Password !");
        }
      })
      .catch((err) => console.log("error is arized", err));
  }

  React.useEffect(() => {
    Axios.get("http://localhost:3001/api/manager/payment/paid").then((res) => {
      setPost(res.data.data);
      // console.log(res.data.data);
    });
    Axios.get("http://localhost:3001/api/manager/getLastRow").then((res) => {
      setLastRow(res.data.data);
      console.log("Last row : ", res.data.data);
    });

    Axios.get("http://localhost:3001/api/manager/payment/unpaid").then(
      (res) => {
        setUnpaid(res.data.data);
        console.log(res.data.data);
      }
    );
    Axios.get("http://localhost:3001/api/manager/getMembership").then((res) => {
      // console.log(res.data.data)
      setMembership(res.data);
    });
    Axios.post("http://localhost:3001/api/manager/findPaid",year_data)
    .then((res) => {
      console.log(res);
      findPaid = res.data;
      console.log(findPaid.data)
      size = findPaid.data.length
      // alert("size : "+ size)

    })
    .catch((err) => console.log("error is arized", err));
  }, []);

  const dataa = membership.data;
  const dataArray = [];
  var lastAmount = null;
  var lastYear = null;
  let compRes;

  {
    LastRow?.map((item, i) => {
      lastAmount = item.amount;
      lastYear = item.year;
    });
  }

  {
    dataa?.map((item, i) => {
      dataArray[i] = {
        year: item.year,
        amount: "Rs " + item.amount,
      };
    });
  }

  

  console.log("membership array : ", dataArray);

  const postData = (event) => {
    event.preventDefault();
    // alert("inside event");
    console.log(event)
    const amount = event.target[0].value;
    setAmount(event.target[0].value)
    // alert(amount +" " + new_amount);
    // alert("event : "+ event.target[1].value)
    last_year = event.target[1].value ;
    // alert("last year : "+ last_year);
    
    const postData = {
      year: moment().year(),
      amount: event.target[0].value,
    };

    if(last_year < moment().year() ){
      Axios.post("/api/manager/addYearMembership", postData)
      .then((results) => {
        if (results) {
          console.log(results.data);
          const splitArr = results.data.err.split("'");

          console.log(splitArr);

          // alert(splitArr[1] + " is already used !");
          alert(splitArr[1] + " Already amount assigned!");
        } else {
          alert("Amount add Succesful !");
        }
      })
      .catch((err) => console.log("err : ", err));
    } else if(size = 0) {
      Axios.post("/api/manager/editMembership", postData)
      .then((results) => {
        if (results) {
          console.log(results.data);
          const splitArr = results.data.err.split("'");

          console.log(splitArr);

          // alert(splitArr[1] + " is already used !");
          alert(splitArr[1] + " Already amount assigned!");
        } else {
          alert("Amount edit Succesful !");
        }
      })
    }else{
      handleShow()
    }
    
  };

  if (GetPaid) {
    GetPaid?.map((item, i) => {
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

  if (GetUnpaid && lastAmount) {
    GetUnpaid.map((items, i) => {
      user_role = items.role.toUpperCase();
      console.log("img url :", items.image);
      if (user_role === "PLAYER") {
        obj = {
          id: items.user_id,
          img: <img className="row-image" src={items.image} alt=""></img>,
          name: items.name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
          ),
          ammount: lastAmount,
          
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
  console.log("uniq : ",unique)

  const selectTab_1 = () => {
    setTabNumber(1);
  };
  const selectTab_2 = () => {
    setTabNumber(2);
  };

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
              <h1>Annual Membership</h1>
            </div>

            <div style={{ width: "100%", height: "auto", display: "flex" }}>
              <div style={{ width: "60%" }}>
                <div
                  style={{
                    margin: "15px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "x-large",
                      marginBottom: "3px",
                      fontWeight: "bold",
                    }}
                  >
                    {moment().year()}
                  </p>
                  <label
                    style={{
                      fontSize: "large",
                      width: "80%",
                      marginLeft: "3%",
                    }}
                  >
                    Membership Fee : Rs.
                  </label>
                  <br></br>
                  <form
                    style={{
                      margin: "0",
                      width: "80%",
                      display: "flex",
                      marginLeft: "3%",
                    }}
                    onSubmit={postData}
                  >
                    <input
                      type="number"
                      defaultValue={lastAmount}
                      style={{
                        backgroundColor: { bgColour },
                        border: "none",
                        fontSize: "x-large",
                        width: "250px",
                        marginRight: "50px",
                      }}
                    />
                    <input
                      type="hidden"
                      value={lastYear}
                      style={{
                        backgroundColor: { bgColour },
                        border: "none",
                        fontSize: "x-large",
                        width: "250px",
                        marginRight: "50px",
                      }}
                    />

                    {lastYear != null && lastYear < moment().year() ? (
                      <>
                        <button
                          type="submit"
                          className="btn btn-success"
                          
                        >
                          Save
                        </button>{" "}
                      </>
                    ) : (
                      <>
                        <button type="submit" className="btn btn-success">
                          Edit
                        </button>{" "}
                      </>
                    )}
                  </form>
                  <br></br>
                  <div
                    style={{
                      width: "80%",
                      marginLeft: "3%",
                    }}
                  >
                    {/* {alert(lastYear)} */}
                    {lastYear < moment().year() ? (
                      <Alert variant="danger">
                        Plese Add Membership Fee For {moment().year()}!
                      </Alert>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div
                style={{ width: "40%", margin: "15px" }}
                className="matches-container-outer-box"
              >
                <div className="tablee" style={{ width: "100%" }}>
                  <div className="table-head" style={{ marginBottom: "0" }}>
                    <div className="coll-2-1" style={{ width: "40%" }}>
                      Year
                    </div>
                    <div className="coll-2-1" style={{ width: "40%" }}>
                      Amount
                    </div>
                  </div>
                  <div style={{ maxHeight: "100px", overflow: "scroll" }}>
                    {dataArray != [] ? (
                      dataArray?.map((items, i) => (
                        <>
                          <div
                            key={i}
                            className="table-row"
                            style={{ height: "20px" }}
                          >
                            <div className="coll-2-1" style={{ width: "40%" }}>
                              {items.year}
                            </div>
                            <div className="coll-2-1" style={{ width: "40%" }}>
                              {items.amount}
                            </div>
                          </div>

                          <hr></hr>
                        </>
                      ))
                    ) : (
                      <h6 style={{ height: "200px" }}>
                        NO sessions to display
                      </h6>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="tabs">
              <div className="tabs-left">
                <h5 className={tabNumber === 1 ? "tab-active" : "tab"}>
                  {" "}
                  <a onClick={() => selectTab_1(1)}> Paid</a>{" "}
                  {tabNumber === 1 ? <hr></hr> : ""}
                </h5>
                <h5 className={tabNumber === 2 ? "tab-active" : "tab"}>
                  <a onClick={() => selectTab_2(2)}> Unpaid</a>{" "}
                  {tabNumber === 2 ? <hr></hr> : ""}{" "}
                </h5>
              </div>

           
            </div>
            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                {tabNumber === 1 ? (
                  <>
                  {(paid?.length > 0 ) ? 
                  <SearchTable
                  t_title={""}
                  data={paid}
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
                /> : <p>No Data to Show</p>
                }
                    
                  </>
                ) : (
                  <>
                     <SearchTable
                  t_title={""}
                  data={unique}
                  columns={columns_1}
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
                  </>
                )}
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
          <Modal.Title> <p style={{color:"red", fontSize:"medium", margin:"0"}}>Some Players Paid for this year, Do you want to edit?</p>  <p style={{margin:"0"}}>Enter password </p> </Modal.Title>
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
            />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
              <button type="reset" className="btn btn-secondary">
                Reset
              </button>
              <button type="submit" className="btn btn-success">
                Edit
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

export default AnnualMembership;
