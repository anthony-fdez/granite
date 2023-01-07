import { css, keyframes, SerializedStyles } from "@emotion/react";
import { GetColorProps } from "../../styles/useStyles";
import { SpinnersType } from "./Spinner.types";
import IUseStyles from "../../styles/interfaces/IUseStyles";

interface Props {
  variant?: SpinnersType;
  size?: number;
  backgroundAccentColor?: string;
  getColor: (props: GetColorProps) => IUseStyles;
}

const getSpinnerStyles = ({ variant, size, backgroundAccentColor, getColor }: Props): SerializedStyles => {
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

    borderColor: backgroundAccentColor || getColor({}).backgroundAccent,
    borderTopColor: getColor({}).color,
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

export default getSpinnerStyles;
