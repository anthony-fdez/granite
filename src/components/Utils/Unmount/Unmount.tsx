import React, { useEffect, useState } from "react";
import IUnmountProps from "./Unmount.types";
import useAppContext from "../../../utils/hooks/useAppContext";

const Unmount = ({
  children,
  isOpen,
  animated,
  animationDuration,
  shouldUnmount,
}: IUnmountProps): JSX.Element | null => {
  useAppContext();
  const [IS_OPEN, SET_IS_OPEN] = useState(isOpen);

  useEffect(() => {
    if (isOpen) return SET_IS_OPEN(true);

    const timeout = setTimeout(() => {
      SET_IS_OPEN(false);
    }, animationDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen, animationDuration]);

  if (!shouldUnmount) return <div>{children}</div>;
  if (!animated && isOpen) return <div>{children}</div>;

  if (IS_OPEN) return <div>{children}</div>;
  return null;
};

export default Unmount;
