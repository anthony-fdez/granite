import { SpinnersType } from "./../Spinner/Spinner.types";
import { SizesType } from "./../../types/sizes";
import { AvailableColorsType } from "./../../constants/theme/colors";
import { VariantsType } from "./../../types/variants";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: VariantsType;
  color?: AvailableColorsType;
  padding?: number;
  margin?: number;
  borderRadius?: SizesType;
  loading?: boolean;
  fontColor?: "white" | "black" | string;
  backgroundColor?: string;
  align?: "start" | "center" | "end";
  spinnerVariant?: SpinnersType;
  disabled?: boolean;
  fullWidth?: boolean;
}
