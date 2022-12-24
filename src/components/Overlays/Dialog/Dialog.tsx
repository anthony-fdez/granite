/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

// @ts-ignore
import { motion } from "framer-motion/dist/framer-motion";

import React, { useContext } from "react";
import useStyles from "../../../styles/useStyles";
import CloseButton from "../../Buttons/CloseButton";
import getBorderRadius from "../../Theming/ThemeProvider/getValues/getBorderRadius";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import ClickAwayListener from "../../Utils/ClickAwayListener";
import { getDialogStyles, getDialogVariants } from "./Dialog.styles";
import { IDialogProps } from "./Dialog.types";
import { DIALOG_DEFAULT_PROPS, useDialogDefaultStyles } from "./Dialog.props";
import Backdrop from "../Backdrop/Backdrop";
import Unmount from "../../Utils/Unmount/Unmount";

const Dialog = (props: IDialogProps): JSX.Element => {
  const { styles } = useContext(StateContext);

  const {
    children,
    title,
    isOpen,
    onClose,
    closeButton,
    closeOnClickOutside,
    backdropOpacity,
    backdropBlur,
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
    backdrop = DIALOG_DEFAULT_PROPS.backdrop || true,
    animated = DIALOG_DEFAULT_PROPS.animated || true,
    animationDuration = DIALOG_DEFAULT_PROPS.animationDuration || 500,
    unmount = DIALOG_DEFAULT_PROPS.unmount || true,
  } = useDialogDefaultStyles({ styles, props });

  const { getColor } = useStyles({ styles });
  const { stylesClosed, stylesOpen } = getDialogStyles({ getColor, position });

  return (
    <Unmount shouldUnmount={unmount} animated={animated} animationDuration={animationDuration} isOpen={isOpen}>
      <>
        {backdrop && <Backdrop {...{ isOpen, backdropBlur, backdropOpacity, zIndex, animated, animationDuration }} />}
        <ClickAwayListener onClickOutside={() => closeOnClickOutside && onClose()}>
          <motion.div
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
                borderColor: `${borderColor || getColor({}).border}`,
                borderStyle: "solid",
              },
              borderColor ? { borderColor } : { borderColor: getColor({}).border },
              { borderRadius: getBorderRadius({ size: borderRadius || styles.global.borderRadius }) },
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
    </Unmount>
  );
};

export default Dialog;
