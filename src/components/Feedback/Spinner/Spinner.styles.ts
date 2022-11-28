import { AvailableColorsType, colors } from "../../../constants/theme/colors";
import { SpinnersType } from "./Spinner.types";
import { IStyles } from "../../Theming/ThemeProvider/Interfaces/IStyles";
import { css, keyframes, SerializedStyles } from "@emotion/react";

interface Props {
  styles: IStyles;
  variant?: SpinnersType;
  color?: AvailableColorsType;
  size?: number;
  backgroundAccentColor?: string;
}

export const getSpinnerStyles = ({
  styles,
  variant,
  color,
  size,
  backgroundAccentColor,
}: Props) => {
  const COLOR = colors[color || styles.primaryColor || "blue"].color;
  const BG_ACCENT =
    backgroundAccentColor ??
    colors.common[styles.theme || "light"].backgroundAccent;

  const circularKeyframes = keyframes({
    to: {
      transform: "rotate(360deg)",
    },
  });

  const circular: SerializedStyles = css({
    pointerEvents: "none",
    width: size ?? 10,
    height: size ?? 10,

    border: 3,
    borderStyle: "solid",
    borderColor: BG_ACCENT,
    borderTopColor: COLOR,
    borderRadius: "50%",
    animation: circularKeyframes,
    animationDuration: "1s",
    animationIterationCount: "infinite",
  });

  const dots: SerializedStyles = css({});

  if (variant === "circular") return circular;
  if (variant === "dots") return dots;

  return circular;
};
