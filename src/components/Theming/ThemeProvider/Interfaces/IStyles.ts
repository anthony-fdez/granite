import { ITheme } from "./../../../../types/theme";
import { IColors } from "./../../../../constants/theme/colors";
import { ISizes } from "./../../../../types/sizes";
import { IButtonProps } from "../../../Buttons/Button/Button.types";

export type numberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface IStyles {
  theme?: ITheme;
  primaryColor?: IColors;
  borderRadius?: ISizes;
  animated?: boolean;
  components?: {
    Button?: IButtonProps;
  };
}

export interface IContext {
  styles: IStyles;
  setState: (state: IStyles) => void;
}
