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

  const [onHover, setOnHover] = useState(false);
  const [onClick, setOnClick] = useState(false);

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

  const clickStyles: React.CSSProperties = {
    transform: "translateY(2px)",
    transition: "100ms",
  };

  useEffect(() => {
    if (!onClick) return;

    setTimeout(() => {
      setOnClick(false);
    }, 100);
  }, [onClick]);

  return (
    <button
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onMouseDown={() => setOnClick(true)}
      style={{
        ...normalStyles,
        ...(onHover && hoverStyles),
        ...(onClick && clickStyles),
      }}
    >
      {children}
    </button>
  );
};

export default Button;
