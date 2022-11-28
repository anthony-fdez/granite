import React, { useEffect, useRef } from "react";
import { useOutsideAlerter } from "../../../hooks/useOutsideAlerter";
import Center from "../../Layout/Center";
import { IClickAwayListenerProps } from "./ClickAwayListener.types";

const ClickAwayListener = ({
  onClickOutside,
  children,
  ...args
}: IClickAwayListenerProps) => {
  const outsideRef = useRef(null);

  useOutsideAlerter(outsideRef, onClickOutside);

  return (
    <Center>
      <div {...args} ref={outsideRef}>
        {children}
      </div>
    </Center>
  );
};

export default ClickAwayListener;
