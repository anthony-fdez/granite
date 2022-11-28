import AccordionItem from "./AccordionItem";

export type AccordionVariants = "filled" | "outlined" | "subtle";

export interface IAccordionProps {
  children:
    | React.ReactElement<typeof AccordionItem>
    | React.ReactElement<typeof AccordionItem>[];
  value?: string | null;
  defaultValue?: string;
  variant?: AccordionVariants;
}
