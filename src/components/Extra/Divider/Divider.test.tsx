import React from "react";
import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";
import { render } from "../../../utils/tests/test-utils";
import Divider from "./Divider";
import { IDividerProps } from "./Divider.types";

const defaultProps: IDividerProps = {
  label: "divider-label",
};

describe("CloseButton", () => {
  itThrowsContextError(Divider, defaultProps);

  it("renders the divider", () => {
    const divider = render(<Divider />);

    expect(divider.queryByTestId("Divider/label-center")).not.toBeInTheDocument();
    expect(divider.queryByTestId("Divider/label-left")).toBeInTheDocument();
    expect(divider.queryByTestId("Divider/label-right")).toBeInTheDocument();
  });

  it("renders label at the center by default", () => {
    const divider = render(<Divider {...defaultProps} />);

    expect(divider.getByTestId("Divider/label-center")).toBeInTheDocument();
  });

  it("renders both lines to the sides of the label at the center", () => {
    const divider = render(<Divider {...defaultProps} />);

    expect(divider.getByTestId("Divider/label-left")).toBeInTheDocument();
    expect(divider.getByTestId("Divider/label-right")).toBeInTheDocument();
  });

  it("renders label to the left", () => {
    const divider = render(<Divider {...defaultProps} labelPosition="left" />);

    expect(divider.queryByTestId("Divider/label-left")).toBeNull();
  });

  it("renders label to the right", () => {
    const divider = render(<Divider {...defaultProps} labelPosition="right" />);

    expect(divider.queryByTestId("Divider/label-right")).toBeNull();
  });
});
