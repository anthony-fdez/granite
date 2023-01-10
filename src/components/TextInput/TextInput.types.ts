import { SerializedStyles } from "@emotion/react";
import { HTMLInputTypeAttribute } from "react";
import { ISizes } from "../../utils/types/ISizes";
import { IVariants } from "../../utils/types/IVariants";
import { IColors } from "../../constants/theme/colors";

export interface ITextInputProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  autofocus?: boolean;
  borderRadius?: ISizes | number;
  classes?: string;
  color?: IColors;
  customCSS?: SerializedStyles;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  fullWidth?: boolean;
  helperText?: string;
  iconLeft?: JSX.Element;
  inputProps?: React.HTMLAttributes<HTMLInputElement>;
  label?: string;
  loading?: boolean;
  margin?: number;
  multiline?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  padding?: number;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  variant?: IVariants;
  width?: number;
}
