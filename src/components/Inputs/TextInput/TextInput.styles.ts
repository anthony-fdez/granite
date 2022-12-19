import { css, SerializedStyles } from "@emotion/react";
import { getVariantStyles } from "./../../Theming/ThemeProvider/getValues/getVariantStyles";
import { useStyles } from "./../../../styles/useStyles";
import { DEFAULT_COLORS, IColors } from "./../../../constants/theme/colors";
import { IVariants } from "./../../../types/variants";
import { IStyles } from "./../../Theming/ThemeProvider/Interfaces/IStyles";

interface Props {
  styles: IStyles;
  variant?: IVariants;
  color?: IColors;
  disabled?: boolean;
  error?: boolean;
  margin?: number;
  fullWidth?: boolean;
  padding?: number;
  width?: number;
  iconLeft?: JSX.Element;
  loading?: boolean;
}

export const getTextInputStyles = ({
  styles,
  variant,
  color,
  disabled,
  error,
  fullWidth,
  margin = 0,
  padding = 0,
  width,
  iconLeft,
  loading,
}: Props) => {
  const { getColor } = useStyles({
    styles,
    color,
  });

  const iconLeftPadding = 30;
  const calculatedWidthContainer = `calc(100% - ${margin + padding}px)`;
  const calculatedWidthInput = `calc(100% - ${padding * (iconLeft ? 1 : 2) + (iconLeft ? iconLeftPadding : 0)}px)`;

  const filled: SerializedStyles = css({
    backgroundColor: getColor({}).backgroundAccent,
    "&:focus": {
      borderBottomWidth: 3,
      borderBottomStyle: "solid",
      borderBottomColor: getColor({}).color,
    },
  });

  const outlined: SerializedStyles = css([
    {
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
    backgroundColor: getColor({ variant: "subtle" }).color,
    "&:focus": {
      borderBottomWidth: 3,
      borderBottomStyle: "solid",
      borderBottomColor: getColor({}).color,
    },
  });

  const common: SerializedStyles = css({
    p: {
      margin: 0,
      padding: 0,
    },
    width: width,

    ".input-label": {},
    ".input-helper-text": {
      flexWrap: "wrap",
      fontSize: 12,
      color: getColor({}).fontLight,
    },
    ".input-error-text": {
      fontSize: 12,
      color: DEFAULT_COLORS.red[6],
      marginTop: 5,
    },
    ".input-wrapper": {
      position: "relative",
    },
    ".input-icon-left": {
      position: "absolute",
      top: "50%",
      left: 2,
      transform: "translateY(-50%)",
      height: iconLeftPadding,
      width: iconLeftPadding,
      pointerEvents: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ".INPUT": [
      fullWidth && { width: calculatedWidthContainer },
      {
        width: calculatedWidthInput,
        outline: 0,
        borderWidth: 0,
        color: getColor({}).font,

        ".button-icon-container-right": {},
        "&:hover": {},
        "&:focus": {},
      },
      iconLeft && { paddingLeft: iconLeftPadding },
      {
        ...getVariantStyles({ filled, subtle, outlined, variant }),
      },
      disabled && {
        filter: "grayscale(1)",
        pointerEvents: "none",
        color: "red",
      },
    ],
  });

  return common;
};
