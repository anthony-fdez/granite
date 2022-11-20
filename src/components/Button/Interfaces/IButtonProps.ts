import { sizes } from "../../../types/sizes";
import { numberRange } from "../../ThemeProvider/Interfaces/IStyles";
import { IColors } from "./../../ThemeProvider/constants/colors";
import { variants } from "../../../types/variants";

export interface IButtonProps {
  children: string;
  variant: variants;
  color?: IColors["colors"];
  colorShade?: numberRange;
  padding?: sizes | number;
  margin?: sizes | number;
  borderRadius?: sizes;
  loading?: boolean;
  fontColor?: "white" | "black" | string;
  width?: number;
  align?: "start" | "center" | "end";
}
