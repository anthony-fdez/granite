/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { IFlexProps } from "./Flex.types";

const Flex = ({
  children,
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "center",
  wrap = "nowrap",
}: IFlexProps) => {
  return (
    <div
      css={[
        {
          width: "100%",
          display: "flex",
          flexDirection,
          justifyContent,
          alignItems,
          flexWrap: wrap,
        },
      ]}
    >
      {children}
    </div>
  );
};

export default Flex;
