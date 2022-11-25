import { SerializedStyles } from "@emotion/react";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { css } from "@emotion/react";
import { colors } from "../../constants/theme/colors";

interface Props {
  styles: IStyles;
}

export const getModalStyles = ({ styles }: Props) => {
  const BACKGROUND = colors.common[styles.theme || "light"].background;

  const stylesOpen: SerializedStyles = css({
    position: "fixed",
    backgroundColor: BACKGROUND,
    margin: "auto",
    left: 0,
    right: 0,
    top: 100,

    ".modal-header": {
      padding: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      span: {
        fontSize: 18,
      },
      ".modal-header-close-button": {
        cursor: "pointer",
      },
    },
  });

  const stylesClosed: SerializedStyles = css([
    stylesOpen,
    { opacity: 0, transform: "translateY(20px)" },
  ]);

  return { stylesOpen, stylesClosed };
};
