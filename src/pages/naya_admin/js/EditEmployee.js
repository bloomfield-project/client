import React, { useState, useEffect } from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Modal from "react-bootstrap/Modal";
import EditDetails from "../../../component/EditDetail/EditDetails";
import Navbar from "../../../component/NavigationBar/Navbar";
import { Link, useParams, useLocation } from "react-router-dom";
import { fontWeight, width } from "@mui/system";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../../../../src/firebase";
import { v4 } from "uuid";
import PlayerEditForm from "../../Manager/js/PlayerEditForm";

const axios = require("axios").default;
const lankaNic2019 = require("lanka-nic-2019")
const moment = require("moment");
let error_msg = null;
let error_field = null;
let success = null;
var imgurl;

let userData = [];



function EditEmployee() {
  const [post, setPost] = useState(null);
  const [post1, setPost1] = useState(null);

  const [show, setShow] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrls] = useState(null);
  const { type } = useParams();

  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("image uploaded");
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
        imgurl = url;
        console.log("imgurl : ", imgurl);
      });
    });
  };

  const handleClose = () => {
    setShow(false);
    // window.history.back();
  };
  const handleShow = () => setShow(true);

  const GetPostData = () => {
    axios
      .post("/api/user/playerSelect", userData)
      .then((results) => {
        setPost(results.data.res_data);
      })
      .catch((err) => console.log(err));
    console.log("Data set eka ", post);
    axios
      .post("/api/manager/playerRole", userData)
      .then((results) => {
        console.log("post 1:: ", results.data.data[0]);
        setPost1(results.data.data[0]);
      })
      .catch((err) => console.log("errorrrr : ", err));
  };

  const { id } = useParams();
  let user = [];

  console.log("type is : " + id);
  userData = {
    user_id: id,
  };

  useEffect(() => {
    GetPostData();
    console.log("inside use effect");
  }, []);

  if (!post) return null;
  // alert(post[0].name)

  console.log(post[0].name);
  console.log(post1);
  // const name = post[0].name;



  const createUser = (event) => {
    event.preventDefault();
    console.log("eevent : : ", event);
    
    const d = new Date(lankaNic2019.infoNic(event.target[2].value).birthday);
    // console.log("date : ", d);
    
    let userData = {
      user_id: id,
      address: event.target[0].value,
      email: event.target[1].value,
      nic: event.target[2].value,
      contact: event.target[3].value,
      image: imgurl ? imgurl : post[0].image,
      gender:  lankaNic2019.infoNic(event.target[2].value).gender,
      dob : moment(d).format('YYYY-MM-DD')
      // date:currentDate,
    };
    // const isValid = await userSchema.isValid(userData);

    console.log("before post request ", userData);

    let res =  axios.post('/api/user/', userData);
    axios
      .post("/api/user/updateEmployee", userData)
      .then((results) => {
        console.log("user data ", userData);
        console.log("results ", results);
      
        if (results.data.result.success == 0) {
        
          success = null;
          alert(results.data.result.message);
        } else if (results.data.result.success == 1) {
          // error_msg = null;
          // success = " Successfully Updated !";
          alert(results.data.result.message)
        }

        // handleShow();
      })
      .catch((err) => console.log("error is arized", err));

    console.log("after post request ");
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
            <div className="page-container-gray" style={{ width: "100%" }}>
              <div className="l-back-r-title">
                <div className="l-back-r-title-icon">
                  <Link to={"/admin/Employees"}>
                    <IoChevronBackCircleOutline
                      style={{
                        color: "rgba(0, 146, 112, 1)",
                        fontSize: " 40px",
                      }}
                    />
                  </Link>
                </div>

                <h1>Employee Details</h1>
              </div>

              <div className="form-container">
                <div className="form-group " style={{ margin: "20px" }}>
                  <p
                    className="d-flex justify-content-end"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    {post[0].name}
                  </p>
                </div>
                <form  onSubmit={createUser}
                  className={
                    "w-100 p-3 border border-secondary rounded  w-100 p-3 "
                  }>
         
                  <PlayerEditForm
                    NIC={post[0].nic}
                    email={post[0].email}
                    address={post[0].address}
                    contact={post[0].contact}
                  ></PlayerEditForm>
                  {/* <div
                    className="form-group file-upload-wrapper w-100 p-3 mb-2"
                    style={{ margin: "0px", width: "85%" }}
                  >
                    <input
                      type="file"
                      onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                      }}
                      className="form-control"
                    />
                    <br></br>
                    <button
                      type="button"
                      onClick={uploadFile}
                      className="btn btn-primary"
                      style={{ float: "right" }}
                    >
                      {" "}
                      Upload Image
                    </button>
                    <br></br>
                    <img
                      src={imageUrl ? imageUrl : post[0].image}
                      style={{ width: "150px" }}
                    />
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
                    <button type="reset" className="btn btn-secondary">
                      Reset
                    </button>
                    <button type="submit" className="btn btn-success">
                      Edit
                    </button>
                  </div> */}
                </form>
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
          <Modal.Title> </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          <p
            style={{
              color: "#f0677b",
              textAlign: "center",
              fontSize: "large",
              backgroundColor: "white",
              margin: "0",
            }}
          >
            {error_msg}
          </p>

          <p
            style={{
              color: "#03d1a1",
              textAlign: "center",
              fontSize: "large",
              backgroundColor: "white",
              margin: "0",
            }}
          >
            {success}
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "white", border: "none" }}>
          {/*<Button variant="secondary" onClick={handleClose}>
            Cancell
  </Button>*/}
          <button type="button" className="btn btn-success" onClick={handleClose}>
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
