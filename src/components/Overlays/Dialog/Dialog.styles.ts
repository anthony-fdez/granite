import { Variants } from "framer-motion";
import { SerializedStyles } from "@emotion/react";
import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";
import { css } from "@emotion/react";
import { colors } from "../../../constants/theme/colors";
import { DialogAnimationTypes, DialogPositionTypes } from "./Dialog.types";

interface Props {
  styles: IStyles;
  position: DialogPositionTypes;
}

interface VariantsProps {
  animation: DialogAnimationTypes;
}

export const getDialogVariants = ({ animation }: VariantsProps) => {
  const scale: Variants = {
    open: {
      opacity: 1,
      scale: 1,
    },
    closed: {
      opacity: 0,
      scale: 0.9,
    },
  };

  const slideLeft: Variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: 100,
    },
  };

  if (animation === "scale") return scale;
  if (animation === "slide-left") return slideLeft;
};

export const getDialogStyles = ({ styles, position }: Props) => {
  const BACKGROUND = colors.common[styles.theme || "light"].background;

  const margin = 20;

  const stylesOpen: SerializedStyles = css([
    {
      backgroundColor: BACKGROUND,
      position: "fixed",
      margin,
      overflowY: "auto",
      ".dialog-header": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    position === "bottom-right" && {
      bottom: 0,
      right: 0,
    },
    position === "bottom-left" && {
      bottom: 0,
      left: 0,
    },
    position === "bottom-center" && {
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
      marginBottom: margin,
    },
    position === "top-right" && {
      top: 0,
      right: 0,
    },
    position === "top-left" && {
      top: 0,
      left: 0,
    },
    position === "top-center" && {
      top: 0,
      left: 0,
      right: 0,
      margin: "auto",
      marginTop: margin,
    },
    position === "center" && {
      margin: "auto",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  ]);

  const stylesClosed: SerializedStyles = css([
    stylesOpen,
    { pointerEvents: "none" },
  ]);

  return { stylesOpen, stylesClosed };
};
