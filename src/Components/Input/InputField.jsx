import React from "react";
import "./Input.css";
const InputField = ({ type, textHolder, handleChange,value }) => {
  return (
    <div>
      <div >
        <input
          className="new-input"
          type={type}
          value={value}
          placeholder={textHolder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputField;
