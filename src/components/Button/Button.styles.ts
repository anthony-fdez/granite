import { useGetColors } from "./../../hooks/useGetColors";
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
  disabled?: boolean;
}

export const getButtonStyles = ({
  styles,
  variant,
  color,
  disabled,
}: Props) => {
  if (!styles.primaryColor) return null;

  const { BG_COLOR, BG_COLOR_HOVER, FONT_COLOR } = useGetColors({
    color,
    styles,
    variant,
  });

  const filled: SerializedStyles = css({
    backgroundColor: BG_COLOR,
  });

  const outlined: SerializedStyles = css({
    border: 1,
    borderColor: BG_COLOR,
    borderStyle: "solid",
    backgroundColor: "transparent",
    color: BG_COLOR,
    "&:hover": {
      color: FONT_COLOR,
    },
  });

  const subtle: SerializedStyles = css({
    backgroundColor: BG_COLOR,
    color: FONT_COLOR,
    fontWeight: "600",
  });

  const common: SerializedStyles = css([
    {
      color: FONT_COLOR,
      transition: "100ms",
      backgroundColor: BG_COLOR,
      border: 0,
      padding: 10,
      outline: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: BG_COLOR_HOVER,
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
