/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render } from "@testing-library/react";
import errors from "../../../constants/errors/errors";
import suppressConsoleError from "./suppressConsoleErrors";

function itThrowsContextError<P>(Component: React.ComponentType<P>, defaultProps?: any): void {
  it("throws error if outside context provider", () => {
    suppressConsoleError();

    expect(() => render(<Component {...defaultProps} />)).toThrow(errors.no_context);
  });
}

// eslint-disable-next-line jest/no-export
export default itThrowsContextError;
