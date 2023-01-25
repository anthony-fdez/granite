import React from "react";
import userEvent from "@testing-library/user-event";
import itRendersChildren from "../../utils/tests/helpers/itRendersChildren";
import itThrowsContextError from "../../utils/tests/helpers/itThrowsContextError";
import { render } from "../../utils/tests/test-utils";
import { IHoverListenerProps } from "./HoverListener.types";
import HoverListener from "./HoverListener";

const defaultProps: IHoverListenerProps = {
  children: <span>hover-listener-children</span>,
  onHover: () => {},
};

describe("HoverListener", () => {
  itThrowsContextError(HoverListener, defaultProps);
  itRendersChildren(HoverListener, defaultProps);

  it("calls 'onHover' function", async () => {
    const user = userEvent.setup();
    const onHover = jest.fn();

    const { getByText } = render(
      <HoverListener
        {...defaultProps}
        onHover={(isHover): void => {
          if (isHover) onHover();
        }}
      />,
    );

    const hover = getByText("hover-listener-children");

    await user.hover(hover);
    await user.hover(document.body);

    expect(onHover).toHaveBeenCalledTimes(1);
  });
});
