import React from "react";
import { Link } from "react-router-dom";
import "./EditDetail.css";
// import Button from "react-bootstrap/Button";

function EditDetails({ arr, backLink }) {
  
  return (
    <div className="edit-main-container rounded">
      <div className="edit-sub-container border border-secondary rounded">
        {/* repeats */}
        {arr.map((item) => {
          return (
            <>
              <div className="edit-lable">
                <label>{item.lable}</label>
              </div>
              <div className="edit-edit-detail">
                <h6>{item.data} </h6>
                <button type="submit" class="btn btn-success">
                  Edit
                </button>
              </div>
            </>
          );
        })}

        {/* repeat stop */}
        <br></br>
        <div className="edit-edit-detail">
          <p> </p>
          {backLink ? (
            <Link to={backLink} class="btn btn-secondary">
              Back
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default EditDetails;
