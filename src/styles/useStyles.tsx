import { IStyles, INumberRange } from "../components/ThemeProvider/Interfaces/IStyles";
import { IColors } from "../constants/theme/colors";
import { IVariants } from "../utils/types/IVariants";
import IUseStyles from "./interfaces/IUseStyles";
import * as methods from "./methods/index";

interface Props {
  color?: IColors;
  shade?: INumberRange;
  styles: IStyles;
}

export interface GetColorProps {
  color?: IColors;
  shade?: INumberRange;
  variant?: IVariants;
}

const useStyles = ({ styles, color, shade }: Props): { getColor: (props: GetColorProps) => IUseStyles } => {
  const COLOR: IColors = color || styles.global?.color || "blue";
  const DARK: boolean = styles.theme === "dark";
  const SHADE: INumberRange = shade || styles.global?.shade || 6;

  return {
    getColor: (props: GetColorProps): IUseStyles => {
      if (!styles.colors) throw new Error("'colors' property not found in the styles object.");

      const colorOverride = props.color || COLOR;
      const shadeOverride = props.shade || SHADE;
      const variantOverride = props.variant || styles.global?.variant || "filled";

      const methodProps = {
        color: colorOverride,
        dark: DARK,
        shade: shadeOverride,
        styles,
        variant: variantOverride,
      };

      return {
        background: methods.GET_BACKGROUND({ ...methodProps }),
        backgroundAccent: methods.GET_BACKGROUND_ACCENT({ ...methodProps }),
        backgroundHover: methods.GET_BACKGROUND_HOVER({ ...methodProps }),
        border: methods.GET_BORDER({ ...methodProps }),
        color: methods.GET_COLOR({ ...methodProps }),
        colorHover: methods.GET_COLOR_HOVER({ ...methodProps }),
        font: methods.GET_FONT({ ...methodProps }),
        fontContrast: methods.GET_CONTRAST_FONT({ ...methodProps }),
        fontDimmed: methods.GET_FONT_DIMMED({ ...methodProps }),
      };
    },
  };
};

export default useStyles;
