import React, { useContext, useState } from "react";
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

  const [hover, setHover] = useState(false);

  const normalStyles: React.CSSProperties = {
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
    transition: "200ms",
  };

  const hoverStyles: React.CSSProperties = {
    backgroundColor: "red",
  };

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...normalStyles, ...(hover && hoverStyles) }}
    >
      {children}
    </button>
  );
};

export default Button;
