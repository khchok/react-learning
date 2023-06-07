import React, { useState } from "react";
import Level1 from "./Level1";
import { NavLink } from "react-router-dom";

import classes from "./demo.module.css";

const DemoNoContext = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>DemoNoContext</p>
      <Level1 text="ORIGINAL TEXT" />
    </div>
  );
};

export default DemoNoContext;
