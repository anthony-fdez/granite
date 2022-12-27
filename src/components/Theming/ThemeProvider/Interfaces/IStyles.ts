import { IBackdropProps } from "./../../../Overlays/Backdrop/Backdrop.types";
import { ICloseButtonProps } from "./../../../Buttons/CloseButton/CloseButton.types";
import { IDividerProps } from "./../../../Extra/Divider/Divider.types";
import { IAccordionPropsOptional } from "./../../../DataDisplay/Accordion/Accordion.types";
import { IDialogPropsOptional } from "./../../../Overlays/Dialog/Dialog.types";
import { IModalPropsOptional } from "./../../../Overlays/Modal/Modal.types";
import { IVariants } from "./../../../../types/variants";
import { ITheme } from "./../../../../types/theme";
import { IColorShades, IColors } from "./../../../../constants/theme/colors";
import { ISizes } from "./../../../../types/sizes";
import { IButtonPropsOptional } from "../../../Buttons/Button/Button.types";
import { ITextInputProps } from "../../../Inputs/TextInput/TextInput.types";

export type INumberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface IStyles {
  theme?: ITheme;
  global?: {
    color?: IColors;
    borderRadius?: ISizes;
    animated?: boolean;
    shade?: INumberRange;
    variant?: IVariants;
  };
  colors?: IColorShades;
  components?: {
    Button?: IButtonPropsOptional;
    CloseButton?: ICloseButtonProps;
    Modal?: IModalPropsOptional;
    Dialog?: IDialogPropsOptional;
    Divider?: IDividerProps;
    TextInput?: ITextInputProps;
    Accordion?: IAccordionPropsOptional;
    Backdrop?: IBackdropProps;
  };
}

export interface IContext {
  styles: IStyles;
  setState: (state: IStyles) => void;
}
