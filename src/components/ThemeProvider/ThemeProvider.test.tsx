import React from "react";
import { render } from "@testing-library/react";
import { IProviderProps } from "./Interfaces/IProviderProps";
import ThemeProvider from "./ThemeProvider";

const defaultProps: IProviderProps = {
  theme: "light",
  children: <div>app</div>,
};

describe("ThemeProvider", () => {
  it("renders children", () => {
    const { queryAllByText } = render(
      <ThemeProvider {...defaultProps}>
        <span className="test-children">test-children</span>
      </ThemeProvider>,
    );

    expect(queryAllByText("test-children")).toHaveLength(1);
  });
});
