/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { IBoxProps } from "./Center.types";

const Center = ({ children, ...args }: IBoxProps) => {
  return (
    <div
      {...args}
      css={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </div>
  );
};

export default Center;
