import React from "react";
import { render } from "../test-utils";

const itRendersChildren = (Component: React.ElementType, defaultProps: any): void => {
  it("renders children", () => {
    const { queryAllByText } = render(
      <Component {...defaultProps}>
        <span className="test-children">test-children</span>
      </Component>,
    );
    expect(queryAllByText("test-children")).toHaveLength(1);
  });
};

// eslint-disable-next-line jest/no-export
export default itRendersChildren;
