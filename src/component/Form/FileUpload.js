import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function FileUpload( {filetitle= "title", filefor= "for" }) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <label for={filefor} className="d-flex justify-content-start w-100 p-3">
        {filetitle}
      </label>
      <div class="form-group file-upload-wrapper w-100 p-3 mb-2">
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        {/* <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p> */}
      </div>
    </>
  );
}

export default FileUpload;
