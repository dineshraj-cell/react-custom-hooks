import React, { useEffect, useState } from "react";

function TextFieldComponent({ handleChange }) {
  const [value, setValue] = useState("");

  const _change = (e) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  useEffect(() => {
    if (value !== "") handleChange(value);
  }, [value]);

  return (
    <input
      type="text"
      value={value}
      onChange={_change}
      className="input-text"
    ></input>
  );
}

export default TextFieldComponent;
