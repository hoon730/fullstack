import React from "react";
import BigTItle from "../components/BigTItle";
import Cube from "../components/Cube";

const Main = () => {
  return (
    <div className="main index">
      <div className="content-inner">
        <BigTItle title="FRONTEND" desTitle="DEVELOPER" subTitle="Hoon" />
        <Cube />
      </div>
    </div>
  );
};

export default Main;
