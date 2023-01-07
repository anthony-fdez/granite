/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React, { useState } from "react";

import { ITooltipProps } from "./Tooltip.types";

const Tooltip = ({
  children,
  label,
  // position = "top",
  delay = 400,
  // animated = true,
  ...args
}: ITooltipProps): JSX.Element => {
  let timeout: NodeJS.Timeout;

  const [active, setActive] = useState(false);

  const showTooltip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTooltip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div {...args} css={{ position: "relative" }} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {active && (
        <div>
          <span>{label}</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
