import AccordionItem from "./AccordionItem/AccordionItem";

export type IAccordionVariants = "filled" | "outlined" | "subtle";

export interface IAccordionPropsOptional {
  defaultValue?: string;
  variant?: IAccordionVariants;
  arrowPosition?: "left" | "right";
  arrowSize?: number;
  value?: string | null;
}

export interface IAccordionProps extends IAccordionPropsOptional {
  children: React.ReactElement<typeof AccordionItem> | React.ReactElement<typeof AccordionItem>[];
}
