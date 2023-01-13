import React from "react";
import Button from "./Button";
import { IButtonProps } from "./Button.types";
import itThrowsContextError from "../../utils/tests/helpers/itThrowsContextError";
import { render, screen } from "../../utils/tests/test-utils";

const defaultProps: IButtonProps = {
  children: "test-button-title",
};

describe("Button", () => {
  itThrowsContextError(Button, defaultProps);

  it("renders a string as children", () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByText(defaultProps.children)).toBeInTheDocument();
  });

  it("renders icon left", () => {
    const button = render(<Button {...defaultProps} iconLeft={<>L</>} />);

    expect(button.getByTestId("button-icon-left")).toBeInTheDocument();
  });

  it("passes props to icon left", () => {
    const button = render(
      <Button {...defaultProps} iconLeft={<>L</>} iconLeftProps={{ "aria-label": "icon-left-aria-label" }} />,
    );

    expect(button.getByLabelText("icon-left-aria-label")).toBeInTheDocument();
  });

  it("renders icon right", () => {
    const button = render(<Button {...defaultProps} iconRight={<>R</>} />);

    expect(button.getByTestId("button-icon-right")).toBeInTheDocument();
  });

  it("passes props to icon right", () => {
    const button = render(
      <Button {...defaultProps} iconRight={<>L</>} iconRightProps={{ "aria-label": "icon-right-aria-label" }} />,
    );

    expect(button.getByLabelText("icon-right-aria-label")).toBeInTheDocument();
  });

  it("renders loading spinner", () => {
    const button = render(<Button {...defaultProps} loading />);

    expect(button.getByTestId("button-spinner")).toBeInTheDocument();
  });

  it("is disabled", () => {
    const button = render(<Button {...defaultProps} disabled />);

    expect(button.getByLabelText(defaultProps.children)).toHaveAttribute("disabled");
  });

  it("is disabled when loading", () => {
    const button = render(<Button {...defaultProps} loading />);

    expect(button.getByLabelText(defaultProps.children)).toHaveAttribute("disabled");
  });
});
