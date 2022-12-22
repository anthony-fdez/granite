/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import useStyles from "../../../styles/useStyles";
import Flex from "../../Layout/Flex";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { IDividerProps } from "./Divider.types";
import { useDividerDefaultProps } from "./Divider.props";

const Divider = (props: IDividerProps): JSX.Element => {
  const { styles } = useContext(StateContext);
  const { getColor } = useStyles({ styles });

  // eslint-disable-next-line operator-linebreak
  const { label, labelPadding, labelPosition, width, dividerVariant, marginTop, marginBottom, color, ...args } =
    useDividerDefaultProps({ styles, props });

  const lineStyles = css([
    {
      border: `${width}px`,
      borderStyle: dividerVariant,
      borderColor: color ?? getColor({}).border,
      width: "100%",
    },
  ]);

  return (
    <Flex {...args} css={{ marginTop, marginBottom }}>
      <>
        {labelPosition !== "left" && <div css={lineStyles} />}
        {label && (
          <span
            css={{
              marginLeft: labelPadding,
              marginRight: labelPadding,
              whiteSpace: "nowrap",
              fontSize: 14,
              color: color ?? getColor({}).font,
            }}
          >
            {label}
          </span>
        )}
        {labelPosition !== "right" && <div css={lineStyles} />}
      </>
    </Flex>
  );
};

export default Divider;
