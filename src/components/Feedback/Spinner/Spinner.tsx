/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import getSpinnerStyles from "./Spinner.styles";
import useStyles from "../../../styles/useStyles";
import useAppContext from "../../../utils/hooks/useAppContext";
import { ISpinnerProps } from "./Spinner.types";

const Spinner = ({ variant, color, size, backgroundAccentColor, ...args }: ISpinnerProps): JSX.Element => {
  const { styles } = useAppContext();
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
