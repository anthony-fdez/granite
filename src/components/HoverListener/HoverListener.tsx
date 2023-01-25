/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import { IHoverListenerProps } from "./HoverListener.types";
import useAppContext from "../../utils/hooks/useAppContext";

const HoverListener = ({ children, customCSS, onHover, ...args }: IHoverListenerProps): JSX.Element => {
  useAppContext();

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    onHover(isHover);

    return () => onHover(false);
  }, [isHover, onHover]);

  return (
    <span {...args} css={customCSS} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {children}
    </span>
  );
};

export default HoverListener;
