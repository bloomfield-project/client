import React from "react";
import { Link } from "react-router-dom";
import "./PlayerDetailsPerformance.css";
import Button from 'react-bootstrap/Button';


function PlayerDetailsPerformance({ arr, backLink }) {

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

                    <Button variant="success">Performance</Button>{' '}

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

export default PlayerDetailsPerformance;
