/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext, useState } from "react";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getTooltipStyles } from "./Tooltip.styles";
import { ITooltipProps } from "./Tooltip.types";

const Tooltip = ({
  children,
  label,
  position = "top",
  delay = 400,
  animated = true,
  ...args
}: ITooltipProps) => {
  const { styles } = useContext(StateContext);

  let timeout: NodeJS.Timeout;

  const [active, setActive] = useState(false);

  const { stylesClosed, stylesOpen } = getTooltipStyles({ styles, position });

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
    <div
      {...args}
      css={{ position: "relative" }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {active && (
        <div css={[active ? stylesOpen : stylesClosed]}>
          <span>{label}</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
