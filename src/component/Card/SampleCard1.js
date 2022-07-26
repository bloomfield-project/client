import React from "react";
import "./SampleCard.css";
import Button from "react-bootstrap/Button";

function SampleCard1({ arr }) {
  return (
    <>
      {arr.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="card-main-container rounded border-secondary border"
            >
              <h3 className="card-detail-main-title">{item.main_title}</h3>
              <div className="card-sub-container">
               
                <div className="card-detail-left">
                  {/* <div className="card-detail-title">{item.title}</div> */}
                  <div className="card-detail-bottom">
                    {/* <div className="card-detail-main-title">{item.title}</div> */}
                    <h3 >{item.title}</h3>

                    <div>
                      <h4 style={{width:"auto"}}>{item.date}</h4>
                    </div>
                    {/* <div>{item.btn}</div> */}
                  </div>
                  <div className="card-detail-detail">
                    <p>{item.description}</p>
                  </div>
                  
                </div>
                <div className="card-detail-right ">
                  <div className="card-detail-right-img rounded border-secondary border">
                    {/* <img className="card-detail-img" src={profpic} alt=""></img> */}
                    {item.img}
                  </div>
                </div>
              </div>
            </div>

            <br></br>
          </>
        );
      })}
    </>
  );
}

export default SampleCard1;
