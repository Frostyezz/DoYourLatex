import React, { useState } from "react";
import LiveEditor from "./LiveEditor";
import LivePreview from "./LivePreview";

const LiveEditorWrapper = () => {
  const [tex, setTex] = useState("");
  return (
    <div className="flex flex-col w-1/3 ml-5 gap-5" style={{ height: "80vh" }}>
      <LiveEditor
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setTex(e.target.value)
        }
      />
      <LivePreview tex={tex} />
    </div>
  );
};

export default LiveEditorWrapper;
