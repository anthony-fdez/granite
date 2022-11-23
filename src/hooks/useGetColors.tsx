import { IStyles } from "../components/ThemeProvider/Interfaces/IStyles";
import { AvailableColorsType, colors } from "../constants/theme/colors";
import { VariantsType } from "../types/variants";

interface Props {
  color?: AvailableColorsType;
  styles: IStyles;
  variant: VariantsType;
}

export const useGetColors = ({
  color,
  styles,
  variant,
}: Props): {
  BG_COLOR: string;
  BG_COLOR_HOVER: string;
  FONT_COLOR: string;
} => {
  const COLOR = color
    ? color
    : styles.primaryColor
    ? styles.primaryColor
    : "blue";

  const BG_COLOR =
    colors[COLOR][styles.theme || "light"][variant].backgroundColor;
  const BG_COLOR_HOVER =
    colors[COLOR][styles.theme || "light"][variant].backgroundColorHover;
  const FONT_COLOR = colors[COLOR][styles.theme || "light"][variant].fontColor;

  return { BG_COLOR, BG_COLOR_HOVER, FONT_COLOR };
};
