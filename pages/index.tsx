import { MathJaxContext } from "better-react-mathjax";
import type { NextPage } from "next";
import { useState } from "react";
import FullPreview from "../components/FullPreview";
import LiveEditorWrapper from "../components/LiveEditorWrapper";

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <MathJaxContext onLoad={() => setIsLoaded(true)}>
      <div className="flex flex-col md:flex-row mt-5">
        <FullPreview />
        <LiveEditorWrapper />
      </div>
    </MathJaxContext>
  );
};

export default Home;
