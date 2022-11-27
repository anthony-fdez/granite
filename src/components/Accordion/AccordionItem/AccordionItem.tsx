/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import Flex from "../../Flex";
import { StateContext } from "../../ThemeProvider/ThemeProvider";
import { getAccordionItemStyles } from "./AccordionItem.styles";
import { IAccordionItemProps } from "./AccordionItem.types";

const AccordionItem = ({
  label,
  children,
  activeElement,
  setActiveElement,
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

  return (
    <div
      onClick={handleOpenAccordionItem}
      css={getAccordionItemStyles({ styles })}
    >
      <div className="accordion-header">
        <Flex justifyContent="space-between">
          <span>{label}</span>
          <span>Icon</span>
        </Flex>
      </div>
      {activeElement === label && children}
    </div>
  );
};

export default AccordionItem;
