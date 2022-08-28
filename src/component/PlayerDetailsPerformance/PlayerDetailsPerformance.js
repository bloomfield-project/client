import React from "react";
import { Link } from "react-router-dom";
import "./PlayerDetailsPerformance.css";
import Button from 'react-bootstrap/Button';


function PlayerDetailsPerformance({ arr, backLink_1, backLink_2 }) {

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
                     
                            </div>

                        </>

                    );

                })}
                {/* repeat stop */}

                <br></br>

                <div className="edit-edit-detail-1">

                    <Link to={backLink_1}><Button variant="success">Performance</Button>{' '}</Link>

                    {backLink_2 ? (
                        <Link to={backLink_2} class="btn btn-secondary">
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

export default PlayerDetailsPerformance;
