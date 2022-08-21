import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar";
import UserView from "../../../component/UserView/UserView";




// console.log(data[0]);


function UpdateDeleteUser() {
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

              
            </div>
            <hr></hr>
            <div className="table-box-1">
              <div className="tablee">
                <UserView />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default UpdateDeleteUser;
