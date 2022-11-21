/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { StateContext } from "../ThemeProvider/ThemeProvider";
import { IButtonProps } from "./Interfaces/IButtonProps";
import { colors } from "../../constants/theme/colors";
import { getButtonStyles } from "./buttonStyles";
import { getBorderRadius } from "../ThemeProvider/getValues/getBorderRadius";
import Spinner from "../Spinner";

const Button = ({
  children,
  variant = "filled",
  color = "blue",
  padding = 10,
  margin = 10,
  borderRadius,
  loading = false,
  fontColor,
  width,
  spinnerVariant,
  align = "center",
  ...args
}: IButtonProps) => {
  const { styles } = useContext(StateContext);

  return (
    <button
      {...args}
      css={[
        getButtonStyles({ styles, variant, color }),
        fontColor && { color: fontColor },

        padding && { padding },
        margin && { margin },
        borderRadius && {
          borderRadius: getBorderRadius({ size: borderRadius }),
        },
        align && {
          display: "flex",
          justifyContent: align,
          alignItems: "center",
        },
      ]}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
