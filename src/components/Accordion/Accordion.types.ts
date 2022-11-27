import AccordionItem from "./AccordionItem";

export interface IAccordionProps {
  children:
    | React.ReactElement<typeof AccordionItem>
    | React.ReactElement<typeof AccordionItem>[];
  value?: string | null;
  defaultValue?: string;
  variant?: "filled" | "outlined" | "subtle";
}
