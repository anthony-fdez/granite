import { IStyles } from "../components/Theming/ThemeProvider/Interfaces/IStyles";
import { AvailableColorsType, colors } from "../constants/theme/colors";
import { VariantsType } from "../types/variants";

interface Props {
  color?: AvailableColorsType;
  styles: IStyles;
  variant: VariantsType;
}

// edited from the phone

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

  const BG_COLOR = colors[COLOR][variant].background;
  const BG_COLOR_HOVER = colors[COLOR][variant].backgroundHover;
  const FONT_COLOR = colors[COLOR][variant].font;

  return { BG_COLOR, BG_COLOR_HOVER, FONT_COLOR };
};
