import { IStyles } from "../../components/Theming/ThemeProvider/Interfaces/IStyles";

const shared: IStyles = {
  primaryColor: "blue",
  borderRadius: "xs",
  animated: true,
};

const dark: IStyles = {
  theme: "dark",
};

const light: IStyles = {
  theme: "light",
};

export const defaultStylesLight: IStyles = { ...shared, ...light };
export const defaultStylesDark: IStyles = { ...shared, ...dark };
