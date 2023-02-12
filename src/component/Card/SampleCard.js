import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./SampleCard.css";
import Modal from "react-bootstrap/Modal";
const Axios = require("axios").default;
// import Button from "react-bootstrap/Button";
let ach_id;

function SampleCard(props) {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [toDelete, setToDelete] = useState(false);
  // console.log(props.arr);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const doDelete = () => {
    let data = {
      a_id: ach_id,
    };
    Axios.post("http://localhost:3001/api/manager/deleteachievement", data)
      .then(() => {
        props.changeFunk();
        handleClose();
      })
      .catch((err) => console.log(err));
  };
  const deleteAchievment = (id) => {
    ach_id = id;
    handleShow();
  };

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
                          <div>
                            <Button
                              variant="secondary"
                              className="btn btn-danger"
                              // value={item.id}
                              onClick={() => deleteAchievment(item.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br></br>
                </>
              );
            })
        : "No data"}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "white", border: "none" }}
        >
          <Modal.Title> Are you sure </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "white",
            height: "fit-content",
            padding: "0",
          }}
        >
          <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
            <button
              type="reset"
              className="btn btn-secondary"
              onClick={() => handleClose()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => doDelete()}
            >
              Delete
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "white", border: "none" }}
        ></Modal.Footer>
      </Modal>
    </>
  );
}

export default SampleCard;
