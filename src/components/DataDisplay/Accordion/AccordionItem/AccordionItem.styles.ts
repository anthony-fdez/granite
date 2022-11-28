import { AccordionVariants } from "../Accordion.types";
import { colors } from "../../../../constants/theme/colors";
import { IStyles } from "../../../Theming/ThemeProvider/Interfaces/IStyles";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { Variants } from "framer-motion";

interface Props {
  styles: IStyles;
  variant: AccordionVariants;
  isActive: boolean;
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
}: Props): SerializedStyles => {
  const BORDER = colors.common[styles.theme || "light"].border;
  const BG = colors.common[styles.theme || "light"].background;
  const BG_ACCENT = colors.common[styles.theme || "light"].backgroundAccent;

  const common = css(
    [
      {
        overflow: "hidden",
        ".icon": {
          height: 15,
          width: 15,
        },
        ".accordion-item-header": {
          padding: 20,
          cursor: "pointer",
        },
        ".accordion-item-content": {
          paddingLeft: 20,
          paddingRight: 20,
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
