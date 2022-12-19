import React, { useContext, useEffect, useState } from "react";
import { IAccordionProps } from "./Accordion.types";
import AccordionItem from "./AccordionItem/AccordionItem";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { useAccordionDefaultProps } from "./Accordion.props";

const Accordion = (props: IAccordionProps) => {
  const { styles } = useContext(StateContext);

  const { children, defaultValue, value, variant, arrowPosition, arrowSize } =
    useAccordionDefaultProps({ styles, props });

  const [activeElement, setActiveElement] = useState<string | null>(
    defaultValue ?? null
  );

  useEffect(() => {
    if (!value) return;

    setActiveElement(value);
  }, [value]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        activeElement,
        setActiveElement,
        variant,
        arrowPosition,
        arrowSize,
      });
    }

    return child;
  });

  return <div>{childrenWithProps}</div>;
};

Accordion.Item = AccordionItem;

export default Accordion;
