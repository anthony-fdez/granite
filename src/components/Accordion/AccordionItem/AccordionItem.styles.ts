import { IStyles } from "./../../ThemeProvider/Interfaces/IStyles";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

interface Props {
  styles: IStyles;
}

export const getAccordionItemStyles = ({ styles }: Props): SerializedStyles => {
  const simple = css({
    overflow: "hidden",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "gray",
    ".accordion-item-header": {
      padding: 20,
    },
    ".accordion-item-content": {
      paddingLeft: 20,
      paddingRight: 20,
    },
  });

  return simple;
};
