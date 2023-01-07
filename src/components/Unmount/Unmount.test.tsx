import React from "react";
import IUnmountProps from "./Unmount.types";
import itThrowsContextError from "../../utils/tests/helpers/itThrowsContextError";
import Unmount from "./Unmount";
import itRendersChildren from "../../utils/tests/helpers/itRendersChildren";
import { render } from "../../utils/tests/test-utils";

const defaultProps: IUnmountProps = {
  children: <span>test-children</span>,
  isOpen: true,
  animated: false,
  animationDuration: 0,
  shouldUnmount: true,
};

describe("Unmount", () => {
  itThrowsContextError(Unmount, defaultProps);
  itRendersChildren(Unmount, defaultProps);

  it("unmounts children when closed", () => {
    const { queryByText } = render(<Unmount {...defaultProps} isOpen={false} />);

    expect(queryByText("test-children")).not.toBeInTheDocument();
  });

  it("keeps children mounted if: shouldUnmount=false", () => {
    const { queryByText } = render(<Unmount {...defaultProps} isOpen={false} shouldUnmount={false} />);

    expect(queryByText("test-children")).toBeInTheDocument();
  });
});
