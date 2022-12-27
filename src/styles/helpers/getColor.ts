import { IStyles, INumberRange } from "./../../components/Theming/ThemeProvider/Interfaces/IStyles";
import { DEFAULT_COLORS, IColors } from "./../../constants/theme/colors";

interface Props {
  color: IColors;
  styles: IStyles;
  shade: INumberRange | number;
}

const getColor = ({ color, styles, shade }: Props): string => {
  if (!styles) {
    // If this is ever returned something is really broken
    return DEFAULT_COLORS.blue[6];
  }

  const colors = styles.colors ?? DEFAULT_COLORS;
  const newShade = styles.theme === "dark" && shade < 9 ? shade + 1 : shade;

  if (color) {
    return colors[color][newShade];
  }

  return colors[styles.global?.color ?? "blue"][newShade];
};

export default getColor;
