import React from "react";
import userEvent from "@testing-library/user-event";
import itThrowsContextError from "../../utils/tests/helpers/itThrowsContextError";
import itRendersChildren from "../../utils/tests/helpers/itRendersChildren";
import Tooltip from "./Tooltip";
import { render, screen } from "../../utils/tests/test-utils";

describe("Tooltip", () => {
  itThrowsContextError(Tooltip);
  itRendersChildren(Tooltip);

  it("shows tooltip when element is hovered", async () => {
    const user = userEvent.setup();

    render(
      <Tooltip animated={false} tooltip="tooltip-text">
        <button type="button">tooltip-button</button>
      </Tooltip>,
    );

    await user.hover(screen.getByRole("button"));
    expect(screen.getByText("tooltip-text")).toBeInTheDocument();

    await userEvent.unhover(screen.getByRole("button"));
    expect(screen.queryAllByText("tooltip-text")).toHaveLength(0);
  });
});
