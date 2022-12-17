import { CLOSE_BUTTON_DEFAULT_PROPS } from "./../../components/Buttons/CloseButton/CloseButton.props";
import { BUTTON_DEFAULT_PROPS } from "../../components/Buttons/Button/Button.props";
import { IStyles } from "../../components/Theming/ThemeProvider/Interfaces/IStyles";
import { MODAL_DEFAULT_PROPS } from "../../components/Overlays/Modal/Modal.props";

export const DEFAULT_STYLES: IStyles = {
  theme: "light",
  global: {
    color: "blue",
    borderRadius: "xs",
    animated: true,
    shade: 6,
    variant: "filled",
  },
  components: {
    Button: BUTTON_DEFAULT_PROPS,
    CloseButton: CLOSE_BUTTON_DEFAULT_PROPS,
    Modal: MODAL_DEFAULT_PROPS,
  },
};
