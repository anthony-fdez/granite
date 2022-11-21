import { SizesType } from "../../../types/sizes";
import { numberRange } from "../../ThemeProvider/Interfaces/IStyles";
import { AvailableColorsType } from "../../../constants/theme/colors";
import { VariantsType } from "../../../types/variants";
import { SpinnersType } from "../../../types/spinners";

export interface IButtonProps {
  children: string;
  variant?: VariantsType;
  color?: AvailableColorsType;
  padding?: SizesType | number;
  margin?: SizesType | number;
  borderRadius?: SizesType;
  loading?: boolean;
  fontColor?: "white" | "black" | string;
  width?: number;
  align?: "start" | "center" | "end";
  spinnerVariant?: SpinnersType;
}
