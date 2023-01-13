import { css, SerializedStyles } from "@emotion/react";
import { IPopupPositions } from "../../utils/types/IPopupPositions";

interface Props {
  position: IPopupPositions;
}

const getPopupPosition = ({ position }: Props): SerializedStyles => {
  return css([
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
  ]);
};

export default getPopupPosition;
