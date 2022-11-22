import React, { useState } from "react";
import { RootState } from "../store/store";
import { useAppSelector } from "../store/useAppSelector";
import LiveEditor from "./LiveEditor";
import LivePreview from "./LivePreview";

const LiveEditorWrapper = () => {
  const content = useAppSelector((store: RootState) => store.liveEditor);

  const [tex, setTex] = useState(content);
  return (
    <div className="flex flex-col w-1/3 ml-5 gap-5" style={{ height: "80vh" }}>
      <LiveEditor
        tex={tex}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setTex(e.target.value)
        }
      />
      <LivePreview tex={tex} />
    </div>
  );
};

export default LiveEditorWrapper;
