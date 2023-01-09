/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React from "react";
import { motion } from "framer-motion";
import { IDrawerProps } from "./Drawer.types";
import useAppContext from "../../utils/hooks/useAppContext";
import { DRAWER_DEFAULT_PROPS, useDrawerDefaultProps } from "./Drawer.props";
import useStyles from "../../styles/useStyles";
import { getDrawerStyles, getDrawerVariants } from "./Drawer.styles";
import useDisableScroll from "../../utils/hooks/useDisableScroll";
import Unmount from "../Unmount/Unmount";
import Backdrop from "../Backdrop/Backdrop";
import ClickAwayListener from "../ClickAwayListener";
import CloseButton from "../CloseButton";
import getBorderRadius from "../ThemeProvider/getValues/getBorderRadius";

const Drawer = (props: IDrawerProps): JSX.Element => {
  const { styles } = useAppContext();

  const {
    children,
    title,
    isOpen,
    onClose,
    closeButton,
    closeOnClickOutside,
    backdropOpacity,
    width,
    padding,
    borderRadius,
    backdropBlur,
    zIndex,
    height,
    border,
    borderColor,
    borderWidth,
    position,
    backdrop = DRAWER_DEFAULT_PROPS.backdrop || true,
    animated = DRAWER_DEFAULT_PROPS.animated || true,
    animationDuration = DRAWER_DEFAULT_PROPS.animationDuration || 500,
    unmount = DRAWER_DEFAULT_PROPS.unmount || true,
  } = useDrawerDefaultProps({ styles, props });

  const { getColor } = useStyles({ styles });
  const { stylesClosed, stylesOpen } = getDrawerStyles({ getColor, position });

  useDisableScroll({ isOpen });

  return (
    <Unmount animated={animated} animationDuration={animationDuration} isOpen={isOpen} shouldUnmount={unmount}>
      <>
        {backdrop && (
          <Backdrop
            data-testid="Drawer/backdrop"
            {...{ isOpen, backdropBlur, backdropOpacity, zIndex, animated, animationDuration }}
          />
        )}
        <ClickAwayListener onClickOutside={() => closeOnClickOutside && onClose()}>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            css={[
              isOpen ? stylesOpen : stylesClosed,
              padding && { padding },
              zIndex ? { zIndex: zIndex + 1 } : { zIndex: "inherit" },
              border && {
                borderWidth,
                borderColor: `${borderColor || getColor({}).border}`,
                borderStyle: "solid",
              },
              borderColor ? { borderColor } : { borderColor: getColor({}).border },
              { borderRadius: getBorderRadius({ size: borderRadius || styles.global?.borderRadius }) },
              { maxWidth: `calc(100% - ${(padding || 0) * 2}px - 5px)` },
              position === "top" || position === "bottom"
                ? { maxHeight: `calc(100vh - ${(padding || 0) * 2}px - 50px)` }
                : { maxHeight: `calc(100vh - ${(padding || 0) * 2}px - 6px)` },
              height && (position === "bottom" || position === "top") && { height },
              width && (position === "left" || position === "right") && { width },
            ]}
            data-testid="Drawer"
            initial="closed"
            transition={{
              duration: animated ? animationDuration * 0.001 : 0,
              type: "spring",
            }}
            variants={getDrawerVariants(position)}
          >
            <div className="drawer-header">
              <span data-testid="Drawer/title">{title}</span>
              {closeButton && <CloseButton data-testid="Drawer/close-button" onClick={onClose} />}
            </div>
            {children}
          </motion.div>
        </ClickAwayListener>
      </>
    </Unmount>
  );
};

export default Drawer;
