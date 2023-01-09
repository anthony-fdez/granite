import { css, SerializedStyles } from "@emotion/react";
import { Variants } from "framer-motion";
import { TooltipPositionsType } from "./Tooltip.types";
import { IStyles } from "../ThemeProvider/Interfaces/IStyles";

interface Props {
  position?: TooltipPositionsType;
  styles: IStyles;
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

const getTooltipStyles = ({ styles, position }: Props): SerializedStyles => {
  return css(
    {
      position: "relative",
      display: "inline-block",
      ".tooltip": {
        position: "absolute",
        borderRadius: 3,
        left: "50%",
        transform: "translateX(-50%)",
        padding: 10,
        color: "white",
        background: "black",
        fontSize: 14,
        fontFamily: "sans-serif",
        lineHeight: 1,
        zIndex: 100,
        whiteSpace: "nowrap",
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
