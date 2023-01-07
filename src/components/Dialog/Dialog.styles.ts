import { Variants } from "framer-motion";
import { SerializedStyles, css } from "@emotion/react";
import { GetColorProps } from "../../styles/useStyles";
import { DialogAnimationTypes, DialogPositionTypes } from "./Dialog.types";
import IUseStyles from "../../styles/interfaces/IUseStyles";

interface Props {
  getColor: (props: GetColorProps) => IUseStyles;
  position: DialogPositionTypes;
}

interface VariantsProps {
  animation: DialogAnimationTypes;
}

export const getDialogVariants = ({ animation }: VariantsProps): Variants => {
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
      x: "100%",
    },
  };

  const slideRight: Variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };

  const fade: Variants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const slideTop: Variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: "100%",
    },
  };

  const slideBottom: Variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: "-100%",
    },
  };

  if (animation === "scale") return scale;
  if (animation === "slide-left") return slideLeft;
  if (animation === "slide-right") return slideRight;
  if (animation === "fade") return fade;
  if (animation === "slide-top") return slideTop;
  if (animation === "slide-bottom") return slideBottom;

  return scale;
};

export const getDialogStyles = ({
  getColor,
  position,
}: Props): { stylesOpen: SerializedStyles; stylesClosed: SerializedStyles } => {
  const margin = 20;

  const stylesOpen: SerializedStyles = css([
    {
      backgroundColor: getColor({}).background,
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

  const stylesClosed: SerializedStyles = css([stylesOpen, { pointerEvents: "none" }]);

  return { stylesOpen, stylesClosed };
};
