import React, { useState } from "react";
import "./SampleCard.css";
// import Button from "react-bootstrap/Button";

function SampleCard(props) {
  const [search, setSearch] = useState("");

  console.log(props.arr);
  return (
    <>
      <input
        type=""
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
          // console.log(typeof search + search);
        }}
        style={{
          width: "100%",
          marginBottom: "10px",
          border: "none",
          borderBottom: "1px solid black",
        }}
      />
      {props.arr !== null
        ? props.arr
            .filter((item) => {
              return search?.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search) ||
                    item.date.includes(search);
            })
            .map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="card-main-container rounded border-secondary border"
                  >
                    {/* <h3 className="card-detail-main-title">{item.title}</h3> */}
                    <div className="card-sub-container">
                      <div className="card-detail-right ">
                        <div className="card-detail-right-img rounded border-secondary border">
                          {/* <img className="card-detail-img" src={profpic} alt=""></img> */}
                          {item.img}
                        </div>
                      </div>

                      <div className="card-detail-left">
                        <div className="card-detail-title">{item.title}</div>
                        <br></br>
                        <div className="card-detail-detail">
                          <p>{item.description}</p>
                        </div>
                        <div className="card-detail-bottom">
                          <div>
                            <h4>{item.date}</h4>
                          </div>
                          <div>{item.btn}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br ></br>
                </>
              );
            })
        : "No data"}
    </>
  );
}

export default SampleCard;
