import { SpinnersType } from "./../Spinner/Spinner.types";
import { SizesType } from "./../../types/sizes";
import { AvailableColorsType } from "./../../constants/theme/colors";
import { VariantsType } from "./../../types/variants";

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