/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React, { useContext } from "react";
// @ts-ignore
import { motion } from "framer-motion/dist/framer-motion";
import CloseButton from "../../Buttons/CloseButton";
import getBorderRadius from "../../Theming/ThemeProvider/getValues/getBorderRadius";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getModalStyles, modalVariants } from "./Modal.styles";
import { IModalProps } from "./Modal.types";
import useDisableScroll from "../../../hooks/useDisableScroll";
import useStyles from "../../../styles/useStyles";
import Unmount from "../../Utils/Unmount/Unmount";
import { MODAL_DEFAULT_PROPS, useModalDefaultProps } from "./Modal.props";
import Backdrop from "../Backdrop/Backdrop";
import ClickAwayListener from "../../Utils/ClickAwayListener";

const Modal = (props: IModalProps): JSX.Element => {
  const { styles } = useContext(StateContext);

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
    <Unmount shouldUnmount={unmount} animated={animated} animationDuration={animationDuration} isOpen={isOpen}>
      <>
        {backdrop && <Backdrop {...{ isOpen, backdropBlur, backdropOpacity, zIndex, animated, animationDuration }} />}
        <ClickAwayListener onClickOutside={() => closeOnClickOutside && onClose()}>
          <motion.div
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
