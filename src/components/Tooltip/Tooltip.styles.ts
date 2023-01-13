import { css, SerializedStyles } from "@emotion/react";
import { Variants } from "framer-motion";
import { GetColorProps } from "./../../styles/useStyles";
import IUseStyles from "../../styles/interfaces/IUseStyles";
import { IPopupPositions } from "../../utils/types/IPopupPositions";

interface Props {
  getColor: (props: GetColorProps) => IUseStyles;
  position?: IPopupPositions;
}

export const getTooltipVariants = (): Variants => {
  return {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };
};

export const getTooltipStyles = ({ getColor, position }: Props): SerializedStyles => {
  return css(
    {
      position: "relative",
      display: "inline-block",
      ".Granite-Tooltip-tooltip": {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        padding: 7,
        color: getColor({}).font,
        background: getColor({}).backgroundAccent,
        fontSize: 14,
        fontFamily: "sans-serif",
        lineHeight: 1,
        borderColor: getColor({}).border,
        borderWidth: 2,
        borderStyle: "solid",
        zIndex: 100,
        lineBreak: "auto",
        whiteSpace: "nowrap",
        maxWidth: "90vw",
        overflow: "auto",
      },
    },
    position === "top" && { ".Granite-Tooltip-tooltip": { bottom: "100%" } },
    position === "top-start" && {
      ".Granite-Tooltip-tooltip": {
        left: "auto",
        right: "100%",
        bottom: "100%",
        transform: "translateX(calc(100% + 5px))",
      },
    },
    position === "top-end" && {
      ".Granite-Tooltip-tooltip": {
        right: "auto",
        left: "100%",
        bottom: "100%",
        transform: "translateX(calc(-100% - 5px))",
      },
    },
    position === "bottom" && { ".Granite-Tooltip-tooltip": { top: "100%" } },
    position === "bottom-start" && {
      ".Granite-Tooltip-tooltip": {
        left: "auto",
        right: "100%",
        top: "100%",
        transform: "translateX(calc(100% + 5px))",
      },
    },
    position === "bottom-end" && {
      ".Granite-Tooltip-tooltip": {
        right: "auto",
        left: "100%",
        top: "100%",
        transform: "translateX(calc(-100% - 5px))",
      },
    },
    position === "left" && {
      ".Granite-Tooltip-tooltip": {
        left: "auto",
        right: "100%",
        top: "50%",
        transform: "translateX(0px) translateY(-50%)",
      },
    },
    position === "left-end" && {
      ".Granite-Tooltip-tooltip": {
        left: "auto",
        right: "100%",
        top: "100%",
        transform: "translateX(0px) translateY(calc(-100% - 5px))",
      },
    },
    position === "left-start" && {
      ".Granite-Tooltip-tooltip": {
        left: "auto",
        right: "100%",
        bottom: "100%",
        transform: "translateX(0px) translateY(calc(100% + 5px))",
      },
    },
    position === "right" && {
      ".Granite-Tooltip-tooltip": {
        left: "100%",
        top: "50%",
        transform: "translateX(0px) translateY(-50%)",
      },
    },
    position === "right-end" && {
      ".Granite-Tooltip-tooltip": {
        right: "auto",
        left: "100%",
        top: "100%",
        transform: "translateX(0px) translateY(calc(-100% - 5px))",
      },
    },
    position === "right-start" && {
      ".Granite-Tooltip-tooltip": {
        right: "auto",
        left: "100%",
        bottom: "100%",
        transform: "translateX(0px) translateY(calc(100% + 5px))",
      },
    },
  );
};
