import { IColors } from "./../../../constants/theme/colors";
import { ISizes } from "./../../../types/sizes";
import { IVariants } from "./../../../types/variants";
import { SpinnersType } from "../../Feedback/Spinner/Spinner.types";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: IVariants;
  color?: IColors;
  padding?: number;
  margin?: number;
  borderRadius?: ISizes;
  loading?: boolean;
  fontColor?: "white" | "black" | string;
  backgroundColor?: string;
  align?: "start" | "center" | "end";
  spinnerVariant?: SpinnersType;
  disabled?: boolean;
  fullWidth?: boolean;
}
