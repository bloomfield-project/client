import React, { useState } from "react";

function ResetSubmit() {
  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
      <button type="reset" className="btn btn-secondary">
        Reset
      </button>
      <button type="submit" className="btn btn-success">
        Add
      </button>
    </div>
  );
}
export default ResetSubmit;
