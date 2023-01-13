import React from "react";
import itThrowsContextError from "../../utils/tests/helpers/itThrowsContextError";
import Skeleton from "./Skeleton";
import { render } from "../../utils/tests/test-utils";

describe("Skeleton", () => {
  itThrowsContextError(Skeleton);

  it("renders skeleton", () => {
    const skeleton = render(<Skeleton />);

    expect(skeleton.queryAllByTestId("Skeleton/skeleton")).toHaveLength(1);
  });

  it("renders 5 skeletons", () => {
    const skeleton = render(<Skeleton count={5} />);

    expect(skeleton.queryAllByTestId("Skeleton/skeleton")).toHaveLength(5);
  });
});
