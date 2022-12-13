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
  },
  closed: {
    opacity: 0,
    height: 0,
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
  const { BORDER, BG_ACCENT } = useStyles({ styles });

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
      borderBottomColor: BORDER,
      borderBottomStyle: "solid",
      ".accordion-item-header": {
        ":hover": {
          backgroundColor: BG_ACCENT,
        },
      },
    },
    variant === "filled" && {
      backgroundColor: `${isActive && BG_ACCENT}`,
      transition: "background 200ms",
    },
    variant === "outlined" && {
      borderColor: `${isActive ? BORDER : "transparent"}`,
      borderWidth: 3,
      borderStyle: "solid",
    }
  );

  return common;
};
