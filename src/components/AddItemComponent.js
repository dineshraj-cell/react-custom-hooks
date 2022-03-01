import React, { useState } from "react";
import TextFieldComponent from "./TextFieldComponent";
import { useAddItem } from "../contexts/ItemsContext";

function AddItemComponent() {
  const [value, setValue] = useState("");
  const onAdd = useAddItem();

  const _addItem = () => {
    if (value === "") return;
    onAdd(value);
  };

  return (
    <div>
      <TextFieldComponent handleChange={setValue} />
      <button className="btn btn-primary mx-1" onClick={_addItem}>
        Add
      </button>
    </div>
  );
}

export default AddItemComponent;
