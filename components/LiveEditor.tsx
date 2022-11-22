import React from "react";
import { useDispatch } from "react-redux";
import { SET_CONTENT } from "../store/liveEditorSlice";

interface LiveEditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setTex: React.Dispatch<React.SetStateAction<string>>;
  tex: string;
}

const LiveEditor: React.FC<LiveEditorProps> = ({ onChange, tex, setTex }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-xl shadow-round bg-white h-1/2 p-3">
      <div className="flex flex-row justify-between items-center mb-3 pb-3 border-b-2">
        <h1 className="font-semibold text-xl">Editor Live</h1>
        <button
          onClick={() => {
            setTex("");
            dispatch(SET_CONTENT(""));
          }}
          className="btn  btn-active btn-ghost btn-sm"
        >
          Sterge tot
        </button>
      </div>
      <textarea
        value={tex}
        placeholder="Type Latex here"
        className="textarea w-full h-5/6 resize-none"
        onBlur={(e) => dispatch(SET_CONTENT(e.target.value))}
        onChange={onChange}
      />
    </div>
  );
};

export default LiveEditor;
