/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { IState } from "../../ThemeProvider/Interfaces/IState";

interface Props {
  state: IState;
}

export const getButtonStyles = ({ state }: Props) => {
  return css({
    backgroundColor: "red",
    color: "blue",
    fontSize: "20px",
    "@media(min-width: 900px)": {
      backgroundColor: "blue",
    },
  });
};
