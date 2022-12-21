import React from "react";
import { INumberRange } from "./../../Theming/ThemeProvider/Interfaces/IStyles";
import { IColors } from "./../../../constants/theme/colors";
import { ISizes } from "./../../../types/sizes";
import { IVariants } from "./../../../types/variants";
import { SpinnersType } from "../../Feedback/Spinner/Spinner.types";

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
