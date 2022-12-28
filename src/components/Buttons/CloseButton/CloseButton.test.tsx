import React from "react";
import { render, screen } from "@testing-library/react";

import ThemeProvider from "../../Theming/ThemeProvider";
import CloseButton from "./CloseButton";
import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";

const W = ThemeProvider;

describe("CloseButton", () => {
  itThrowsContextError(CloseButton);

  it("renders close icon", () => {
    render(
      <W>
        <CloseButton />
      </W>,
    );

    expect(screen.getByTestId("CloseButton/close-icon")).toBeInTheDocument();
  });
});
