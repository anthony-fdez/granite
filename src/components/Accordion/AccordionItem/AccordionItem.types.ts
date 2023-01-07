import { IAccordionVariants } from "../Accordion.types";

export interface IAccordionItemProps {
  activeElement?: string | null;
  arrowPosition?: "left" | "right";
  arrowSize?: number;
  children: JSX.Element | JSX.Element[];
  label: string;
  setActiveElement?: React.Dispatch<React.SetStateAction<string | null>>;
  variant?: IAccordionVariants;
}
