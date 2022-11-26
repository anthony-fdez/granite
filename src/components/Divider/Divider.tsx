/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { IDividerProps } from "./Divider.types";

const Divider = ({
  label,
  labelPosition = "center",
  orientation = "vertical",
  width = 1,
  variant = "solid",
  ...args
}: IDividerProps) => {
  return <div {...args}></div>;
};

export default Divider;
