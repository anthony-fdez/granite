import { IStyles } from "../ThemeProvider/Interfaces/IStyles";
import { ITextInputProps } from "./TextInput.types";

export const TEXT_INPUT_DEFAULT_PROPS: ITextInputProps = {
  autofocus: false,
  color: undefined,
  defaultValue: undefined,
  disabled: false,
  error: false,
  errorText: undefined,
  fullWidth: false,
  helperText: undefined,
  inputProps: undefined,
  label: undefined,
  margin: 5,
  padding: 10,
  name: undefined,
  multiline: false,
  onChange: undefined,
  placeholder: undefined,
  required: false,
  type: "text",
  value: undefined,
  variant: "outlined",
  classes: undefined,
  loading: false,
  iconLeft: undefined,
  borderRadius: "xs",
  width: 250,
};

interface Props {
  props: ITextInputProps;
  styles: IStyles;
}

export const useTextInputDefaultProps = ({ props, styles }: Props): ITextInputProps => {
  const defaultProps = styles.components?.TextInput;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
