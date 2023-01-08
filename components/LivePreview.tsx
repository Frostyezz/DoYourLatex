import React, { useState } from "react";
import { MathJax } from "better-react-mathjax";
import { ITEM_TYPES } from "../utils/itemTypes";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../store/itemsSlice";
import { SET_CONTENT } from "../store/liveEditorSlice";

interface LivePreviewProps {
  tex: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ tex }) => {
  const dispatch = useDispatch();
  const [type, selectType] = useState<ITEM_TYPES.EXERCISE>();

  return (
    <div className="rounded-xl shadow-round bg-white h-1/2 p-3">
      <div className="flex flex-col gap-3 md:flex-row justify-between items-center mb-3 pb-3 border-b-2">
        <h1 className="font-semibold text-xl">Previzualizare Live</h1>
        <div className="flex flex-row gap-3">
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              //@ts-ignore
              selectType(e.target.value)
            }
            className="select select-sm select-bordered w-40 max-w-xs"
          >
            <option disabled selected>
              Alege un tip
            </option>
            <option value={ITEM_TYPES.EXERCISE}>Exercitiu</option>
            <option value={ITEM_TYPES.PROBLEM}>Problema</option>
            <option value={ITEM_TYPES.THEOREM}>Teorema</option>
            <option value={ITEM_TYPES.REMARK}>Remarca*</option>
          </select>
          <button
            onClick={() => {
              dispatch(
                ADD_ITEM({
                  id: Math.floor(Math.random() * 1000),
                  isActive: true,
                  tex,
                  type: type ?? ITEM_TYPES.EXERCISE,
                })
              );
              dispatch(SET_CONTENT(""));
            }}
            disabled={!type || !tex}
            className="btn  btn-active btn-ghost btn-sm"
          >
            Posteaza
          </button>
        </div>
      </div>
      <MathJax className="h-5/6 overflow-y-scroll latex" dynamic>
        {tex}
      </MathJax>
    </div>
  );
};

export default LivePreview;
