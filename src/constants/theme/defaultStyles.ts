import { DEFAULT_COLORS } from "./colors";
import { BACKDROP_DEFAULT_PROPS } from "../../components/Backdrop/Backdrop.props";
import { CLOSE_BUTTON_DEFAULT_PROPS } from "../../components/CloseButton/CloseButton.props";
import { DIVIDER_DEFAULT_PROPS } from "../../components/Divider/Divider.props";
import { BUTTON_DEFAULT_PROPS } from "../../components/Button/Button.props";
import { IStyles } from "../../components/ThemeProvider/Interfaces/IStyles";
import { MODAL_DEFAULT_PROPS } from "../../components/Modal/Modal.props";
import { DIALOG_DEFAULT_PROPS } from "../../components/Dialog/Dialog.props";
import { TEXT_INPUT_DEFAULT_PROPS } from "../../components/TextInput/TextInput.props";
import { ACCORDION_DEFAULT_PROPS } from "../../components/Accordion/Accordion.props";
import { LOADING_OVERLAY_DEFAULT_PROPS } from "../../components/LoadingOverlay/LoadingOverlay.props";

const DEFAULT_STYLES: IStyles = {
  theme: "light",
  global: {
    color: "blue",
    borderRadius: "xs",
    animated: true,
    shade: 6,
    variant: "filled",
  },
  colors: DEFAULT_COLORS,
  components: {
    Button: BUTTON_DEFAULT_PROPS,
    CloseButton: CLOSE_BUTTON_DEFAULT_PROPS,
    Modal: MODAL_DEFAULT_PROPS,
    Dialog: DIALOG_DEFAULT_PROPS,
    Divider: DIVIDER_DEFAULT_PROPS,
    TextInput: TEXT_INPUT_DEFAULT_PROPS,
    Accordion: ACCORDION_DEFAULT_PROPS,
    Backdrop: BACKDROP_DEFAULT_PROPS,
    LoadingOverlay: LOADING_OVERLAY_DEFAULT_PROPS,
  },
};

export default DEFAULT_STYLES;
