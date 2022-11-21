import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full">
      <div
        className="navbar bg-white my-3 rounded-xl shadow-round"
        style={{ width: "98vw" }}
      >
        <a className="btn btn-ghost normal-case text-xl">DoYourLatex</a>
      </div>
    </div>
  );
};

export default Navbar;
