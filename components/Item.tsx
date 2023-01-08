import React from "react";
import { MathJax } from "better-react-mathjax";
import { Item } from "../utils/itemTypes";
import { useDispatch } from "react-redux";
import { EDIT_ITEM } from "../store/itemsSlice";

interface ItemProps {
  item: Item;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row gap-2">
      <input
        type="checkbox"
        checked={item.isActive}
        onClick={() =>
          dispatch(EDIT_ITEM({ ...item, isActive: !item.isActive }))
        }
        className="checkbox"
      />
      <MathJax
        className="latex theorem w-full"
        //@ts-ignore
        type={item.type}
        dynamic
      >
        {item.tex}
      </MathJax>
    </div>
  );
};

export default Item;
