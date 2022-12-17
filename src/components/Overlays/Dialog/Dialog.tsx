/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

// @ts-ignore
import { motion } from "framer-motion/dist/framer-motion";

import React, { useContext } from "react";
import { useStyles } from "../../../styles/useStyles";
import CloseButton from "../../Buttons/CloseButton";
import { getBorderRadius } from "../../Theming/ThemeProvider/getValues/getBorderRadius";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import ClickAwayListener from "../../Utils/ClickAwayListener";
import { getDialogStyles, getDialogVariants } from "./Dialog.styles";
import { IDialogProps } from "./Dialog.types";
import { DIALOG_DEFAULT_PROPS, useDialogDefaultStyles } from "./Dialog.props";

const Dialog = (props: IDialogProps) => {
  const { styles } = useContext(StateContext);
  const { getColor } = useStyles({ styles });

  const {
    children,
    title,
    isOpen,
    onClose,
    closeButton,
    closeOnClickOutside,
    backdrop,
    backdropOpacity,
    backdropBlur,
    animated,
    animationDuration = DIALOG_DEFAULT_PROPS.animationDuration || 500,
    width,
    height,
    padding,
    borderRadius,
    zIndex,
    border,
    borderColor,
    borderWidth,
    position = DIALOG_DEFAULT_PROPS.position || "bottom-right",
    animation = DIALOG_DEFAULT_PROPS.animation || "slide-bottom",
    ...args
  } = useDialogDefaultStyles({ styles, props });

  const { stylesClosed, stylesOpen } = getDialogStyles({ styles, position });

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
              borderColor: `${borderColor ? borderColor : getColor({}).border}`,
              borderStyle: "solid",
            },
            borderColor
              ? { borderColor }
              : { borderColor: getColor({}).border },
            borderRadius
              ? {
                  borderRadius: getBorderRadius({ size: borderRadius }),
                }
              : {
                  borderRadius: getBorderRadius({
                    size: styles.global.borderRadius,
                  }),
                },
            {
              maxWidth: `calc(100% - ${(padding || 0) * 2}px - 40px)`,
            },
            { maxHeight: `calc(100vh - ${(padding || 0) * 2}px - 200px)` },
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
