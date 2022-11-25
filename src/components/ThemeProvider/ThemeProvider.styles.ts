import { IStyles } from "./Interfaces/IStyles";
import { css, SerializedStyles } from "@emotion/react";
import { colors } from "../../constants/theme/colors";

interface Props {
  styles: IStyles;
}

export const getGlobalStyles = ({ styles }: Props) => {
  const { theme } = styles;

  const COLORS = colors.common[theme || "light"];

  return css({
    html: {
      backgroundColor: COLORS.backgroundColor,
      color: COLORS.fontColor,
      fontFamily: "Trebuchet MS",
    },
  });
};
