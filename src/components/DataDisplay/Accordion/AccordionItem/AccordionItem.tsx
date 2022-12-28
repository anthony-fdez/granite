/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
// @ts-ignore
import { motion } from "framer-motion/dist/framer-motion";
import Flex from "../../../Layout/Flex";
import { accordionAnimation, getAccordionItemStyles } from "./AccordionItem.styles";
import { IAccordionItemProps } from "./AccordionItem.types";

import useStyles from "../../../../styles/useStyles";
import useAppContext from "../../../../utils/hooks/useAppContext";
import { ACCORDION_DEFAULT_PROPS } from "../Accordion.props";

const AccordionItem = ({
  label,
  children,
  activeElement,
  setActiveElement,
  variant = ACCORDION_DEFAULT_PROPS.variant || "filled",
  arrowPosition = ACCORDION_DEFAULT_PROPS.arrowPosition || "left",
  arrowSize = ACCORDION_DEFAULT_PROPS.arrowSize || 10,
}: IAccordionItemProps): JSX.Element => {
  const { styles } = useAppContext();
  const { getColor } = useStyles({ styles });

  const handleOpenAccordionItem = (): void => {
    if (activeElement === undefined) return;
    if (!setActiveElement) return;

    if (activeElement === label) {
      setActiveElement(null);
      return;
    }

    setActiveElement(label);
  };

  return (
    <div
      key={label}
      css={[
        getAccordionItemStyles({
          getColor,
          variant,
          isActive: label === activeElement,
          arrowSize,
        }),
      ]}
    >
      <div role="presentation" onClick={handleOpenAccordionItem} className="accordion-item-header">
        <Flex
          flexDirection={arrowPosition === "left" ? "row-reverse" : "row"}
          justifyContent={arrowPosition === "left" ? "flex-end" : "space-between"}
        >
          <span css={arrowPosition === "left" && { marginLeft: 15 }}>{label}</span>
          {/* <motion.img
            variants={chevronAnimation}
            animate={label === activeElement ? "open" : "closed"}
            className="icon"
            // eslint-disable-next-line import/no-dynamic-require, global-require
            src={require(`./assets/chevron-${styles.theme}.svg`)}
          /> */}
        </Flex>
      </div>

      <motion.div
        initial="closed"
        className="accordion-item-content"
        animate={label === activeElement ? "open" : "closed"}
        variants={accordionAnimation}
        transition={{ stiffness: 400, type: "spring", damping: 50 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AccordionItem;
