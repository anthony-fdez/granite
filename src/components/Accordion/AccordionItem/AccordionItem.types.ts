import { AccordionVariants } from "./../Accordion.types";
export interface IAccordionItemProps {
  children: JSX.Element | JSX.Element[];
  label: string;
  activeElement?: string | null;
  setActiveElement?: React.Dispatch<React.SetStateAction<string | null>>;
  variant: AccordionVariants;
}
