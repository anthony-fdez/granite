/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ITooltipProps } from "./Tooltip.types";
import useAppContext from "../../utils/hooks/useAppContext";
import { TOOLTIP_DEFAULT_PROPS, useTooltipDefaultProps } from "./Tooltip.props";
import { getTooltipStyles, getTooltipVariants } from "./Tooltip.styles";
import Unmount from "../Unmount/Unmount";
import useStyles from "../../styles/useStyles";
import HoverListener from "../HoverListener/HoverListener";

const Tooltip = (props: ITooltipProps): JSX.Element => {
  const { styles } = useAppContext();
  const { getColor } = useStyles({ styles });

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

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (hover) {
      timeout = setTimeout(() => {
        setActive(true);
      }, openDelay);
    } else {
      timeout = setTimeout(() => {
        setActive(false);
      }, closeDelay);
    }

    return () => clearTimeout(timeout);
  }, [hover, active, closeDelay, openDelay]);

  return (
    <div css={css([getTooltipStyles({ getColor, position }), customCSS])}>
      <Unmount
        animated={animated}
        animationDuration={hover ? (openDelay || 0) + animationDuration : (closeDelay || 0) + animationDuration / 2}
        isOpen={isOpen || hover}
        shouldUnmount
      >
        <motion.div
          animate={isOpen || active ? "open" : "closed"}
          className="Granite-Tooltip-tooltip"
          data-testid="Tooltip/tooltip"
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
      <HoverListener onHover={(isHover): void => setHover(isHover)} {...args}>
        {children}
      </HoverListener>
    </div>
  );
};

export default Tooltip;
