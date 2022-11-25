/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { IBoxProps } from "./Box.types";

const Box = ({ children, justifyContent }: IBoxProps) => {
  return (
    <div css={{ display: "flex", alignItems: "center", justifyContent }}>
      {children}
    </div>
  );
};

export default Box;
