/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import getButtonStyles from "./Button.styles";
import getBorderRadius from "../../Theming/ThemeProvider/getValues/getBorderRadius";
import Spinner from "../../Feedback/Spinner";
import { IButtonProps } from "./Button.types";
import useStyles from "../../../styles/useStyles";
import { useButtonDefaultProps } from "./Button.props";
import useAppContext from "../../../utils/hooks/useAppContext";

const Button = (props: IButtonProps): JSX.Element => {
  const { styles } = useAppContext();
  const {
    children,
    variant,
    color,
    shade,
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
  const { getColor } = useStyles({ styles, shade, color });

  const buttonStyles = css([
    getButtonStyles({ styles, variant, disabled, getColor }),
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
    <button aria-label={children} aria-disabled="true" type="button" {...props} disabled={disabled} css={buttonStyles}>
      {loading ? (
        <Spinner
          data-testid="button-spinner"
          variant={spinnerVariant}
          backgroundAccentColor={getColor({}).fontContrast}
          size={11}
          color={color}
        />
      ) : (
        <>
          {iconLeft && (
            <div data-testid="button-icon-left" {...iconLeftProps} className="button-icon-container-left">
              {iconLeft}
            </div>
          )}
          {children}
          {iconRight && (
            <div data-testid="button-icon-right" {...iconRightProps} className="button-icon-container-right">
              {iconRight}
            </div>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
