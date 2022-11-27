/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext, useEffect, useState } from "react";
import { colors } from "../../constants/theme/colors";
import CloseButton from "../CloseButton";
import { getBorderRadius } from "../ThemeProvider/getValues/getBorderRadius";
import { StateContext } from "../ThemeProvider/ThemeProvider";
import { getModalStyles } from "./Modal.styles";
import { IModalProps } from "./Modal.types";

const Modal = ({
  children,
  title,
  isOpen,
  onClose,
  closeButton = true,
  closeOnClickOutside = true,
  backdropOpacity = 0.5,
  animated = true,
  animationDuration = 200,
  width = 500,
  height,
  centered = false,
  padding = 20,
  borderRadius = "xs",
  backdropBlur = 5,
  zIndex,
  border = true,
  borderColor,
  borderWidth = 3,
}: IModalProps) => {
  const { styles } = useContext(StateContext);
  const { stylesClosed, stylesOpen } = getModalStyles({ styles });

  const BORDER_COLOR = colors.common[styles.theme || "light"].border;

  return (
    <>
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
      <div
        css={[
          isOpen ? stylesOpen : stylesClosed,
          centered && { top: 0, bottom: 0 },
          width && { width },
          height && { height },
          padding && { padding },
          zIndex ? { zIndex: zIndex + 1 } : { zIndex: "inherit" },
          border && {
            borderWidth,
            borderColor: `${borderColor ? borderColor : BORDER_COLOR}`,
            borderStyle: "solid",
          },
          borderColor ? { borderColor } : { borderColor: BORDER_COLOR },
          animationDuration && {
            transition: `${animated && animationDuration}ms`,
          },
          borderRadius && {
            borderRadius: getBorderRadius({ size: borderRadius }),
          },
          {
            maxWidth: `calc(100% - ${padding * 2}px - 20px)`,
          },
          { maxHeight: `calc(100vh - ${padding * 2}px - 200px)` },
        ]}
      >
        <div className="modal-header">
          <span>{title}</span>
          {closeButton && <CloseButton onClick={onClose} />}
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
