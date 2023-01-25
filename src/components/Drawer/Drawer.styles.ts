import { SerializedStyles, css } from "@emotion/react";
import { Variants } from "framer-motion";
import { GetColorProps } from "./../../styles/useStyles";
import { IDrawerPositions } from "./Drawer.types";
import IUseStyles from "../../styles/interfaces/IUseStyles";

interface Props {
  getColor: (props: GetColorProps) => IUseStyles;
  position?: IDrawerPositions;
}

export const getDrawerVariants = (position?: IDrawerPositions): Variants => {
  const top: Variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: "-100%",
    },
  };

  const bottom: Variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: "100%",
    },
  };

  const left: Variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-100%",
    },
  };

  const right: Variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "100%",
    },
  };

  if (position === "top") return top;
  if (position === "bottom") return bottom;
  if (position === "left") return left;
  if (position === "right") return right;

  return right;
};

export const getDrawerStyles = ({
  getColor,
  position,
}: Props): { stylesClosed: SerializedStyles; stylesOpen: SerializedStyles } => {
  const stylesOpen: SerializedStyles = css(
    {
      position: "fixed",
      backgroundColor: getColor({}).background,
      overflow: "auto",

      ".Granite-Drawer-header": {
        paddingBottom: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        span: {
          fontSize: 18,
        },
      },
    },
    position === "bottom" && {
      width: "100%",
      bottom: 0,
      left: 0,
    },
    position === "top" && {
      width: "100%",
      top: 0,
      left: 0,
    },
    position === "left" && {
      height: "100% !important",
      top: 0,
      left: 0,
    },
    position === "right" && {
      height: "100% !important",
      top: 0,
      right: 0,
    },
  );

  const stylesClosed: SerializedStyles = css([stylesOpen, { pointerEvents: "none" }]);

  return { stylesOpen, stylesClosed };
};
