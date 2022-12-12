import { IColors } from "./../../../../constants/theme/colors";
import { ISizes } from "./../../../../types/sizes";

export type numberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface IStyles {
  theme?: "dark" | "light";
  primaryColor?: IColors;
  borderRadius?: ISizes;
  animated?: boolean;
}

export interface IContext {
  styles: IStyles;
  setState: (state: IStyles) => void;
}
