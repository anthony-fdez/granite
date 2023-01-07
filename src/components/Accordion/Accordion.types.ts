import AccordionItem from "./AccordionItem/AccordionItem";

export type IAccordionVariants = "filled" | "outlined" | "subtle";

export interface IAccordionPropsOptional {
  arrowPosition?: "left" | "right";
  arrowSize?: number;
  defaultValue?: string;
  value?: string | null;
  variant?: IAccordionVariants;
}

export interface IAccordionProps extends IAccordionPropsOptional {
  children: React.ReactElement<typeof AccordionItem> | React.ReactElement<typeof AccordionItem>[];
}
