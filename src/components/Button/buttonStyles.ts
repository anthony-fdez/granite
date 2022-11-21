import { AvailableColorsType } from "./../../constants/theme/colors";
import { colors } from "../../constants/theme/colors";
import { getVariantStyles } from "./../ThemeProvider/getValues/getVariantStyles";
import { getBorderRadius } from "../ThemeProvider/getValues/getBorderRadius";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { css } from "@emotion/react";
import { VariantsType } from "../../types/variants";

interface Props {
  styles: IStyles;
  variant: VariantsType;
  color: AvailableColorsType;
}

export const getButtonStyles = ({ styles, variant, color }: Props) => {
  const filled = css({
    backgroundColor:
      colors[color][styles.theme || "light"][variant].backgroundColor,
  });

  const outlined = css({
    border: 1,
    borderColor:
      colors[color][styles.theme || "light"][variant].backgroundColor,
    borderStyle: "solid",
    backgroundColor: "transparent",
    color: colors[color][styles.theme || "light"][variant].backgroundColor,
    "&:hover": {
      color: colors[color][styles.theme || "light"][variant].fontColor,
    },
  });

  const subtle = css({
    backgroundColor:
      colors[color][styles.theme || "light"][variant].backgroundColor,
    color: colors[color][styles.theme || "light"][variant].fontColor,
    fontWeight: "600",
  });

  const common = css([
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
          colors[color][styles.theme || "light"][variant].backgroundColorHover,
      },
      "&:active": {
        transform: "translateY(1px)",
      },
    },
    {
      ...getVariantStyles({ filled, subtle, outlined, variant }),
    },
  ]);

  return common;
};
