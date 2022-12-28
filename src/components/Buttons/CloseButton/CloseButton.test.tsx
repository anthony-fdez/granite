import React from "react";

import CloseButton from "./CloseButton";
import itThrowsContextError from "../../../utils/tests/helpers/itThrowsContextError";
import { render, screen } from "../../../utils/tests/test-utils";

describe("CloseButton", () => {
  itThrowsContextError(CloseButton);

  it("renders close icon", () => {
    render(<CloseButton />);

    expect(screen.getByTestId("CloseButton/close-icon")).toBeInTheDocument();
  });
});
