import React from "react";
import { render, screen } from "@testing-library/react";

import ThemeProvider from "../../Theming/ThemeProvider";
import errors from "../../../constants/errors/errors";
import CloseButton from "./CloseButton";

const W = ThemeProvider;

describe("Button", () => {
  it("renders close icon", () => {
    render(
      <W>
        <CloseButton />
      </W>,
    );

    expect(screen.getByTestId("CloseButton/close-icon")).toBeInTheDocument();
  });

  it("throws error if outside context provider", () => {
    jest.spyOn(console, "error").mockImplementation(() => {}); // Silence errors, they are expected

    expect(() => render(<CloseButton />)).toThrow(errors.no_context);
  });
});
