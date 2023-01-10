import React from "react";
import userEvent from "@testing-library/user-event";
import itThrowsContextError from "../../utils/tests/helpers/itThrowsContextError";
import itRendersChildren from "../../utils/tests/helpers/itRendersChildren";
import { render, screen } from "../../utils/tests/test-utils";
import HoverCard from "./HoverCard";

describe("HoverCard", () => {
  itThrowsContextError(HoverCard);
  itRendersChildren(HoverCard);

  it("shows card when element is hovered", async () => {
    const user = userEvent.setup();

    render(
      <HoverCard animated={false} card={<p>card-text</p>}>
        <button type="button">tooltip-button</button>
      </HoverCard>,
    );

    await user.hover(screen.getByRole("button"));
    expect(screen.getByText("card-text")).toBeInTheDocument();

    await userEvent.unhover(screen.getByRole("button"));
    expect(screen.queryAllByText("card-text")).toHaveLength(0);
  });

  it("does not render the card when disabled", async () => {
    const user = userEvent.setup();

    render(
      <HoverCard animated={false} card={<p>card-text</p>} disabled>
        <button type="button">tooltip-button</button>
      </HoverCard>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();

    await user.hover(screen.getByRole("button"));

    expect(screen.queryAllByText("card-text")).toHaveLength(0);
  });

  it("does not render anything when not hovered", () => {
    render(
      <HoverCard animated={false} card={<p>card-text</p>}>
        <button type="button">tooltip-button</button>
      </HoverCard>,
    );

    expect(screen.queryByText("card-text")).toBeNull();
  });

  it("renders card when 'isOpen' is true", () => {
    render(
      <HoverCard animated={false} card={<p>card-text</p>} isOpen>
        <button type="button">tooltip-button</button>
      </HoverCard>,
    );

    expect(screen.getByText("card-text")).toBeInTheDocument();
  });
});
