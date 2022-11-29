import { Variants } from "framer-motion";
import { SerializedStyles } from "@emotion/react";
import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";
import { css } from "@emotion/react";
import { colors } from "../../../constants/theme/colors";

interface Props {
  styles: IStyles;
}

export const modalVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
  },
  closed: {
    opacity: 0,
    scale: 0.9,
  },
};

export const getModalStyles = ({ styles }: Props) => {
  const BACKGROUND = colors.common[styles.theme || "light"].background;

  const stylesOpen: SerializedStyles = css({
    position: "fixed",
    backgroundColor: BACKGROUND,
    margin: "auto",
    left: 0,
    right: 0,
    top: 100,
    overflow: "auto",

    ".modal-header": {
      paddingTop: 10,
      paddingBottom: 10,
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
    { pointerEvents: "none" },
  ]);

  return { stylesOpen, stylesClosed };
};