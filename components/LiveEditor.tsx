import React from "react";

interface LiveEditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const LiveEditor: React.FC<LiveEditorProps> = ({ onChange }) => {
  return (
    <div className="rounded-xl shadow-round bg-white h-1/2">
      <textarea
        placeholder="Type Latex here"
        className="textarea w-full h-full"
        onChange={onChange}
      />
    </div>
  );
};

export default LiveEditor;
