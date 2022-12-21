import { IStyles, INumberRange } from "../components/Theming/ThemeProvider/Interfaces/IStyles";
import { IColors } from "../constants/theme/colors";
import { IVariants } from "../types/variants";
import IUseStyles from "./interfaces/IUseStyles";
import * as methods from "./methods/index";

interface Props {
  styles: IStyles;
  color?: IColors;
  shade?: INumberRange;
}

interface GetColorProps {
  color?: IColors;
  shade?: INumberRange;
  variant?: IVariants;
}

const useStyles = ({ styles, color, shade }: Props): { getColor: (props: GetColorProps) => IUseStyles } => {
  const COLOR: IColors = color || styles.global.color || "blue";
  const DARK: boolean = styles.theme === "dark";
  const SHADE: INumberRange = shade || styles.global.shade || 6;

  return {
    getColor: (props: GetColorProps): IUseStyles => {
      const colorOverride = props.color || COLOR;
      const shadeOverride = props.shade || SHADE;
      const variantOverride = props.variant || styles.global.variant || "filled";

      const methodProps = { styles, color: colorOverride, shade: shadeOverride, variant: variantOverride, dark: DARK };

      return {
        color: methods.GET_COLOR({ ...methodProps }),
        colorHover: methods.GET_COLOR_HOVER({ ...methodProps }),
        font: methods.GET_FONT({ ...methodProps }),
        fontDimmed: methods.GET_FONT_DIMMED({ ...methodProps }),
        fontContrast: methods.GET_CONTRAST_FONT({ ...methodProps }),
        border: methods.GET_BORDER({ ...methodProps }),
        background: methods.GET_BACKGROUND({ ...methodProps }),
        backgroundHover: methods.GET_BACKGROUND_HOVER({ ...methodProps }),
        backgroundAccent: methods.GET_BACKGROUND_ACCENT({ ...methodProps }),
      };
    },
  };
};

export default useStyles;
