import React, { useState } from "react";
import Calander from "../../component/Calander/Calander";
import Header from "../../component/header/Header";
import Navbar from "../../component/NavigationBar/Navbar";
import "../Profile/Profile.css";

function Profile() {
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
            <div className="p-main-cotainer">
              <div className="p-upper">
                <div className="p-upper-left">
                  {/* img ekata class eka "p-res-img"  denna   */}
                </div>
                <div className="p-upper-right ">
                  <table className="p-table rounded ">
                    <tr>
                      <td className="p-table-td">
                        <p clasName="p-table-data">User ID</p>
                      </td>
                      <td></td>

                      <td className="p-table-td">
                        <p clasName="p-table-data">EM-001</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-table-td">
                        <p clasName="p-table-data">Name</p>
                      </td>
                      <td></td>

                      <td className="p-table-td">
                        <p clasName="p-table-data">Asitha Muthumala</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-table-td">
                        <p>Email</p>
                      </td>
                      <td></td>
                      <td className="p-table-td">
                        <p clasName="p-table-data">asithamuthumala@gmail.com</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-table-td">
                        <p clasName="p-table-data">NIC</p>
                      </td>
                      <td style={{ width: "10%" }}></td>
                      <td className="p-table-td">
                        <p clasName="p-table-data">199936013026</p>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="p-upper">
                <div className="p-upper-left">
                    
                </div>
                <div className="p-upper-right">
                  <Calander />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
