/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../ThemeProvider/components/ThemeProvider";
import { IButtonProps } from "../Interfaces/IButtonProps";
import { colors } from "../../ThemeProvider/constants/colors";

const Button = ({
  children,
  color = "blue",
  colorShade = 6,
  padding = 10,
  margin = 10,
  borderRadius = 5,
  loading = false,
  fontColor = "white",
  width,
  align = "center",
}: IButtonProps) => {
  const { state } = useContext(StateContext);

  const hotpink = css({
    color: "hotpink",
  });

  return <button css={hotpink}>{children}</button>;
};

export default Button;
