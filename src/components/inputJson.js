
import React, { useState } from 'react';
function Input({ setdata }) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value);

        console.log(value, "val")
    } setdata((value));

    return (
        <div className="Input">
            <textarea
                className="form-control"
                style={{ width: "100%", height: '50vw' }}
                value={value}
                onChange={handleChange}
                placeholder="Enter Json Schema"

            />
        </div>
    );
}

export default Input;
