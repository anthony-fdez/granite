/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext, useEffect, useState } from "react";
import Flex from "../../Flex";
import { StateContext } from "../../ThemeProvider/ThemeProvider";
import {
  accordionAnimation,
  chevronAnimation,
  getAccordionItemStyles,
} from "./AccordionItem.styles";
import { IAccordionItemProps } from "./AccordionItem.types";

// @ts-ignore
import { motion } from "framer-motion/dist/framer-motion";

const AccordionItem = ({
  label,
  children,
  activeElement,
  setActiveElement,
  variant,
}: IAccordionItemProps) => {
  const { styles } = useContext(StateContext);

  const handleOpenAccordionItem = () => {
    if (activeElement === undefined) return;
    if (!setActiveElement) return;

    if (activeElement === label) {
      return setActiveElement(null);
    }

    setActiveElement(label);
  };

  return (
    <div
      key={label}
      css={[
        getAccordionItemStyles({
          styles,
          variant,
          isActive: label === activeElement,
        }),
      ]}
    >
      <div onClick={handleOpenAccordionItem} className="accordion-item-header">
        <Flex justifyContent="space-between">
          <span>{label}</span>
          <motion.img
            variants={chevronAnimation}
            animate={label === activeElement ? "open" : "closed"}
            className="icon"
            src={require(`./assets/chevron-${styles.theme}.svg`)}
          />
        </Flex>
      </div>

      <motion.div
        initial="closed"
        className="accordion-item-content"
        animate={label === activeElement ? "open" : "closed"}
        variants={accordionAnimation}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AccordionItem;
