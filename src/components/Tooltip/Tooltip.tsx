/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ITooltipProps } from "./Tooltip.types";
import useAppContext from "../../utils/hooks/useAppContext";
import { TOOLTIP_DEFAULT_PROPS, useTooltipDefaultProps } from "./Tooltip.props";
import getTooltipStyles, { getTooltipVariants } from "./Tooltip.styles";
import Unmount from "../Unmount/Unmount";

const Tooltip = (props: ITooltipProps): JSX.Element => {
  const { styles } = useAppContext();

  const {
    isOpen,
    tooltip,
    children,
    animated = TOOLTIP_DEFAULT_PROPS.animated || true,
    animationDuration = TOOLTIP_DEFAULT_PROPS.animationDuration || 200,
    closeDelay,
    openDelay,
    position,
    zIndex,
    customCSS,
    ...args
  } = useTooltipDefaultProps({
    props,
    styles,
  });

  const [active, setActive] = useState(false);

  const showTooltip = () => {
    const timeout = setTimeout(() => {
      setActive(true);
    }, openDelay);

    return () => clearTimeout(timeout);
  };

  const hideTooltip = () => {
    const timeout = setTimeout(() => {
      setActive(false);
    }, closeDelay);

    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (isOpen !== undefined) setActive(isOpen);
  }, [active, isOpen]);

  return (
    <div
      {...args}
      css={[getTooltipStyles({ styles, position }), customCSS]}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <Unmount animated={animated} animationDuration={animationDuration} isOpen={active} shouldUnmount>
        <motion.div
          animate={active ? "open" : "closed"}
          className="tooltip"
          initial="closed"
          transition={{
            duration: animated ? animationDuration * 0.001 : 0,
            type: "spring",
          }}
          variants={getTooltipVariants()}
        >
          {tooltip}
        </motion.div>
      </Unmount>

      {children}
    </div>
  );
};

export default Tooltip;
