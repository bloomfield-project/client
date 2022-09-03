import React, { useState } from "react";


function SampleForm({ arr  }) {
  
  arr.map((item) => console.log(item));

  return (
    <div className="w-100 p-3 bg-white text-dark rounded">
      {/* <form class= { "w-100 p-3 border border-secondary rounded  w-100 p-3 "}> */}
        {arr.map((item, index) => {
          return (
            <>
             <br></br>
              <div key={index} className="form-group">
                <label for={item.for} className="d-flex justify-content-start">
                  {item.title}
                </label>
                <input
                  type={item.type}
                  name={item.name}
                  className="form-control"
                  id={item.id}
                  aria-describedby="emailHelp"
                  placeholder={item.placeholder}

                  required = {item.required ? true : false}
                />
              </div>
             
            </>
          );
        })}

        
      {/* </form> */}
    </div>
  );
}

export default SampleForm;
