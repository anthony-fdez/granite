/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getButtonStyles } from "./Button.styles";
import { getBorderRadius } from "../../Theming/ThemeProvider/getValues/getBorderRadius";
import Spinner from "../../Feedback/Spinner";
import { IButtonProps } from "./Button.types";
import { useStyles } from "../../../styles/useStyles";
import { useButtonDefaultProps } from "./Button.props";

const Button = (props: IButtonProps) => {
  const { styles } = useContext(StateContext);
  const {
    children,
    variant,
    color,
    padding,
    margin,
    borderRadius,
    loading,
    fontColor,
    spinnerVariant,
    align,
    disabled,
    fullWidth,
    backgroundColor,
    iconLeft,
    iconRight,
    iconLeftProps,
    iconRightProps,
  } = useButtonDefaultProps({ styles, props });

  const { BUTTON_FONT } = useStyles({ styles });

  const buttonStyles = css([
    getButtonStyles({ styles, variant, color, disabled }),
    fontColor && { color: fontColor },
    padding && { padding },
    margin && { margin },
    borderRadius && { borderRadius: getBorderRadius({ size: borderRadius }) },
    align && {
      display: "flex",
      justifyContent: align,
      alignItems: "center",
    },
    fullWidth && { width: `calc(100% - ${(margin || 0) * 2}px);` },
    backgroundColor && { backgroundColor },
  ]);

  return (
    <button type="button" {...props} disabled={disabled} css={buttonStyles}>
      {loading ? (
        <Spinner
          variant={spinnerVariant}
          backgroundAccentColor={BUTTON_FONT}
          size={11}
          color={color}
        />
      ) : (
        <>
          {iconLeft && (
            <div {...iconLeftProps} className="button-icon-container-left">
              L
            </div>
          )}
          {children}
          {iconRight && (
            <div {...iconRightProps} className="button-icon-container-right">
              R
            </div>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
