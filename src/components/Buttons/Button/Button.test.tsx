import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { IButtonProps } from "./Button.types";

const defaultProps: IButtonProps = {
  children: "test-button-title",
};

describe("Button", () => {
  it("renders a string as children", () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByText(defaultProps.children)).toBeInTheDocument();
  });
});
