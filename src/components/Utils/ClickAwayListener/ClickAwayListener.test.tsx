import React from "react";
import userEvent from "@testing-library/user-event";
import itRendersChildren from "../../../utils/tests/helpers/itRendersChildren";
import ClickAwayListener from "./ClickAwayListener";
import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";
import { render } from "../../../utils/tests/test-utils";
import { IClickAwayListenerProps } from "./ClickAwayListener.types";

const defaultProps: IClickAwayListenerProps = {
  children: <span>children</span>,
  onClickOutside: () => {},
};

describe("ClickAwayListener", () => {
  itThrowsContextError(ClickAwayListener);
  itRendersChildren(ClickAwayListener);

  it("calls 'onClickOutside' function", async () => {
    const user = userEvent.setup();
    const onClickOutside = jest.fn();

    render(<ClickAwayListener {...defaultProps} onClickOutside={onClickOutside} />);

    await user.click(document.body);

    expect(onClickOutside).toHaveBeenCalled();
  });
});
