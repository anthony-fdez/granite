/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import Flex from "../../../Layout/Flex";
import { StateContext } from "../../../Theming/ThemeProvider/ThemeProvider";
import {
  accordionAnimation,
  chevronAnimation,
  getAccordionItemStyles,
} from "./AccordionItem.styles";
import { IAccordionItemProps } from "./AccordionItem.types";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { motion } from "framer-motion/dist/framer-motion";

const AccordionItem = ({
  label,
  children,
  activeElement,
  setActiveElement,
  variant = "filled",
  arrowPosition = "left",
  arrowSize = 10,
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
          arrowSize,
        }),
      ]}
    >
      <div onClick={handleOpenAccordionItem} className="accordion-item-header">
        <Flex
          flexDirection={arrowPosition === "left" ? "row-reverse" : "row"}
          justifyContent={
            arrowPosition === "left" ? "flex-end" : "space-between"
          }
        >
          <span css={arrowPosition === "left" && { marginLeft: 15 }}>
            {label}
          </span>
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
