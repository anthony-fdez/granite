/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext, useEffect, useState } from "react";
import Flex from "../../Flex";
import { StateContext } from "../../ThemeProvider/ThemeProvider";
import { getAccordionItemStyles } from "./AccordionItem.styles";
import { IAccordionItemProps } from "./AccordionItem.types";
import {
  AnimatePresence,
  motion,
  Variants,
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const handleOpenAccordionItem = () => {
    if (activeElement === undefined) return;
    if (!setActiveElement) return;

    if (activeElement === label) {
      return setActiveElement(null);
    }

    setActiveElement(label);
  };

  const accordionAnimation: Variants = {
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

  const chevronAnimation: Variants = {
    open: {
      transform: "rotate(180deg)",
    },
  };

  return (
    <div
      key={label}
      css={[
        getAccordionItemStyles({ styles }),
        isVisible
          ? { opacity: 1, transitionDuration: "100ms" }
          : { opacity: 0 },
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
