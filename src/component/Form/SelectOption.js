import Form from "react-bootstrap/Form";

function SelectOption({label = "label", option}) {
  return (
    <div className="w-100 p-3 mb-2 bg-white text-dark rounded">
      <label className="d-flex justify-content-start">{label}</label>
      <Form.Select aria-label="Default select example">
        {option.map((item, index) => {
          return (
            <>
              {/* <div key={index} class="form-group"> */}
                <option key={index} value={item.value} className="text-dark">{item.title}</option>
              {/* </div> */}
            </>
          );
        })}
      </Form.Select>
    </div>
  );
}

export default SelectOption;

// {
//   arr.map((item, index) => {
//     return (
//       <>
//         <div key={index} class="form-group">
//           <label for={item.for} className="d-flex justify-content-start">
//             {item.title}
//           </label>
//           <input
//             type={item.type}
//             name={item.name}
//             class="form-control"
//             id={item.id}
//             aria-describedby="emailHelp"
//             placeholder={item.placeholder}
//           />
//         </div>
//         <br></br>
//       </>
//     );
//   });
// }
