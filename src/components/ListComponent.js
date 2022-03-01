import React from "react";
import ItemsComponent from "./ItemsComponent";
import { useItem, useRemoveItem } from "../contexts/ItemsContext";

function ListComponent() {
  const items = useItem();
  const removeItem = useRemoveItem();
  return (
    <div className="my-1 px-1">
      {items.map((item, index) => {
        return (
          <ItemsComponent
            item={item}
            removeItem={removeItem}
            key={`item-${index}`}
          />
        );
      })}
    </div>
  );
}

export default ListComponent;
