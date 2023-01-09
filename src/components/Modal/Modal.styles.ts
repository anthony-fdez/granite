import { Variants } from "framer-motion";
import { SerializedStyles, css } from "@emotion/react";
import { GetColorProps } from "../../styles/useStyles";
import IUseStyles from "../../styles/interfaces/IUseStyles";

interface Props {
  getColor: (props: GetColorProps) => IUseStyles;
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

export const getModalStyles = ({
  getColor,
}: Props): { stylesClosed: SerializedStyles; stylesOpen: SerializedStyles } => {
  const stylesOpen: SerializedStyles = css({
    position: "fixed",
    backgroundColor: getColor({}).background,
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

  const stylesClosed: SerializedStyles = css([stylesOpen, { pointerEvents: "none" }]);

  return { stylesOpen, stylesClosed };
};
