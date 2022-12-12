import { IStyles } from "../components/Theming/ThemeProvider/Interfaces/IStyles";
import { DEFAULT_COLORS, IColors } from "../constants/theme/colors";
import { getButtonFontColor } from "./helpers/getButtonFontColor";
import { getColor } from "./helpers/getColor";

interface Props {
  styles: IStyles;
  color?: IColors;
}

export const useStyles = ({ styles, color }: Props) => {
  return {
    FONT:
      styles.theme === "dark" ? DEFAULT_COLORS.gray[0] : DEFAULT_COLORS.dark[9],
    BUTTON_FONT: getButtonFontColor({ styles, color }),

    BG:
      styles.theme === "dark" ? DEFAULT_COLORS.dark[9] : DEFAULT_COLORS.gray[0],
    BG_ACCENT:
      styles.theme === "dark" ? DEFAULT_COLORS.dark[8] : DEFAULT_COLORS.gray[1],
    BG_HOVER:
      styles.theme === "dark" ? DEFAULT_COLORS.dark[4] : DEFAULT_COLORS.gray[3],
    BORDER:
      styles.theme === "dark" ? DEFAULT_COLORS.dark[4] : DEFAULT_COLORS.gray[3],

    COLOR: getColor({ styles, color, shade: 5 }),
    COLOR_HOVER: getColor({ styles, color, shade: 6 }),
  };
};
