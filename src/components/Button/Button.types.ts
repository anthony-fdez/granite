import React from "react";
import { INumberRange } from "../ThemeProvider/Interfaces/IStyles";
import { IColors } from "../../constants/theme/colors";
import { ISizes } from "../../utils/types/sizes";
import { IVariants } from "../../utils/types/variants";
import { SpinnersType } from "../Spinner/Spinner.types";

export interface IButtonPropsOptional extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  align?: "start" | "center" | "end";
  backgroundColor?: string;
  borderRadius?: ISizes;
  color?: IColors;
  disabled?: boolean;
  fontColor?: "white" | "black" | string;
  fullWidth?: boolean;
  iconLeft?: JSX.Element;
  iconLeftProps?: React.HTMLAttributes<HTMLDivElement>;
  iconRight?: JSX.Element;
  iconRightProps?: React.HTMLAttributes<HTMLDivElement>;
  loading?: boolean;
  margin?: number;
  padding?: number;
  shade?: INumberRange;
  spinnerVariant?: SpinnersType;
  variant?: IVariants;
}

export interface IButtonProps extends IButtonPropsOptional {
  children: string;
}
