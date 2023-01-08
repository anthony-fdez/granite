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
import { ILoadingOverlayPropsOptional } from "../../LoadingOverlay/LoadingOverlay.types";
import { IDrawerPropsOptional } from "../../Drawer/Drawer.types";

export type INumberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface IStyles {
  colors?: IColorShades;
  components?: {
    Accordion?: IAccordionPropsOptional;
    Backdrop?: IBackdropProps;
    Button?: IButtonPropsOptional;
    CloseButton?: ICloseButtonProps;
    Dialog?: IDialogPropsOptional;
    Divider?: IDividerProps;
    Drawer?: IDrawerPropsOptional;
    LoadingOverlay?: ILoadingOverlayPropsOptional;
    Modal?: IModalPropsOptional;
    TextInput?: ITextInputProps;
  };
  global?: {
    animated?: boolean;
    borderRadius?: ISizes;
    color?: IColors;
    shade?: INumberRange;
    variant?: IVariants;
  };
  theme?: ITheme;
}

export interface IContext {
  setState: (state: IStyles) => void;
  styles: IStyles | null;
}
