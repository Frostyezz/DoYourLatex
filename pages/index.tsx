import type { NextPage } from "next";
import FullPreview from "../components/FullPreview";
import LiveEditorWrapper from "../components/LiveEditorWrapper";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row mt-5">
      <FullPreview />
      <LiveEditorWrapper />
    </div>
  );
};

export default Home;
