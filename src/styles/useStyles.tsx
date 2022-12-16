import {
  IStyles,
  numberRange,
} from "../components/Theming/ThemeProvider/Interfaces/IStyles";
import { IColors } from "../constants/theme/colors";
import { IVariants } from "../types/variants";
import { _getBackground } from "./methods/_getBackground";
import { _getBackgroundAccent } from "./methods/_getBackgroundAccent";
import { _getBackgroundHover } from "./methods/_getBackgroundHover";
import { _getBorder } from "./methods/_getBorder";
import { _getColor } from "./methods/_getColor";
import { _getColorHover } from "./methods/_getColorHover";
import { _getContrastFont } from "./methods/_getContrastFont";
import { _getFont } from "./methods/_getFont";

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
    getColor: ({
      color = _color,
      shade = _shade,
      variant = styles.global.variant || "filled",
    }: GetColorProps) => {
      const props = { styles, color, shade, variant, dark: _dark };

      return {
        color: _getColor({ ...props }),
        colorHover: _getColorHover({ ...props }),
        font: _getFont({ ...props }),
        fontContrast: _getContrastFont({ ...props }),
        border: _getBorder({ ...props }),
        background: _getBackground({ ...props }),
        backgroundHover: _getBackgroundHover({ ...props }),
        backgroundAccent: _getBackgroundAccent({ ...props }),
      };
    },
  };
};
