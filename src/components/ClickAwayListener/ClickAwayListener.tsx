import React, { useRef } from "react";
import useOutsideAlerter from "../../utils/hooks/useOutsideAlerter";
import { IClickAwayListenerProps } from "./ClickAwayListener.types";
import useAppContext from "../../utils/hooks/useAppContext";

const ClickAwayListener = ({ onClickOutside, children, ...args }: IClickAwayListenerProps): JSX.Element => {
  const outsideRef = useRef(null);
  useOutsideAlerter(outsideRef, onClickOutside);
  useAppContext();

  return (
    <div {...args} ref={outsideRef}>
      {children}
    </div>
  );
};

export default ClickAwayListener;
