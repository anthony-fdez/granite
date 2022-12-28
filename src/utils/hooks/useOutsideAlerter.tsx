import React, { useEffect } from "react";

// https://stackoverflow.com/questions/33796267/how-to-use-refs-in-react-with-typescript

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: React.RefObject<HTMLElement>, callback: () => void): void {
  useEffect(() => {
    // @ts-ignore
    function handleClickOutside(event: any): void {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useOutsideAlerter;
