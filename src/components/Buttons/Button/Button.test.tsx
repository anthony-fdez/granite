import React from "react";
import Button from "./Button";
import { IButtonProps } from "./Button.types";
import { render, screen } from "../../../utils/testing";

const defaultProps: IButtonProps = {
  children: "test-button-title",
};

describe("Button", () => {
  it("renders a string as children", () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByText(defaultProps.children)).toBeInTheDocument();
  });
});
