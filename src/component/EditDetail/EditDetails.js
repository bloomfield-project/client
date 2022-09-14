import React from "react";
import { Link } from "react-router-dom";
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
              <div className="edit-edit-detail">
                <h6>{item.data} </h6>
                {btn ? (
                  <button type="submit" className="btn btn-success">
                    Edit
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          );
        })}

        {/* repeat stop */}
        <br></br>
        <div className="edit-edit-detail">
          <p> </p>
          {backLink ? (
            <Link to={backLink} className="btn btn-secondary">
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
