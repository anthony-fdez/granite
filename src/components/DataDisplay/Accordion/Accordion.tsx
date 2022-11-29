/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import { IAccordionProps } from "./Accordion.types";

const Accordion = ({
  children,
  defaultValue,
  variant = "subtle",
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
        // @ts-ignore
        activeElement,
        setActiveElement,
        variant,
      });
    }

    return child;
  });

  return <div>{childrenWithProps}</div>;
};

export default Accordion;
