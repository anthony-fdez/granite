import { IModalPropsOptional } from "./../../../Overlays/Modal/Modal.types";
import { ICloseButtonProps } from "./../../../Buttons/CloseButton/CloseButton.types";
import { IVariants } from "./../../../../types/variants";
import { ITheme } from "./../../../../types/theme";
import { IColors } from "./../../../../constants/theme/colors";
import { ISizes } from "./../../../../types/sizes";
import { IButtonPropsOptional } from "../../../Buttons/Button/Button.types";

export type numberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface IStyles {
  theme?: ITheme;
  global: {
    color?: IColors;
    borderRadius?: ISizes;
    animated?: boolean;
    shade?: numberRange;
    variant?: IVariants;
  };
  components?: {
    Button?: IButtonPropsOptional;
    CloseButton?: ICloseButtonProps;
    Modal?: IModalPropsOptional;
  };
}

export interface IContext {
  styles: IStyles;
  setState: (state: IStyles) => void;
}
