import React from "react";
import "./EditRowDetailsWithButton.css";
// import Button from "react-bootstrap/Button";

function EditRowDetailsWithButton({ arr, btn = true }) {

    return (

        <div className="ERDWB-main">

            {/* repeats */}
            {arr.map((item) => {
                return (

                    <>

                        <div className="ERDWB-main-1">
                            <label>{item.lable}</label>
                            <h6>{item.data} </h6>
                        </div>

                        <div className="ERDWB-main-2">
                            {btn ? (
                                <button type="submit" class="btn btn-success">
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

        </div>


    );

}

export default EditRowDetailsWithButton;
