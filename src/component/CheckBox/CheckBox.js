import { Checkbox } from 'antd';
import React from 'react';
import "./CheckBox.css";

// const onChange = (e) => {
//   console.log(`checked = ${e.target.checked}`);
// };

function CheckBox (props){

    return (
        <>
                <Checkbox className='the-text'>{props.name}</Checkbox>
                {/* onChange={onChange} */}
        </>
    );
}
export default CheckBox;