/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import CloseButton from "../../Buttons/CloseButton";
import { getBorderRadius } from "../../Theming/ThemeProvider/getValues/getBorderRadius";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getModalStyles, modalVariants } from "./Modal.styles";
import { IModalProps } from "./Modal.types";
// @ts-ignore
import { motion } from "framer-motion/dist/framer-motion";
import { useDisableScroll } from "../../../hooks/useDisableScroll";
import { useStyles } from "../../../styles/useStyles";
import Unmount from "../../Utils/Unmount/Unmount";
import { MODAL_DEFAULT_PROPS, useModalDefaultProps } from "./Modal.props";

const Modal = (props: IModalProps) => {
  const { styles } = useContext(StateContext);
  const { stylesClosed, stylesOpen } = getModalStyles({ styles });

  const {
    children,
    title,
    isOpen,
    onClose,
    closeButton,
    closeOnClickOutside,
    backdropOpacity,
    width,
    height,
    centered,
    padding,
    borderRadius,
    backdropBlur,
    zIndex,
    border,
    borderColor,
    borderWidth,
    animated = MODAL_DEFAULT_PROPS.animated || true,
    animationDuration = MODAL_DEFAULT_PROPS.animationDuration || 500,
    unmount = MODAL_DEFAULT_PROPS.unmount || true,
  } = useModalDefaultProps({ styles, props });

  const { getColor } = useStyles({ styles });
  useDisableScroll({ isOpen });

  return (
    <>
      <Unmount
        shouldUnmount={unmount}
        animated={animated}
        animationDuration={animationDuration}
        isOpen={isOpen}
      >
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
        <motion.div
          {...props}
          variants={modalVariants}
          initial="closed"
          transition={{
            duration: animated ? animationDuration * 0.001 : 0,
            type: "spring",
          }}
          animate={isOpen ? "open" : "closed"}
          css={[
            isOpen ? stylesOpen : stylesClosed,
            centered && { top: 0, bottom: 0 },
            width && { width },
            height && { height },
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
              maxWidth: `calc(100% - ${(padding || 0) * 2}px - 20px)`,
            },
            { maxHeight: `calc(100vh - ${(padding || 0) * 2}px - 200px)` },
          ]}
        >
          <div className="modal-header">
            <span>{title}</span>
            {closeButton && <CloseButton onClick={onClose} />}
          </div>
          {children}
        </motion.div>
      </Unmount>
    </>
  );
};

export default Modal;
