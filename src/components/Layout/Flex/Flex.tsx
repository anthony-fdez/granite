/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React from "react";
import { IFlexProps } from "./Flex.types";
import useAppContext from "../../../utils/hooks/useAppContext";

const Flex = ({
  children,
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "center",
  wrap = "nowrap",
  ...args
}: IFlexProps): JSX.Element => {
  useAppContext();

  return (
    <div
      {...args}
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
