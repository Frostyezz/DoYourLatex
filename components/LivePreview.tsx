import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

interface LivePreviewProps {
  tex: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ tex }) => {
  return (
    <div className="rounded-xl shadow-round bg-white h-1/2 p-3">
      <MathJaxContext>
        <MathJax dynamic>{tex}</MathJax>
      </MathJaxContext>
    </div>
  );
};

export default LivePreview;
