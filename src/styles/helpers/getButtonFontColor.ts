import { numberRange } from "./../../components/Theming/ThemeProvider/Interfaces/IStyles";
import { IStyles } from "./../../../types/components/Theming/ThemeProvider/Interfaces/IStyles.d";
import { DEFAULT_COLORS, IColors } from "./../../constants/theme/colors";

interface Props {
  color?: IColors;
  styles: IStyles;
}

// ! TODO
// ? https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area

export const getButtonFontColor = ({ color, styles }: Props) => {
  return "white";
};
