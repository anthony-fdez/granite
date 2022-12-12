import { numberRange } from "./../../components/Theming/ThemeProvider/Interfaces/IStyles";
import { IStyles } from "./../../../types/components/Theming/ThemeProvider/Interfaces/IStyles.d";
import { DEFAULT_COLORS, IColors } from "./../../constants/theme/colors";

interface Props {
  color?: IColors;
  styles: IStyles;
  shade: numberRange;
}

export const getColor = ({ color, styles, shade }: Props) => {
  if (color) {
    return DEFAULT_COLORS[color][shade];
  }

  return DEFAULT_COLORS[styles.primaryColor ?? "blue"][shade];
};
