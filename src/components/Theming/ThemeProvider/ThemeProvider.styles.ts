import { useStyles } from "./../../../hooks/useStyles";
import { IStyles } from "./Interfaces/IStyles";
import { css } from "@emotion/react";

interface Props {
  styles: IStyles;
}

export const getGlobalStyles = ({ styles }: Props) => {
  const { FONT, BG } = useStyles({ styles });

  return css({
    html: {
      backgroundColor: BG,
      color: FONT,
      fontFamily: "Trebuchet MS",
    },
  });
};
