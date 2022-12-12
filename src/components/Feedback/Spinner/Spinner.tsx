/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getSpinnerStyles } from "./Spinner.styles";

import { ISpinnerProps } from "./Spinner.types";

const Spinner = ({
  variant,
  color,
  size,
  backgroundAccentColor,
  ...args
}: ISpinnerProps) => {
  const { styles } = useContext(StateContext);

  return (
    <div
      {...args}
      css={getSpinnerStyles({
        size,
        variant,
        styles,
        color,
        backgroundAccentColor,
      })}
    ></div>
  );
};

export default Spinner;
