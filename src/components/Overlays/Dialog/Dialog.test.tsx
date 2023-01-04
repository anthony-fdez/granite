import React from "react";
import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";
import { IDialogProps } from "./Dialog.types";
import Dialog from "./Dialog";
import itRendersChildren from "../../../utils/tests/helpers/itRendersChildren";

const defaultProps: IDialogProps = {
  children: <div>dialog-test-content</div>,
  title: "dialog-test-title",
  isOpen: true,
  onClose: () => {},
};

describe("Divider", () => {
  itThrowsContextError(Dialog, defaultProps);
  itRendersChildren(Dialog, defaultProps);
});
