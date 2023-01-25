import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import useAppContext from "../../utils/hooks/useAppContext";
import useStyles from "../../styles/useStyles";
import { HOVER_CARD_DEFAULT_PROPS, useHoverCardDefaultProps } from "./HoverCard.props";
import { IHoverCardProps } from "./HoverCard.types";
import HoverListener from "../HoverListener/HoverListener";
import { getHoverCardStyles, getHoverCardVariants } from "./HoverCard.styles";
import Unmount from "../Unmount/Unmount";

const HoverCard = (props: IHoverCardProps): JSX.Element => {
  const { styles } = useAppContext();
  const { getColor } = useStyles({ styles });

  const {
    isOpen,
    card,
    children,
    animated = HOVER_CARD_DEFAULT_PROPS.animated || true,
    animationDuration = HOVER_CARD_DEFAULT_PROPS.animationDuration || 200,
    closeDelay,
    openDelay,
    position,
    zIndex,
    customCSS,
    unmount,
    width,
    height,
    disabled,
    ...args
  } = useHoverCardDefaultProps({
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
    <HoverListener
      customCSS={css({ ".Granite-HoverCard-card": { width, height } }, [
        getHoverCardStyles({ getColor, position }),
        customCSS,
      ])}
      onHover={(isHover): void => setHover(isHover)}
      {...args}
    >
      <>
        {!disabled && (
          <Unmount
            animated={animated}
            animationDuration={hover ? (openDelay || 0) + animationDuration : (closeDelay || 0) + animationDuration / 2}
            isOpen={isOpen || hover}
            shouldUnmount
          >
            <motion.div
              animate={isOpen || active ? "open" : "closed"}
              className="Granite-HoverCard-card"
              data-testid="HoverCard/card"
              initial="closed"
              transition={{
                duration: animated ? animationDuration * 0.001 : 0,
                type: "spring",
              }}
              variants={getHoverCardVariants()}
            >
              {card}
            </motion.div>
          </Unmount>
        )}

        {children}
      </>
    </HoverListener>
  );
};

export default HoverCard;
