import React, { useContext, useState } from "react";

const ItemProvider = React.createContext();
const ItemAddProvider = React.createContext();
const ItemRemoveProvider = React.createContext();

export function useItem() {
  return useContext(ItemProvider);
}

export function useAddItem() {
  return useContext(ItemAddProvider);
}

export function useRemoveItem() {
  return useContext(ItemRemoveProvider);
}

function ItemsContext({ children }) {
  const [items, setItems] = useState([]);

  const _addItems = (item) => {
    if (!items.find((e) => e === item)) setItems((prev) => [...prev, item]);
  };

  const _removeItem = (item) => {
    setItems(items.filter((e) => e !== item));
  };

  return (
    <ItemProvider.Provider value={items}>
      <ItemAddProvider.Provider value={_addItems}>
        <ItemRemoveProvider.Provider value={_removeItem}>
          {children}
        </ItemRemoveProvider.Provider>
      </ItemAddProvider.Provider>
    </ItemProvider.Provider>
  );
}

export default ItemsContext;
