import { IStyles } from "./../../Theming/ThemeProvider/Interfaces/IStyles";
import { IDividerProps } from "./Divider.types";

export const DIVIDER_DEFAULT_PROPS: IDividerProps = {
  label: undefined,
  labelPadding: 15,
  labelPosition: "center",
  width: 1,
  dividerVariant: "solid",
  marginTop: 20,
  marginBottom: 20,
  color: undefined,
};

interface Props {
  props: IDividerProps;
  styles: IStyles;
}

export const useDividerDefaultProps = ({
  props,
  styles,
}: Props): IDividerProps => {
  const defaultProps = styles.components?.Divider;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
