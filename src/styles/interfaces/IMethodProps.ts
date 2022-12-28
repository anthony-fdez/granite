import { IVariants } from "../../utils/types/variants";
import { IStyles, INumberRange } from "./../../components/Theming/ThemeProvider/Interfaces/IStyles";
import { IColors } from "../../constants/theme/colors";

interface IMethodProps {
  styles: IStyles;
  color: IColors;
  shade: INumberRange;
  variant: IVariants;
  dark: boolean;
}

export default IMethodProps;
