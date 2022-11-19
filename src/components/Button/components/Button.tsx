/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useContext } from "react";
import { StateContext } from "../../ThemeProvider/components/ThemeProvider";
import { IButtonProps } from "../Interfaces/IButtonProps";
import { colors } from "../../ThemeProvider/constants/colors";
import { getButtonStyles } from "./getButtonStyles";

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

  // const styles2 = css([
  //   {
  //     backgroundColor: colors[color][colorShade],
  //     padding,
  //     margin,
  //     borderRadius,
  //     outline: loading ? 0 : 10,
  //     border: 0,
  //     cursor: "pointer",
  //     color: fontColor,
  //     width: width ? width : undefined,
  //     textAlign: align,
  //   },
  //   {},
  // ]);

  return <button css={{ backgroundColor: "red" }}>{children}</button>;
};

export default Button;
