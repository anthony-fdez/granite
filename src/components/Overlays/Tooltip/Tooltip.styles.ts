import { IStyles } from "./../../../../types/components/Theming/ThemeProvider/Interfaces/IStyles.d";
import { colors } from "./../../../constants/theme/colors";
import { TooltipPositionsType } from "./Tooltip.types";
import { css, SerializedStyles } from "@emotion/react";

interface Props {
  styles: IStyles;
  position: TooltipPositionsType;
}

export const getTooltipStyles = ({ styles, position }: Props) => {
  const BACKGROUND = colors.common[styles.theme || "light"].background;

  const stylesOpen: SerializedStyles = css([
    {
      backgroundColor: BACKGROUND,
      position: "absolute",
      bottom: `calc(100% + 10px)`,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "gray",
      padding: 10,
      margin: "auto",
      maxWidth: 300,
    },
    position === "top" && {},
    position === "bottom" && {},
    position === "left" && {},
  ]);

  const stylesClosed: SerializedStyles = css([
    stylesOpen,
    { pointerEvents: "none" },
  ]);

  return { stylesOpen, stylesClosed };
};
