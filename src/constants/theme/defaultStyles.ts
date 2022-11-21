import { IStyles } from "../../components/ThemeProvider/Interfaces/IStyles";

const shared: IStyles = {
  primaryColor: "blue",
};

const dark: IStyles = {
  theme: "dark",
};

const light: IStyles = {
  theme: "light",
};

export const defaultStylesLight: IStyles = { ...shared, ...light };
export const defaultStylesDark: IStyles = { ...shared, ...dark };
