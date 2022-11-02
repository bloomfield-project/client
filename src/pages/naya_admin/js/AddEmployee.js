import React from "react";
import { useRef, useEffect, useState } from "react";

import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import Navbar from "../../../component/NavigationBar/Navbar";
import { useFormik } from "formik";
import { Link, useParams, useLocation } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "../../../../src/firebase";
import { v4 } from "uuid";
import { employeeSchema } from "../../../component/Schema/employee";
import { fetchData } from "../../AuthServer";

const moment = require("moment");

const Axios = require("axios").default;
const lankaNic2019 = require("lanka-nic-2019");

var imgurl;

const onSubmit = async (values, actions) => {
  // console.log("value from event :",val);

  values.gender = lankaNic2019.infoNic(values.nic).gender;
  const d = new Date(lankaNic2019.infoNic(values.nic).birthday);
  // console.log("date : ", d);
  values.dob = moment(d).format("YYYY-MM-DD");
  values.image = imgurl ? imgurl : "";
  console.log("values : ", values);
  console.log(lankaNic2019.infoNic(values.nic));
  console.log("actions : ".actions);

  if (lankaNic2019.validateNic(values.nic)) {
    // alert("validation done");
    Axios.post("/api/user/", values)
      .then((results) => {
        // console.log("results.data.message :", results.data.err);
        if (results.data.err) {
          const splitArr = results.data.err.split("'");

          console.log(splitArr);

          alert(splitArr[1] + " is already used !");
        } else {
          alert("Registration succesful");
          actions.resetForm();
        }
      })
      .catch((err) => console.log("error : ", err));
  } else {
    alert("nic is incorrect");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
};

function PlayerRegistration() {
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

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      address: "",
      contact: "",
      nic: "",
      user_role: "",
      image: "",
    },
    validationSchema: employeeSchema,
    onSubmit,
  });

  console.log(errors);
  console.log(values)

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

                <h1>Employee Registration</h1>
              </div>

              <div className="w-80 p-3 bg-white text-dark rounded form-container">
                {/* <form class= { "w-100 p-3 border border-secondary rounded  w-100 p-3 "}> */}

                <form
                  className={
                    "w-100 p-3 border border-secondary rounded  w-100 p-3 "
                  }
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <div className="form-group">
                    <br></br>
                    <label className="d-flex justify-content-start">Name</label>

                    <input
                      value={values.name}
                      onChange={handleChange}
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      onBlur={handleBlur}
                      className={
                        errors.name && touched.name
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />

                    {errors.name && touched.name && (
                      <p className="error">{errors.name}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <br></br>
                    <label className="d-flex justify-content-start">
                      Address
                    </label>

                    <input
                      value={values.address}
                      onChange={handleChange}
                      id="address"
                      type="text"
                      placeholder="Enter your address"
                      onBlur={handleBlur}
                      className={
                        errors.address && touched.address
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />

                    {errors.address && touched.address && (
                      <p className="error">{errors.address}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <br></br>
                    <label className="d-flex justify-content-start">
                      E-mail
                    </label>

                    <input
                      value={values.email}
                      onChange={handleChange}
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />
                    {errors.email && touched.email && (
                      <p className="error">{errors.email}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <br></br>
                    <label className="d-flex justify-content-start">
                      N I C
                    </label>

                    <input
                      value={values.nic}
                      onChange={handleChange}
                      id="nic"
                      type="text"
                      placeholder="Enter your NIC"
                      onBlur={handleBlur}
                      className={
                        errors.nic && touched.nic
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />

                    {errors.nic && touched.nic && (
                      <p className="error">{errors.nic}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <br></br>
                    <label className="d-flex justify-content-start">
                      Contact
                    </label>

                    <input
                      value={values.contact}
                      onChange={handleChange}
                      id="contact"
                      type="text"
                      placeholder="Enter your Contact Number"
                      onBlur={handleBlur}
                      className={
                        errors.contact && touched.contact
                          ? "input-error form-control"
                          : "form-control"
                      }
                    />

                    {errors.contact && touched.contact && (
                      <p className="error">{errors.contact}</p>
                    )}
                  </div>
                  <div className=" form-group">
                    <br></br>
                    <label className="d-flex justify-content-start">
                      User Role
                    </label>
                    <Form.Select
                      aria-label="Default select example"
                      name="user_role"
                      onChange={handleChange}
                    >
                      <option
                        className="text-dark"
                        name="user_role"
                        // onChange={handleChange}
                      >
                        
                      </option>
                      <option
                        value="manager"
                        className="text-dark"
                        name="user_role"
                        // onChange={handleChange}
                      >
                        Manager
                      </option>
                      <option value="coach" className="text-dark" name="user_role">
                        Coach
                      </option>
                    </Form.Select>
                    {errors.user_role && touched.user_role && (
                      <p className="error">{errors.user_role}</p>
                    )}
                  </div>

                  <div className="form-group file-upload-wrapper ">
                    <br></br>
                    <label className="d-flex justify-content-start">
                      Employee Image
                    </label>

                    <input
                      type="file"
                      onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                      }}
                      className="form-control"
                      name="image"
                      // onChange={handleChange}
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
                      src={imageUrl ? imageUrl : ""}
                      style={{ width: "150px" }}
                    />
                  </div>

                  <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
                    <button type="reset" className="btn btn-secondary">
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={isSubmitting}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerRegistration;
