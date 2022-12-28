import { useContext } from "react";
import { StateContext } from "../../components/Theming/ThemeProvider/ThemeProvider";
import { IStyles } from "../../components/Theming/ThemeProvider/Interfaces/IStyles";
import errors from "../../constants/errors/errors";

const useAppContext = (): { styles: IStyles } => {
  const { styles } = useContext(StateContext);

  if (!styles) {
    throw new Error(errors.no_context);
  }

  return { styles };
};

export default useAppContext;