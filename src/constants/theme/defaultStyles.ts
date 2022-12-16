import { BUTTON_DEFAULT_PROPS } from "../../components/Buttons/Button/Button.props";
import { IStyles } from "../../components/Theming/ThemeProvider/Interfaces/IStyles";

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
  },
};
