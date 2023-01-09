import { SerializedStyles, css } from "@emotion/react";
import { Variants } from "framer-motion";
import { GetColorProps } from "./../../styles/useStyles";
import { IDrawerPositions } from "./Drawer.types";
import IUseStyles from "../../styles/interfaces/IUseStyles";

interface Props {
  getColor: (props: GetColorProps) => IUseStyles;
  position?: IDrawerPositions;
}

export const drawerVariants = (position: IDrawerPositions): Variants => {};

export const getDrawerStyles = ({
  getColor,
  position,
}: Props): { stylesClosed: SerializedStyles; stylesOpen: SerializedStyles } => {
  const stylesOpen: SerializedStyles = css(
    {
      position: "fixed",
      backgroundColor: getColor({}).background,
      overflow: "auto",
      maxHeight: "95vh",
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
  );

  const stylesClosed: SerializedStyles = css([stylesOpen, { pointerEvents: "none" }]);

  return { stylesOpen, stylesClosed };
};
