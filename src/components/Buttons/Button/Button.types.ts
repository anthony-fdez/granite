import { IColors } from "./../../../constants/theme/colors";
import { ISizes } from "./../../../types/sizes";
import { IVariants } from "./../../../types/variants";
import { SpinnersType } from "../../Feedback/Spinner/Spinner.types";
import React from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
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
}
