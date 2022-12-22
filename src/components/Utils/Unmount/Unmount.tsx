import React, { useEffect, useState } from "react";
// @ts-ignore

interface Props {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  animated: boolean;
  animationDuration: number;
  shouldUnmount: boolean;
}

const Unmount = ({
  children,
  isOpen,
  animated,
  animationDuration,
  shouldUnmount,
}: Props): JSX.Element | JSX.Element | null => {
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
