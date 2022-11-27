/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import Flex from "../../Flex";
import { StateContext } from "../../ThemeProvider/ThemeProvider";
import { getAccordionItemStyles } from "./AccordionItem.styles";
import { IAccordionItemProps } from "./AccordionItem.types";
import {
  AnimatePresence,
  motion,
  Variant,
  // @ts-ignore
} from "framer-motion/dist/framer-motion";

const AccordionItem = ({
  label,
  children,
  activeElement,
  setActiveElement,
  variant,
}: IAccordionItemProps) => {
  const { styles } = useContext(StateContext);

  console.log(activeElement);

  const handleOpenAccordionItem = () => {
    if (activeElement === undefined) return;
    if (!setActiveElement) return;

    if (activeElement === label) {
      return setActiveElement(null);
    }

    setActiveElement(label);
  };

  const variants: Variant = {
    open: {
      opacity: 1,
      marginTop: 20,
      marginBottom: 20,
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  return (
    <div key={label} css={getAccordionItemStyles({ styles })}>
      <div onClick={handleOpenAccordionItem} className="accordion-item-header">
        <Flex justifyContent="space-between">
          <span>{label}</span>
          <span>Icon</span>
        </Flex>
      </div>
      <motion.div
        className="accordion-item-content"
        animate={label === activeElement ? "open" : "closed"}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AccordionItem;
