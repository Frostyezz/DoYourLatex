import React, { useEffect, useState } from "react";
import { RootState } from "../store/store";
import { useAppSelector } from "../store/useAppSelector";
import LiveEditor from "./LiveEditor";
import LivePreview from "./LivePreview";

const LiveEditorWrapper = () => {
  const content = useAppSelector((store: RootState) => store.liveEditor);
  const [tex, setTex] = useState<string>(content);

  useEffect(() => {
    if (!content) setTex("");
  }, [content]);

  return (
    <div
      className="flex flex-col w-full md:w-2/4 ml-0 md:ml-5 gap-5"
      style={{ height: "95vh" }}
    >
      <LiveEditor
        tex={tex}
        setTex={setTex}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setTex(e.target.value)
        }
      />
      <LivePreview tex={tex} />
    </div>
  );
};

export default LiveEditorWrapper;
