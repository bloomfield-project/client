import React, { useState } from "react";
import profile from "../../pages/player/player.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function UserView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: "red", textAlign: "center", fontSize: "large" }}>
            Confirm For Delete
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancell
          </Button>
          <button type="button" class="btn btn-danger" onClick={handleClose}>
            Confirm
          </button>
        </Modal.Footer>
      </Modal>
      <div
        className=" card-main-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div style={{ width: "50%", backgroundColor: "white", height: "" }}>
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              height: "",
              display: "flex",
              justifyContent: "center",
              paddingBottom: "10px",
            }}
          >
            <img
              style={{ width: "40%", borderRadius: "50%" }}
              src={profile}
              alt=""
            ></img>
          </div>
          <div style={{ width: "100%", backgroundColor: "white", height: "" }}>
            <table
              style={{
                width: "90%",
                margin: "auto",
                backgroundColor: "white",
                marginLeft: "20px",
              }}
            >
              <tr>
                <td style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "large" }}>User ID</p>
                </td>
                <td></td>

                <td style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "large" }}>EM-001</p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "large" }}>Name</p>
                </td>
                <td></td>

                <td style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "large" }}>Asitha Muthumala</p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", width: "40%" }}>
                  <p style={{ fontSize: "large" }}>Email</p>
                </td>
                <td style={{ width: "0%" }}></td>
                <td style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "large" }}>asithamuthumala@gmail.com</p>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", width: "40%" }}>
                  <p style={{ fontSize: "large" }}>NIC</p>
                </td>
                <td style={{ width: "10%" }}></td>
                <td style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "large" }}>199936013026</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            backgroundColor: "white",
            height: "",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              height: "auto",
              padding: "10px",
              marginTop: "20px",
            }}
          >
            <p style={{ fontSize: "large" }}>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also{" "}
            </p>
          </div>
          <div
            style={{
              width: "90%",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              position: "absolute",
              bottom: "0px",
              right: "0px",
            }}
          >
            <Link to={"/admin/EditEmployee"}>
              <button type="button" class="btn btn-secondary">
                Update
              </button>
            </Link>

            <button type="button" class="btn btn-danger" onClick={handleShow}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserView;
