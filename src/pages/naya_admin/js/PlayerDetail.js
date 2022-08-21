import React from "react";
import Header from "../../../component/header/Header";
// import "../css/PlayerRegistration.css";
import { IoChevronBackCircleOutline } from "react-icons/io5";
// import SampleForm from "../../../component/Form/SampleForm";
import { Link } from "react-router-dom";
import EditDetails from "../../../component/EditDetail/EditDetails";

function PlayerDetail() {
  const array = [
    {
      lable: "Name",
      data: "kasun kalhara",
    },
    {
      lable: "Age",
      data: "25",
    },
    {
      lable: "Role",
      data: "supervisore",
    },
    {
      lable: "Name",
      data: "kasun kalhara",
    },
    {
      lable: "Age",
      data: "25",
    },
    {
      lable: "Role",
      data: "supervisore",
    },
  ];
  return (
    <>
      <div className="page-container-1">
        <div className="header-container">
          <Header></Header>
        </div>
        <div className="page-container-gray">
          <div className="l-back-r-title">
            <div className="l-back-r-title-icon">
              <Link to={"/admin/Employees"}>
                <IoChevronBackCircleOutline
                  style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                />
              </Link>
            </div>

            <h1>Player Details</h1>
          </div>

          <div className="form-container">
            <EditDetails arr={array} backLink={"/admin/Employees"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerDetail;
