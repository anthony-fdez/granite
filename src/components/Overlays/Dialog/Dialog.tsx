import React from "react";
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
  width = 250,
  height,
  padding = 15,
  borderRadius = "xs",
  zIndex = 1000,
  border = true,
  borderColor,
  borderWidth = 3,
  position = "bottom-right",
}: IDialogProps) => {
  return (
    <div>
      <p>Dialog</p>
    </div>
  );
};

export default Dialog;
