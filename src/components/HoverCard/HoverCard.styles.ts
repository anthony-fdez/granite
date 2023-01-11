import { css, SerializedStyles } from "@emotion/react";
import { Variants } from "framer-motion";
import { GetColorProps } from "./../../styles/useStyles";
import IUseStyles from "../../styles/interfaces/IUseStyles";
import { IPopupPositions } from "../../utils/types/IPopupPositions";

interface Props {
  getColor: (props: GetColorProps) => IUseStyles;
  position?: IPopupPositions;
}

export const getHoverCardVariants = (): Variants => {
  return {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };
};

export const getHoverCardStyles = ({ getColor, position }: Props): SerializedStyles => {
  return css(
    {
      position: "relative",
      display: "inline-block",
      ".Granite-HoverCard-card": {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        padding: 10,
        color: getColor({}).font,
        background: getColor({}).background,
        fontSize: 14,
        fontFamily: "sans-serif",
        lineHeight: 1,
        borderColor: getColor({}).border,
        borderWidth: 2,
        borderStyle: "solid",
        zIndex: 100,
        maxWidth: "calc(90vw - 20px)",
        overflow: "auto",
      },
    },
    position === "top" && { ".Granite-HoverCard-card": { bottom: "100%" } },
    position === "bottom" && { ".Granite-HoverCard-card": { top: "100%" } },
    position === "left" && {
      ".Granite-HoverCard-card": {
        left: "auto",
        right: "100%",
        top: "50%",
        transform: "translateX(0px) translateY(-50%)",
      },
    },
    position === "right" && {
      ".Granite-HoverCard-card": {
        left: "100%",
        top: "50%",
        transform: "translateX(0px) translateY(-50%)",
      },
    },
  );
};
