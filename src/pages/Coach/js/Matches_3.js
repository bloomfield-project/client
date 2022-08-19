import React from "react";
import Header from "../../../component/header/Header";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Macthes_3() {

  return (
    <>

      <div className="page-container-1">

        <div className="header-container">
          <Header></Header>
        </div>

        <div className="page-container-gray">

          <div className="l-back-r-title">
            
            <div className="l-back-r-title-icon">
              <Link to={"#"}>
                <IoChevronBackCircleOutline
                  style={{ color: "rgba(0, 146, 112, 1)", fontSize: " 40px" }}
                />
              </Link>
            </div>

            <h1>Matches</h1>

          </div>

          <div className="form-container">

            jhaudnknkni
            
          </div>

        </div>

      </div>

    </>
  );
}

export default Macthes_3;
