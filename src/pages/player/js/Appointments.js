import React, {useState} from "react";
import Header from "../../../component/header/Header";
import Navbar from "../../../component/NavigationBar/Navbar"; 
import "../../Home.css";
import Calander from "../../../component/Calander/Calander";
import '../css/appointment.css'


function Session() {

  
 

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
                <h1>Appointments</h1>
            </div>
            <div className="SessionDetails-content">
              <div className="app-left-G">
                <label className="Select-a-Coach">Select a Coach :</label>
                  <select  className="select-c-G">
                    <option value="none">Select</option>
                    <option value="Sanath">Sanath Jayasuriya</option>
                    <option value="Sanath">Ajantha Mendis</option>
                    <option value="Sanath">Chamara Silva</option>
                  </select>
                  <h5 style={{width: "90%" , textAlign: "left" , marginTop: "10px"}}>Sanath Jayasuriya</h5>
                  <p style={{width: "90%" , textAlign: "left" }}>2022 sep 06</p>
                  <div className="Time-slots-unselect">
                    <p className="n">no coach selected</p>


                    <div className="Time-slots-unselect-rows">
                      <div className="Time-slots-unselect-row">
                        <h5 style={{fontSize: "1rem"}}>9.00 am -10.00 am</h5>
                        <button className="Time-slots-unselect-button">Select</button>
                      </div>
                      <div className="Time-slots-unselect-row">
                        <h5 style={{fontSize: "1rem"}}>10.00 am -11.00 am</h5>
                        <button className="Time-slots-unselect-button">Select</button>
                      </div>
                      <div className="Time-slots-unselect-row">
                        <h5 style={{fontSize: "1rem"}}>12.00 pm -1.00 pm</h5>
                        <button className="Time-slots-unselect-button">Select</button>
                      </div>
                      
                    </div>

                    

                    <div className="coaches-times-G"></div>
                  </div>
                      <label className="Select-a-Coach">Subject :</label>
                      <input  className="select-c-G">
                      
                      </input>
                      <label className="Select-a-Coach">Description :</label>
                      <textarea  className="select-c-G-2">
                        
                      </textarea>
              </div>
              <div className="app-right-G">
                <div className="calander-G-G"><Calander></Calander></div>
              </div>
            </div>
            
            
             
          </div>
        </div>
      </div>
    </>
  );
}

export default Session;