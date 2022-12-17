/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

import { useStyles } from "../../../../styles/useStyles";
import { AccordionVariants } from "../Accordion.types";
import { IStyles } from "../../../Theming/ThemeProvider/Interfaces/IStyles";
import { Variants } from "framer-motion";

interface Props {
  styles: IStyles;
  variant: AccordionVariants;
  isActive: boolean;
  arrowSize: number;
}

export const accordionAnimation: Variants = {
  open: {
    opacity: 1,
    marginTop: 20,
    marginBottom: 20,
    height: "auto",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 500,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 500,
    },
  },
};

export const chevronAnimation: Variants = {
  open: {
    transform: "rotate(180deg)",
  },
};

export const getAccordionItemStyles = ({
  styles,
  variant,
  isActive,
  arrowSize,
}: Props): SerializedStyles => {
  const { getColor } = useStyles({ styles });

  const common = css(
    [
      {
        overflow: "hidden",
        ".icon": {
          height: arrowSize,
          width: arrowSize,
        },
        ".accordion-item-header": {
          padding: 20,
          cursor: "pointer",
        },
        ".accordion-item-content": {
          paddingLeft: 20,
          paddingRight: 20,
          overflow: "hidden",
        },
      },
    ],
    variant === "subtle" && {
      borderBottomWidth: 1,
      borderBottomColor: getColor({}).border,
      borderBottomStyle: "solid",
      ".accordion-item-header": {
        ":hover": {
          backgroundColor: getColor({}).backgroundAccent,
        },
      },
    },
    variant === "filled" && {
      backgroundColor: `${isActive && getColor({}).backgroundAccent}`,
      transition: "background 200ms",
    },
    variant === "outlined" && {
      borderColor: `${isActive ? getColor({}).border : "transparent"}`,
      borderWidth: 3,
      borderStyle: "solid",
    }
  );

  return common;
};
