import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
// import { FormData } from "./FormData";

const fileTypes = ["JPG", "PNG", "GIF"];
const array1 = [
  {
    title: "First Name",
    for: "exampleInputEmail1",
    type: "text",
    placeholder: "First Name",
    id: "f-name",
  },
  {
    title: "Last Name",
    for: "exampleInputEmail1",
    type: "text",
    placeholder: "Last Name",
    id: "l-name",
  },
  {
    title: "e-mail",
    for: "exampleInputEmail1",
    type: "email",
    placeholder: "Email",
    id: "email",
  },
  {
    title: "Contact",
    for: "exampleInputEmail1",
    type: "number",
    placeholder: "Contact Number",
    id: "contact",
  },
];

function SampleForm() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div class="p-3 mb-2 bg-white text-dark">
      <form class="w-75 p-3 border border-secondary rounded">
        {array1.map((item, index) => {
          return (
            <>
              <div key={index} class="form-group">
                <label
                  for={item.for}
                  className="d-flex justify-content-start"
                >
                  {item.title}
                </label>
                <input
                  type={item.type}
                  class="form-control"
                  id={item.id}
                  aria-describedby="emailHelp"
                  placeholder={item.placeholder}
                />
              </div>
              <br></br>
            </>
          );
        })}

        <div class="form-group">
          <label
            for="exampleInputEmail1"
            className="d-flex justify-content-start"
          >
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="First Name"
          />
        </div>
        <br></br>

        {/* <div class="form-group">
          <label
            for="exampleInputEmail1"
            className="d-flex justify-content-start"
          >
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Last Name"
          />
          
        </div>
        <br></br>

        <div class="form-group">
          <label
            for="exampleInputEmail1"
            className="d-flex justify-content-start"
          >
            Name With Initial
          </label>
          <input
            type="text"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name with initial"
          />
          
        </div>
        <br></br>

        <div class="form-group">
          <label
            for="exampleInputEmail1"
            className="d-flex justify-content-start"
          >
            NIC
          </label>
          <input
            type="text"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="NIC"
          />
          
        </div>
        <br></br>

        <div class="form-group">
          <label
            for="exampleInputEmail1"
            className="d-flex justify-content-start"
          >
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <br></br>

        <div class="form-group">
          <label
            for="exampleInputPassword1"
            className="d-flex justify-content-start"
          >
            Password
          </label>
          <input
            type="password"
            class="form-control"
            // id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <br></br>

        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label
            class="form-check-label d-flex justify-content-start"
            for="exampleCheck1"
          >
            Check me out
          </label>
        </div>

        <br></br>

        <div class="form-group">
          <label
            for="exampleInputEmail1"
            className="d-flex justify-content-start"
          >
            Contact
          </label>
          <input
            type="number"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Contact"
          />
         
        </div>

        <br></br>

        <div class="form-group">
          <label
            for="exampleInputEmail1"
            className="d-flex justify-content-start"
          >
            Address
          </label>
          <input
            type="text"
            class="form-control"
            // id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Address"
          />
       
        </div> */}

        <br></br>

        <div class="form-group file-upload-wrapper">
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="reset" class="btn btn-secondary">
            Reset
          </button>
          <button type="submit" class="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default SampleForm;
