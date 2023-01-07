import { IStyles, INumberRange } from "../../components/ThemeProvider/Interfaces/IStyles";
import { DEFAULT_COLORS, IColors } from "./../../constants/theme/colors";

interface Props {
  color: IColors;
  shade: INumberRange | number;
  styles: IStyles;
}

const getColor = ({ color, styles, shade }: Props): string => {
  if (!styles) {
    // If this is ever returned something is really broken
    return DEFAULT_COLORS.blue?.[6] || "";
  }

  const colors = styles.colors ?? DEFAULT_COLORS;
  const newShade = styles.theme === "dark" && shade < 9 ? shade + 1 : shade;

  if (color && colors) {
    // @ts-ignore
    return colors[color || "blue"][newShade];
  }

  // @ts-ignore
  return colors[styles.global?.color ?? "blue"][newShade];
};

export default getColor;
