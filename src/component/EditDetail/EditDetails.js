import React from "react";
import { Link } from "react-router-dom";
import ResetSubmit from "../Form/ResetSubmit";
import "./EditDetail.css";
// import Button from "react-bootstrap/Button";

function EditDetails({ arr, backLink = "#", border = true, btn = true }) {
  return (
    <div className="edit-main-container rounded">
      <div
        className={
          border
            ? "edit-sub-container border border-secondary rounded border-opacity-10"
            : "edit-sub-container border-opacity-10"
        }
      >
        {/* repeats */}
        {arr.map((item) => {
          return (
            <>
              <div className="edit-lable">
                <label>{item.lable}</label>
              </div>
            
              
              <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
                <input
                  type={item.type}
                  name={item.name}
                  className="form-control"
                  id={item.id}
                  placeholder={item.data}
                  required={item.required}
                  defaultValue={item.data}
                />
              </div>
             
            </>
          );
        })}
        
        {/* repeat stop */}
        <br></br>
       
      </div>
    </div>
  );
}

export default EditDetails;
