import React, { useEffect } from "react";

// https://stackoverflow.com/questions/33796267/how-to-use-refs-in-react-with-typescript

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
