import { css, SerializedStyles } from "@emotion/react";
import { getVariantStyles } from "./../../Theming/ThemeProvider/getValues/getVariantStyles";
import { GetColorProps } from "./../../../styles/useStyles";
import { IVariants } from "../../../utils/types/variants";
import IUseStyles from "../../../styles/interfaces/IUseStyles";
import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";

interface Props {
  variant?: IVariants;
  disabled?: boolean;
  error?: boolean;
  margin?: number;
  fullWidth?: boolean;
  padding?: number;
  width?: number;
  iconLeft?: JSX.Element;
  loading?: boolean;
  getColor: (props: GetColorProps) => IUseStyles;
  styles: IStyles;
}

const getTextInputStyles = ({
  variant,
  disabled,
  error,
  fullWidth,
  margin = 0,
  padding = 0,
  width,
  iconLeft,
  loading,
  getColor,
  styles,
}: Props): SerializedStyles => {
  const iconWidth = 30;
  const calculatedWidthContainer = `calc(100% - ${margin + padding}px)`;

  const getInputWidth = (): string => {
    let WIDTH = padding;

    if (loading && iconLeft) {
      WIDTH = iconWidth * 2 - padding;
    } else if (iconLeft || loading) {
      WIDTH = iconWidth;
    }

    return `calc(100% - ${WIDTH + padding}px)`;
  };

  const filled: SerializedStyles = css({
    backgroundColor: getColor({}).backgroundAccent,

    "&:focus": {
      borderBottomWidth: 3,
      marginBottom: -3,
      borderBottomStyle: "solid",
      borderBottomColor: getColor({}).color,
    },
  });

  const outlined: SerializedStyles = css([
    {
      transition: "100ms",
      borderWidth: 1,
      borderColor: getColor({}).border,
      borderStyle: "solid",
      "&:hover": {},
      "&:focus": {
        borderColor: getColor({}).color,
      },
    },
    disabled && { backgroundColor: getColor({}).backgroundAccent },
  ]);

  const subtle: SerializedStyles = css({
    backgroundColor: getColor({ variant: "subtle" }).background,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderBottomColor: getColor({}).backgroundHover,
    "&:focus": {
      borderBottomWidth: 3,
      marginBottom: -3,

      borderBottomStyle: "solid",
      borderBottomColor: getColor({}).color,
    },
  });

  const common: SerializedStyles = css({
    p: {
      margin: 0,
      padding: 0,
    },
    width,
    position: "relative",

    ".input-label": {},
    ".input-helper-text": {
      flexWrap: "wrap",
      fontSize: 12,
      color: getColor({}).fontDimmed,
    },
    ".input-error-text": {
      fontSize: 12,
      color: styles.colors?.red?.[6],
      marginTop: 5,
    },

    ".input-wrapper": {
      position: "relative",
      ".input-icon-left": {
        position: "absolute",
        top: `calc(50% + ${2}px)`,
        left: 0,
        transform: "translateY(-50%)",
        height: iconWidth,
        width: iconWidth,
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      ".input-loading": {
        position: "absolute",
        top: `calc(50% + ${2}px)`,
        right: 0,
        transform: "translateY(-50%)",
        height: iconWidth,
        width: iconWidth,
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      ".INPUT": [
        fullWidth && { width: calculatedWidthContainer },
        {
          width: getInputWidth(),
          outline: 0,
          marginTop: 3,
          borderWidth: 0,
          color: getColor({}).font,
          backgroundColor: getColor({}).background,

          ".button-icon-container-right": {},
          "&:hover": {},
          "&:focus": {},
        },
        iconLeft && { paddingLeft: iconWidth },
        loading && { paddingRight: iconWidth },
        {
          ...getVariantStyles({ filled, subtle, outlined, variant }),
        },
        error && {
          borderColor: styles.colors?.red?.[6],
          ":focus": {
            borderColor: styles.colors?.red?.[6],
          },
        },
        disabled && {
          filter: "grayscale(1)",
          pointerEvents: "none",
          color: styles.colors?.red?.[6],
        },
      ],
    },
  });

  return common;
};

export default getTextInputStyles;
