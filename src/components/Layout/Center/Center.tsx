/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React from "react";
import { IBoxProps } from "./Center.types";

const Center = ({ children, ...args }: IBoxProps): JSX.Element => {
  return (
    <div {...args} css={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  );
};

export default Center;
