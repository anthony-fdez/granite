/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

import { Variants } from "framer-motion";
import { GetColorProps } from "../../../styles/useStyles";
import { IAccordionVariants } from "../Accordion.types";
import IUseStyles from "../../../styles/interfaces/IUseStyles";

interface Props {
  arrowSize: number;
  getColor: (props: GetColorProps) => IUseStyles;
  isActive: boolean;
  variant: IAccordionVariants;
}

export const accordionAnimation: Variants = {
  open: {
    opacity: 1,
    marginTop: 20,
    marginBottom: 20,
    height: "auto",
  },
  closed: {
    opacity: 0,
    height: 0,
  },
};

export const chevronAnimation: Variants = {
  open: {
    transform: "rotateX(180deg)",
  },
};

export const getAccordionItemStyles = ({ getColor, variant, isActive, arrowSize }: Props): SerializedStyles => {
  const common = css(
    [
      {
        overflow: "hidden",
        ".icon": {
          height: arrowSize,
          width: arrowSize,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        ".Granite-Accordion-header": {
          padding: 20,
          cursor: "pointer",
        },
        ".Granite-Accordion-content": {
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
      ".Granite-Accordion-header": {
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
    },
  );

  return common;
};
