import { AvailableColorsType } from "../../constants/theme/colors";
import { colors } from "../../constants/theme/colors";
import { getVariantStyles } from "../ThemeProvider/getValues/getVariantStyles";
import { getBorderRadius } from "../ThemeProvider/getValues/getBorderRadius";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { css, SerializedStyles } from "@emotion/react";
import { VariantsType } from "../../types/variants";

interface Props {
  styles: IStyles;
  variant: VariantsType;
  color?: AvailableColorsType;
}

export const getButtonStyles = ({ styles, variant, color }: Props) => {
  if (!styles.primaryColor) return null;

  const COLOR = color ? color : styles.primaryColor;

  const filled: SerializedStyles = css({
    backgroundColor:
      colors[COLOR][styles.theme || "light"][variant].backgroundColor,
  });

  const outlined: SerializedStyles = css({
    border: 1,
    borderColor:
      colors[COLOR][styles.theme || "light"][variant].backgroundColor,
    borderStyle: "solid",
    backgroundColor: "transparent",
    color: colors[COLOR][styles.theme || "light"][variant].backgroundColor,
    "&:hover": {
      color: colors[COLOR][styles.theme || "light"][variant].fontColor,
    },
  });

  const subtle: SerializedStyles = css({
    backgroundColor:
      colors[COLOR][styles.theme || "light"][variant].backgroundColor,
    color: colors[COLOR][styles.theme || "light"][variant].fontColor,
    fontWeight: "600",
  });

  const common: SerializedStyles = css([
    {
      color: "white",
      transition: "100ms",
      backgroundColor: styles.primaryColor,
      border: 0,
      padding: 10,
      outline: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: getBorderRadius({}),
      cursor: "pointer",
      "&:hover": {
        backgroundColor:
          colors[COLOR][styles.theme || "light"][variant].backgroundColorHover,
      },
      "&:active": {
        transform: "translateY(2px)",
        transition: "0ms",
      },
    },
    {
      ...getVariantStyles({ filled, subtle, outlined, variant }),
    },
  ]);

  return common;
};
