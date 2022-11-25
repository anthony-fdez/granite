/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from "react";
import { StateContext } from "../ThemeProvider/ThemeProvider";
import { getSpinnerStyles } from "./Spinner.styles";

import { ISpinnerProps } from "./Spinner.types";

const Spinner = ({ variant, color, size, ...args }: ISpinnerProps) => {
  const { styles } = useContext(StateContext);

  return (
    <div
      {...args}
      css={getSpinnerStyles({ size, variant, styles, color })}
    ></div>
  );
};

export default Spinner;
