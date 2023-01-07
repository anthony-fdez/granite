/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import useStyles from "../../styles/useStyles";
import Flex from "../Flex";
import { IDividerProps } from "./Divider.types";
import { useDividerDefaultProps } from "./Divider.props";
import useAppContext from "../../utils/hooks/useAppContext";

const Divider = (props: IDividerProps): JSX.Element => {
  const { styles } = useAppContext();
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
        {labelPosition !== "left" && <div data-testid="Divider/label-left" css={lineStyles} />}
        {label && (
          <span
            data-testid="Divider/label-center"
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
        {labelPosition !== "right" && <div data-testid="Divider/label-right" css={lineStyles} />}
      </>
    </Flex>
  );
};

export default Divider;
