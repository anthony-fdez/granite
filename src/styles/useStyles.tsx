import { IStyles, numberRange } from "../components/Theming/ThemeProvider/Interfaces/IStyles";
import { IColors } from "../constants/theme/colors";
import { IVariants } from "../types/variants";
import { _getBackground } from "./methods/GET_BACKGROUND";
import { _getBackgroundAccent } from "./methods/GET_BACKGROUND_ACCENT";
import { _getBackgroundHover } from "./methods/GET_BACKGROUND_HOVER";
import { _getBorder } from "./methods/GET_BORDER";
import { _getColor } from "./methods/GET_COLOR";
import { _getColorHover } from "./methods/GET_COLOR_HOVER";
import { _getContrastFont } from "./methods/GET_CONTRAST_FONT";
import { _getFont } from "./methods/GET_FONT";
import { _getFontLight } from "./methods/GET_FONT_LIGHT";

interface Props {
  styles: IStyles;
  color?: IColors;
  shade?: numberRange;
}

interface GetColorProps {
  color?: IColors;
  shade?: numberRange;
  variant?: IVariants;
}

export interface IMethodProps {
  styles: IStyles;
  color: IColors;
  shade: numberRange;
  variant: IVariants;
  dark: boolean;
}

export const useStyles = ({ styles, color, shade }: Props) => {
  const _color: IColors = color || styles.global.color || "blue";
  const _dark: boolean = styles.theme === "dark";
  const _shade: numberRange = shade || styles.global.shade || 6;

  return {
    getColor: ({ color = _color, shade = _shade, variant = styles.global.variant || "filled" }: GetColorProps) => {
      const props = { styles, color, shade, variant, dark: _dark };

      return {
        color: _getColor({ ...props }),
        colorHover: _getColorHover({ ...props }),
        font: _getFont({ ...props }),
        fontLight: _getFontLight({ ...props }),
        fontContrast: _getContrastFont({ ...props }),
        border: _getBorder({ ...props }),
        background: _getBackground({ ...props }),
        backgroundHover: _getBackgroundHover({ ...props }),
        backgroundAccent: _getBackgroundAccent({ ...props }),
      };
    },
  };
};
