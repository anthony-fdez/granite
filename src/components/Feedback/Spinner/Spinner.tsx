/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";
import React, { useContext } from "react";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import getSpinnerStyles from "./Spinner.styles";

import { ISpinnerProps } from "./Spinner.types";
import useStyles from "../../../styles/useStyles";

const Spinner = ({ variant, color, size, backgroundAccentColor, ...args }: ISpinnerProps): JSX.Element => {
  const { styles } = useContext(StateContext);
  const { getColor } = useStyles({ styles, color });

  return (
    <div
      {...args}
      css={getSpinnerStyles({
        size,
        variant,
        backgroundAccentColor,
        getColor,
      })}
    />
  );
};

export default Spinner;
