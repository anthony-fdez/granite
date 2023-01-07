import { IBackdropProps } from "../../Backdrop/Backdrop.types";
import { ICloseButtonProps } from "../../CloseButton/CloseButton.types";
import { IDividerProps } from "../../Divider/Divider.types";
import { IAccordionPropsOptional } from "../../Accordion/Accordion.types";
import { IDialogPropsOptional } from "../../Dialog/Dialog.types";
import { IModalPropsOptional } from "../../Modal/Modal.types";
import { IVariants } from "../../../utils/types/variants";
import { ITheme } from "../../../utils/types/theme";
import { IColorShades, IColors } from "../../../constants/theme/colors";
import { ISizes } from "../../../utils/types/sizes";
import { IButtonPropsOptional } from "../../Button/Button.types";
import { ITextInputProps } from "../../TextInput/TextInput.types";

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
  styles: IStyles | null;
  setState: (state: IStyles) => void;
}
