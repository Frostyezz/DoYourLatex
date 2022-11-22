import React from "react";
import { useDispatch } from "react-redux";
import { SET_CONTENT } from "../store/liveEditorSlice";

interface LiveEditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  tex: string;
}

const LiveEditor: React.FC<LiveEditorProps> = ({ onChange, tex }) => {
  const dispatch = useDispatch();

  return (
    <div className="rounded-xl shadow-round bg-white h-1/2">
      <textarea
        value={tex}
        placeholder="Type Latex here"
        className="textarea w-full h-full resize-none"
        onBlur={(e) => dispatch(SET_CONTENT(e.target.value))}
        onChange={onChange}
      />
    </div>
  );
};

export default LiveEditor;
