import React, { useState } from "react";
import Level1 from "./Level1";

const DemoNoContext = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>DemoNoContext</p>
      <Level1 text="ORIGINAL TEXT" />
    </div>
  );
};

export default DemoNoContext;
