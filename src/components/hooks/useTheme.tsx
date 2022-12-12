import { useContext } from "react";
import { StateContext } from "../Theming/ThemeProvider/ThemeProvider";
import { IStyles } from "../Theming/ThemeProvider/Interfaces/IStyles";
import { DEFAULT_COLORS, IColorShades } from "../../constants/theme/colors";

interface IReturnInterface {
  styles?: IStyles;
  error?: string;
  colors?: IColorShades;
}

const useTheme = (): IReturnInterface => {
  const { styles } = useContext(StateContext);

  if (!styles) {
    return {
      error: "You can only call useTheme hook inside a ThemeProvider",
    };
  }

  return {
    styles,
    colors: DEFAULT_COLORS,
  };
};

export default useTheme;
