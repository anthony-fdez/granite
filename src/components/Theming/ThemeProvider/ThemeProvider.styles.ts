import { useStyles } from "../../../styles/useStyles";
import { IStyles } from "./Interfaces/IStyles";
import { css } from "@emotion/react";

interface Props {
  styles: IStyles;
}

export const getGlobalStyles = ({ styles }: Props) => {
  const { getColor } = useStyles({ styles });

  return css({
    html: {
      backgroundColor: getColor({}).background,
      color: getColor({}).font,
      fontFamily: "Trebuchet MS",
    },
  });
};
