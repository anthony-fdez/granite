import { css, SerializedStyles } from "@emotion/react";
import { getVariantStyles } from "../ThemeProvider/getValues/getVariantStyles";
import { GetColorProps } from "../../styles/useStyles";
import { IVariants } from "../../utils/types/IVariants";
import IUseStyles from "../../styles/interfaces/IUseStyles";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";

interface Props {
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  getColor: (props: GetColorProps) => IUseStyles;
  iconLeft?: JSX.Element;
  loading?: boolean;
  margin?: number;
  padding?: number;
  styles: IStyles;
  variant?: IVariants;
  width?: number;
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
      borderBottomColor: getColor({}).color,
      borderBottomStyle: "solid",
      borderBottomWidth: 3,
      marginBottom: -3,
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

    ".Granite-TextInput-label": {},
    ".Granite-TextInput-helperText": {
      flexWrap: "wrap",
      fontSize: 12,
      color: getColor({}).fontDimmed,
    },
    ".Granite-TextInput-errorText": {
      fontSize: 12,
      color: styles.colors?.red?.[6],
      marginTop: 5,
    },

    ".Granite-TextInput-inputWrapper": {
      position: "relative",
      ".Granite-TextInput-iconLeft": {
        position: "absolute",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        height: iconWidth,
        width: iconWidth,
        pointerEvents: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      ".Granite-TextInput-spinner": {
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
      ".Granite-TextInput-input": [
        fullWidth && { width: calculatedWidthContainer },
        {
          width: getInputWidth(),
          outline: 0,
          marginTop: 3,
          borderWidth: 0,
          color: getColor({}).font,
          backgroundColor: getColor({}).background,
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
