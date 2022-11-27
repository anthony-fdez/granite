/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import { IAccordionProps } from "./Accordion.types";
// @ts-ignore
import { LayoutGroup } from "framer-motion/dist/framer-motion";

const Accordion = ({
  children,
  defaultValue,
  variant = "filled",
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
