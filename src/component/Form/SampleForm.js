import React, { useState } from "react";


function SampleForm({ arr  }) {
  
  arr.map((item) => console.log(item));

  return (
    <div class="w-100 p-3 mb-2 bg-white text-dark rounded">
      {/* <form class= { "w-100 p-3 border border-secondary rounded  w-100 p-3 "}> */}
        {arr.map((item, index) => {
          return (
            <>
              <div key={index} class="form-group">
                <label for={item.for} className="d-flex justify-content-start">
                  {item.title}
                </label>
                <input
                  type={item.type}
                  name={item.name}
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

        
      {/* </form> */}
    </div>
  );
}

export default SampleForm;
