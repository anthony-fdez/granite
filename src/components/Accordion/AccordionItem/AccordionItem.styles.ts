import { colors } from "./../../../constants/theme/colors";
import { IStyles } from "./../../ThemeProvider/Interfaces/IStyles";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { Variants } from "framer-motion";

interface Props {
  styles: IStyles;
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

export const getAccordionItemStyles = ({ styles }: Props): SerializedStyles => {
  const BORDER = colors.common[styles.theme || "light"].border;
  const BG = colors.common[styles.theme || "light"].background;
  const BG_ACCENT = colors.common[styles.theme || "light"].backgroundAccent;

  const simple = css({
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: BORDER,
    ".icon": {
      height: 15,
      width: 15,
    },
    ".accordion-item-header": {
      padding: 20,
      cursor: "pointer",
      ":hover": {
        backgroundColor: BG_ACCENT,
      },
    },
    ".accordion-item-content": {
      paddingLeft: 20,
      paddingRight: 20,
    },
  });

  return simple;
};
