import { IVariants } from "../../utils/types/variants";
import { IStyles, INumberRange } from "../../components/ThemeProvider/Interfaces/IStyles";
import { IColors } from "../../constants/theme/colors";

interface IMethodProps {
  color: IColors;
  dark: boolean;
  shade: INumberRange;
  styles: IStyles;
  variant: IVariants;
}

export default IMethodProps;
