import { useEffect } from "react";

interface Props {
  isOpen: boolean;
}

const useDisableScroll = ({ isOpen }: Props): void => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "unset";

    return (): void => {
      document.body.style.overflow = "hidden";
    };
  }, [isOpen]);
};

export default useDisableScroll;
