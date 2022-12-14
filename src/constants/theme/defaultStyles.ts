import { BUTTON_DEFAULT_PROPS } from "../../components/Buttons/Button/Button.props";
import { IStyles } from "../../components/Theming/ThemeProvider/Interfaces/IStyles";

export const DEFAULT_STYLES: IStyles = {
  primaryColor: "blue",
  borderRadius: "xs",
  animated: true,
  theme: "light",
  components: {
    Button: BUTTON_DEFAULT_PROPS,
  },
};
