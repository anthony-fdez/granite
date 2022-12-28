import { useContext } from "react";
import { StateContext } from "../../components/Theming/ThemeProvider/ThemeProvider";
import { IStyles } from "../../components/Theming/ThemeProvider/Interfaces/IStyles";

const useAppContext = (): { styles: IStyles } => {
  const { styles } = useContext(StateContext);

  if (!styles) {
    throw new Error("component context not found, make sure you are wrapping you app in a <ThemeProvider />");
  }

  return { styles };
};

export default useAppContext;
