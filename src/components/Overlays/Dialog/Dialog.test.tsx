import React from "react";
import userEvent from "@testing-library/user-event";
import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";
import { IDialogProps } from "./Dialog.types";
import Dialog from "./Dialog";
import itRendersChildren from "../../../utils/tests/helpers/itRendersChildren";
import { render } from "../../../utils/tests/test-utils";

const defaultProps: IDialogProps = {
  children: <div>dialog-test-content</div>,
  title: "dialog-test-title",
  isOpen: true,
  onClose: () => {},
};

describe("Divider", () => {
  itThrowsContextError(Dialog, defaultProps);
  itRendersChildren(Dialog, defaultProps);

  it("renders title", () => {
    const dialog = render(<Dialog {...defaultProps} />);

    expect(dialog.queryByTestId("Dialog/title")).toBeInTheDocument();
  });

  it("render close button", () => {
    const dialog = render(<Dialog {...defaultProps} />);

    expect(dialog.queryByTestId("Dialog/close-button")).toBeInTheDocument();
  });

  it("does not render close button", () => {
    const dialog = render(<Dialog {...defaultProps} closeButton={false} />);

    expect(dialog.queryByTestId("Dialog/close-button")).toBeNull();
  });

  it("renders backdrop", () => {
    const dialog = render(<Dialog {...defaultProps} backdrop />);
    const backdrop = dialog.getByTestId("Dialog/backdrop");

    expect(backdrop).toBeInTheDocument();
  });

  it("closes on backdrop click", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    const dialog = render(<Dialog {...defaultProps} onClose={onClose} closeOnClickOutside backdrop />);
    const backdrop = dialog.getByTestId("Dialog/backdrop");

    await user.click(backdrop);
    expect(onClose).toHaveBeenCalled();
  });

  it("closes on closeButton click", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();

    const dialog = render(<Dialog {...defaultProps} onClose={onClose} closeButton />);
    const closeButton = dialog.getByTestId("Dialog/close-button");

    await user.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("unmounts when not in screen", () => {
    const dialog = render(<Dialog {...defaultProps} isOpen={false} unmount />);

    expect(dialog.queryByTestId("Dialog")).not.toBeInTheDocument();
  });
});
