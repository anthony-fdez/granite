import { useContext } from "react";
import { StateContext } from "../../components/ThemeProvider/ThemeProvider";
import { IStyles } from "../../components/ThemeProvider/Interfaces/IStyles";
import errors from "../../constants/errors/errors";

const useAppContext = (): { styles: IStyles } => {
  const { styles } = useContext(StateContext);

  if (!styles) {
    throw new Error(errors.no_context);
  }

  return { styles };
};

export default useAppContext;
