import { IStyles } from "./../../ThemeProvider/Interfaces/IStyles";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";

interface Props {
  styles: IStyles;
}

export const getAccordionItemStyles = ({ styles }: Props): SerializedStyles => {
  const simple = css({});

  return simple;
};
