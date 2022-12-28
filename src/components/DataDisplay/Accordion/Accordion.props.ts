import { IStyles } from "./../../Theming/ThemeProvider/Interfaces/IStyles";
import { IAccordionPropsOptional, IAccordionProps } from "./Accordion.types";

export const ACCORDION_DEFAULT_PROPS: IAccordionPropsOptional = {
  defaultValue: undefined,
  variant: "subtle",
  arrowPosition: "left",
  arrowSize: 20,
};

interface Props {
  props: IAccordionProps;
  styles: IStyles;
}

export const useAccordionDefaultProps = ({ props, styles }: Props): IAccordionProps => {
  const defaultProps = styles.components?.Accordion;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
