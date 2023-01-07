import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { IColorShades } from "../../constants/theme/colors";
import useAppContext from "../../utils/hooks/useAppContext";

interface IReturnInterface {
  styles?: IStyles;
  error?: string;
  colors?: IColorShades;
}

const useTheme = (): IReturnInterface => {
  const { styles } = useAppContext();

  return {
    styles,
  };
};

export default useTheme;
