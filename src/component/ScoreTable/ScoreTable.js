import React, { useState } from "react";

function Table({
  list,
  colNames,
  width = "auto",
  height = "auto",
  headColor="#E3E6E3",
  bodyColor="#F4F2F2",
}) {
  

  return (
    <div style={{ width}}>
      {list.length > 0 && (
        <table
          cellSpacing="0"
          style={{ width: "100%", height: height, padding: "5px 10px" }}
        >
          <thead style={{ backgroundColor: headColor, color: "black" }}>
            <tr>
              {colNames.map((headerItem, index) => (
                <th key={index} >
                  {headerItem.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody style={{ backgroundColor: bodyColor, color: "black" }}>
            {Object.values(list).map((obj,index) => (
                <tr key={index}>
                    {Object.values(obj).map((value,index2) => (
                        <td key={index2}>
                            {value}
                        </td>
                    ))}
                </tr>
            ))}
          </tbody>
          
        </table>
      )}
    </div>
  );
}

export default Table;