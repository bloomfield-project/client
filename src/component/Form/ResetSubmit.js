import React, { useState } from "react";

function ResetSubmit() {
  return (
    <div class="d-grid gap-2 d-md-flex justify-content-md-end p-3 mb-2">
      <button type="reset" class="btn btn-secondary">
        Reset
      </button>
      <button type="submit" class="btn btn-success">
        Add
      </button>
    </div>
  );
}
export default ResetSubmit;
