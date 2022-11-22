import { AvailableColorsType } from "./../../constants/theme/colors";
import { SpinnersType } from "./Spinner.types";
import { IStyles } from "./../ThemeProvider/Interfaces/IStyles";
import { css, SerializedStyles } from "@emotion/react";

interface Props {
  styles: IStyles;
  variant?: SpinnersType;
  color?: AvailableColorsType;
}

export const getSpinnerStyles = ({ styles, variant, color }: Props) => {
  const circular: SerializedStyles = css({});

  const dots: SerializedStyles = css({});

  if (variant === "circular") return circular;
  if (variant === "dots") return dots;

  return circular;
};
