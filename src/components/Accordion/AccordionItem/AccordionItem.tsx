/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "react-feather";
import Flex from "../../Flex";
import { accordionAnimation, chevronAnimation, getAccordionItemStyles } from "./AccordionItem.styles";
import { IAccordionItemProps } from "./AccordionItem.types";

import useStyles from "../../../styles/useStyles";
import useAppContext from "../../../utils/hooks/useAppContext";
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
      <div className="accordion-item-header" onClick={handleOpenAccordionItem} role="presentation">
        <Flex
          flexDirection={arrowPosition === "left" ? "row-reverse" : "row"}
          justifyContent={arrowPosition === "left" ? "flex-end" : "space-between"}
        >
          <span css={arrowPosition === "left" && { marginLeft: 15 }}>{label}</span>
          <motion.div
            animate={label === activeElement ? "open" : "closed"}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            variants={chevronAnimation}
          >
            <ChevronDown className="icon" />
          </motion.div>
        </Flex>
      </div>

      <motion.div
        animate={label === activeElement ? "open" : "closed"}
        className="accordion-item-content"
        initial="closed"
        transition={{ stiffness: 400, type: "spring", damping: 50 }}
        variants={accordionAnimation}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AccordionItem;
