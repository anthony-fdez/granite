import { SizesType } from "../../../types/sizes";
import { numberRange } from "../../ThemeProvider/Interfaces/IStyles";
import { ColorsType } from "./../../ThemeProvider/constants/colors";
import { VariantsType } from "../../../types/variants";
import { SpinnersType } from "../../../types/spinners";

export interface IButtonProps {
  children: string;
  variant: VariantsType;
  color?: ColorsType;
  colorShade?: numberRange;
  padding?: SizesType | number;
  margin?: SizesType | number;
  borderRadius?: SizesType;
  loading?: boolean;
  fontColor?: "white" | "black" | string;
  width?: number;
  align?: "start" | "center" | "end";
  spinnerVariant?: SpinnersType;
}
