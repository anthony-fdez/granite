import React, { useEffect, useState } from "react";
import { IAccordionProps } from "./Accordion.types";

const Accordion = ({
  children,
  defaultValue,
  variant = "subtle",
  arrowPosition = "left",
  arrowSize = 10,
  value,
}: IAccordionProps) => {
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

export default Accordion;
