import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { IButtonProps } from "./Button.types";
import ThemeProvider from "../../Theming/ThemeProvider";
import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";

const W = ThemeProvider;

const defaultProps: IButtonProps = {
  children: "test-button-title",
};

describe("Button", () => {
  itThrowsContextError(Button, defaultProps);

  it("renders a string as children", () => {
    render(
      <W>
        <Button {...defaultProps} />
      </W>,
    );

    expect(screen.getByText(defaultProps.children)).toBeInTheDocument();
  });

  it("renders icon left", () => {
    const button = render(
      <W>
        <Button {...defaultProps} iconLeft={<>L</>} />
      </W>,
    );

    expect(button.getByTestId("button-icon-left")).toBeInTheDocument();
  });

  it("passes props to icon left", () => {
    const button = render(
      <W>
        <Button {...{ ...defaultProps, iconLeft: <>L</>, iconLeftProps: { "aria-label": "icon-left-aria-label" } }} />
      </W>,
    );

    expect(button.getByLabelText("icon-left-aria-label")).toBeInTheDocument();
  });

  // it("renders icon right", () => {
  //   const button = render(
  //     <W>
  //       <Button {...defaultProps} iconRight={<>R</>} />
  //     </W>,
  //   );

  //   expect(button.getByTestId("button-icon-right")).toBeInTheDocument();
  // });

  // it("passes props to icon right", () => {
  //   const button = render(
  //     <W>
  //       <Button {...defaultProps} iconRight={<>L</>} iconRightProps={{ "aria-label": "icon-right-aria-label" }} />
  //     </W>,
  //   );

  //   expect(button.getByLabelText("icon-right-aria-label")).toBeInTheDocument();
  // });

  // it("renders loading spinner", () => {
  //   const button = render(
  //     <W>
  //       <Button {...defaultProps} loading />
  //     </W>,
  //   );

  //   expect(button.getByTestId("button-spinner")).toBeInTheDocument();
  // });

  // it("is disabled", () => {
  //   const button = render(
  //     <W>
  //       <Button {...defaultProps} disabled />
  //     </W>,
  //   );

  //   expect(button.getByLabelText(defaultProps.children)).toHaveAttribute("disabled");
  // });
});
