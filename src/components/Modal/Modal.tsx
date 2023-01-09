/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import CloseButton from "../CloseButton";
import getBorderRadius from "../ThemeProvider/getValues/getBorderRadius";
import { getModalStyles, modalVariants } from "./Modal.styles";
import { IModalProps } from "./Modal.types";
import useDisableScroll from "../../utils/hooks/useDisableScroll";
import useStyles from "../../styles/useStyles";
import Unmount from "../Unmount/Unmount";
import { MODAL_DEFAULT_PROPS, useModalDefaultProps } from "./Modal.props";
import Backdrop from "../Backdrop/Backdrop";
import ClickAwayListener from "../ClickAwayListener";
import useAppContext from "../../utils/hooks/useAppContext";

const Modal = (props: IModalProps): JSX.Element => {
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
    height,
    centered,
    padding,
    borderRadius,
    backdropBlur,
    zIndex,
    border,
    borderColor,
    borderWidth,
    backdrop = MODAL_DEFAULT_PROPS.backdrop || true,
    animated = MODAL_DEFAULT_PROPS.animated || true,
    animationDuration = MODAL_DEFAULT_PROPS.animationDuration || 500,
    unmount = MODAL_DEFAULT_PROPS.unmount || true,
  } = useModalDefaultProps({ styles, props });

  const { getColor } = useStyles({ styles });
  const { stylesClosed, stylesOpen } = getModalStyles({ getColor });

  useDisableScroll({ isOpen });

  return (
    <Unmount animated={animated} animationDuration={animationDuration} isOpen={isOpen} shouldUnmount={unmount}>
      <>
        {backdrop && <Backdrop {...{ isOpen, backdropBlur, backdropOpacity, zIndex, animated, animationDuration }} />}
        <ClickAwayListener onClickOutside={() => closeOnClickOutside && onClose()}>
          <motion.div
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
                borderColor: `${borderColor || getColor({}).border}`,
                borderStyle: "solid",
              },
              borderColor ? { borderColor } : { borderColor: getColor({}).border },
              { borderRadius: getBorderRadius({ size: borderRadius || styles.global?.borderRadius }) },
              {
                maxWidth: `calc(100% - ${(padding || 0) * 2}px - 20px)`,
              },
              { maxHeight: `calc(100vh - ${(padding || 0) * 2}px - 200px)` },
            ]}
            initial="closed"
            transition={{
              duration: animated ? animationDuration * 0.001 : 0,
              type: "spring",
            }}
            variants={modalVariants}
          >
            <div className="modal-header">
              <span>{title}</span>
              {closeButton && <CloseButton onClick={onClose} />}
            </div>
            {children}
          </motion.div>
        </ClickAwayListener>
      </>
    </Unmount>
  );
};

export default Modal;
