/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// @ts-ignore
import { motion } from "framer-motion/dist/framer-motion";

import React, { useContext } from "react";
import { colors } from "../../../constants/theme/colors";
import CloseButton from "../../Buttons/CloseButton";
import { getBorderRadius } from "../../Theming/ThemeProvider/getValues/getBorderRadius";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import ClickAwayListener from "../../Utils/ClickAwayListener";
import { getDialogStyles, getDialogVariants } from "./Dialog.styles";
import { IDialogProps } from "./Dialog.types";

const Dialog = ({
  children,
  title,
  isOpen,
  onClose,
  closeButton = true,
  closeOnClickOutside = false,
  backdrop = false,
  backdropOpacity = 0.6,
  backdropBlur = 5,
  animated = true,
  animationDuration = 500,
  width = 350,
  height,
  padding = 10,
  borderRadius,
  zIndex = 1000,
  border = true,
  borderColor,
  borderWidth = 3,
  position = "bottom-right",
  animation = "slide-top",
  ...args
}: IDialogProps) => {
  const { styles } = useContext(StateContext);

  const { stylesClosed, stylesOpen } = getDialogStyles({ styles, position });

  const BORDER_COLOR = colors.common[styles.theme || "light"].border;

  return (
    <>
      {backdrop && (
        <div
          onClick={() => {
            if (closeOnClickOutside) return onClose();
          }}
          css={[
            {
              left: 0,
              top: 0,
              position: "fixed",
              height: "100vh",
              width: "100vw",
              backgroundColor: `rgb(0, 0, 0, ${backdropOpacity})`,
            },
            zIndex ? { zIndex: zIndex } : { zIndex: "inherit" },
            animated && { transition: `${animationDuration}ms` },
            backdropBlur && { backdropFilter: `blur(${backdropBlur}px)` },
            isOpen ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" },
          ]}
        />
      )}
      <ClickAwayListener
        onClickOutside={() => closeOnClickOutside && onClose()}
      >
        <motion.div
          {...args}
          variants={getDialogVariants({ animation })}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{
            duration: animated ? animationDuration * 0.001 : 0,
            type: "spring",
          }}
          css={[
            isOpen ? stylesOpen : stylesClosed,
            width && { width },
            height ? { height } : { height: "fit-content" },
            padding && { padding },
            zIndex ? { zIndex: zIndex + 1 } : { zIndex: "inherit" },
            border && {
              borderWidth,
              borderColor: `${borderColor ? borderColor : BORDER_COLOR}`,
              borderStyle: "solid",
            },
            borderColor ? { borderColor } : { borderColor: BORDER_COLOR },
            borderRadius
              ? {
                  borderRadius: getBorderRadius({ size: borderRadius }),
                }
              : {
                  borderRadius: getBorderRadius({ size: styles.borderRadius }),
                },
            {
              maxWidth: `calc(100% - ${padding * 2}px - 40px)`,
            },
            { maxHeight: `calc(100vh - ${padding * 2}px - 200px)` },
          ]}
        >
          <div className="dialog-header">
            <span>{title}</span>
            {closeButton && <CloseButton onClick={onClose} />}
          </div>
          {children}
        </motion.div>
      </ClickAwayListener>
    </>
  );
};

export default Dialog;
