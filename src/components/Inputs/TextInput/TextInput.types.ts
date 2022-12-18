import { ISizes } from "./../../../types/sizes";
import { IVariants } from "./../../../types/variants";
import { HTMLInputTypeAttribute } from "react";
import { IColors } from "./../../../constants/theme/colors";

export interface ITextInputProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  autofocus?: boolean;
  color?: IColors;
  defaultValue?: any;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  fullWidth?: boolean;
  helperText?: string;
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
  label?: string;
  margin?: number;
  padding?: number;
  name?: string;
  multiline?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: any;
  variant?: IVariants;
  classes?: string;
  loading?: boolean;
  iconLeft?: JSX.Element;
  borderRadius?: ISizes | number;
  width?: number;
}
