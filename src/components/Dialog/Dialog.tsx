/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

import { motion } from "framer-motion";
import useStyles from "../../styles/useStyles";
import useAppContext from "../../utils/hooks/useAppContext";
import CloseButton from "../CloseButton";
import getBorderRadius from "../../styles/helpers/getBorderRadius";
import ClickAwayListener from "../ClickAwayListener";
import Unmount from "../Unmount/Unmount";
import Backdrop from "../Backdrop/Backdrop";
import { DIALOG_DEFAULT_PROPS, useDialogDefaultProps } from "./Dialog.props";
import { getDialogStyles, getDialogVariants } from "./Dialog.styles";
import { IDialogProps } from "./Dialog.types";

const Dialog = (props: IDialogProps): JSX.Element => {
  const { styles } = useAppContext();

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
    customCSS,
  } = useDialogDefaultProps({ styles, props });

  const { getColor } = useStyles({ styles });
  const { stylesClosed, stylesOpen } = getDialogStyles({ getColor, position });

  return (
    <Unmount animated={animated} animationDuration={animationDuration} isOpen={isOpen} shouldUnmount={unmount}>
      <>
        {backdrop && (
          <Backdrop
            {...{ isOpen, backdropBlur, backdropOpacity, zIndex, animated, animationDuration }}
            data-testid="Dialog/backdrop"
          />
        )}
        <ClickAwayListener onClickOutside={() => closeOnClickOutside && onClose()}>
          <motion.div
            animate={isOpen ? "open" : "closed"}
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
              { borderRadius: getBorderRadius({ size: borderRadius || styles.global?.borderRadius }) },
              { maxWidth: `calc(100% - ${(padding || 0) * 2}px - 40px)` },
              { maxHeight: `calc(100vh - ${(padding || 0) * 2}px - 200px)` },
              customCSS,
            ]}
            data-testid="Dialog"
            initial="closed"
            transition={{
              duration: animated ? animationDuration * 0.001 : 0,
              type: "spring",
            }}
            variants={getDialogVariants({ animation })}
          >
            <div className="Granite-Dialog-header">
              <span data-testid="Dialog/title">{title}</span>
              {closeButton && (
                <CloseButton
                  className="Granite-Dialog-CloseButton"
                  data-testid="Dialog/close-button"
                  onClick={onClose}
                />
              )}
            </div>
            {children}
          </motion.div>
        </ClickAwayListener>
      </>
    </Unmount>
  );
};

export default Dialog;
