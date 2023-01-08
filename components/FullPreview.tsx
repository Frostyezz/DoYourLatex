import React from "react";
import { useDispatch } from "react-redux";
import { RESET_ITEMS } from "../store/itemsSlice";
import { RootState } from "../store/store";
import { useAppSelector } from "../store/useAppSelector";
import ItemList from "./ItemList";

const FullPreview = () => {
  const dispatch = useDispatch();
  const items = useAppSelector((store: RootState) => store.items);

  return (
    <div
      className="md:w-2/4 mb-3 md:mb-0 w-full rounded-xl shadow-round bg-white p-3"
      style={{ height: "95vh" }}
    >
      <div className="flex flex-row justify-between items-center mb-3 pb-3 border-b-2">
        <h1 className="font-semibold text-xl">Previzualizare Document</h1>
        <div className="flex flex-row gap-3">
          <button
            onClick={() => dispatch(RESET_ITEMS())}
            disabled={!items.length}
            className="btn  btn-active btn-ghost btn-sm"
          >
            Sterge tot
          </button>
        </div>
      </div>
      <ItemList />
    </div>
  );
};

export default FullPreview;
