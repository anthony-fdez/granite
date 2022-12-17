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
}: Props) => {
  const [_isOpen, setIsOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) return setIsOpen(true);

    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, animationDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  if (!shouldUnmount) return <>{children}</>;
  if (!animated) return <div>{isOpen && children}</div>;

  return <>{_isOpen && children}</>;
};

export default Unmount;
