/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext, useEffect, useState } from "react";
import { getBorderRadius } from "../ThemeProvider/getValues/getBorderRadius";
import { StateContext } from "../ThemeProvider/ThemeProvider";
import { getModalStyles } from "./Modal.styles";
import { IModalProps } from "./Modal.types";

const Modal = ({
  children,
  title,
  isOpen,
  onClose,
  closeButton,
  closeOnClickOutside = true,
  backdropOpacity = 0.5,
  animated = true,
  animationDuration = 300,
  width = 500,
  height,
  centered = false,
  padding = 10,
  borderRadius = "sm",
  backdropBlur,
}: IModalProps) => {
  const { styles } = useContext(StateContext);
  const { stylesClosed, stylesOpen } = getModalStyles({ styles });

  return (
    <>
      <div
        onClick={() => closeOnClickOutside && onClose}
        css={[
          {
            left: 0,
            top: 0,
            position: "fixed",
            height: "100vh",
            width: "100vw",
            backgroundColor: `rgb(0, 0, 0, ${backdropOpacity})`,
          },
          animated && { transition: `${animationDuration}ms` },
          backdropBlur && { backdropFilter: `filter(${backdropBlur})` },
          isOpen ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" },
        ]}
      />
      <div
        css={[
          isOpen ? stylesOpen : stylesClosed,
          width && { width },
          height && { height },
          padding && { padding },

          animationDuration && {
            transition: `${animated && animationDuration}ms`,
          },
          borderRadius && {
            borderRadius: getBorderRadius({ size: borderRadius }),
          },
          { maxWidth: `calc(100% - ${padding * 2}px - 20px)` },
          { maxHeight: `calc(100vh - ${padding * 2}px - 200px)` },
        ]}
      >
        <div className="modal-header">
          <span>{title}</span>
          {closeButton && (
            <div onClick={onClose} className="modal-header-close-button">
              {closeButton}
            </div>
          )}
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
