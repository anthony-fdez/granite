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
}

export const getTextInputStyles = ({
  styles,
  variant,
  color,
  disabled,
  error,
  margin,
}: Props) => {
  const { getColor } = useStyles({
    styles,
    color,
  });

  const filled: SerializedStyles = css({
    backgroundColor: getColor({}).backgroundAccent,
    "&:focus": {
      borderBottomWidth: 3,
      borderBottomStyle: "solid",
      borderBottomColor: getColor({}).color,
    },
  });

  const outlined: SerializedStyles = css({
    borderWidth: 1,
    borderColor: getColor({}).border,
    borderStyle: "solid",
    "&:hover": {},
    "&:focus": {
      borderColor: getColor({}).color,
    },
  });

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
    ".input-label": {},
    ".input-helper-text": {
      fontSize: 12,
      color: getColor({}).fontLight,
    },
    ".input-error-text": {
      fontSize: 12,
      color: DEFAULT_COLORS.red[6],
    },
    ".INPUT": [
      {
        outline: 0,
        borderWidth: 0,
        color: getColor({}).font,
        ".button-icon-container-left": {},
        ".button-icon-container-right": {},
        "&:hover": {},
        "&:focus": {},
      },
      {
        ...getVariantStyles({ filled, subtle, outlined, variant }),
      },
      disabled && {
        filter: "grayscale(1)",
        pointerEvents: "none",
      },
    ],
  });

  return common;
};
