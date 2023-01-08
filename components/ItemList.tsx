import React from "react";
import { RootState } from "../store/store";
import { useAppSelector } from "../store/useAppSelector";
import Item from "./Item";

const ItemList: React.FC = () => {
  const items = useAppSelector((store: RootState) => store.items);

  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ItemList;
