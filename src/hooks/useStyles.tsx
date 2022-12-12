import { IStyles } from "../components/Theming/ThemeProvider/Interfaces/IStyles";
import { DEFAULT_COLORS, IColors } from "../constants/theme/colors";

interface Props {
  styles: IStyles;
  color?: IColors;
}

export const useStyles = ({ styles, color }: Props) => {
  const getColor = (shade: number) => {
    if (color) {
      return DEFAULT_COLORS[color][shade];
    }

    return DEFAULT_COLORS[styles.primaryColor ?? "blue"][shade];
  };

  return {
    FONT:
      styles.theme === "dark" ? DEFAULT_COLORS.gray[0] : DEFAULT_COLORS.dark[9],
    BG:
      styles.theme === "dark" ? DEFAULT_COLORS.dark[9] : DEFAULT_COLORS.gray[0],
    BG_ACCENT:
      styles.theme === "dark" ? DEFAULT_COLORS.dark[8] : DEFAULT_COLORS.gray[1],
    BG_HOVER:
      styles.theme === "dark" ? DEFAULT_COLORS.dark[7] : DEFAULT_COLORS.gray[2],
    BORDER:
      styles.theme === "dark" ? DEFAULT_COLORS.dark[6] : DEFAULT_COLORS.gray[3],

    COLOR: getColor(6),
    COLOR_HOVER: getColor(7),
  };
};
