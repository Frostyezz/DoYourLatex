import React, { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

interface LivePreviewProps {
  tex: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ tex }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="rounded-xl shadow-round bg-white h-1/2 p-3">
      <MathJaxContext onLoad={() => setIsLoaded(true)}>
        <MathJax dynamic>{isLoaded && tex}</MathJax>
      </MathJaxContext>
    </div>
  );
};

export default LivePreview;
