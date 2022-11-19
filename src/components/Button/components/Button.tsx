import React, { useContext } from "react";
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

  return (
    <button
      style={{
        backgroundColor: colors[color][colorShade],
        padding,
        margin,
        borderRadius,
        outline: loading ? 0 : 10,
        border: 0,
        cursor: "pointer",
        color: fontColor,
        width: width ? width : undefined,
        textAlign: align,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
