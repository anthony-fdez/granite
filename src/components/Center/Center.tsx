/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { IBoxProps } from "./Center.types";

const Center = ({ children }: IBoxProps) => {
  return (
    <div
      css={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </div>
  );
};

export default Center;
