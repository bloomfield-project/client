import React, { useState } from "react";

function PlayerEditForm(props) {
  const [nic, setnic] = useState(props.NIC);
  const [address, setaddress] = useState(props.address);
  const [contact, setcontact] = useState(props.contact);
  const [email, setemail] = useState(props.email);

  const NicRule = /^([1-9][0-9]{8}[x|X|v|V]|([1-9][0-9]{11}))$/;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const contactRule = /^([0][1-9]{9})$/;

  const handleNic = (event) => {
    // console.log(event.target)
    setnic(event.target.value);
    var result = nic.match(NicRule);

    if (event.target.value.match(NicRule) != null) {
      document.getElementById("nic").innerHTML = "";
      document.getElementById("mybtn").disabled = false;
    } else {
      document.getElementById("nic").innerHTML = "Enter Valied NIC";
      document.getElementById("mybtn").disabled = true;
    }
    console.log(event.target.value.match(NicRule));
    console.log("value is:", event.target.value);
  };

  const handleAddress = (event) => {
    setaddress(event.target.value);
  };

  const handleEmail = (event) => {
    setemail(event.target.value);
    if (event.target.value.match(mailformat) != null) {
      document.getElementById("email").innerHTML = "";
      document.getElementById("mybtn").disabled = false;
    } else {
      document.getElementById("email").innerHTML = "Enter Valied Email";
      document.getElementById("mybtn").disabled = true;
    }
  };

  const handleContact = (event) => {
    setcontact(event.target.value);
    if (event.target.value.match(contactRule) != null) {
        document.getElementById("contact").innerHTML = "";
        document.getElementById("mybtn").disabled = false;
      } else {
        document.getElementById("contact").innerHTML = "Enter Valied Contact Number";
        document.getElementById("mybtn").disabled = true;
      }
  };

  return (
    <>
      <div className="form-group">
        <br></br>
        <label className="d-flex justify-content-start">Address</label>

        <input
          value={address}
          onChange={handleAddress}
          id="address"
          type="text"
          placeholder="Enter your address"
          className="form-control"
        />
        <p className="error" id="address"></p>

        <br></br>
        <label className="d-flex justify-content-start">Email</label>

        <input
          value={email}
          onChange={handleEmail}
          id="address"
          type="email"
          // placeholder="Enter your address"
          className="form-control"
        />
        <p className="error" id="email"></p>
        <br></br>
        <label className="d-flex justify-content-start">NIC</label>

        <input
          value={nic}
          onChange={handleNic}
          id="address"
          type="text"
          // placeholder="Enter your address"
          className="form-control"
        />
        <p className="error" id="nic"></p>

        <br></br>
        <label className="d-flex justify-content-start">Contact</label>

        <input
          value={contact}
          onChange={handleContact}
          id="address"
          type="text"
          // placeholder="Enter your address"
          className="form-control"
        />
        <p className="error" id="contact"></p>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
        <button type="reset" className="btn btn-secondary">
          Reset
        </button>
        <button type="submit" className="btn btn-success" id="mybtn">
          Edit
        </button>
      </div>
    </>
  );
}

export default PlayerEditForm;
