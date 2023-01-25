import React from "react";
import userEvent from "@testing-library/user-event";
import itThrowsContextError from "../../utils/tests/helpers/itThrowsContextError";

import itRendersChildren from "../../utils/tests/helpers/itRendersChildren";
import { render } from "../../utils/tests/test-utils";
import { IDrawerProps } from "./Drawer.types";
import Drawer from "./Drawer";

const defaultProps: IDrawerProps = {
  children: <div>dialog-test-content</div>,
  title: "dialog-test-title",
  isOpen: true,
  onClose: () => {},
};

describe("Drawer", () => {
  itThrowsContextError(Drawer, defaultProps);
  itRendersChildren(Drawer, defaultProps);

  it("renders title", () => {
    const dialog = render(<Drawer {...defaultProps} />);

    expect(dialog.queryByTestId("Drawer/title")).toBeInTheDocument();
  });

  it("render close button", () => {
    const dialog = render(<Drawer {...defaultProps} />);

    expect(dialog.queryByTestId("Drawer/close-button")).toBeInTheDocument();
  });

  it("does not render close button", () => {
    const dialog = render(<Drawer {...defaultProps} closeButton={false} />);

    expect(dialog.queryByTestId("Drawer/close-button")).toBeNull();
  });

  it("renders backdrop", () => {
    const dialog = render(<Drawer {...defaultProps} backdrop />);
    const backdrop = dialog.queryByTestId("Drawer/backdrop");

    expect(backdrop).toBeInTheDocument();
  });

  it("closes on backdrop click", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    const dialog = render(<Drawer {...defaultProps} backdrop closeOnClickOutside onClose={onClose} />);
    const backdrop = dialog.queryByTestId("Drawer/backdrop");

    expect(backdrop).not.toBeNull();

    if (!backdrop) return;

    await user.click(backdrop);
    expect(onClose).toHaveBeenCalled();
  });

  it("closes on closeButton click", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    const dialog = render(<Drawer {...defaultProps} closeButton onClose={onClose} />);
    const closeButton = dialog.getByTestId("Drawer/close-button");

    await user.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("unmounts when not in screen", () => {
    const dialog = render(<Drawer {...defaultProps} isOpen={false} unmount />);

    expect(dialog.queryByTestId("Drawer")).not.toBeInTheDocument();
  });
});
