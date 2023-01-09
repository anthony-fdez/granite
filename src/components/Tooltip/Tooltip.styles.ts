import { css, SerializedStyles } from "@emotion/react";
import { Variants } from "framer-motion";
import { GetColorProps } from "./../../styles/useStyles";
import { TooltipPositionsType } from "./Tooltip.types";
import IUseStyles from "../../styles/interfaces/IUseStyles";

interface Props {
  getColor: (props: GetColorProps) => IUseStyles;
  position?: TooltipPositionsType;
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

const getTooltipStyles = ({ getColor, position }: Props): SerializedStyles => {
  return css(
    {
      position: "relative",
      display: "inline-block",
      ".tooltip": {
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        padding: 10,
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
    position === "top" && { ".tooltip": { bottom: "100%" } },
    position === "bottom" && { ".tooltip": { top: "100%" } },
    position === "left" && {
      ".tooltip": {
        left: "auto",
        right: "100%",
        top: "50%",
        transform: "translateX(0px) translateY(-50%)",
      },
    },
    position === "right" && {
      ".tooltip": {
        left: "100%",
        top: "50%",
        transform: "translateX(0px) translateY(-50%)",
      },
    },
  );
};

export default getTooltipStyles;
