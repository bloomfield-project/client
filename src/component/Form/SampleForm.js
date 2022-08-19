import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
// import { FormData } from "./FormData";

const fileTypes = ["JPG", "PNG", "GIF"];

function SampleForm({ arr, upload ,border, file1 }) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  arr.map((item) => console.log(item));

  return (
    <div class="w-100 p-3 mb-2 bg-white text-dark rounded">
      <form class= {border ? "w-100 p-3 border border-secondary rounded" : "w-100 p-3 "}>
        {arr.map((item, index) => {
          return (
            <>
              <div key={index} class="form-group">
                <label for={item.for} className="d-flex justify-content-start">
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

        <br></br>
        <label for={file1.filefor} className="d-flex justify-content-start">
                  {file1.filetitle}
                </label>
        {upload ? (
          <div class="form-group file-upload-wrapper">
            <FileUploader
              multiple={true}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
          </div>
        ) : (
          ""
        )}

        <br></br>
        <br></br>
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
