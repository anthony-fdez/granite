import React from "react";
import { INumberRange } from "../ThemeProvider/Interfaces/IStyles";
import { IColors } from "../../constants/theme/colors";
import { ISizes } from "../../utils/types/sizes";
import { IVariants } from "../../utils/types/variants";
import { SpinnersType } from "../Spinner/Spinner.types";

export interface IButtonPropsOptional extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IVariants;
  color?: IColors;
  padding?: number;
  margin?: number;
  borderRadius?: ISizes;
  loading?: boolean;
  fontColor?: "white" | "black" | string;
  backgroundColor?: string;
  align?: "start" | "center" | "end";
  spinnerVariant?: SpinnersType;
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  iconLeftProps?: React.HTMLAttributes<HTMLDivElement>;
  iconRightProps?: React.HTMLAttributes<HTMLDivElement>;
  shade?: INumberRange;
}

export interface IButtonProps extends IButtonPropsOptional {
  children: string;
}
