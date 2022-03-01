import React from "react";

function ItemsComponent({ item, removeItem }) {
  return (
    <div className="txt">
      {item}
      <button
        className="btn btn-icon-danger mx-1"
        onClick={() => removeItem(item)}
      >
        x
      </button>
    </div>
  );
}

export default ItemsComponent;
