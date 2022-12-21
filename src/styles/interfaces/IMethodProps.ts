import { IVariants } from "./../../types/variants";
import { IColors } from "./../../../types/constants/theme/colors.d";
import { IStyles, INumberRange } from "./../../components/Theming/ThemeProvider/Interfaces/IStyles";

interface IMethodProps {
  styles: IStyles;
  color: IColors;
  shade: INumberRange;
  variant: IVariants;
  dark: boolean;
}

export default IMethodProps;
