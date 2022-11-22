import React, { useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";

interface LivePreviewProps {
  tex: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ tex }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="rounded-xl shadow-round bg-white h-1/2 p-3">
      <div className="flex flex-row justify-between items-center mb-3 pb-3 border-b-2">
        <h1 className="font-semibold text-xl">Previzualizare Live</h1>
        <div className="flex flex-row gap-3">
          <select className="select select-sm select-bordered w-40 max-w-xs">
            <option disabled selected>
              Alege un tip
            </option>
            <option>Exercitiu</option>
            <option>Problema</option>
            <option>Teorema</option>
            <option>Remarca*</option>
          </select>
          <button className="btn  btn-active btn-ghost btn-sm">Posteaza</button>
        </div>
      </div>
      <MathJaxContext onLoad={() => setIsLoaded(true)}>
        <MathJax className="h-5/6 overflow-y-scroll latex" dynamic>
          {isLoaded && tex}
        </MathJax>
      </MathJaxContext>
    </div>
  );
};

export default LivePreview;
