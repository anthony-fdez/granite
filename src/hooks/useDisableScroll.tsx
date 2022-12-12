import { useEffect } from "react";

interface Props {
  isOpen: boolean;
}

// This hook is meant to disable the scrolling behind modals, popups, drawers...

export const useDisableScroll = ({ isOpen }: Props) => {
  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
  }, [isOpen]);
};
